// pages/usecase/makeProductionPlanView/makeProductionPlanView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit(e) {
    const self = this
    self.setData({
      loading: true
    })
    const planName = e.detail.value.planName
    const sopName = e.detail.value.sopName
    const number = e.detail.value.number
    const startDate = e.detail.value.startDate
    const endDate = e.detail.value.endDate
    const responsible = e.detail.value.responsible
    wx.request({
      url: `http://sop.debugya.cn:30080/MakeProductionPlanController/make`,
      method: 'put',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        planName,
        sopName,
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
            title: '操作失败'
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