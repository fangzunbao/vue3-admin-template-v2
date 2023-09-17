export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false) setup()
}

export const success = (data: unknown) => {
  return {
    data,
    status: 'success',
    code: 200,
    msg: '请求成功',
  }
}

export const fail = (data: unknown, msg: string, code = 500) => {
  return {
    data,
    status: 'fail',
    code,
    msg,
  }
}
