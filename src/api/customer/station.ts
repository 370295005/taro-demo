import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { StationListType, StationType, StationStatusType, StationTreeType } from '@/types/api'
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
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 添加站点
 * @param {object} params
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.name 站点名称
 * @param {string} params.mn 站点mn
 * @param {string} params.type 站点类型
 * @param {number} params.longitude 经度
 * @param {number} params.latitude 纬度
 * @param {number} [params.operator] 运维人员ID
 * @returns {Promise<ResponseType<null>>}
 * */
export function addStation(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 修改站点
 * @param {object} params
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.name 站点名称
 * @param {string} params.mn 站点mn
 * @param {string} params.type 站点类型
 * @param {number} params.longitude 经度
 * @param {number} params.latitude 纬度
 * @param {number} [params.operator] 运维人员ID
 * @returns {Promise<ResponseType<null>>}
 * */
export function editStation(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 删除站点
 * @param {object} params
 * @param {string} params.id 站点id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteStation(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 根据id查询站点详情
 * @param {object} params
 * @param {string} params.id 站点id
 * @returns {Promise<ResponseType<StationType>>}
 * */
export function getStationById(params: { id: string }): Promise<ResponseType<StationType>> {
  return get(`${apiPrefix}/detail`, params)
}

/**
 * @description 查询站点列表
 * @returns {Promise<ResponseType<StationType[]>>}
 * */
export function getStationListAll(): Promise<ResponseType<StationType[]>> {
  return get(`${apiPrefix}/list`)
}

/**
 * @description 查询用户能看的所有企业和站点
 * @param {object} params
 * @param {number | undefined} params.status
 * @returns {Promise<ResponseType<StationTreeType[]>>}
 * */
export function getListTreeByUser(
  params: { status: number | undefined } = { status: undefined }
): Promise<ResponseType<StationTreeType[]>> {
  return get(`${apiPrefix}/listTreeByLoginUser`, params)
}

/**
 * @description 查询登录用户能看到的所有站点
 * @returns {Promise<ResponseType<StationType[]>>}
 * */
export function getStationListByUser(): Promise<ResponseType<StationType[]>> {
  return get(`${apiPrefix}/listByLoginUser`)
}

/**
 * @description 查询登录用户能看到的所有站点的状态和数量
 * @returns {Promise<ResponseType<StationStatusType>>}
 * */
export function getStationCountByUser(): Promise<ResponseType<StationStatusType>> {
  return get(`${apiPrefix}/countByLoginUser`)
}
