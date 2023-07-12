// 周期任务设置相关接口

import { get, post } from '@/lib/request'
import type { ResponseType } from 'types/request'
import type { CycleTaskListType, CycleTaskDetailType } from '@/types/api'
const apiPrefix = '/api/operator/operation/taskConfig'

/**
 * @description 分页查询周期任务设置列表
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} [params.name] 任务名称
 * @param {boolean} [params.taskType] 任务类型
 * @param {string} [params.enable] 是否开启
 * @returns {Promise<ResponseType<CycleTaskListType>>}
 * */
export function getCycleTaskList(params: {
  pageNo: number
  pageSize: number
  name?: string
  taskType?: string
  enable?: boolean
}): Promise<ResponseType<CycleTaskListType>> {
  return get(`${apiPrefix}/page`, params)
}

/**
 * @description 根据id查询周期任务配置详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<CycleTaskDetailType>>}
 * */
export function getCycleTaskDetail(params: { id: string }): Promise<ResponseType<CycleTaskDetailType>> {
  return get(`${apiPrefix}/detail`, params)
}

/**
 * @description 添加任务配置
 * @param {object} params
 * @param {string} params.name 任务名称
 * @param {string} params.taskType 任务类型id
 * @param {number} params.taskInterval 两次周期任务实际完成时间间隔不超过的天数
 * @param {boolean} params.enable 任务是否开启
 * @param {string[]} [params.stations] 任务关联的站点id列表
 * @returns {Promise<ResponseType<null>>}
 * */
export function addCycleTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/add`, params)
}

/**
 * @description 切换任务开启状态
 * @param {object} params
 * @param {string} params.id 任务id
 * @param {boolean} params.enable 是否开启
 * @returns {Promise<ResponseType<null>>}
 * */
export function editCycleTaskStatus(params: { id: string; enable: boolean }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/editStatus`, params)
}

/**
 * @description 编辑任务配置
 * @param {object} params
 * @param {string} params.id 任务id
 * @param {string} params.name 任务名称
 * @param {string} params.taskType 任务类型id
 * @param {number} params.taskInterval 两次周期任务实际完成时间间隔不超过的天数
 * @param {boolean} params.enable 任务是否开启
 * @param {string[]} [params.stations] 任务关联的站点id列表
 * @returns {Promise<ResponseType<null>>}
 * */
export function editCycleTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/edit`, params)
}

/**
 * @description 删除任务
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteCycleTask(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}
