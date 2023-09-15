<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" animation-name="fade">
        <a-carousel-item v-for="item in carouselItem" :key="item.title">
          <div class="carousel-item">
            <div class="carousel-title">{{ item.title }}</div>
            <div class="carousel-sub-title">{{ item.subTitle }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import bannerImage_1 from '@/assets/login/banner-1.svg'
import bannerImage_2 from '@/assets/login/banner-2.svg'
import bannerImage_3 from '@/assets/login/banner-3.svg'

const carouselItem = computed(() => [
  {
    title: '开箱即用的高质量模板',
    subTitle: '丰富的的页面模板，覆盖大多数典型业务场景',
    image: bannerImage_1,
  },
  {
    title: '内置了常见问题的解决方案',
    subTitle: '国际化，路由配置，状态管理应有尽有',
    image: bannerImage_2,
  },
  {
    title: '接入可视化增强工具AUX',
    subTitle: '实现灵活的区块式开发',
    image: bannerImage_3,
  },
])
</script>
<style scoped lang="less">
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  &-inner {
    flex: 1;
    height: 100%;
  }

  .carousel {
    height: 100%;
    &-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-title {
      color: var(--color-fill-1);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
    &-sub-title {
      margin-top: 8px;
      color: var(--color-fill-3);
      font-size: 14px;
      line-height: 22px;
    }
    &-image {
      width: 320px;
      margin-top: 30px;
    }
  }
}
</style>
