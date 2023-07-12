/**
 * @description 用于分页列表的hooks
 * @param {function} requestFn 请求函数
 * @param {number} page 页数
 * @param {number} size 每页条数
 * @param {boolean} autoRequest 是否自动请求
 * */
import { ref } from 'vue'
import Taro, { useLoad } from '@tarojs/taro'
import { ResponseType } from 'types/request'
export default function useList<T extends { records: any[]; total: string }>(
  requestFn: (page: number, size: number) => Promise<ResponseType<T>>,
  page: number = 1,
  size: number = 20,
  autoRequest: boolean = false
) {
  // 页数
  const pageNo = ref(page)
  // 每页条数
  const pageSize = ref(size)
  // 总共数量
  const total = ref(0)
  // 列表数据
  const listData = ref<Record<string, any>>([])
  // 请求列表
  const getList = async (page: number = pageNo.value, size: number = pageSize.value) => {
    Taro.showLoading({
      title: '加载中'
    })
    try {
      const res = await requestFn(page, size)
      const data = res?.data || []
      listData.value = (data?.records as Record<string, any>[]) || []
      total.value = +data?.total || 0
    } catch (error) {
      console.log(error)
    } finally {
      Taro.hideLoading()
    }
  }
  useLoad(() => {
    if (autoRequest) {
      getList()
    }
  })
  return {
    pageNo,
    pageSize,
    total,
    listData,
    getList
  }
}
