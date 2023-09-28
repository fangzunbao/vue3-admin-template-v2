<template>
  <div class="sign-wrapper" :style="`width: ${width}px`">
    <canvas
      class="sign-canvas"
      ref="signCanvas"
      :width="width"
      :height="height"
    ></canvas>
    <div class="btns-wrapper">
      <a-button @click="clearSign">重置</a-button>
      <a-button type="primary" @click="handleSubmit">确认</a-button>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'ThSign' }
</script>
<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

const signCanvas = ref()
const ctx = computed(() => signCanvas.value?.getContext('2d'))
const props = defineProps({
  width: {
    type: Number,
    default: 400,
  },
  height: {
    type: Number,
    default: 260,
  },
  download: {
    type: Boolean,
    default: false,
  },
  lineColor: {
    type: String,
    default: '#000',
  },
  lineWidth: {
    type: Number,
    default: 2,
  },
})
const emits = defineEmits(['submit'])

const _initCanvas = async () => {
  await nextTick()
  ctx.value.lineWidth = props.lineWidth
  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'

  // 鼠标按下时
  signCanvas.value.onmousedown = (e: MouseEvent) => {
    // 获取鼠标点击位置
    ctx.value?.beginPath()
    ctx.value?.moveTo(e.offsetX, e.offsetY)
    signCanvas.value.onmousemove = (e: MouseEvent) => {
      ctx.value?.lineTo(e.offsetX, e.offsetY)
      ctx.value.strokeStyle = props.lineColor
      ctx.value?.stroke()
    }
  }

  // 鼠标抬起时
  signCanvas.value.onmouseup = () => (signCanvas.value.onmousemove = null)
}

// 清空画布
const clearSign = () => {
  ctx.value.clearRect(0, 0, props.width, props.height)
}

const handleSubmit = () => {
  const url = signCanvas.value?.toDataURL('image/png', 1)
  emits('submit', url)
  if (props.download) {
    download(url)
    clearSign()
  }
}

const download = (url: string) => {
  const body = document.getElementsByTagName('body')[0]
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.download = '下载签名'
  body.appendChild(aEl).click()
  aEl.remove()
}

_initCanvas()

defineExpose({
  clearSign,
})
</script>
<style scoped lang="less">
.sign-wrapper {
  .sign-canvas {
    border: 1px solid rgb(var(--gray-4));
  }
  .btns-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 12px;
  }
}
</style>
