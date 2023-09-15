<template>
  <div class="container">
    <div class="logo">
      <img class="logo-img" src="@/assets/logo.svg" alt="logo" />
      <div class="logo-text">Vue3 Admin Template</div>
    </div>

    <LoginBanner />

    <div class="content">
      <div class="content-inner"><login-form /></div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
<script setup lang="ts">
import LoginBanner from './components/banner.vue'
import LoginForm from './components/login-form.vue'
import Footer from '@/components/footer/index.vue'
</script>
<style scoped lang="less">
.container {
  height: 100%;
  display: flex;
  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    .logo-img {
      width: 33px;
      height: 33px;
    }
    .logo-text {
      margin-right: 8px;
      margin-left: 8px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
