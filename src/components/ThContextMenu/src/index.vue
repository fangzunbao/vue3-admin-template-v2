<template>
  <div id="contextmenu">
    <slot></slot>
    <Teleport to="body">
      <Transition
        @beforeEnter="handleBeforeEnter"
        @enter="handleEnter"
        @afterEnter="handleAfterEnter"
      >
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
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>
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

const handleBeforeEnter = (el: any) => {
  el.style.height = 0
}

const handleEnter = (el: any) => {
  el.style.height = 'auto'
  const h = el.clientHeight
  el.style.height = 0
  requestAnimationFrame(() => {
    el.style.height = h + 'px'
    el.style.transition = '.5s'
  })
}

const handleAfterEnter = (el: any) => {
  el.style.transition = 'none'
}
</script>
<style scoped lang="less">
.context-menu {
  position: absolute;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgb(var(--gray-2));
  box-sizing: border-box;
  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .menu-item {
      padding: 8px 30px;
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background: rgb(var(--primary-6));
      }
    }
  }
}
</style>
