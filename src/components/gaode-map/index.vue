<template>
  <div class="gaode-map">
    <div id="container"></div>
  </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, onUnmounted, ref } from 'vue'

const map = ref<any>(null)
const props = defineProps({
  height: {
    type: Number,
  },
})

const _init = () => {
  AMapLoader.load({
    key: '7aae98cb8dc9b87e28eafb97d269abea', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.HawkEye',
      'AMap.MapType',
      'AMap.Geolocation',
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      const container = document.getElementById('container') as HTMLElement
      container.style.height = `${props.height}px`
      map.value = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      })
      map.value?.addControl(new AMap.ToolBar())
      map.value?.addControl(new AMap.Scale())
      map.value?.addControl(new AMap.HawkEye())
      map.value?.addControl(new AMap.MapType())
      map.value?.addControl(new AMap.Geolocation())
    })
    .catch((e) => {
      console.log(e)
    })
}

onMounted(() => {
  _init()
})

onUnmounted(() => {
  map.value?.destroy()
})
</script>
<style scoped lang="less">
.gaode-map {
  position: relative;
}
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
}
</style>
