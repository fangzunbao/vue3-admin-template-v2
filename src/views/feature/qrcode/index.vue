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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              基础用法
            </a-typography-title>
            <canvas id="basic-canvas"></canvas>
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              Img用法
            </a-typography-title>
            <img id="img-canvas" />
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              样式用法
            </a-typography-title>
            <canvas id="style-canvas"></canvas>
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              默认大小
            </a-typography-title>
            <canvas id="size-canvas"></canvas>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Qrcode',
}
</script>
<script setup lang="ts">
import QRCode from 'qrcode'
import { nextTick } from 'vue'

const generateBasicQR = (text) => {
  QRCode.toCanvas(
    document.getElementById('basic-canvas'),
    text,
    { scale: 6 },
    (error) => {
      if (!error) {
        console.log('success')
      } else {
        console.error(error)
      }
    },
  )
}

const generateImgQR = async (text) => {
  try {
    const src = await QRCode.toDataURL(text, { scale: 6 })
    const img = document.getElementById('img-canvas') as HTMLImageElement
    img.src = src
  } catch (err) {
    console.error(err)
  }
}

const generateStyleQR = (text) => {
  try {
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      scale: 6,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF',
      },
    }
    QRCode.toCanvas(
      document.getElementById('style-canvas'),
      text,
      opts,
      (error) => {
        if (!error) {
          console.log('success')
        } else {
          console.error(error)
        }
      },
    )
  } catch (error) {
    console.error(error)
  }
}

const generateSizeQR = (text) => {
  try {
    QRCode.toCanvas(document.getElementById('size-canvas'), text, (error) => {
      if (!error) {
      } else {
        console.error(error)
      }
    })
  } catch (error) {
    console.error(error)
  }
}

nextTick(() => {
  generateBasicQR('1234')
  generateImgQR('1234')
  generateStyleQR('1234')
  generateSizeQR('1234')
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
