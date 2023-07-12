// 校准接口
import { get, post } from '@/lib/request'
import type { CalibrationTaskType } from '@/types/api'
import type { ResponseType } from 'types/request'

const apiPrefix = '/api/operator/operation/taskCalibration'

/**
 * @description 提交校准任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskCalibrationList 校准任务列表
 * @param {Array<{id:string}>} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitCalibrationTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存校准任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {Array} params.taskCalibrationList 校准任务列表
 * @param {Array<{id:string}>} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveCalibrationTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询校准任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<CalibrationTaskType>>}
 * */

export function getCalibrationTaskDetail(params: object): Promise<ResponseType<CalibrationTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
