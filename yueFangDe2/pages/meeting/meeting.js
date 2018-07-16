// pages/meeting/meeting.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:null
  },
  enlist(e) {
    
    wx.navigateTo({
      url: '/pages/message/message?id=' + e.currentTarget.dataset.id,
    })
  },
  detail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.acate_id)
    var that=this;
    wx.setNavigationBarTitle({
      title: '活动列表'
    })
    wx.request({//活动管理 》获取全部活动/或根据条件获取活动
      url: util.baseUrl() + '/home/activity/getlist',
      method: 'POST',
      data: {
        "shop_id": 16,
        "acate_id": options.acate_id
      },
      success: function (res) {
        console.log(res.data)
        var d = res.data.result;
        if (d!=null){
          d.map(function(v,i){
            // console.log(v+'---'+i)
            v.activity_content = v.activity_content.replace('<p>', '')
            v.activity_content = v.activity_content.replace('</p>','')
          })
        }
        console.log(d)

        that.setData({
          list:d,
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