// 校验接口
import { get, post } from '@/lib/request'
import type { CheckTaskType, TaskFileType } from '@/types/api'
import type { ResponseType } from 'types/request'

const apiPrefix = '/api/operator/operation/taskCheck'

/**
 * @description 提交校验任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskCheckList 校验任务列表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitCheckTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存校验任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskCheckList 校验任务列表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveCheckTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询校验任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<CheckTaskType>>}
 * */

export function getCheckTaskDetail(params: object): Promise<ResponseType<CheckTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
