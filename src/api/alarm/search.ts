// 告警查询接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/alarm/alarmData'
// 离线告警
const offlineApiPrefix = '/api/operator/alarm/alarmOffline'
// 仪器告警
const instrumentApiPrefix = '/api/operator/alarm/alarmInstrument'

/**
 * @description 处理离线告警
 * @param {object} params
 * @param {string} params.id 告警id
 * @param {string} params.remark 备注
 * @param {string} params.recoveryTime 恢复正常时间
 * */
export function saveOfflineAlarm(params: { id: string; remark: string; recoveryTime: string }) {
  return post(`${offlineApiPrefix}/save`, params)
}

/**
 * @description 分页查询离线告警
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getOfflineAlarmList(params: object) {
  return get(`${offlineApiPrefix}/page`, params)
}

/**
 * @description 根据id查询离线告警
 * @param {object} params
 * @param {string} params.id 告警id
 * */
export function getOfflineAlarmDetail(params: { id: string }) {
  return get(`${offlineApiPrefix}/detail`, params)
}

/**
 * @description 处理仪器告警
 * @param {object} params
 * @param {string} params.id 告警id
 * @param {string} params.remark 备注
 * @param {string} params.recoveryTime 恢复正常时间
 * */
export function saveInstrumentAlarm(params: { id: string; remark: string; recoveryTime: string }) {
  return post(`${instrumentApiPrefix}/save`, params)
}

/**
 * @description 分页查询仪器告警
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getInstrumentAlarmList(params: object) {
  return get(`${instrumentApiPrefix}/page`, params)
}

/**
 * @description 根据id查询仪器告警
 * @param {object} params
 * @param {string} params.id 告警id
 * */
export function getInstrumentAlarmDetail(params: { id: string }) {
  return get(`${instrumentApiPrefix}/detail`, params)
}

/**
 * @description 处理告警
 * @param {object} params
 * @param {string} params.id 告警id
 * @param {string} params.remark 备注
 * @param {string} params.recoveryTime 恢复正常时间
 * */
export function saveAlarm(params: { id: string; remark: string; recoveryTime: string }) {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 分页查询告警
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * @param {string} params.type 告警类型 zero constant overproof
 * */
export function getAlarmList(params: any) {
  const { type } = params
  let url = apiPrefix
  type === 'zero'
    ? (url += '/pageZeroData')
    : type === 'constant'
    ? (url += '/pageConstantData')
    : (url += '/pageOverproofData')
  delete params.type
  return get(url, params)
}

/**
 * @description 根据id查询告警
 * @param {object} params
 * @param {string} params.id 告警id
 * */
export function getAlarmDetail(params: { id: string }) {
  return get(`${apiPrefix}/detail`, params)
}
