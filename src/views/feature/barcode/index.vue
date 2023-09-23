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
            <canvas id="code128-barcode"></canvas>
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
            <canvas id="code39-barcode"></canvas>
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
            <canvas id="EAN13-barcode"></canvas>
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
            <canvas id="other-barcode"></canvas>
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
import { nextTick } from 'vue'
import JsBarcode from 'jsbarcode'

nextTick(() => {
  JsBarcode('#code128-barcode', 'CODE128', {
    format: 'CODE128',
    background: '#ccffff',
  })
  JsBarcode('#code39-barcode', 'CODE39', {
    format: 'CODE128',
    lineColor: '#990000',
  })
  JsBarcode('#EAN13-barcode', '123456789012', {
    format: 'EAN13',
  })
  JsBarcode('#other-barcode', 'Barcode', {
    fontSize: 16,
    textMargin: 5,
    textPosition: 'top',
    textAlign: 'left',
    font: 'fantasy',
    fontOptions: 'bold italic',
  })
})
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
