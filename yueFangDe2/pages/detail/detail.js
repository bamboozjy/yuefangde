// pages/detail/detail.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  primary(e) {
    wx.navigateTo({
      url: '/pages/message/message?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var that=this;
    wx.setNavigationBarTitle({
      title: '活动详情'
    })
    wx.request({//活动管理 》获取活动详情
      url: util.baseUrl() + '/home/activity/getactivityinfo',
      method: 'POST',
      data: {
        "activity_id": options.id
      },
      success: function (res) {
        console.log(res.data.result)
        that.setData({
          con: res.data.result.activity,
          enroll: res.data.result.enroll
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})