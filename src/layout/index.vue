<template>
  <a-layout class="layout">
    <a-layout-header class="layout-navbar">
      <Navbar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        class="layout-sider"
        :style="{ paddingTop: '60px', width: collapsed ? '48px' : '200px' }"
      >
        <a-menu
          class="layout-menu"
          :collapsed="collapsed"
          :default-open-keys="defaultOpenKeys"
          :default-selected-keys="defaultSelectedKey"
        >
          <Menu :menu-list="menuList" />
        </a-menu>
        <div
          class="layout-sider-btn"
          :style="{ width: collapsed ? '48px' : '200px' }"
          @click="appStore.toggleCollapsed"
        >
          <icon-right v-if="collapsed" />
          <icon-left v-else />
        </div>
      </a-layout-sider>
      <a-layout
        :style="{
          paddingTop: '60px',
          paddingLeft: collapsed ? '48px' : '200px',
        }"
        class="layout-content"
      >
        <a-layout-content>
          <Breadcrumb />
          <Main />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<script setup lang="ts">
import Navbar from '@/components/navbar/index.vue'
import Menu from '@/components/menu/index.vue'
import Main from '@/components/main/index.vue'
import Breadcrumb from '@/components/breadcrumb/index.vue'

import { useUserStore, useAppStore } from '@/stores'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const userStore = useUserStore()
const appStore = useAppStore()
const route = useRoute()

const collapsed = computed(() => appStore.collapsed)
const menuList = computed(() => userStore.routes)
const defaultSelectedKey = computed(() => [route.path])
const defaultOpenKeys = computed(() => [
  `/${route.path.split('/').filter((item) => !!item)[0]}`,
])
</script>
<style scoped lang="less">
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;

  &-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: @nav-size-height;
    background: #fff;
  }
  &-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    transition: all 0.3s;
    &-btn {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 200px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      border-top: 1px solid var(--color-border);
    }
  }
  &-menu {
    height: 100%;
  }
  &-content {
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding .2s cubic-bezier(.34,.69,.1,1);
  }
}
</style>
