// pages/usecase/makeProductionPlanView/makeProductionPlanView.js

const duration = 2000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    planName: "生产批次1",
    sopId: 1,
    number: 1000,
    startDate: "2019-06-01",
    endDate: "2019-06-30",
    responsible: "admin"
  },

  formSubmit(e) {
    const self = this
    self.setData({
      loading: true
    })
    const planName = e.detail.value.planName
    const sopId = e.detail.value.sopId
    const number = e.detail.value.number
    const startDate = e.detail.value.startDate
    const endDate = e.detail.value.endDate
    const responsible = e.detail.value.responsible
    wx.request({
      url: 'http://sop-dev.debugya.cn:30080/MakeProductionPlanController/make',
      // url: 'http://localhost:8080/MakeProductionPlanController/make',
      method: 'put',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync("jwt")
      },
      data: {
        planName,
        sopId,
        number,
        startDate,
        endDate,
        responsible
      },
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '操作成功',
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
            title: '操作失败' + result.data.message,
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
          title: '连接不上服务器',
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