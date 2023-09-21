<template>
  <div
    class="list"
    ref="dragableList"
    @dragstart="handleDragstart"
    @dragenter.prevent="handleDragenter"
    @dragend="handleDragend"
    @dragover.prevent="handleDragover"
  >
    <div draggable="true" class="list-item" v-for="item in data" :key="item.id">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import type { DraggableData } from '@/types/glable'

defineProps({
  data: {
    type: Array as PropType<DraggableData[]>,
    default: () => {},
  },
})
const emits = defineEmits(['dragstrat', 'dragenter', 'dragend', 'dragover'])

const dragableList = ref()
const currentNode = ref()

/**
 * 拖动开始
 * @param e 事件
 */
const handleDragstart = (e: any) => {
  setTimeout(() => {
    e.target.classList.add('moving')
  }, 0)
  currentNode.value = e.target
  e.dataTransfer.effectAllowed = 'move'
  emits('dragstrat', e)
}

/**
 * 拖动中
 * @param e 事件
 */
const handleDragenter = (e: any) => {
  if (e.target === dragableList.value || e.target === currentNode.value) return
  const children = Array.from(dragableList.value.children)
  const currentIndex = children.findIndex((item) => item === currentNode.value)
  const targetIndex = children.findIndex((item) => item === e.target)
  if (currentIndex < targetIndex) {
    dragableList.value.insertBefore(
      currentNode.value,
      e.target.nextElementSibling,
    )
  } else {
    dragableList.value.insertBefore(currentNode.value, e.target)
  }
  emits('dragenter', e)
}

/**
 * 拖动结束
 * @param e 事件
 */
const handleDragend = (e: any) => {
  e.target.classList.remove('moving')
  emits('dragend', e)
}

/**
 * 拖动离开
 */
const handleDragover = (e: any) => {
  emits('dragover', e)
}
</script>
<style scoped lang="less">
.list {
  width: 500px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.list-item {
  width: 100%;
  height: 30px;
  background-color: #f0f2f5;
  border-radius: 6px;
  line-height: 30px;
  text-align: center;
  cursor: move;
  &:hover {
    background-color: #e6e9ed;
  }
  &.moving {
    background-color: transparent;
    color: transparent;
    border: 1px dashed #ccc;
  }
}
</style>
