<template>
  <div class="container">
    <a-card title="通过读取本地文预览文档" :bordered="false">
      <div class="top-wrapper">
        <input class="file-input" type="file" @change="handleChange" />
      </div>
      <div class="content-wrapper">
        <VueOfficeDocx :src="originExcelSrc"></VueOfficeDocx>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts">
export default { name: 'Word' }
</script>
<script setup lang="ts">
import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'
import { ref } from 'vue'

const originExcelSrc = ref('')

const handleChange = (e: any) => {
  const _file = e.target.files[0]
  const fr = new FileReader()
  fr.readAsDataURL(_file)
  fr.onload = (event: any) => {
    originExcelSrc.value = event.target.result as string
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  .top-wrapper {
    padding: 10px;
  }
  .content-wrapper {
    padding: 10px;
  }
}
</style>
