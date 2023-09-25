import type { PropType } from 'vue'
import type { QRCodeRenderersOptions } from 'qrcode'
import type { QRcodeLogo } from './type'

export default {
  // img 或者 canvas,img不支持logo嵌套
  tag: {
    type: String,
    default: () => 'canvas',
    validator: (val: string) => ['canvas', 'img'].includes(val),
  },
  // 二维码内容
  text: {
    type: String,
    default: () => '',
  },
  /**
   * 二维码的大小
   */
  width: {
    type: Number,
    default: () => 200,
  },
  logo: {
    type: [String, Object] as PropType<Partial<QRcodeLogo> | string>,
    default: (): QRcodeLogo | string => '',
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
    default: () => '二维码已过期',
  },
  /**
   * 二维码的其他参数
   */
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: () => ({}) as QRCodeRenderersOptions,
  },
}
