// 告警设置接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/alarm/alarmConfig'

/**
 * @description 查询站点告警设置
 * @param {object} params
 * @param {string} params.stationId 站点id
 * */
export function getAlarmSetting(params: { stationId: string }) {
  return get(`${apiPrefix}/detail`, params)
}

/**
 * @description 保存站点告警设置
 * @param {object} params
 * @param {boolean} params.offlineEnable 是否开启离线告警
 * @param {number} params.offlineThreshold 离线长达多少小时后告警
 * @param {boolean} params.overproofEnable 是否开启超标告警
 * @param {Array<{factorCode:string,ceilValue:number,floorValue:number,dataTypes:1|2|3|4}>} params.overproofList 超标告警设置 数据类型（1：实时数据，2：分钟数据，3：小时数据，4：日数据）
 * @param {boolean} params.constantEnable 是否开启恒值告警
 * @param {Array<{factorCode:string,dataType:number,threshold:1|2|3|4}>} params.constantList 恒值告警设置 数据类型（1：实时数据，2：分钟数据，3：小时数据）
 * @param {boolean} params.zeroEnable 是否开启零值告警
 * @param {Array<{factorCode:string,dataType:number,threshold:1|2|3|4}>} params.zeroList 零值告警设置 数据类型（1：实时数据，2：分钟数据，3：小时数据）
 * @param {Array<string>} params.stationIds 应用设置到的站点列表
 * */
export function saveAlarmSetting(params: any) {
  return post(`${apiPrefix}/save`, params)
}
