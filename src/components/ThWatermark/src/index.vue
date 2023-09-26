<template>
  <div class="watermark-container" ref="watermarkRef">
    <slot></slot>
    <!-- 添加一个 div，填充满整个区域，设置水印背景并且重复 -->
  </div>
</template>

<script lang="ts">
export default { name: 'ThWatermark' }
</script>
<script setup lang="ts">
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'
import useWatermark from '@/hooks/useWatermark'

const props = defineProps({
  /**
   * 传入水印的文本
   */
  text: {
    type: String,
    required: true,
    default: 'watermark',
  },
  /**
   * 自定义颜色
   */
  color: {
    type: String,
    default: '#bcbcbc',
  },
  /**
   * 字体的大小
   */
  size: {
    type: Number,
    default: 15,
  },
  /**
   * 水印重复的间隔
   */
  gap: {
    type: Number,
    default: 10,
  },
  /**
   * 是否包含阴影
   */
  shadow: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否颜色渐变
   */
  gradient: {
    type: Boolean,
    default: false,
  },
})

// 声明一个 ref 并添加到父元素上
const watermarkRef = ref<HTMLDivElement | undefined>()
const bg = useWatermark(props)
const flag = ref(0) // 声明一个依赖
let div: HTMLDivElement | null
let ob: MutationObserver

// 初始化画布
const _initDivCanvas = () => {
  // 获取到则添加到父元素中
  const { base64, styleSize } = bg.value
  div = document.createElement('div') as HTMLDivElement
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${styleSize}px ${styleSize}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.inset = 0 || '0'
  div.style.zIndex = '9999' || 9999
  // 设置绝对定位
  div.style.position = 'absolute'
  // 设置点击穿漏，防止底部元素失去鼠标事件的交互
  div.style.pointerEvents = 'none'
  // 然后将 div 加到父元素里
  watermarkRef.value?.appendChild(div)
}

// 监听组件节点是否发生变化
const observerDiv = () => {
  if (watermarkRef.value) {
    ob = new MutationObserver((records) => {
      for (const record of records) {
        for (const dom of record.removedNodes) {
          if (dom === div) {
            flag.value++ // 删除节点的时候更新依赖
            return
          }
        }
        if (record.target === div) {
          flag.value++ // 修改属性的时候更新依赖
          return
        }
      }
    })
    ob.observe(watermarkRef.value, {
      childList: true,
      attributes: true,
      subtree: true,
    })
  }
}

// 取消监听
const disconnectObserver = () => {
  ob && ob.disconnect()
  div = null
}

watchEffect(() => {
  flag.value // 将依赖放在 watchEffect 里
  // 获取不到，就说明还没有挂载，先出去
  if (!watermarkRef.value) {
    return
  }
  if (div) {
    div.remove()
  }
  _initDivCanvas()
})

onMounted(() => {
  observerDiv()
})

onUnmounted(() => {
  disconnectObserver()
})
</script>
