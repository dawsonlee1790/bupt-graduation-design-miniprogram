// pages/usecase/reportExceptionView/reportExceptionView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planId: null,
    content: null
  },

  onLoad(options) {
    console.log(options)
    if (typeof options.planId !== "undefined") {
      this.setData({
        planId: options.planId
      })
    }
  },

  setPlanId(e) {
    this.data.planId = e.detail.value
  },

  setContent(e) {
    this.data.content = e.detail.value
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