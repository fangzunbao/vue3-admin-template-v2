import { defineComponent, nextTick, ref, computed, watch, unref } from 'vue'
import JsBarcode from 'jsbarcode'
import props from './barcode.props'
import type { JsBarcodeOptions } from './type'
import { cloneDeep } from 'lodash'
import './index.less'

export default defineComponent({
  name: 'ThBarcode',
  props,
  emits: ['done', 'click', 'disabled-click'],
  setup(props, { emit }) {
    const { width, tag, text, disabled } = props
    const loading = ref(true)
    const wrapRef = ref<HTMLCanvasElement | HTMLImageElement>()
    const renderText = computed(() => String(text))

    // 初始化
    const _initBarcode = async () => {
      await nextTick()
      const options = cloneDeep(props.options || ({} as JsBarcodeOptions))
      options.width = width === 0 ? undefined : width / 100
      JsBarcode(unref(wrapRef), renderText.value, options)
      loading.value = false
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
        _initBarcode()
      },
      {
        deep: true,
        immediate: true,
      },
    )

    return () => (
      <div class="barcode" v-loading={unref(loading)}>
        {tag === 'canvas' && <canvas ref={wrapRef} onClick={clickCode}></canvas>}
        {tag === 'img' && <img ref={wrapRef} onClick={clickCode} />}
        {tag === 'svg' && <svg ref={wrapRef} onClick={clickCode}></svg>}
        {disabled && (
          <div class="barcode-disabled" onClick={disabledClick}>
            <div class="barcode-msg">
              <icon-refresh />
              <div>{props.disabledText}</div>
            </div>
          </div>
        )}
      </div>
    )
  },
})
