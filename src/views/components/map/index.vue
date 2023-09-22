<template>
  <div class="container" ref="mapRef">
    <GaodeeMap :height="height" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Map',
}
</script>
<script setup lang="ts">
import GaodeeMap from '@/components/gaode-map/index.vue'
import { ref, nextTick } from 'vue'

const mapRef = ref()
const height = ref(800)

nextTick(() => {
  height.value = mapRef.value.offsetHeight
})
</script>
<style scoped lang="less">
.container {
  height: 100%;
}
</style>
