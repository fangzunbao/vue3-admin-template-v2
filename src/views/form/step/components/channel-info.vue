<template>
  <a-form
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 6 }"
    :wrapper-col-props="{ span: 18 }"
  >
    <a-form-item
      field="advertisingSource"
      label="广告来源"
      :rules="[
        {
          required: true,
          message: '请输入广告来源',
        },
      ]"
    >
      <a-input
        v-model="formData.advertisingSource"
        placeholder="引荐来源地址：sohu、sina"
      />
    </a-form-item>
    <a-form-item
      field="advertisingMedia"
      label="广告媒介"
      :rules="[
        {
          required: true,
          message: '请选择关键词',
        },
      ]"
    >
      <a-input v-model="formData.advertisingMedia" placeholder="请选择关键词" />
    </a-form-item>
    <a-form-item
      field="keyword"
      label="关键词"
      :rules="[{ required: true, message: '请选择关键词' }]"
    >
      <a-select v-model="formData.keyword" placeholder="请选择关键词" multiple>
        <a-option>今日头条</a-option>
        <a-option>火山</a-option>
      </a-select>
    </a-form-item>
    <a-form-item
      field="pushNotify"
      label="推送提醒"
      :rules="[{ required: true }]"
    >
      <a-switch v-model="formData.pushNotify" />
    </a-form-item>
    <a-form-item
      field="advertisingContent"
      label="广告内容"
      :rules="[
        {
          required: true,
          message: '请输入广告内容',
        },
        {
          maxLength: 200,
          message: '最多不超过200字',
        },
      ]"
      row-class="keep-margin"
    >
      <a-textarea
        v-model="formData.advertisingContent"
        placeholder="请输入广告内容介绍，最多不超过200字。"
      />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button type="secondary" @click="goPrev">上一步</a-button>
        <a-button type="primary" @click="onNextClick">下一步</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from '@arco-design/web-vue/es/form'
import type { ChannelInfoModel } from '@/api/test/type'

const emits = defineEmits(['changeStep'])

const formRef = ref<FormInstance>()
const formData = ref<ChannelInfoModel>({
  advertisingSource: '',
  advertisingMedia: '',
  keyword: [],
  pushNotify: true,
  advertisingContent: '',
})

const onNextClick = async () => {
  const res = await formRef.value?.validate()
  if (!res) {
    emits('changeStep', 'submit', { ...formData.value })
  }
}
const goPrev = () => {
  emits('changeStep', 'backward')
}
</script>
<style scoped lang="less">
.form {
  width: 500px;
}

.form-content {
  padding: 8px 50px 0 30px;
}
</style>
