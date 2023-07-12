<template>
  <view class="station-page">
    <view class="search-container">
      <nut-searchbar v-model="searchValue" background="#409EFF" placeholder="站点名称、企业名称、MN号"></nut-searchbar>
    </view>
    <view class="content-container"></view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getStationList } from '@/api/station'
const searchValue = ref('')
const initStationList = async () => {
  // const res = await getStationList()
}
</script>

<style lang="less">
.station-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
