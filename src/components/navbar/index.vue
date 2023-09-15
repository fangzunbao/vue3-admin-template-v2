<template>
  <div class="navbar">
    <div class="navbar-left-side">
      <Logo></Logo>
    </div>
    <ul class="navbar-right-side">
      <li>
        <a-tooltip content="页面刷新">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="appStore.toggleRefresh"
          >
            <template #icon>
              <icon-loop />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="消息通知">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-notification />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="`${isFullscreen ? '退出' : '切换'}全屏模式`">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="`切换为${theme === 'dark' ? '亮色' : '暗黑'}模式`">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="页面配置">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="皮肤切换">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-skin />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
            :imageUrl="avatar"
          ></a-avatar>
          <template #content>
            <a-doption>
              <a-space>
                <icon-user />
                <span>用户中心</span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span>退出登录</span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/logo/index.vue'
import {
  IconLoop,
  IconNotification,
  IconFullscreen,
  IconFullscreenExit,
  IconSettings,
  IconSkin,
  IconUser,
  IconExport,
} from '@arco-design/web-vue/es/icon'
import { computed } from 'vue'
import useUser from '@/hooks/user'
import { useUserStore, useAppStore } from '@/stores'
import { useDark, useToggle, useFullscreen } from '@vueuse/core'

const userStore = useUserStore()
const appStore = useAppStore()
const { logout } = useUser()
const avatar = computed(() => userStore.avatar)
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    appStore.toggleTheme(dark)
  },
})

const theme = computed(() => appStore.theme)

const toggleTheme = useToggle(isDark)

const handleToggleTheme = () => {
  toggleTheme()
}

// 退出登录
const handleLogout = () => {
  logout()
}
</script>
<style scoped lang="less">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  &-right-side {
    display: flex;
    padding-right: 20px;
    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    .nav-btn {
      border-color: rgb(var(--gray-2));
      color: rgb(var(--gray-8));
      font-size: 16px;
    }
  }
}
</style>
