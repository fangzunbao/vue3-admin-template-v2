<template>
  <div class="container">
    <a-card title="右键菜单" :bordered="false">
      <div class="right-wrapper">
        <th-context-menu class="block" :menu="menu" @select="handleSelect">
          <span>选择的值: {{ choose?.label }}</span>
        </th-context-menu>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts">
export default { name: 'ContextMenu' }
</script>
<script setup lang="ts">
import { ref } from 'vue'
import ThContextMenu from '@/components/ThContextMenu'
import type { ContextMenu } from '@/components/ThContextMenu'

const menu = ref<ContextMenu[]>([
  {
    id: 1,
    label: '复制',
    value: 'copy',
  },
  {
    id: 2,
    label: '粘贴',
    value: 'paste',
  },
  {
    id: 3,
    label: '撤回',
    value: 'withdraw',
  },
  {
    id: 4,
    label: '关闭',
    value: 'close',
  },
])
const choose = ref<ContextMenu>()

const handleSelect = (item: ContextMenu) => {
  choose.value = item
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  .right-wrapper {
    width: 300px;
    height: 300px;
    background-color: rgb(var(--primary-1));
    border: 2px dashed rgb(var(--primary-6));
    .block {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
