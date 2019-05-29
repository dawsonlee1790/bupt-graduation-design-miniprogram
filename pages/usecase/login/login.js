// pages/login/login.js

const duration = 2000;
var jwtDecode = require('jwt-decode');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: 'admin',
    passwordToken: 123456789
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
    wx.removeStorage({
      key: 'jwt',
      success: function(res) {},
    })
    wx.removeStorage({
      key: 'jwtData',
      success: function(res) {},
    })
    wx.request({
      url: `http://user-dev.debugya.cn:30080/UserController/login`,
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
          var token = result.data;
          var decoded = jwtDecode(token);
          console.log(decoded);
          wx.setStorage({
            key: 'jwt',
            data: token,
          })
          wx.setStorage({
            key: 'jwtData',
            data: decoded,
          })
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
            title: '登陆失败 错误代码：' + result.statusCode,
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
          title: '连接后端系统失败',
          icon: 'none'
        })
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }


})