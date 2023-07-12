// 巡检维护接口
import { get, post } from '@/lib/request'
import type { PatrolTaskType, TaskFileType } from '@/types/api'
import type { ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/taskPatrol'

/**
 * @description 提交巡检维护任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {number} params.prepareCheck 维护预备正常
 * @param {string} params.prepareCheckRemark 维护预备备注
 * @param {number} params.auxiliaryCheck 辅助设备正常
 * @param {string} params.auxiliaryCheckRemark 辅助设备备注
 * @param {string} params.sampleCheck 采样系统正常
 * @param {string} params.sampleCheckRemark 辅助设备备注
 * @param {string} params.equipmentCheck 水污染源在线监测仪器正常
 * @param {string} params.equipmentCheckRemark 水污染源在线监测仪器备注
 * @param {string} params.dtEquipmentCheck 数据采集传输系统正常
 * @param {string} params.dtEquipmentCheckRemark 数据采集传输系统备注
 * @param {TaskFileType[]} params.taskFileList
 * @returns {Promise<ResponseType<null>>}
 * */
export function submitPatrolTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/submit`, params)
}

/**
 * @description 保存巡检维护任务
 * @param {object} params
 * @param {string} params.taskId 任务id
 * @param {number} params.prepareCheck 维护预备正常
 * @param {string} params.prepareCheckRemark 维护预备备注
 * @param {number} params.auxiliaryCheck 辅助设备正常
 * @param {string} params.auxiliaryCheckRemark 辅助设备备注
 * @param {string} params.sampleCheck 采样系统正常
 * @param {string} params.sampleCheckRemark 辅助设备备注
 * @param {string} params.equipmentCheck 水污染源在线监测仪器正常
 * @param {string} params.equipmentCheckRemark 水污染源在线监测仪器备注
 * @param {string} params.dtEquipmentCheck 数据采集传输系统正常
 * @param {string} params.dtEquipmentCheckRemark 数据采集传输系统备注
 * @param {TaskFileType[]} params.taskFileList
 * @returns {Promise<ResponseType<null>>}
 * */

export function savePatrolTask(params: object): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/save`, params)
}

/**
 * @description 根据id查询巡检维护任务详情
 * @param {object} params
 * @param {string} params.id 任务id
 * @returns {Promise<ResponseType<PatrolTaskType>>}
 * */

export function getPatrolTaskDetail(params: object): Promise<ResponseType<PatrolTaskType>> {
  return get(`${apiPrefix}/detail`, params)
}
