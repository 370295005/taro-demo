/*
 * @Author: wanghaowei
 * @Date: 2023-03-31 10:28:44
 * @Last Modified by: wanghaowei
 * @Last Modified time: 2023-07-11 15:55:56
 */
export interface ResponseType<T> {
  code: number
  msg: string
  data: T
}
