// 故障检修接口
import { get, post } from '@/lib/request'
import type { FaultTaskType, TaskFileType } from '@/types/api'
import type { ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/taskFault'

/**
 * @description 提交故障检修任务
 * @param {object} params
 * @param {Array} params.taskFaultList 任务id
 * @param {string} params.remark 任务描述
 * @param {string} params.taskId 任务id
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitFaultTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存故障检修任务
 * @param {object} params
 * @param {Array} params.taskFaultList 任务id
 * @param {string} params.remark 任务描述
 * @param {string} params.taskId 任务id
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveFaultTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询故障检修任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<FaultTaskType>>}
 * */

export function getFaultTaskDetail(params: object): Promise<ResponseType<FaultTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
