<template>
  <div class="container">
    <a-card :bordered="false" title="原生Dragable">
      <Draggable :data="data" />
    </a-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Draggable',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import Draggable from '@/components/draggable/index.vue'

const data = ref([
  { id: 1, label: 'Apple', value: 'Apple' },
  { id: 2, label: 'Banner', value: 'Banner' },
  { id: 3, label: 'Orange', value: 'Orange' },
  { id: 4, label: 'Strawberry', value: 'Strawberry' },
  { id: 5, label: 'Watermelon', value: 'Watermelon' },
])
</script>
<style scoped lang="less">
.arco-card {
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
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
}
</style>
