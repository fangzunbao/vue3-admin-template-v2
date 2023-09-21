<template>
  <!-- <div class="waterfall T_watetfall" ref="waterfillRef">
    <div class="waterfall-item" v-for="item in data" :key="item.id">
      <img :src="item.url" alt="Image" />
    </div>
  </div> -->
  <Waterfall :list="data">
    <template #item="{ item, url, index }">
      <div class="card">
        <LazyImg :url="item.url" />
      </div>
    </template>
  </Waterfall>
</template>

<script setup lang="ts">
// import Waterfall from '@/utils/waterfall'
// import { ref, nextTick } from 'vue'
import type { PropType } from 'vue'
import type { Image } from '@/views/components/waterfall/type'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

defineProps({
  data: {
    type: Array as PropType<Image[]>,
    default: () => [],
  },
})

// nextTick(() => {
//   Waterfall({
//     el: 'T_watetfall',
//     columns: 5,
//     gap: 10,
//   })
// })
</script>
<style scoped lang="less">
.waterfall {
  width: 100%;
  height: 100%;
  background-color: pink;
  // columns: 5;
  // column-gap: 10px;
  position: relative;
  &-item {
    position: absolute;
    padding: 4px;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgb(var(--gray-2));
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
