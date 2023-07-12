// 站点相关接口
import request from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { StationListType, StationType, StationStatusType, StationTreeType } from 'types/api'
const apiPrefix = '/api/operator/customer/station'

/**
 * @description 分页查询站点
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {number} [params.type] 站点类型
 * @param {string} [params.keyword] 搜索关键词
 * @returns {Promise<ResponseType<StationListType>>}
 * */
export function getStationList(params: object): Promise<ResponseType<StationListType>> {
  return request({
    url: `${apiPrefix}/page`,
    method: 'GET',
    data: params
  })
}
