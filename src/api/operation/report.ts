// 运维报告接口
import { get } from '@/lib/request'
import type { ReportDataType } from '@/types/api'
import type { ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/report'

/**
 * @description 查询运维报告数据
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {string} params.startTime 开始时间
 * @param {string} params.endTime 结束时间
 * @returns {Promise<ResponseType<ReportDataType>>}
 * */
export function getReportData(params: {
  stationId: string
  startTime: string
  endTime: string
}): Promise<ResponseType<ReportDataType>> {
  return get(`${apiPrefix}/data`, params)
}
