import Taro from '@tarojs/taro'
import { ResponseType } from 'types/request'
const env = process.env.NODE_ENV
const TIME_OUT = 10 * 1000
const BASE_URL = env === 'development' ? '' : ''
const token = Taro.getStorageSync('token')
const request = (params: Taro.request.Option): Promise<ResponseType<any>> => {
  return new Promise((resolve, reject) => {
    const { url, data, method = 'GET', header } = params
    const contentType = 'application/json;charset=UTF-8'
    const option = {
      url: BASE_URL + url, //地址
      data, //传参
      method, //请求方式
      timeout: TIME_OUT, // 超时时间
      header: {
        //请求头
        'content-type': contentType,
        Token: token || '',
        ...header
      },
      dataType: 'json',
      success: (res: Taro.request.SuccessCallbackResult<ResponseType<any>>): void => {
        if (res?.data?.code !== 0) {
          Taro.showToast({
            icon: res?.data?.msg?.length > 7 ? 'error' : 'none',
            title: res?.data?.msg,
            mask: true
          })
        }
        resolve(res?.data)
      },
      fail: (err: TaroGeneral.CallbackResult): void => {
        reject(err)
      }
    }
    Taro.request(option)
  })
}

export default request
