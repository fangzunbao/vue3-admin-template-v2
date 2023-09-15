/**
 * 根据当前时间判断是否为早上、上午、下午、晚上
 */
export function getTimeOfDay(): string {
  const hour = new Date().getHours()
  if (hour >= 0 && hour < 6) {
    return '凌晨'
  } else if (hour >= 6 && hour < 12) {
    return '早上'
  } else if (hour >= 12 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}
