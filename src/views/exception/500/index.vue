<template>
  <a-card :bordered="false">
    <a-result status="403" subtitle="抱歉，服务器出了点问题～">
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
  name: 'ServerError',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="less">
.arco-card {
  height: calc(100% - 84px);
  margin: 0 20px;
  :deep(.arco-card-body) {
    height: calc(100% - 32px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
