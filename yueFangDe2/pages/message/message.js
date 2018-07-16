// pages/message/message.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  ipt(e){
    console.log(e.detail.value)
    console.log(e.currentTarget.dataset.id)
    this.data.con.map(function (v, i) {
      if (v.acten_id == e.currentTarget.dataset.id) {
        v.val = e.detail.value
      }
    })
  },
  baoming(){
    var stop = true;
    this.data.con.map(function(v,i){
      if (v.val==null||v.val==''){
        stop=false;
      }
    })
    if (stop == false) {
      wx.showToast({
        title: '每一项都不能为空',
        icon: 'none',
        duration: 1000
      })
    }else{
      console.log(this.data.con)
      wx.navigateTo({
        url: '/pages/baoming/baoming?id='+this.data.id,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
    })
    console.log(options)
    wx.request({//活动管理 》获取活动详情
      url: util.baseUrl() + '/home/activity/getactivityinfo',
      method: 'POST',
      data: {
        "activity_id": options.id
      },
      success: function (res) {
        
        var d = res.data.result.enroll
        d.map(function(v,i){
          v.val=null
        })
        console.log(d) 
        that.setData({
          con: d
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