<template>
  <a-card :bordered="false">
    <p v-for="item in 100" :key="item">Card content</p>
  </a-card>
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
  height: calc(100% - 40px);
  :deep(.arco-card-body) {
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
