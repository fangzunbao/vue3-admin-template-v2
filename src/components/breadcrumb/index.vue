<template>
  <div class="breadcrumb" v-if="!home">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <icon-apps  />
      </a-breadcrumb-item>
      <template v-for="item in route.matched" :key="item.path">
        <a-breadcrumb-item v-if="!!item.meta.title">
          {{ item.meta.title }}
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const home = computed(() => route.matched[0].path === '/')
</script>
<style scoped lang="less">
.breadcrumb {
  padding: 20px;
  :deep(.arco-breadcrumb-item) {
    color: rgb(var(--gray-6));
    &:last-child {
      color: rgb(var(--gray-8));
    }
  }
}
</style>
