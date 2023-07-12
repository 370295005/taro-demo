// 监测数据接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/data'

/**
 * @description 分页查询实时数据
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getRealTimeData(params: any) {
  return get(`${apiPrefix}/dataRealtime/page`, params)
}

/**
 * @description 查询数据表头
 * @param {object} params
 * @param {string} params.stationId 站点id
 * */
export function getTableHeader(params: { stationId: string }) {
  return get(`${apiPrefix}/header`, params)
}

/**
 * @description 查询实时数据列表用于导出数据
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getRealTimeDataList(params: any) {
  return get(`${apiPrefix}/dataRealtime/list`, params)
}

/**
 * @description 分页查询分钟数据
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getMinuteData(params: any) {
  return get(`${apiPrefix}/dataMinute/page`, params)
}

/**
 * @description 查询分钟数据列表用于导出数据
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getMinuteDataList(params: any) {
  return get(`${apiPrefix}/dataMinute/list`, params)
}

/**
 * @description 分页查询小时数据
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getHourData(params: any) {
  return get(`${apiPrefix}/dataHour/page`, params)
}

/**
 * @description 查询小时数据列表用于导出数据
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getHourDataList(params: any) {
  return get(`${apiPrefix}/dataHour/list`, params)
}

/**
 * @description 分页查询日数据
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getDayData(params: any) {
  return get(`${apiPrefix}/dataDay/page`, params)
}

/**
 * @description 查询日数据列表用于导出数据
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getDayDataList(params: any) {
  return get(`${apiPrefix}/dataDay/list`, params)
}
