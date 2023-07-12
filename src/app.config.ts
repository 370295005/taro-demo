const config = defineAppConfig({
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#409EFF',
    navigationBarTitleText: '污染源智慧运维平台',
    navigationBarTextStyle: 'white'
  },
  pages: [
    'pages/login/login',
    'pages/station/station',
    'pages/alarm/alarm',
    'pages/operation/operation',
    'pages/mine/mine'
  ],
  tabBar: {
    color: '#666666',
    selectedColor: '#409EFF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        iconPath: 'assets/images/station.png',
        selectedIconPath: 'assets/images/station-active.png',
        pagePath: 'pages/station/station',
        text: '站点'
      },
      {
        iconPath: 'assets/images/alarm.png',
        selectedIconPath: 'assets/images/alarm-active.png',
        pagePath: 'pages/alarm/alarm',
        text: '告警'
      },
      {
        iconPath: 'assets/images/operation.png',
        selectedIconPath: 'assets/images/operation-active.png',
        pagePath: 'pages/operation/operation',
        text: '运维'
      },
      {
        iconPath: 'assets/images/mine.png',
        selectedIconPath: 'assets/images/mine-active.png',
        pagePath: 'pages/mine/mine',
        text: '我的'
      }
    ]
  }
})

export default config
