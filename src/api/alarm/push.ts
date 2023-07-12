// 推送设置接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/alarm/alarmPushConfig'

/**
 * @description 查询推送设置
 * */
export function getPushSetting() {
  return get(`${apiPrefix}/list`)
}

/**
 * @description 保存推送设置
 * @param {Array} params
 * */
export function savePushSetting(
  params: {
    stationId: string
    overproof: boolean
    constant: boolean
    zero: boolean
    offline: boolean
    instrument: boolean
  }[]
) {
  return post(`${apiPrefix}/save`, params)
}
