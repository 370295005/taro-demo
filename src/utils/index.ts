import Taro from '@tarojs/taro'

// 获取当前url
export const getCurrentPageUrl = () => {
  const pages = Taro.getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const url = currentPage.route
  return url
}

// 跳转至login
export const pageToLogin = () => {
  const path = getCurrentPageUrl() || ''
  Taro.clearStorage()
  if (!path.includes('login')) {
    Taro.reLaunch({
      url: '/pages/login/login'
    })
  }
}
