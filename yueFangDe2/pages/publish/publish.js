// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://caitouxia.oss-cn-hangzhou.aliyuncs.com/caitouxia_shop/media_library/003ce67cca5e3344a2ffffda2f10bed6.png', 'https://caitouxia.oss-cn-hangzhou.aliyuncs.com/caitouxia_shop/media_library/3f56d9a6ce50efb104f25a43400d98a8.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  zhaopin(){
    wx.navigateTo({
      url: '/pages/recruit/recruit',
    })
  },
  person() {
    wx.navigateTo({
      url: '/pages/person/person',
    })
  },
  merge() {
    wx.navigateTo({
      url: '/pages/merge/merge',
    })
  },
  churang() {
    wx.navigateTo({
      url: '/pages/sell/sell',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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