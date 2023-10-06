import Mock from 'mockjs'

// 获取列表信息
const data = Mock.mock({
  'list|10': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      title: '@ctitle',
      content: '@cparagraph',
      createdTime: '@datetime',
      updatedTime: '@datetime',
      'status|1': ['published', 'draft'],
      author: '@cname',
      pageviews: '@integer(300, 5000)',
      image: '@image',
    },
  ],
})

export default [
  {
    url: '/mock-api/file/excel', //请求地址
    method: 'get', //请求方式
    response: () => {
      return {
        code: 200,
        data,
      }
    },
  },
]
