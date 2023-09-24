import type { PropType } from 'vue'
import type { JsBarcodeOptions } from './type'

export default {
  /**
   * 条形码标识
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * 条形码类型
   * canvas | img | svg
   */
  tag: {
    type: String,
    default: () => 'canvas',
    validator: (val: string) => ['canvas', 'img', 'svg'].includes(val),
  },
  /**
   * 条形码的值
   *  必填
   */
  text: {
    type: String,
    default: () => '',
    required: true,
  },
  /**
   * 条形码的参数
   */
  options: {
    type: Object as PropType<JsBarcodeOptions>,
    default: () => ({}) as JsBarcodeOptions,
  },
}
