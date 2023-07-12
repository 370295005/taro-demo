// 角色类接口
import { get, post } from '@/lib/request'
import { type ResponseType } from 'types/request'
import { type MenuType, type RoleListType, type RoleType } from '@/types/api'
const apiPrefix = '/api/operator/background/role'

/**
 * @description 根据id查询角色菜单
 * @param {object} params
 * @param {string} params.id 角色id
 *
 */
export function getMenuById(params: object): Promise<ResponseType<{ menuIds: string[]; userIds: string[] }>> {
  return get(`${apiPrefix}/getMenuById`, params)
}

/**
 * @description 根据id查询角色用户
 * @param {object} params
 * @param {string} params.id 角色id
 *
 */
export function getUserById(params: object): Promise<ResponseType<{ userIds: string[] }>> {
  return get(`${apiPrefix}/getUserById`, params)
}

/**
 * @description 分页查询角色列表
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} [params.keyword] 搜索关键字
 */
export function getRoleList(params: object): Promise<ResponseType<RoleListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 增加角色
 * @param {object} params
 * @param {string} params.name 角色名称
 * @param {Array} [params.menuIds] 菜单数组
 * */
export function addRole(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 删除角色
 * @param {object} params
 * @param {string} params.id 角色id
 * */
export function deleteRole(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 修改角色用户
 * @param {object} params
 * @param {string} params.id 角色id
 * @param {string[]} params.userIds 用户数组
 * */
export function editRoleUser(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/editUser`, params)
}

/**
 * @description 修改角色
 * @param {object} params
 * @param {string} params.id 角色id
 * @param {string[]} params.menuIds 权限列表
 * */
export function editRole(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 查询所有菜单
 * */
export function getMenuListAll(): Promise<ResponseType<MenuType[]>> {
  return get(`${apiPrefix}/listAllMenu`)
}

/**
 * @description 查询所有角色
 * */
export function getRoleListAll(): Promise<ResponseType<RoleType[]>> {
  return get(`${apiPrefix}/list`)
}
