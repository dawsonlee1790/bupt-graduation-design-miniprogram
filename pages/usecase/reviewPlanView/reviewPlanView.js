// pages/usecase/reviewPlanView/reviewPlanView.js

const duration = 2000;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      method: 'get',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      success(result) {
        if (result.statusCode == 200) {
          self.setData({
            planList: result.data
          })
          console.log('request success', result)
        } else {
          wx.showToast({
            title: '登陆失败',
            icon: 'none',
            duration
          })
          console.log('request fail', result)
        }
      },
      fail({
        errMsg
      }) {
        wx.showToast({
          title: '连接后端服务器失败',
          icon: 'none',
          duration
        })
        console.log('request fail', errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }


})