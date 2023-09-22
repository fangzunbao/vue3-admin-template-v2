<template>
  <div class="wrapper">
    <a-result status="error" title="提交失败">
      <template #subtitle>表单提交失败，请重试。</template>
      <template #extra>
        <a-space class="operation-wrap" :size="16">
          <a-button type="secondary">回到首页</a-button>
          <a-button type="primary">返回修改</a-button>
        </a-space>
      </template>
    </a-result>

    <div class="error-wrapper">
      <a-typography-title :heading="6">错误详情</a-typography-title>
      <a-typography-paragraph>
        <ol>
          <li v-for="(item, index) in data" :key="item.id">
            <span class="error-item-index">{{ index + 1 }}.</span>
            <span class="error-item-message">{{ item.error_msg }}</span>
            <a-link v-if="item.link">
              <IconLink />
              {{ item.link }}
            </a-link>
          </li>
        </ol>
      </a-typography-paragraph>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Error',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    id: '1',
    error_msg: '当前域名未备案，备案流程请查看',
    link: '备案流程',
  },
  {
    id: '2',
    error_msg: '你的用户组不具有进行此操作的权限',
    link: '',
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
  margin: 0 20px;

  .error-wrapper {
    box-sizing: border-box;
    width: 80%;
    min-width: fit-content;
    padding: 24px;
    margin-top: 24px;
    background-color: rgb(var(--gray-1));
    display: flex;
    flex-direction: column;
    gap: 24px;
    .error-item-index {
      font-size: 1em;
      display: inline-block;
      margin: 0 5px;
    }
    .error-item-message {
      font-size: 0.9em;
      display: inline-block;
      margin: 0 5px;
    }
  }
}
</style>
