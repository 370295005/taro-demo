<template>
  <view class="login-page">
    <view class="title-container">
      <img class="login-title" :src="LoginTitle" alt="智慧运维" />
    </view>
    <view class="input-container">
      <view class="item">
        <view class="label">
          <image class="icon-phone" :src="IconPhone" />
          <text class="text">手机号</text>
        </view>
        <view class="input">
          <nut-input type="text" v-model="form.phone"></nut-input>
        </view>
      </view>
      <view class="item">
        <view class="label">
          <image class="icon-phone" :src="IconPassword" />
          <text class="text">密码</text>
        </view>
        <view class="input">
          <!-- 微信小程序无法动态修改input的type -->
          <template v-if="!passwordVisible">
            <nut-input type="password" v-model="form.password" :clearable="true">
              <template #right>
                <img
                  v-show="!!form.password"
                  :class="passwordVisible ? 'icon-visible' : 'icon-invisible'"
                  :src="passwordVisible ? IconInvisible : IconVisible"
                  @tap="toggleVisible"
                />
              </template>
            </nut-input>
          </template>
          <template v-else>
            <nut-input type="text" v-model="form.password" :clearable="true">
              <template #right>
                <img
                  v-show="!!form.password"
                  :class="passwordVisible ? 'icon-visible' : 'icon-invisible'"
                  :src="passwordVisible ? IconInvisible : IconVisible"
                  @tap="toggleVisible"
                />
              </template>
            </nut-input>
          </template>
        </view>
      </view>
      <view class="button-container">
        <nut-button block color="#409EFC" @tap="login">登录</nut-button>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import LoginTitle from '@/assets/images/login-title.png'
import IconPhone from '@/assets/images/icon-phone.png'
import IconPassword from '@/assets/images/icon-password.png'
import IconInvisible from '@/assets/images/icon-invisible.png'
import IconVisible from '@/assets/images/icon-visible.png'

// 密码是否可见
const passwordVisible = ref(false)
const form = ref({
  phone: '',
  password: ''
})

const toggleVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
const login = () => {
  Taro.switchTab({
    url: '/pages/station/station'
  })
}
</script>

<style lang="less">
@import '@/assets/style/style.less';
.login-page {
  .bg();
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/login-background.png');
  .title-container {
    position: relative;
    top: 161px;
    .login-title {
      width: 196px;
      height: 47px;
      margin: 0 auto;
      display: block;
    }
  }
  .input-container {
    .bg();
    width: 675px;
    height: 690px;
    margin: 275px auto 0;
    padding: 67px 50px;
    background-image: url('../../assets/images/input-background.png');

    .item {
      .label {
        .flex-box(flex-start,center);
        .icon-phone {
          width: 36px;
          height: 36px;
          margin-right: 11px;
        }
        .text {
          height: 28rpx;
          font-size: 28px;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
        }
      }
      .input {
        margin-top: 10px;
        color: #486eef;
        .nut-input {
          background-color: transparent;
        }
        .nut-input--border {
          border-color: rgba(72, 110, 239, 0.5);
        }
        .nut-input-clear {
          color: #409efc;
        }
        .icon-visible {
          width: 36px;
          height: 20px;
        }
        .icon-invisible {
          width: 36px;
          height: 24px;
        }
      }
      &:nth-child(2) {
        margin-top: 55px;
      }
    }
    .button-container {
      margin-top: 106px;
    }
  }
}
</style>
