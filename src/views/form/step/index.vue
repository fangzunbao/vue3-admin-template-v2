<template>
  <div class="container">
    <a-spin :loading="loading" style="width: 100%">
      <a-card class="general-card">
        <template #title>创建渠道表单</template>
        <div class="wrapper">
          <a-steps
            v-model:current="step"
            style="width: 580px"
            line-less
            class="steps"
          >
            <a-step description="创建渠道活动">选择基本信息</a-step>
            <a-step description="输入详细的渠道信息">输入渠道信息</a-step>
            <a-step description="创建成功">完成创建</a-step>
          </a-steps>
          <keep-alive>
            <BaseInfo v-if="step === 1" @change-step="changeStep" />
            <ChannelInfo v-else-if="step === 2" @change-step="changeStep" />
            <Success v-else-if="step === 3" @change-step="changeStep" />
          </keep-alive>
        </div>
      </a-card>
    </a-spin>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Step',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import useLoading from '@/hooks/loading'
import { reqFormCreate } from '@/api/test'
import BaseInfo from './components/base-info.vue'
import ChannelInfo from './components/channel-info.vue'
import Success from './components/success.vue'
import type {
  BaseInfoModel,
  ChannelInfoModel,
  UnitChannelModel,
} from '@/api/test/type'

const { loading, setLoading } = useLoading(false)
const step = ref(1)
const submitModel = ref<UnitChannelModel>({} as UnitChannelModel)

// 提交表单
const submitForm = async () => {
  setLoading(true)
  try {
    await reqFormCreate(submitModel.value) // 接口默认成功返回
    step.value = 3
    submitModel.value = {} as UnitChannelModel
  } catch (err) {
    // TODO 错误信息
  } finally {
    setLoading(false)
  }
}

// 下一步
const changeStep = (
  direction: string | number,
  model: BaseInfoModel | ChannelInfoModel,
) => {
  if (typeof direction === 'number') {
    step.value = direction
    return
  }

  if (direction === 'forward' || direction === 'submit') {
    submitModel.value = {
      ...submitModel.value,
      ...model,
    }
    if (direction === 'submit') {
      submitForm()
      return
    }
    step.value += 1
  } else if (direction === 'backward') {
    step.value -= 1
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  background-color: var(--color-bg-2);
  :deep(.arco-form) {
    .arco-form-item {
      &:last-child {
        margin-top: 20px;
      }
    }
  }
}

.steps {
  margin-bottom: 76px;
}
</style>
