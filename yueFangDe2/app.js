//app.js
const util = require('utils/util.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      
      success: res => {
        var that=this;
        this.globalData.code=res.code
        // console.log(res.code)
        wx.request({//openid登录
          url: util.baseUrl() + '/home/user/getopenid',
          method: 'POST',
          data: {
            "shop_id": 16,
            "code": res.code
          },
          success: function (res) {
            console.log(res.data)
            that.globalData.openid = res.data.result.openid
            console.log(that.globalData.openid)
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // 
    
  },
  globalData: {
    userInfo: null,
    code:null,
    openid:null
  }
})