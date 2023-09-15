<template>
  <div class="wrapper">
    <a-result status="success" title="提交成功">
      <template #subtitle>表单提交成功!</template>
      <template #extra>
        <a-space class="operation-wrap" :size="16">
          <a-button type="secondary">打印结果</a-button>
          <a-button type="primary">返回项目列表</a-button>
        </a-space>
      </template>
    </a-result>

    <div class="steps-wrapper">
      <a-descriptions
        :data="data"
        title="项目信息"
        :column="{ xs: 1, md: 3, lg: 4 }"
      >
        <a-descriptions-item v-for="item of data" :label="item.label">
          <a-tag>{{ item.value }}</a-tag>
        </a-descriptions-item>
      </a-descriptions>
      <a-steps label-placement="vertical" :current="2">
        <a-step title="创建项目" description="2022/09/10 14:00:39" />
        <a-step title="提出需求" description="2022/09/10 14:00:39" />
        <a-step title="项目开发" description="2022/09/20 14:00:39" />
        <a-step title="项目测试" description="2022/10/10 14:00:39" />
        <a-step title="部署上线" description="2022/09/20 14:00:39" />
      </a-steps>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Success',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    label: '项目名',
    value: 'Vue3—Admin-Template-v2',
  },
  {
    label: '组件库',
    value: 'Arco Design',
  },
  {
    label: '状态管理',
    value: 'Pinia',
  },
  {
    label: '路由',
    value: 'Vue-Router',
  },
])
</script>
<style scoped lang="less">
.wrapper {
  height: calc(100% - 84px);
  background-color: var(--color-bg-2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .operation-wrap {
  }
  .steps-wrapper {
    box-sizing: border-box;
    width: 80%;
    min-width: fit-content;
    padding: 24px;
    margin-top: 24px;
    background-color: rgb(var(--gray-1));
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
