// 后台类接口
import { get, post } from '@/lib/request'
import { type ResponseType } from 'types/request'
import { type UserListType, type UserType, type EditUserType } from '@/types/api'
const apiPrefix = '/api/operator/background/user'

/**
 * @description 分页查询用户
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.keyword 搜索关键词
 * @returns {Promise<ResponseType<UserListType>>}
 * */
export function getUserList(params: object): Promise<ResponseType<UserListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 查询全部用户
 * @param {object} params
 * @param {string} params.keyword 搜索关键词
 * @returns {Promise<ResponseType<UserType[]>>}
 * */
export function getUserListAll(params: object = {}): Promise<ResponseType<UserType[]>> {
  return get(`${apiPrefix}/list`, params)
}

/**
 * @description 添加用户
 * @param {EditUserType} params
 * @returns {Promise<ResponseType<null>>}
 * */
export function addUser(params: EditUserType): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 修改用户
 * @param {EditUserType} params
 * @returns {Promise<ResponseType<null>>}
 * */
export function editUser(params: EditUserType): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 删除用户
 * @param {object} params
 * @param {string} params.id 用户id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteUser(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 根据id查询用户
 * @param {object} params
 * @param {string} params.id 用户id
 * @returns {Promise<ResponseType<any>>}
 * */
export function getUserById(params: { id: string }): Promise<ResponseType<any>> {
  return get(`${apiPrefix}/detail`, params)
}
