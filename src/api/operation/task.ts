// 运维任务
import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { TaskListType, TaskStatusType } from '@/types/api'
const apiPrefix = '/api/operator/operation/task'

/**
 * @description 增加运维任务
 * @param {object} params
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.stationId 站点id
 * @param {string} params.name 任务名称
 * @param {string} params.type 任务类别
 * @param {string} params.deadline 截止时间
 * @returns {Promise<ResponseType<null>>}
 * */

export function addTask(params: {
  enterpriseId: string
  stationId: string
  name: string
  type: string
  deadline: string
}): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 分页查询任务
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.name 任务名称
 * @param {string} params.enterpriseId 企业id
 * @param {string} params.stationId 站点id
 * @param {TaskStatusType} params.status 完成情况
 * @param {string} params.type 任务类别id
 * @param {string} params.startFinishTime 开始完成时间
 * @param {string} params.endFinishTime 结束完成时间
 * @returns {Promise<ResponseType<TaskListType>>}
 * */

export function getTaskList(params: object): Promise<ResponseType<TaskListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 删除运维任务
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteTask(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}
