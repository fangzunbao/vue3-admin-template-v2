interface WaterfallOptions {
  el: string
  columns: number
  gap: number
}

let el = null
let oItems: HTMLCollectionOf<HTMLDivElement>
let columns: number
let gap: number
let itemWidth: number
let heightArr: number[] = []

const getMinIndex = function (arr: number[]) {
  return arr.indexOf(Math.min.apply(null, arr))
}

const render = function () {
  let item = null
  let minIndex = -1
  for (let i = 0; i < oItems.length; i++) {
    item = oItems[i]
    item.style.width = itemWidth + 'px'
    if (i < columns) {
      item.style.top = 0 + 'px'
      item.style.left = (itemWidth + gap) * i + 'px'
      heightArr.push(item.offsetHeight)
    } else {
      minIndex = getMinIndex(heightArr)
      item.style.left = oItems[minIndex].offsetLeft + 'px'
      item.style.top = heightArr[minIndex] + gap + 'px'
      heightArr[minIndex] += item.offsetHeight + gap
    }
  }
}

const Waterfall = function (options: WaterfallOptions) {
  // 初始化
  el = document.getElementsByClassName(options.el)[0]
  oItems = el.getElementsByTagName('div')
  columns = options.columns
  gap = options.gap
  itemWidth = ((el as HTMLElement)?.offsetWidth - (columns - 1) * gap) / columns
  render()
}

export default Waterfall
