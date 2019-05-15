// pages/usecase/makeSopView/makeSopView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sopStepList:[]
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

  },

  formSubmit(e) {
    const self = this
    self.setData({
      loading: true
    })
    var username = e.detail.value.username
    var passwordToken = e.detail.value.passwordToken
    wx.request({
      url: `http://user.debugya.cn:30080/UserController/login`,
      method: 'post',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "name": username,
        "passwordToken": passwordToken
      },
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            mask: true,
            duration,
          })
          self.setData({
            loading: false
          })
          console.log('request success', result)
        } else {
          wx.showToast({
            title: '登陆失败'
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
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})