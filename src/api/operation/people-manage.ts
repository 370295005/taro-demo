// 签到记录接口

import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/operation/signInOut'

/**
 * @description 分页查询签到记录
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.operator 运维人员id
 * @param {string} params.startTime 开始时间 YYYY-MM-DD
 * @param {string} params.endTime 结束时间 YYYY-MM-DD
 * */
export function getSignRecordList(params: any) {
  return get(`${apiPrefix}/pageRecord`, params)
}

/**
 * @description 分页查询工时统计
 * @param {object} params
 * @param {number} params.pageNo 页数
 * @param {number} params.pageSize 每页条数
 * @param {string} params.operator 运维人员id
 * @param {string} params.startTime 开始时间 YYYY-MM-DD
 * @param {string} params.endTime 结束时间 YYYY-MM-DD
 * */
export function getWorkTimeList(params: any) {
  return get(`${apiPrefix}/pageTime`, params)
}