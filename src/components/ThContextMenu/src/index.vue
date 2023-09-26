<template>
  <div id="contextmenu">
    <slot></slot>
    <Teleport to="body">
      <div
        v-if="showMenu"
        class="context-menu"
        :style="{
          left: x + 'px',
          top: y + 'px',
        }"
      >
        <div class="menu-list">
          <div
            @click="handleClick(item)"
            class="menu-item"
            v-for="(item, index) in menu"
            :key="item.id || item.label || index"
          >
            <span class="label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
export default { name: 'ThContextMenu' }
</script>
<script setup lang="ts">
import type { PropType } from 'vue'
import useContextMenu from '@/hooks/useContextMenu'

export interface ContextMenu {
  id?: string | number
  label: string
  value: string | number
}

const { x, y, showMenu } = useContextMenu('contextmenu')

defineProps({
  menu: {
    type: Array as PropType<ContextMenu[]>,
    default: () => [],
  },
})
const emits = defineEmits(['select'])

// 选择菜单项
const handleClick = (item: ContextMenu) => {
  // 选中菜单后关闭菜单
  showMenu.value = false
  // 并返回选中的菜单
  emits('select', item)
}
</script>
<style scoped lang="less">
.context-menu {
  position: absolute;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgb(var(--gray-2));
  box-sizing: border-box;
  padding: 8px;
  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .menu-item {
      font-size: 15px;
      padding: 8px 30px;
      cursor: pointer;
      border-radius: 4px;
      &:hover {
        color: #ffffff;
        background: rgb(var(--primary-6));
      }
    }
  }
}
</style>
