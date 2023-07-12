// 自建任务接口

import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { OtherTaskType, TaskFileType } from '@/types/api'
const apiPrefix = '/api/operator/operation/taskOther'

/**
 * @description 提交自建任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {string} params.remark 任务描述
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitOtherTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存自建任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {string} params.remark 任务描述
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveOtherTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询自建任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<OtherTaskType>>}
 * */

export function getOtherTaskDetail(params: object): Promise<ResponseType<OtherTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
