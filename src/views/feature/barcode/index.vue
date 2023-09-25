<template>
  <div class="container">
    <a-card :bordered="false" title="条形码显示">
      <a-row :gutter="20">
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode
              text="CODE128"
              :options="{ format: 'CODE128', background: '#ccffff' }"
            />
          </a-card>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode
              text="CODE39"
              :options="{ format: 'CODE39', lineColor: '#990000' }"
            />
          </a-card>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode text="123456789012" :options="{ format: 'EAN13' }" />
          </a-card>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode
              text="Barcode"
              :options="{
                fontSize: 16,
                textMargin: 5,
                textPosition: 'top',
                textAlign: 'left',
                font: 'fantasy',
                fontOptions: 'bold italic',
              }"
            />
          </a-card>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode :width="300" text="123456" disabled />
          </a-card>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
          :xxl="6"
          class="card-item"
          :style="{ marginBottom: '20px' }"
        >
          <a-card hoverable>
            <ThBarcode :text="asyncTitle" />
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Barcode',
}
</script>
<script setup lang="ts">
import ThBarcode from '@/components/ThBarcode'
import { unref } from 'vue'

import { ref } from 'vue'
const renderText = ref('测试')
const asyncTitle = ref('')

setTimeout(() => {
  asyncTitle.value = unref(renderText)
}, 2000)
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  .card-item {
    .arco-card {
      cursor: pointer;
    }
    :deep(.arco-card-body) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
