<template>
  <div class="container">
    <a-card title="手写签名" :bordered="false">
      <th-sign ref="signRef" @submit="handleSubmit" download></th-sign>
    </a-card>
  </div>
</template>

<script lang="ts">
export default { name: 'Sign' }
</script>
<script setup lang="ts">
import ThSign from '@/components/ThSign'
import { ref } from 'vue'

const signRef = ref()
const handleSubmit = (url: string) => {
  console.log(url)
  // signRef.value.clearSign()
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
}
</style>
