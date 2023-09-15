<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">欢迎登录VueAdminTemplate</div>
    <div class="login-form-sub-title">请使用你的登录账号进行登录</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>

    <a-form
      ref="loginForm"
      class="login-form"
      :model="userInfo"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          allow-clear
          placeholder="请输入用户名"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          allow-clear
          placeholder="请输入密码"
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>

      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            v-model="loginConfig.rememberPassword"
            @change="handleRememberPassword as any"
          >
            记住密码
          </a-checkbox>
          <a-link>忘记密码?</a-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          登录
        </a-button>
        <a-button type="text" long class="login-form-register-btn">
          注册账号
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import type { LoginData } from '@/api/test/type'
import type { ValidatedError } from '@arco-design/web-vue/es/form/interface'
import useLoading from '@/hooks/loading'
import { getTimeOfDay } from '@/utils/date'
import { Message, Notification } from '@arco-design/web-vue'

const loginForm = ref(null)
const errorMessage = ref('')
const userStore = useUserStore()
const router = useRouter()
const { loading, setLoading } = useLoading()

const loginConfig = useStorage('login-config', {
  rememberPassword: true,
  username: 'admin', // 演示默认值
  password: '111111', // demo default value
})
const userInfo = reactive({
  username: loginConfig.value.username,
  password: loginConfig.value.password,
})

// 点击登录操作
const handleSubmit = async ({
  values,
  errors,
}: {
  values: Record<string, any>
  errors: Record<string, ValidatedError> | undefined
}) => {
  if (loading.value) return
  if (!errors) {
    setLoading(true)
    try {
      // TODO 登录逻辑
      await userStore.login(values as LoginData)
      // 路由跳转
      const { redirect, ...othersQuery } = router.currentRoute.value.query
      router.push({
        path: (redirect as string) || '/',
        query: { ...othersQuery },
      })
      Notification.success({
        title: '登录成功',
        content: `欢迎回来, ${getTimeOfDay()}好!`,
      })
      const { rememberPassword } = loginConfig.value
      const { username, password } = values
      loginConfig.value.username = rememberPassword ? username : ''
      loginConfig.value.password = rememberPassword ? password : ''
    } catch (error) {
      console.log(error)

      errorMessage.value = (error as Error).message
    } finally {
      setLoading(false)
    }
  }
}

// 记住密码
const handleRememberPassword = (value: boolean) => {
  loginConfig.value.rememberPassword = value
}
</script>
<style scoped lang="less">
.login-form {
  &-wrapper {
    width: 320px;
  }
  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 32px;
  }
  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }
  &-password-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
