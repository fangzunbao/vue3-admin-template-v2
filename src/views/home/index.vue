<template>
  <a-card :bordered="false">Card content</a-card>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="less">
.arco-card {
  margin: 20px 0;
  height: calc(100% - 50px);
  :deep(.arco-card-body) {
    height: calc(100% - 32px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
