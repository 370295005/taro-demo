// 配件更换接口
import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { AccessoryTaskType } from '@/types/api'
const apiPrefix = '/api/operator/operation/taskAccessory'

/**
 * @description 提交配件更换任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {{accessory:string,number:number,reason:number,deviceId:string}[]} params.taskAccessoryList 任务配件更换任务项表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function submitAccessoryTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存配件更换任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {{accessory:string,number:number,reason:number,deviceId:string}[]} params.taskAccessoryList 任务配件更换任务项表
 * @param {TaskFileType[]} params.taskFileList 图片列表
 * @returns {Promise<ResponseType<null>>}
 * */

export function saveAccessoryTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询配件更换任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<AccessoryTaskType>>}
 * */

export function getAccessoryTaskDetail(params: object): Promise<ResponseType<AccessoryTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
