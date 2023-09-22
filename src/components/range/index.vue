<template>
  <div class="range">
    <div
      :class="{
        'range-item': true,
        'range-item-active': min < item && max > item,
        'range-active': min === item || max === item,
      }"
      :style="{ 'border-radius': shape === 'circle' ? '50%' : '6px' }"
      v-for="item in count"
      :key="item"
      @click="clickRangeItem(item)"
      @mouseenter="enterRangeItem(item)"
      @mouseleave="leaveRangeItem"
    >
      {{ item }}
    </div>
    <div
      class="range-clear"
      v-if="clearable && min !== -1 && max !== -1"
      @click="clearRangeList"
    >
      <icon-close-circle />
    </div>
    <div class="range-title">
      <slot name="title"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: () => 10,
  },
  value: {
    type: Array as PropType<number[]>,
    default: () => [-1, -1],
  },
  shape: {
    type: String,
    default: () => 'square',
    validator: (val: string) => ['square', 'circle'].includes(val),
  },
  clearable: {
    type: Boolean,
    default: () => false,
  },
})
const emits = defineEmits(['change'])
const min = ref(props.value[0])
const max = ref(props.value[1])
const range = ref([-1, -1])

/**
 * 点击方块
 * @param index 索引号
 */
const clickRangeItem = (index: number) => {
  if (min.value === -1) {
    min.value = index
  } else if (
    (min.value === index && max.value === -1) ||
    min.value === max.value
  ) {
    clearRangeList()
  }
  range.value = [min.value, max.value]
  if (min.value !== -1 && max.value !== -1) {
    emits('change', range.value)
  }
}

const enterRangeItem = (index: number) => {
  if (min.value === -1) return
  if (min.value > index) {
    max.value = min.value
    min.value = index
  } else {
    max.value = index
  }
}

const leaveRangeItem = () => {
  min.value = range.value[0]
  max.value = range.value[1]
}

const clearRangeList = () => {
  min.value = -1
  max.value = -1
  range.value = [-1, -1]
  emits('change', [])
}
</script>

<style scoped lang="less">
.range {
  display: flex;
  align-items: center;
  gap: 5px;
  .range-title {
    margin-left: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  .range-clear {
    cursor: pointer;
  }
}

.range-item {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: rgb(var(--primary-2));
  }
}

.range-active {
  color: #fff;
  background-color: rgb(var(--primary-6));
  &:hover {
    color: #fff;
    background-color: rgb(var(--primary-6));
  }
}

.range-item-active {
  color: #fff;
  background-color: rgb(var(--primary-2));
  &:hover {
    color: #fff;
    background-color: rgb(var(--primary-2));
  }
}
</style>
