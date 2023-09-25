import QRCode from 'qrcode'
import type { QRCodeRenderersOptions } from 'qrcode'
import {
  computed,
  defineComponent,
  nextTick,
  ref,
  unref,
  watch,
} from 'vue'
import props from './qrcode.props'
import type { QRcodeLogo } from './type'
import { isString } from '@/utils/is'
import { cloneDeep } from 'lodash'
import './index.less'

export default defineComponent({
  name: 'ThQrcode',
  props,
  emits: ['done', 'click', 'disabled-click'],
  setup(props, { emit }) {
    const { toCanvas, toDataURL } = QRCode
    const { tag, text, width, logo } = props
    const loading = ref(true)
    const wrapRef = ref<HTMLCanvasElement | HTMLImageElement>()
    const renderText = computed(() => text)
    const wrapStyle = computed(() => {
      return {
        width: width + 'px',
        height: width + 'px',
      }
    })
    // 初始化
    const _initQRcode = async () => {
      await nextTick()
      const options = cloneDeep(props.options || ({} as QRCodeRenderersOptions))
      if (tag === 'canvas') {
        // 容错率，默认对内容少的二维码采用高容错率，内容多的二维码采用低容错率
        options.errorCorrectionLevel =
          options.errorCorrectionLevel ||
          getErrorCorrectionLevel(unref(renderText))
        const _width: number = await getOriginWidth(unref(renderText), options)
        options.scale = width && width === 0 ? undefined : (width / _width) * 4
        const canvasRef: any = await toCanvas(
          unref(wrapRef) as HTMLCanvasElement,
          unref(renderText),
          options,
        )
        if (props.logo) {
          const url = await createLogoCode(canvasRef)
          emit('done', url)
          loading.value = false
        } else {
          emit('done', canvasRef.toDataURL())
          loading.value = false
        }
      } else {
        const url = await toDataURL(renderText.value, {
          errorCorrectionLevel: 'H',
          width,
          ...options,
        })
        ;(unref(wrapRef) as any).src = url
        emit('done', url)
        loading.value = false
      }
    }
    const createLogoCode = (canvasRef: HTMLCanvasElement) => {
      const canvasWidth = canvasRef.width
      const logoOptions: QRcodeLogo = Object.assign(
        {
          logoSize: 0.15,
          bgColor: '#ffffff',
          borderSize: 0.05,
          crossOrigin: 'anonymous',
          borderRadius: 8,
          logoRadius: 0,
        },
        isString(logo) ? {} : logo,
      )
      const {
        logoSize = 0.15,
        bgColor = '#ffffff',
        borderSize = 0.05,
        crossOrigin = 'anonymous',
        borderRadius = 8,
        logoRadius = 0,
      } = logoOptions

      const logoSrc = isString(logo) ? logo : logo.src
      const logoWidth = canvasWidth * logoSize
      const logoXY = (canvasWidth * (1 - logoSize)) / 2
      const logoBgWidth = canvasWidth * (logoSize + borderSize)
      const logoBgXY = (canvasWidth * (1 - logoSize - borderSize)) / 2
      const ctx = canvasRef.getContext('2d')
      if (!ctx) return
      // logo 底色
      canvasRoundRect(ctx)(
        logoBgXY,
        logoBgXY,
        logoBgWidth,
        logoBgWidth,
        borderRadius,
      )
      ctx.fillStyle = bgColor
      ctx.fill()
      // logo
      const image = new Image()
      if (crossOrigin || logoRadius) {
        image.setAttribute('crossOrigin', crossOrigin)
      }
      ;(image as any).src = logoSrc
      // 使用image绘制可以避免某些跨域情况
      const drawLogoWithImage = (image: HTMLImageElement) => {
        ctx.drawImage(image, logoXY, logoXY, logoWidth, logoWidth)
      }
      // 使用canvas绘制以获得更多的功能
      const drawLogoWithCanvas = (image: HTMLImageElement) => {
        const canvasImage = document.createElement('canvas')
        canvasImage.width = logoXY + logoWidth
        canvasImage.height = logoXY + logoWidth
        const imageCanvas = canvasImage.getContext('2d')
        if (!imageCanvas || !ctx) return
        imageCanvas.drawImage(image, logoXY, logoXY, logoWidth, logoWidth)
        canvasRoundRect(ctx)(logoXY, logoXY, logoWidth, logoWidth, logoRadius)
        if (!ctx) return
        const fillStyle = ctx.createPattern(canvasImage, 'no-repeat')
        if (fillStyle) {
          ctx.fillStyle = fillStyle
          ctx.fill()
        }
      }
      // 将 logo绘制到 canvas上
      return new Promise((resolve: any) => {
        image.onload = () => {
          logoRadius ? drawLogoWithCanvas(image) : drawLogoWithImage(image)
          resolve(canvasRef.toDataURL())
        }
      })
    }
    // 对于内容少的QrCode，增大容错率
    const getErrorCorrectionLevel = (content: string) => {
      if (content.length > 36) {
        return 'M'
      } else if (content.length > 16) {
        return 'Q'
      } else {
        return 'H'
      }
    }
    // 得到原QrCode的大小，以便缩放得到正确的QrCode大小
    const getOriginWidth = async (
      content: string,
      options: QRCodeRenderersOptions,
    ) => {
      const _canvas = document.createElement('canvas')
      await toCanvas(_canvas, content, options)
      return _canvas.width
    }
    // 用于绘制圆角
    const canvasRoundRect = (ctx: CanvasRenderingContext2D) => {
      return (x: number, y: number, w: number, h: number, r: number) => {
        const minSize = Math.min(w, h)
        if (r > minSize / 2) {
          r = minSize / 2
        }
        ctx.beginPath()
        ctx.moveTo(x + r, y)
        ctx.arcTo(x + w, y, x + w, y + h, r)
        ctx.arcTo(x + w, y + h, x, y + h, r)
        ctx.arcTo(x, y + h, x, y, r)
        ctx.arcTo(x, y, x + w, y, r)
        ctx.closePath()
        return ctx
      }
    }
    const clickCode = () => {
      emit('click')
    }
    const disabledClick = () => {
      emit('disabled-click')
    }

    watch(
      () => renderText.value,
      (val) => {
        if (!val) return
        _initQRcode()
      },
      {
        deep: true,
        immediate: true,
      },
    )

    return () => (
      <div class="qrcode" v-loading={loading.value} style={unref(wrapStyle)}>
        {props.tag === 'canvas' ? (
          <canvas ref={wrapRef} onClick={clickCode}></canvas>
        ) : (
          <img ref={wrapRef} onClick={clickCode}></img>
        )}
        {props.disabled && (
          <div class="qrcode-disabled" onClick={disabledClick}>
            <div class="qrcode-msg">
              <icon-refresh />
              <div>{props.disabledText}</div>
            </div>
          </div>
        )}
      </div>
    )
  },
})
