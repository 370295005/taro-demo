// 站点设备接口
import { get, post } from '@/lib/request'
import { type ResponseType } from 'types/request'
import { type DeviceListType, type DeviceType } from '@/types/api'
const apiPrefix = '/api/operator/customer/device'

/**
 * @description 删除站点设备
 * @param {object} params
 * @param {string} params.id 设备id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteDevice(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 增加站点设备
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {string} params.name 设备名称
 * @param {string} [params.model] 设备型号
 * @param {string} [params.manufacturer] 生产厂家
 * @param {string} [params.factoryDate] 生产日期
 * @returns {Promise<ResponseType<null>>}
 * */
export function addDevice(params: {
  stationId: string
  name: string
  model?: string
  manufacturer?: string
  factoryDate?: string
}): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 增加站点设备
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {string} params.name 设备名称
 * @param {string} [params.model] 设备型号
 * @param {string} [params.manufacturer] 生产厂家
 * @param {string} [params.factoryDate] 生产日期
 * @returns {Promise<ResponseType<null>>}
 * */
export function editDevice(params: {
  stationId: string
  name: string
  model?: string
  manufacturer?: string
  factoryDate?: string
}): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 分页查询站点设备
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @returns {Promise<ResponseType<DeviceListType>>}
 * */
export function getDeviceList(params: {
  pageNo: number
  pageSize: number
  stationId: string
}): Promise<ResponseType<DeviceListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 根据站点id查询设备
 * @param {object} params
 * @param {string} params.stationId 站点id
 * @returns {Promise<ResponseType<DeviceType[]>>}
 * */
export function getDeviceListById(params: { stationId: string }): Promise<ResponseType<DeviceType[]>> {
  return get(`${apiPrefix}/listByStationId`, params)
}
