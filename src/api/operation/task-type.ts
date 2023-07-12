// 任务类别相关接口

import { get, post } from '@/lib/request'
import { type ResponseType } from 'types/request'
import { type TaskTypeType, type TaskTypeListType } from '@/types/api'
const apiPrefix = '/api/operator/operation/taskType'

/**
 * @description 查询任务类别列表
 * @returns {Promise<ResponseType<TaskTypeType[]>>}
 * */
export function getTaskTypeListAll(): Promise<ResponseType<TaskTypeType[]>> {
  return get(`${apiPrefix}/list`)
}

/**
 * @description 分页查询任务类别列表
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @returns {Promise<ResponseType<TaskTypeListType>>}
 * */
export function getTaskTypeList(params: { pageNo: number; pageSize: number }): Promise<ResponseType<TaskTypeListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 添加任务类别
 * @param {object} params
 * @param {string} params.name 任务名称
 * @returns {Promise<ResponseType<null>>}
 * */
export function addTaskType(params: { name: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 修改任务类别
 * @param {object} params
 * @param {string} params.id 任务id
 * @param {string} params.name 任务名称
 * @returns {Promise<ResponseType<null>>}
 * */
export function editTaskType(params: { id: string; name: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 删除任务类别
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteTaskType(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

