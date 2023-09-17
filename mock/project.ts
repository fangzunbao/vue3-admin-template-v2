import Mock from 'mockjs'
import qs from 'query-string'

const { Random } = Mock

// 获取项目列表信息
const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'number|2-3': /[0-9]/,
      'name|4-8': /[A-Z]/,
      'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
      'count|2-3': /[0-9]/,
      'status|1': ['online', 'offline'],
      'filterType|1': ['artificial', 'rules'],
      createdTime: Random.datetime(),
    },
  ],
})

export default [
  {
    url: '/mock-api/project/list', //请求地址
    method: 'get', //请求方式
    response: ({ query }) => {
      const { current = 1, pageSize = 10 } = query
      const p = current as number
      const ps = pageSize as number
      return {
        code: 200,
        data: { list: data.list.slice((p - 1) * ps, p * ps), total: 55 },
      }
    },
  },
]
