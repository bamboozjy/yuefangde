//index.js

//   "pages/index/index",//首页，包括 活动报名，私募咨询
//   "pages/logs/logs",//无
//   "pages/consult/consult",//在线咨询
//   "pages/publish/publish",//人才招聘（需求发布） 
//   "pages/recruitmess/recruitmess",//招聘信息
//   "pages/train/train",//企业培训
//   "pages/hunting/hunting",//高管猎聘
//   "pages/regist/regist",// 工商注册
//   "pages/combine/combine", // 私募并购
//   "pages/change/change",//重大事项变更
//   "pages/record/record", // 登记备案
//   "pages/recordfirst/recordfirst",// 首次登记备案
//   "pages/sell/sell", //出让方
//   "pages/recruit/recruit", //招聘方
//   "pages/merge/merge", // 并购方
//   "pages/person/person", //人才方 
//   "pages/design/design",//基金产品设计
//   "pages/group/group", //立即入群(同金融圈群，没做)
//   "pages/message/message", // 填写信息
//   "pages/detail/detail",//会议详情
//   "pages/financial/financial", //金融圈群---wu
//   "pages/hightrain/hightrain", //高端培训
//   "pages/meeting/meeting", //近期会议
//   "pages/outsource/outsource" // 运营外包
    // "pages/baoming/baoming",//立即报名
    // "pages/news/news"//新闻详情

//获取应用实例
const app = getApp();
const util = require('../../utils/util.js')
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    id:"1",
    imgUrls: [
      'https://caitouxia.oss-cn-hangzhou.aliyuncs.com/caitouxia_shop/media_library/003ce67cca5e3344a2ffffda2f10bed6.png','https://caitouxia.oss-cn-hangzhou.aliyuncs.com/caitouxia_shop/media_library/ab4f16b3e971f3435c62172c7c99c1a2.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    showP:false,
    showNo:false,
    actives:null
  },
  //事件处理函数
  onShareAppMessage() {//分享功能
    // console.log('zhuanfa')
  }, 
  tab(e){
    const { id } = e.currentTarget.dataset
    this.setData({id})

  },
  register(){
    wx.navigateTo({
      url: '/pages/record/record',
    })
  },
  yunying(){
    wx.navigateTo({
      url: '/pages/outsource/outsource',
    })
  },
  gaoguan(){
    wx.navigateTo({
      url: '/pages/hunting/hunting',
    })
  },
  train(){
    wx.navigateTo({
      url: '/pages/train/train',
    })
  },
  zhaopins(){
    wx.navigateTo({
      url: '/pages/recruitmess/recruitmess',
    })
  },
  person(){
    wx.navigateTo({
      url: '/pages/personmsg/personmsg',
    })
  },
  merge(){
    wx.navigateTo({
      url: '/pages/combine/combine',
    })
  },
  group(){
    wx.navigateTo({
      url: '/pages/group/group',
    })
  },
  bijiao() {
    wx.navigateTo({
      url: '/pages/regist/regist',
    })
  },
  recordfirst(){
    wx.navigateTo({
      url: '/pages/recordfirst/recordfirst',
    })
  },
  change(){
    wx.navigateTo({
      url: '/pages/change/change',
    })
  },
  design() {
    wx.navigateTo({
      url: '/pages/design/design',
    })
  },
  detail(e) {
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/meeting/meeting?acate_id=' + e.currentTarget.dataset.id,
    })
  },
  details() {
    wx.navigateTo({
      url: '/pages/hightrain/hightrain',
    })
  }, 
  news(e){
    wx.navigateTo({
      url: '/pages/news/news?id='+e.currentTarget.dataset.id,
    })
  },

  onLoad: function () {
    var that=this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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

    wx.request({//活动管理 》获取分类列表
      url: util.baseUrl() +'/home/activity/getcatelist',
      method:'POST',
      data: {
        shop_id: 16,
      },
      success: function (res) {
        var d = res.data.result;
        if (d.cate_list.length==0){
          that.setData({
            showP:true
          })
        }else{
          that.setData({
            actives: d.cate_list
          })
        }
        

        // console.log(res.data.result.cate_list)
      }
    })
    wx.request({//模块管理 》根据分类获取文章列表
      url: util.baseUrl() + '/home/ceefax/getarticle',
      method: 'POST',
      data: {
        "shop_id": "16",
        "ceefax_id": "0"
      },
      success: function (res) {
        // console.log(res.data.result)
        if (res.data.result!=null){
          var arr = [];
          res.data.result.map(function (v, i) {
            if (i < 6) {
              arr.push(v)
              v.create_time = v.create_time.substr(0, 10)
            }
          })
          that.setData({
            arr: arr
          })
        }else{
          that.setData({
            showNo:true
          })
        }
        
      }
    })
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
