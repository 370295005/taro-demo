// 首页接口
import { type ResponseType } from 'types/request'
import { get, post } from '@/lib/request'

const apiPrefix = '/api/operator/home'

/**
 * @description 查询未处理告警
 * */
export function getUnhandledAlarm() {
  return get(`${apiPrefix}/getUnhandledAlarm`)
}

/**
 * @description 查询累计未完成任务
 * */
export function getIncompleteTask() {
  return get(`${apiPrefix}/getIncompleteTask`)
}

/**
 * @description 查询超标报警
 * */
export function getOverproof() {
  return get(`${apiPrefix}/getEnterpriseOverproof`)
}

/**
 * @description 查询即将到期任务
 * */
export function getComingDueTask() {
  return get(`${apiPrefix}/getComingDueTask`)
}

/**
 * @description 查询本周任务和告警概况
 * */
export function getWeekTaskAndAlarm() {
  return get(`${apiPrefix}/countWeekTaskAndAlarm`)
}

/**
 * @description 查询本年超标趋势
 * */
export function getYearOverproof() {
  return get(`${apiPrefix}/countMonthOverproof`)
}

/**
 * @description 查询7日告警数据
 * */
export function getSevenDayAlarm() {
  return get(`${apiPrefix}/countLast7DaysAlarm`)
}

/**
 * @description 查询企业站点统计数据
 * */
export function getStationStatistics() {
  return get(`${apiPrefix}/countEnterpriseStation`)
}

/**
 * @description 查询本年超标企业排行
 * */
export function getOverproofRank() {
  return get(`${apiPrefix}/countEnterpriseOverproof`)
}
