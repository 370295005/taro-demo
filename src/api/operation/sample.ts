// 标样更换
import { get, post } from '@/lib/request'
import type { SampleTaskType } from '@/types/api'
import type { ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/taskSample'

/**
 * @description 提交标样更换任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskSampleList 标样更换任务项表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitSampleTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存标样更换任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskSampleList 标样更换任务项表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveSampleTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询标样更换任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<SampleTaskType>>}
 * */

export function getSampleTaskDetail(params: object): Promise<ResponseType<SampleTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
