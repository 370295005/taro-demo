import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { EnterpriseListType, EnterpriseType } from '@/types/api'
const apiPrefix = '/api/operator/customer/enterprise'


/**
 * @description 查询所有企业
 * @returns {Promise<ResponseType<EnterpriseType[]>>}
 * */
export function getEnterpriseListAll(): Promise<ResponseType<EnterpriseType[]>> {
  return get(`${apiPrefix}/listAll`)
}

/**
 * @description 分页查询企业
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.keyword 搜索关键词
 * @returns {Promise<ResponseType<EnterpriseListType>>}
 * */
export function getEnterpriseList(params: object): Promise<ResponseType<EnterpriseListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 添加企业
 * @param {object} params
 * @param {string} params.name 企业名称
 * @param {string} params.address 企业地址
 * @param {string} params.linkman 联系人
 * @param {string} params.phone 联系人手机号
 * @returns {Promise<ResponseType<null>>}
 * */
export function addEnterprise(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 修改企业
 * @param {object} params
 * @param {string} params.id 企业id
 * @param {string} params.name 企业名称
 * @param {string} params.address 企业地址
 * @param {string} params.linkman 联系人
 * @param {string} params.phone 联系人手机号
 * @returns {Promise<ResponseType<null>>}
 * */
export function editEnterprise(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 删除企业
 * @param {object} params
 * @param {string} params.id 企业id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteEnterprise(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 查询用户能看到的企业列表
 * @returns {Promise<ResponseType<EnterpriseType[]>>}
 * */
export function getEnterpriseListByUser(): Promise<ResponseType<EnterpriseType[]>> {
  return get(`${apiPrefix}/listByLoginUser`)
}
