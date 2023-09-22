<template>
  <div class="container">
    <a-card :bordered="false" title="数字范围选择">
      <Range :count="10" clearable @change="handleChange">
        <template #title>
          {{ rangeList.join('-') }}
        </template>
      </Range>
    </a-card>
    <a-card :bordered="false" title="数字范围选择Props">
      <a-table :columns="columnsProps" :data="dataProps" :pagination="false" />
    </a-card>
    <a-card :bordered="false" title="数字范围选择Event">
      <a-table :columns="columnsEvent" :data="dataEvent" :pagination="false" />
    </a-card>
    <a-card :bordered="false" title="数字范围选择Slot">
      <a-table :columns="columnsSlot" :data="dataSlot" :pagination="false" />
    </a-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Range',
}
</script>
<script setup lang="ts">
import Range from '@/components/range/index.vue'
import { ref } from 'vue'

const rangeList = ref<number[]>([])
const columnsProps = [
  {
    title: '参数名',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '默认值',
    dataIndex: 'default',
  },
]

const columnsEvent = [
  {
    title: '事件名',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '参数',
    dataIndex: 'params',
  },
]

const columnsSlot = [
  {
    title: '插槽名',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '参数',
    dataIndex: 'params',
  },
]

const dataProps = ref([
  {
    name: 'count',
    desc: '范围量',
    type: 'number',
    default: 10,
  },
  {
    name: 'value',
    desc: '范围值',
    type: '[number, number]',
    default: [-1, -1],
  },
  {
    name: 'type',
    desc: '样式类型',
    type: 'string',
    default: 'square',
  },
])

const dataEvent = ref([
  {
    name: 'change',
    desc: '范围值',
    params: '[min, max]',
  },
])
const dataSlot = ref([
  {
    name: 'title',
    desc: '选择的范围值',
    params: '-',
  },
])

const handleChange = (value: number[]) => {
  rangeList.value = value
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
}
</style>
