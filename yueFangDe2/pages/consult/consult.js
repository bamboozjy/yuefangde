// pages/consult/consult.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: util.baseUrl() +'/home/service/getservice',
      method:'POST',
      data: {
        "shop_id": "16",
      },
      success: function (res) {
        // console.log(res.data.result)
        var d = res.data.result;
        that.setData({'kefu':d})
      }
    })
  },
  wxkf(){
    if (this.data.kefu.url!=null){
      this.setData({code:true})
    }else{
      wx.showToast({
        title: '暂未开通',
        icon: 'none',
        duration: 1000
      })
    }
  },
  clicks() {
    this.setData({ code: false })
  },
  kfdh() {
    var m = this.data.kefu.mobile
    if (m != null) {
      wx.makePhoneCall({
        phoneNumber:m  
      })
    } else {
      wx.showToast({
        title: '暂未开通',
        icon: 'none',
        duration: 1000
      })
    }
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