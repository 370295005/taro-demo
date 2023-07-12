// 数据报表接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/data'

/**
 * @description 查询小时数据报表
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * */
export function getHourDataReport(params: any) {
  return get(`${apiPrefix}/dataHour/report`, params)
}
