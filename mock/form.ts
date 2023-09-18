export default [
  {
    url: '/mock-api/form/create', //请求地址
    method: 'post', //请求方式
    response: () => {
      return {
        code: 200,
      }
    },
  },
]
