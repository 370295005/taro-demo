// 站点监测因子接口
import { get, post } from '@/lib/request'
import { type ResponseType } from 'types/request'
import { type StationFactorListType, type FactorType } from '@/types/api'
const apiPrefix = '/api/operator/customer/stationFactor'
/**
 * @description 删除站点因子
 * @param {object} params
 * @param {string} params.id 因子id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteStationFactor(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 增加站点因子
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {string} param.factorCode 因子编码
 * @returns {Promise<ResponseType<null>>}
 * */

export function addStationFactor(params: {
  stationId: string
  factorCode: string
}): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 分页查询站点因子
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @returns {Promise<ResponseType<StationFactorListType>>}
 * */
export function getStationFactorList(params: {
  pageNo: number
  pageSize: number
  stationId: string
}): Promise<ResponseType<StationFactorListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 查询所有因子
 * @returns {Promise<ResponseType<FactorType[]>>}
 * */
export function getFactorListAll(): Promise<ResponseType<FactorType[]>> {
  return get(`${apiPrefix}/listAllFactor`)
}
