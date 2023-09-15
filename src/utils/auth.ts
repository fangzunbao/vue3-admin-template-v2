const TOKEN_KEY = 'token'

const isLogin = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  return !!token
}

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export { isLogin, getToken, setToken, removeToken }
