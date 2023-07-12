// 废液回收接口

import { get, post } from '@/lib/request'
import type { TaskFileType, WasteTaskType } from '@/types/api'
import { type ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/taskWaste'

/**
 * @description 提交废液回收任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {string} params.remark 任务描述
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitWasteTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存废液回收任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {string} params.remark 任务描述
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveWasteTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询废液回收任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<WasteTaskType>>}
 * */

export function getWasteTaskDetail(params: object): Promise<ResponseType<WasteTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
