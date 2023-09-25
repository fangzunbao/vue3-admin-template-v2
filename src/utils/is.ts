const opt = Object.prototype.toString

/**
 * 判断是否为字符串
 * @param obj 传递的参数
 * @returns
 */
export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]'
}
