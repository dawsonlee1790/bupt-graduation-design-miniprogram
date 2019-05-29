// pages/usecase/reviewPlanView/planDetail/planDetail.js

const duration = 2000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    planId: 1,
    planName: "生产批次计划1",
    number: 100,
    startDate: "2019-06-24",
    endDate: "2019-07-24",
    responsible: "Dawson"
  },

  onLoad(options) {
    console.log(options)
    if (typeof options.planId !== "undefined") {
      var self = this
      wx.request({
        // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
        url: `http://sop-dev.debugya.cn:30080/ReviewPlanController/` + options.planId,
        method: 'get',
        header: {
          "Content-Type": "application/json",
          "Authorization": wx.getStorageSync('jwt')
        },
        success(result) {
          if (result.statusCode == 200) {
            console.log('request success', result)
            self.setData({
              planId: result.data.id,
              planName: result.data.name,
              number: result.data.number,
              startDate: result.data.planningEndDate,
              endDate: result.data.planningEndDate,
              responsible: result.data.responsible
            })
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
    }
  },

  approve() {
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/ReviewPlanController/` + this.data.planId + '/review',
      method: 'post',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: true,
      success(result) {
        if (result.statusCode == 200) {
          console.log('request success', result)
          wx.showToast({
            title: '审核批准成功',
            icon: 'success',
            duration
          })
        } else {
          wx.showToast({
            title: '审核批准失败',
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

  notApprove() {
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/ReviewPlanController/` + this.data.planId + '/review',
      method: 'post',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: false,
      success(result) {
        if (result.statusCode == 200) {
          console.log('request success', result)
          wx.showToast({
            title: '审核不批准成功',
            icon: 'success',
            duration
          })
        } else {
          wx.showToast({
            title: '审核不批准失败',
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
  }
})