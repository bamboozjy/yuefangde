// pages/news/news.js
const util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  write(e){
    var id=e.currentTarget.dataset.id;
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({//模块管理 》根据分类获取文章列表
      url: util.baseUrl() + '/home/ceefax/getarticle',
      method: 'POST',
      data: {
        "shop_id": "16",
        "ceefax_id": "0"
      },
      success: function (res) {
        console.log(res.data.result)
        var data = res.data.result;
        data.map(function(v,i){
          if (v.article_id==options.id){
            v.create_time=v.create_time.substr(0, 10)
            that.setData({
              msg:v
            })
          }
        })
        
      }
    })

    // wx.request({//模块管理 》评论文章
    //   url: util.baseUrl() + '/home/articlecomment/savecomment',
    //   method: 'POST',
    //   data: {
    //     "shop_id": "16",
    //     "article_id": "16",
    //     "openid": "ocNUh0cHw46AzK8M6rex76BTEJSc",
    //     "comment_content": "测试评论了"
    //   },
    //   success: function (res) {
    //     console.log(res.data.result)
    //     var data = res.data.result;
    //     // data.map(function (v, i) {
    //     //   if (v.article_id == options.id) {
    //     //     v.create_time = v.create_time.substr(0, 10)
    //     //     that.setData({
    //     //       msg: v
    //     //     })
    //     //   }
    //     // })

    //   }
    // })
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