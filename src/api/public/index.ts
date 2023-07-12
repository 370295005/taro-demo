import { type ResponseType } from 'types/request'
import request from '@/lib/request'
import type { LoginType } from 'types/api'

/**
 * @description 用户登录
 * @param {object} params
 * @param {string} params.phone 手机号
 * @param {string} params.password 密码
 * @returns {Promise<ResponseType<LoginType>>}
 */

export function login(params: object): Promise<ResponseType<LoginType>> {
  return request({ url: '/api/operator/login', method: 'POST', data: params })
}

/**
 * @description 用户登出
 * @returns {Promise<ResponseType<null>>}
 * */
export function logout(): Promise<ResponseType<null>> {
  return request({ url: '/api/operator/logout' })
}
