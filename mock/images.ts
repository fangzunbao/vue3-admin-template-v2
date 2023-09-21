import Mock from 'mockjs'

const website = 'https://www.getphotoblanket.com'
const COLORS = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399']

const getList = ({ page, pageSize }) => {
  const url = `${website}/products.json?page=${page}&limit=${pageSize}`
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.products)
    .then((res) => {
      return res.map((item: any) => {
        return {
          id: randomID(),
          star: false,
          price: item.variants[0].price,
          src: {
            original: item.images[0].src,
          },
          backgroundColor: randomColor(),
          name: item.title,
        }
      })
    })
}

export function randomID(length = 6) {
  return Number(
    Math.random().toString().substr(3, length) + Date.now(),
  ).toString(36)
}

function getRandomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomColor() {
  return COLORS[getRandomNum(0, 4)]
}

export default [
  {
    url: '/mock-api/images/list', //请求地址
    method: 'get', //请求方式
    response: ({ query }) => {
      const { current = 1, pageSize = 10 } = query
      const p = current as number
      const ps = pageSize as number
      const data = getList({ page: p, pageSize: ps })
      return {
        code: 200,
        data,
      }
    },
  },
]
