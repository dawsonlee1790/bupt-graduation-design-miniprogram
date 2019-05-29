// pages/usecase/HandleExceptionPlanView/HandleExceptionPlanView.js

const duration = 2000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planList: []
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
    const self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://localhost:8080/HandleExceptionController`,
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
            title: '服务器错误',
            icon: 'none',
            duration
          })
          self.setData({
            loading: false
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
        self.setData({
          loading: false
        })
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