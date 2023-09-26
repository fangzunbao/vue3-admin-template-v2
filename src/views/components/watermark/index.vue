<template>
  <div class="container">
    <a-card title="页面水印功能" :bordered="false">
      <a-split min="80px" v-model:size="splitSize">
        <template #first>
          <div class="form-wrapper">
            <a-form :model="watermarkForm" layout="vertical">
              <a-form-item field="text" label="水印文字">
                <a-input
                  v-model="watermarkForm.text"
                  placeholder="请输入水印文字"
                  allow-clear
                />
              </a-form-item>
              <a-form-item field="size" label="水印文字大小">
                <a-slider
                  v-model="watermarkForm.size"
                  :step="5"
                  :style="{ display: 'flex' }"
                  show-ticks
                  show-input
                />
              </a-form-item>
              <a-form-item field="gap" label="水印文字间距">
                <a-slider
                  v-model="watermarkForm.gap"
                  :step="5"
                  :style="{ display: 'flex' }"
                  show-ticks
                  show-input
                />
              </a-form-item>
              <a-form-item>
                <a-button @click="clearWatermark">重置</a-button>
              </a-form-item>
            </a-form>
          </div>
        </template>
        <template #second>
          <div class="watermark-wrapper">
            <div class="operate-btns">
              <a-space>
                <a-button @click="watermarkClass = '1'">整页水印</a-button>
                <a-button @click="setPageGradient">整页书印渐变</a-button>
                <a-button @click="setPageShadow">水印阴影</a-button>
                <a-button @click="watermarkClass = '2'">局部水印</a-button>
                <a-button @click="setBoxGradient">局部水印渐变</a-button>
                <a-button @click="setBoxShadow">局部水印阴影</a-button>
                <a-button @click="clearWatermark">清除水印</a-button>
              </a-space>
            </div>
            <div
              class="watermark-content"
              :style="`position: ${
                watermarkClass === '2' ? 'relative' : 'static'
              }`"
            >
              <Teleport to="body" v-if="watermarkClass === '1'">
                <th-watermark
                  :text="watermarkForm.text"
                  :color="watermarkForm.color"
                  :size="watermarkForm.size"
                  :gap="watermarkForm.gap"
                  :shadow="watermarkForm.shadow"
                  :gradient="watermarkForm.gradient"
                ></th-watermark>
              </Teleport>
              <th-watermark
                v-if="watermarkClass === '2'"
                :text="watermarkForm.text"
                :color="watermarkForm.color"
                :size="watermarkForm.size"
                :gap="watermarkForm.gap"
                :shadow="watermarkForm.shadow"
                :gradient="watermarkForm.gradient"
              ></th-watermark>
            </div>
            <div class="watermark-fixed">
              <a-typography-title :heading="6" style="margin-top: 0">
                不可清除的水印
              </a-typography-title>
              <div class="content">
                <th-watermark
                  text="不可清除的水印"
                  :size="15"
                  :gap="10"
                ></th-watermark>
              </div>
            </div>
          </div>
        </template>
      </a-split>
    </a-card>
  </div>
</template>

<script lang="ts">
export default { name: 'Watermark' }
</script>
<script setup lang="ts">
import ThWatermark from '@/components/ThWatermark'
import { ref } from 'vue'

const generateFormModel = () => {
  return {
    text: '水印测试',
    size: 15,
    gap: 10,
    color: '#bcbcbc',
    shadow: false,
    gradient: false,
  }
}

const splitSize = ref(0.3)
const watermarkClass = ref('0') // 0 不显示 1 整页 2 局部
const watermarkForm = ref(generateFormModel())

// 整页水印阴影
const setPageShadow = () => {
  watermarkClass.value = '1'
  watermarkForm.value.shadow = true
}

const setPageGradient = () => {
  watermarkClass.value = '1'
  watermarkForm.value.gradient = true
}

const setBoxShadow = () => {
  watermarkClass.value = '2'
  watermarkForm.value.shadow = true
}

const setBoxGradient = () => {
  watermarkClass.value = '2'
  watermarkForm.value.gradient = true
}

// 清除水印
const clearWatermark = () => {
  watermarkClass.value = '0'
  watermarkForm.value = generateFormModel()
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  height: calc(100% - 84px);
  .arco-card {
    height: 100%;
    :deep(.arco-card-body) {
      height: calc(100% - 84px);
    }
  }
  .arco-split {
    width: 100%;
    height: 100%;
    min-width: 500px;
    border: 1px solid var(--color-border);
  }
  .form-wrapper {
    padding: 12px;
  }
  .watermark-wrapper {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .watermark-content {
      width: 100%;
      height: 300px;
      border: 1px dashed rgb(var(--primary-6));
    }
    .watermark-fixed {
      .content {
        position: relative;
        width: 100%;
        height: 290px;
        border: 1px dashed rgb(var(--primary-6));
      }
    }
  }
}
</style>
