<template>
  <a-card :bordered="false">
    <a-result status="404" subtitle="抱歉，页面不见了～">
      <template #extra>
        <a-space>
          <a-button type="primary">返回</a-button>
        </a-space>
      </template>
    </a-result>
  </a-card>
</template>

<script lang="ts">
export default {
  name: 'NotFound',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="less">
.arco-card {
  height: calc(100% - 84px);
  :deep(.arco-card-body) {
    height: calc(100% - 32px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
