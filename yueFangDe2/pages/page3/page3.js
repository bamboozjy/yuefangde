//index.js
//获取应用实例
const app = getApp()
//   "pages/index/index",//首页
//   "pages/logs/logs",//无
//   "pages/consult/consult",//私募咨询
//   "pages/publish/publish",//人才招聘（需求发布）
//   "pages/recruitmess/recruitmess",//招聘信息
//   "pages/train/train",//企业培训
//   "pages/regist/regist",// 工商注册
//   "pages/change/change",//重大事项变更
//   "pages/record/record", // 登记备案
//   "pages/recordfirst/recordfirst",// 首次登记备案
//   "pages/sell/sell", //出让方
//   "pages/recruit/recruit", //招聘方
//   "pages/merge/merge", // 并购方
//   "pages/person/person", //人才方 
//   "pages/design/design",//基金产品设计
//   "pages/group/group", //立即入群
//   "pages/message/message", // 填写信息
//   "pages/detail/detail",//会议详情
//   "pages/financial/financial", //金融圈群
//   "pages/hightrain/hightrain", //高端培训
//   "pages/meeting/meeting", //近期会议
//   "pages/outsource/outsource" // 运营外包
// "pages/index/index",
//   "pages/logs/logs",
//   "pages/consult/consult",
//   "pages/publish/publish",
//   "pages/recruitmess/recruitmess",
//   "pages/train/train",
//   "pages/regist/regist",
//   "pages/change/change",
//   "pages/record/record",
//   "pages/recordfirst/recordfirst",
//   "pages/sell/sell",
//   "pages/recruit/recruit",
//   "pages/merge/merge",
//   "pages/person/person",
//   "pages/design/design",
//   "pages/group/group",
//   "pages/message/message",
//   "pages/detail/detail",
//   "pages/financial/financial",
//   "pages/hightrain/hightrain",
//   "pages/meeting/meeting",
//   "pages/outsource/outsource"

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // bindViewTap1: function () {
  //   wx.navigateTo({
  //     url: '../page1/page1'
  //   })
  // },
  // bindViewTap2: function () {
  //   wx.navigateTo({
  //     url: '../page2/page2'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
      //   }
      // })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
