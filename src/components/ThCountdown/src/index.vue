<template>
  <div class="th-countdown">
    <slot
      name="default"
      :hour="hArr"
      :minute="mArr"
      :second="sArr"
      :status="status"
    ></slot>
  </div>
</template>

<script lang="ts">
export default { name: 'ThCountdown' }
</script>
<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  end: {
    type: String,
    required: true,
    default: '',
  },
})
const timer = ref()
const status = ref(0) // 倒计时状态 0: 为0 1: 进行中 -1: 结束
const hArr = ref<string[] | number[]>([0, 0]) // 记录小时
const mArr = ref<string[] | number[]>([0, 0]) // 记录分钟
const sArr = ref<string[] | number[]>([0, 0]) // 记录秒

/**
 * 计算时间差
 * @param end 结束时间
 */
const calcalute = async (end: string) => {
  await nextTick()
  const start = new Date()
  const duration = dayjs(end).diff(start, 'second')
  status.value = duration > 0 ? 1 : -1
  if (duration === 0) {
    status.value = 0
    return
  }
  let h: string | number = parseInt(
    String((Math.abs(duration) / (60 * 60)) % 24),
  )
  h = h < 10 ? '0' + h : h
  let m: string | number = parseInt(String((Math.abs(duration) / 60) % 60))
  m = m < 10 ? '0' + m : m
  let s: string | number = parseInt(String(Math.abs(duration) % 60))
  s = s < 10 ? '0' + s : s
  hArr.value = h.toString().split('')
  mArr.value = m.toString().split('')
  sArr.value = s.toString().split('')
}

/**
 * 倒计时
 * @param end 结束时间
 */
const countdown = (end: string) => {
  clearTimer()
  timer.value = setInterval(() => {
    calcalute(end)
  }, 1000)
}

/**
 * 清除定时器
 */
const clearTimer = () => {
  if (timer.value) clearInterval(timer.value)
}

/**
 * 初始化
 */
const _init = () => {
  calcalute(props.end)
  countdown(props.end)
}

onMounted(() => {
  _init()
})

onUnmounted(() => {
  clearTimer()
})
</script>
<style scoped lang="less">
.th-countdown {
  display: flex;
  align-items: center;
}
</style>
