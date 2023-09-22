<template>
  <div class="container">
    <Waterfall :data="dataList" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Waterfall',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import type { Image } from './type'
import Waterfall from '@/components/waterfall/index.vue'

const ORANGE_LIST = [
  {
    id: 1,
    url: '/src/views/components/waterfall/images/img-01.jpeg',
    desc: '图片01',
  },
  {
    id: 2,
    url: '/src/views/components/waterfall/images/img-02.jpeg',
    desc: '图片02',
  },
  {
    id: 3,
    url: '/src/views/components/waterfall/images/img-03.jpeg',
    desc: '图片03',
  },
  {
    id: 4,
    url: '/src/views/components/waterfall/images/img-04.jpeg',
    desc: '图片04',
  },
  {
    id: 5,
    url: '/src/views/components/waterfall/images/img-05.jpeg',
    desc: '图片05',
  },
  {
    id: 6,
    url: '/src/views/components/waterfall/images/img-06.jpeg',
    desc: '图片06',
  },
  {
    id: 7,
    url: '/src/views/components/waterfall/images/img-07.jpeg',
    desc: '图片07',
  },
  {
    id: 8,
    url: '/src/views/components/waterfall/images/img-08.jpeg',
    desc: '图片08',
  },
  {
    id: 9,
    url: '/src/views/components/waterfall/images/img-09.jpeg',
    desc: '图片09',
  },
]

const dataList = ref<Image[]>([
  ...ORANGE_LIST,
  ...ORANGE_LIST,
  ...ORANGE_LIST,
  ...ORANGE_LIST,
])
</script>
<style scoped lang="less">
.container {
  margin: 0 20px 20px 20px;
  border-radius: 6px;
  background-color: #fff;
}
</style>
