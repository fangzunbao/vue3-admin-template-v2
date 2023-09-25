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
            <ThQrcode text="123456789" />
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
            <ThQrcode text="1256789" tag="img" />
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
            <ThQrcode
              text="123456"
              :options="{
                color: {
                  dark: '#3498db',
                  light: '#e74c3c',
                },
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              点击事件
            </a-typography-title>
            <ThQrcode text="123456" @click="codeClick" />
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
              禁用属性
            </a-typography-title>
            <ThQrcode text="123456" disabled @disabled-click="disabledClick" />
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
              内嵌Logo
            </a-typography-title>
            <ThQrcode
              text="123456"
              logo="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              内嵌Logo属性
            </a-typography-title>
            <ThQrcode
              text="123456"
              :logo="{
                src: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                logoSize: 0.2,
                borderSize: 0.03,
                borderRadius: 6,
                bgColor: '#2ecc71',
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
            <a-typography-title :heading="6" :style="{ margin: 0 }">
              异步二维码
            </a-typography-title>
            <ThQrcode :text="asyncTitle" />
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
              二维码大小
            </a-typography-title>
            <ThQrcode text="123456" :width="150" />
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
import { Message } from '@arco-design/web-vue'
import ThQrcode from '@/components/ThQrcode'

import { ref, unref, onMounted } from 'vue'
const renderText = ref('测试')
const asyncTitle = ref('')

const codeClick = () => {
  Message.info('点击事件')
}

const disabledClick = () => {
  Message.warning('二维码失效')
}

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
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
