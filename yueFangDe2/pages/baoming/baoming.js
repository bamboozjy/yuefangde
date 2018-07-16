// pages/baoming/baoming.js
const util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    price:0,
    total:0,
    show:true,
    act:null
  },
  primary(_payInfo, success, fail) {
    var that=this;
    var datas=this.data.con
    wx.request({//活动订单 》创建活动订单(备注:活动字段,前端需进行验证,后台不验证)
      url: util.baseUrl() + '/home/activityorder/createorder',
      method: 'POST',
      data: {
        "shop_id": 16,
        "openid": app.globalData.openid,
        "aorder_discount": 0,
        "activity_id": datas.activity_id,
        "activity_name": datas.activity_name,
        "activity_is_spec": datas.activity_is_spec,
        "acten_value":null,
        "activity_info": [
          {
            "activity_id": datas.activity_id,
            "activity_name": datas.activity_name,
            "activity_price": datas.activity_price,
            "activity_num": that.data.num,
            "adetail_activity_desc": datas.activity_content
          }
        ],
        "enroll": that.data.enroll
      },
      success: function (res) {
        console.log(res.data.result)
        wx.request({//活动订单 》发起微信支付请求
          url: util.baseUrl() + '/home/activityorder/sendwxpay',
          method: 'POST',
          data: {
            "aorder_code": res.data.result,
            "shop_id": 16,
            "openid": app.globalData.openid,
            "aorder_amount_real": that.data.total
          },
          success: function (res) {
            console.log(res.data.result)
            var data = res.data.result
            if (data!=null){
              wx.requestPayment({
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': data.package,
                'signType': 'MD5',
                'paySign': data.paySign,
                'success': function (res) {
                  wx.showToast({
                    title: '支付成功',
                    icon: 'none',
                    duration: 1000
                  })
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                },
                'fail': function (res) {
                  wx.showToast({
                    title: '支付失败，请重新支付',
                    icon: 'none',
                    duration: 1000
                  })
                }
              })
            }

          }
        })

      }
    })
    

  },
  reduce(){
    if (this.data.num==1){
      wx.showToast({
        title: '已经为最小值',
        icon: 'none',
        duration: 1000
      })
    }else{
      var num = this.data.num-1
      var t=this.data.price*num
      this.setData({
        num: num,
        total:t
      })
    }
  },
  add(){
    var num = this.data.num+1
    var t = this.data.price * num
    this.setData({
      num: num,
      total: t
    })
  },
  spec_reduce(e) {
    var that=this;
    console.log(e.currentTarget.dataset.id)
    var g=this.data.group;
    var p=0;
    var num = 1;
    g.map(function(v,i){
      if (v.asm_id == e.currentTarget.dataset.id){
        if (v.num == 1) {
          wx.showToast({
            title: '已经为最小值',
            icon: 'none',
            duration: 1000
          })
        } else {
          num = v.num - 1
          console.log(num)
          v.total = v.asm_price * num
          v.num = num;
          p = v.total;
          that.setData({
            total: p,
            num:num,
            act: v.asm_id
          })
        } 
      }
    })
    that.setData({
      group: g
    })

    
  },
  spec_add(e){
    var that = this;
    console.log(e.currentTarget.dataset.id)
    var g = this.data.group;
    var p = 0;
    var num=1;
    g.map(function (v, i) {
      if (v.asm_id == e.currentTarget.dataset.id) {
          num = v.num + 1
          console.log(num)
          v.total = v.asm_price * num
          v.num=num;
          p = v.total;
          that.setData({
            act: v.asm_id,
            num: num
          })
      }
    })
    that.setData({
      group: g,
      total: p
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var code=app.globalData.code
    this.setData({code:code})
    var that = this;
    console.log(options)
    wx.request({//活动管理 》获取活动详情
      url: util.baseUrl() + '/home/activity/getactivityinfo',
      method: 'POST',
      data: {
        "activity_id": options.id
      },
      success: function (res) {
        console.log(res.data)  
        var group_spec = res.data.result.group_spec;
        if (group_spec) {
          group_spec.map(function(v,i){
            v.num=1;
            v.total = v.asm_price
          })
          console.log(group_spec)  
          that.setData({
            show:false,
            con: res.data.result.activity,
            group: group_spec,
            enroll: res.data.result.enroll,
            time: res.data.result.activity.activity_start.substr(0, 10)
          })
        } else{
          that.setData({
            show: true,
            con: res.data.result.activity,
            price: res.data.result.activity.activity_price,
            total: res.data.result.activity.activity_price,
            enroll: res.data.result.enroll,
            time: res.data.result.activity.activity_start.substr(0, 10)
          })
        }
        
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