// 运维图片上传

import { post } from '@/lib/request'
import type { TaskFileType } from '@/types/api'
import type { ResponseType } from 'types/request'
const apiPrefix = '/api/operator/operation/taskFile'

/**
 * @description 上传运维图片
 * @param {FormData} params
 * @param {File} params.file 图片文件
 * @returns {Promise<ResponseType<TaskFileType>>}
 * */
export function uploadFile(params: any): Promise<ResponseType<TaskFileType>> {
  return post(`${apiPrefix}/upload`, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
}

/**
 * @description 删除运维图片
 * @param {object} params
 * @param {string} params.id 图片id
 * @returns {Promise<ResponseType<null>>}
 * */
export function deleteFile(params: { id: string }): Promise<ResponseType<null>> {
  return post(`${apiPrefix}/remove`, params)
}

/**
 * @description 批量上传运维图片
 * @param {FormData} params
 * @param {File} params.files 图片文件
 * @returns {Promise<ResponseType<TaskFileType[]>>}
 * */
export function batchUploadFile(params: any): Promise<ResponseType<TaskFileType[]>> {
  return post(`${apiPrefix}/batchUpload`, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
}
