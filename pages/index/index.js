//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    dis: '微信小地图体验版',
    userInfo: {},
    appInfo: {
      logoUrl: '../../image/地图_5.png',
    }
  },
  // 用户点击 地图图标触发函数
  bindViewTap: function () {
    //触发 调转到location
    wx.navigateTo({
      url: '../location/location'
    })
  },
  onLoad: function () {
    console.log('首页已经加载了')
    var that = this
    that.setData({
      appInfo: this.data.appInfo
    })
  }
})
