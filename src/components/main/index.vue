<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <Transition name="fade">
        <Component :is="Component" v-if="refresh" />
      </Transition>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'index',
}
</script>
<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const refresh = ref(true)

watch(
  () => appStore.refresh,
  () => {
    refresh.value = false
    nextTick(() => {
      refresh.value = true
    })
  },
)
</script>
<style scoped lang="less">
.main {
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-enter-to {
  opacity: 2;
}
</style>
