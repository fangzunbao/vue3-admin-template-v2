<template>
  <div class="logo">
    <a-space>
      <img class="logo-img" src="@/assets/logo.svg" alt="Logo" />
      <div class="logo-title">Vue3 Admin V2</div>
      <icon-menu-unfold v-if="false" style="font-size: 18px" />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { IconMenuUnfold } from '@arco-design/web-vue/es/icon'
</script>
<style scoped lang="less">
.logo {
  display: flex;
  align-items: center;
  &-img {
    width: 33px;
    height: 33px;
    padding-left: 20px;
  }
  &-title {
    font-weight: 500;
    font-size: 18px;
    color: var(--color-text-1);
  }
}
</style>
