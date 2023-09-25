export interface JsBarcodeOptions {
  /**
   * 条形码的格式
   */
  format?: string
  /**
   * 条形码的值
   */
  text?: string
  /**
   * 条形码的宽度
   */
  width?: number
  /**
   * 条形码的宽度
   */
  height?: number
  /**
   * 是否显示文字提示
   */
  displayValue?: boolean
  /**
   * 文字显示的字体参数
   */
  fontOptions?: string
  /**
   * 文字显示的字体
   */
  font?: string
  /**
   * 文字水平位置
   */
  textAlign?: string
  /**
   *  文字位置
   */
  textPosition?: string
  /**
   *  文字的外边距
   */
  textMargin?: number
  /**
   * 文字大小
   */
  fontSize?: number
  /**
   * 背景颜色
   */
  background?: string
  /**
   * 线条颜色
   */
  lineColor?: string
  /**
   * 条形码的外边距
   */
  margin?: number
  /**
   * 条形码的上外边距
   */
  marginTop?: number
  /**
   * 条形码的下外边距
   */
  marginBottom?: number
  /**
   * 条形码的左外边距
   */
  marginLeft?: number
  /**
   * 条形码的右外边距
   */
  marginRight?: number
  /**
   * 是否平滑
   */
  flat?: boolean
  /**
   * 回调函数
   */
  valid?: (valid: any) => void
}
