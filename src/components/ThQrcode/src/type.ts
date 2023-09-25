export interface QRcodeOptions {
  /**
   * 二维码的版本
   */
  version?: number
  /**
   * 容错率
   *  默认对内容少的二维码采用高容错率，内容多的二维码采用低容错率
   */
  errorCorrectionLevel?:
    | 'low'
    | 'medium'
    | 'quartile'
    | 'high'
    | 'L'
    | 'M'
    | 'Q'
    | 'H'
  /**
   * 用于遮罩符号的掩码图案
   */
  maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  /**
   * 二维码的外边距
   */
  margin?: number
  /**
   * 二维码的大小
   */
  scale?: number
  /**
   * 是否输出小的二维码
   */
  small?: boolean
  /**
   * 强制输出图像的特定宽度。
   * 如果宽度太小而无法包含二维码，则此选项将被忽略。
   * 优先级高于 scale 。
   */
  width?: number
  /**
   * 二维码在不同场景下的颜色
   */
  color?: {
    dark?: string
    ligth?: string
  }
  /**
   * 在内部用于将汉字转换为其 JIS 值的帮助程序函数。
   * 如果您需要支持汉字模式，请提供此功能。
   * @returns
   */
  toSJISFunc?: () => void
}

/**
 * 二维码LOGO参数
 */
export interface QRcodeLogo {
  /**
   * 路径
   */
  src?: string
  /**
   * LOGO大小
   */
  logoSize?: number
  /**
   * 背景颜色
   */
  bgColor?: string
  /**
   * 边框大小
   */
  borderSize?: number
  /**
   *
   */
  crossOrigin?: string
  /**
   * 边框弧度
   */
  borderRadius?: number
  /**
   * LOGO弧度
   */
  logoRadius?: number
}
