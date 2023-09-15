<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <a-menu-item
        :key="item.path"
        v-if="!item.meta?.hidden"
        @click="toggleMenuItem(item)"
      >
        <template #icon>
          <icon-font
            v-if="item.meta?.icon"
            :type="item.meta?.icon"
            :size="18"
          />
        </template>
        {{ item.meta?.title }}
      </a-menu-item>
    </template>

    <template v-if="item.children && item.children.length === 1">
      <a-menu-item
        v-if="!item.children[0].meta?.hidden"
        :key="item.children[0].path"
        @click="toggleMenuItem(item)"
      >
        <template #icon>
          <icon-font
            v-if="item.children[0].meta?.icon"
            :type="item.children[0].meta?.icon"
            :size="18"
          />
        </template>
        {{ item.children[0].meta?.title }}
      </a-menu-item>
    </template>

    <template v-if="item.children && item.children.length > 1">
      <a-sub-menu :key="item.path">
        <template #icon>
          <icon-font
            v-if="item.meta?.icon"
            :type="item.meta?.icon"
            :size="18"
          />
        </template>
        <template #title>{{ item.meta?.title }}</template>
        <Menu :menu-list="item.children" />
      </a-sub-menu>
    </template>
  </template>
</template>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'
import { Icon } from '@arco-design/web-vue'

const IconFont = Icon.addFromIconFontCn({
  src: 'https://at.alicdn.com/t/c/font_4189167_gcqs1akpbhs.js',
})
const router = useRouter()

defineProps({
  menuList: {
    type: Array as PropType<RouteRecordRaw[]>,
  },
})

//  切换菜单路由
const toggleMenuItem = (item: RouteRecordRaw) => {
  router.push({ path: item.path})
}
</script>
<style scoped lang="less"></style>
