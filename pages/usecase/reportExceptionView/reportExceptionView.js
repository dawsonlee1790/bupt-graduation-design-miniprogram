// pages/usecase/reportExceptionView/reportExceptionView.js

const duration = 2000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planId: 1,
    content: "发现车间停机"
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
    this.setData({
      planId: e.detail.value
    })
  },

  setContent(e) {
    this.setData({
      content: e.detail.value
    })
  },

  formSubmit(e) {
    const self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/ReportExceptionController/report/` + this.data.planId,
      method: 'post',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: self.data.content,
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '报告异常成功',
            icon: 'success',
            mask: true,
            duration
          })
          self.setData({
            loading: false
          })
          console.log('request success', result)
        } else {
          wx.showToast({
            title: '操作失败',
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
  }
})