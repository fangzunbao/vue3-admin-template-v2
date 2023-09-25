import type { PropType } from 'vue'
import type { JsBarcodeOptions } from './type'

export default {
  /**
   * 条形码宽度
   */
  width: {
    type: Number,
    default: () => 200,
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
   * 是否过期
   */
  disabled: {
    type: Boolean,
    default: () => false,
  },
  /**
   * 过期提示内容
   */
  disabledText: {
    type: String,
    default: () => '条形码已过期',
  },
  /**
   * 条形码的参数
   */
  options: {
    type: Object as PropType<JsBarcodeOptions>,
    default: () => ({}) as JsBarcodeOptions,
  },
}
