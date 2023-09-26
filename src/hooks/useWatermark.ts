import { computed } from 'vue'

interface WatermarkProps {
  text: string
  color: string
  size: number
  gap: number
  shadow: boolean
  gradient: boolean
}

interface WatermarkBg {
  base64: string
  size: number
  styleSize: number
}

export default function useWatermark(props: WatermarkProps) {
  return computed((): WatermarkBg => {
    // 创建一个 canvas
    const canvas = document.createElement('canvas')
    const devicePixelRatio = window.devicePixelRatio || 1
    // 设置字体大小
    const fontSize = props.size * devicePixelRatio
    const font = fontSize + 'px serif'
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // 获取文字宽度
    ctx.font = font
    const { width } = ctx.measureText(props.text)
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio
    canvas.width = canvasSize
    canvas.height = canvasSize
    ctx.translate(canvas.width / 2, canvas.height / 2)
    // 旋转 45 度让文字变倾斜
    ctx.rotate((Math.PI / 180) * -45)
    ctx.fillStyle = props.color
    ctx.font = font
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    if (props.shadow) {
      ctx.shadowOffsetX = 0 //用来设定阴影在 X轴的延伸距
      ctx.shadowOffsetX = 0 //用来设定阴影在 Y轴的延伸距
      ctx.shadowBlur = 15 //设定阴影的模糊程度 默认0
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)' //设定阴影颜色效果
    }
    if (props.gradient) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, '#f8c291')
      gradient.addColorStop(0.25, '#e55039')
      gradient.addColorStop(0.5, '#eb2f06')
      gradient.addColorStop(0.75, '#e74c3c')
      gradient.addColorStop(1, '#b71540')
      ctx.fillStyle = gradient
    }
    // 将文字画出来
    let text = ''
    text = props.text
    ctx.fillText(text, 0, 0)
    return {
      base64: canvas.toDataURL(),
      size: canvasSize,
      styleSize: canvasSize / devicePixelRatio,
    }
  })
}
