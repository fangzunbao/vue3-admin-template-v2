<template>
  <div class="container">
    <a-card title="倒计时" :bordered="false">
      <th-countdown end="2023-09-28 19:00:00">
        <template #default="{ hour, minute, second, status }">
          <div class="countdown">
            <div class="count-toast">
              倒计时已{{ status === 1 ? '开始' : '结束' }}
            </div>
            <div class="countdown-container">
              <div class="countdown-wrapper">
                <div class="countdown-item">{{ hour[0] }}</div>
                <div class="countdown-item">{{ hour[1] }}</div>
              </div>
              <div class="countdown-icon">:</div>
              <div class="countdown-wrapper">
                <div class="countdown-item">{{ minute[0] }}</div>
                <div class="countdown-item">{{ minute[1] }}</div>
              </div>
              <div class="countdown-icon">:</div>
              <div class="countdown-wrapper">
                <div class="countdown-item">{{ second[0] }}</div>
                <div class="countdown-item">{{ second[1] }}</div>
              </div>
            </div>
          </div>
        </template>
      </th-countdown>
    </a-card>
  </div>
</template>

<script lang="ts">
export default { name: 'CountDown' }
</script>
<script setup lang="ts">
import ThCountdown from '@/components/ThCountdown'
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  .countdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
  .count-toast {
    font-size: 14px;
    font-weight: bold;
    margin-right: 5px;
  }
  .countdown-container {
    display: flex;
  }
  .countdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    .countdown-item {
      width: 30px;
      height: 30px;
      font-weight: bold;
      border-radius: 4px;
      text-align: center;
      line-height: 30px;
      color: rgb(var(--primary-6));
      font-size: 18px;
      background-color: rgb(var(--primary-2));
    }
  }
  .countdown-icon {
    font-size: 24px;
    font-weight: bold;
    margin: 0 5px;
  }
}
</style>
