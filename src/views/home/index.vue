<template>
  <div class="home">
    <a-card :bordered="false">Card content</a-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="less">
.home {
  height: 100%;
  background-color: pink;
  .arco-card {
    height: 100%;
  }
}
</style>
