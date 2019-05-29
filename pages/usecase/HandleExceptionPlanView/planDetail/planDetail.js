// pages/usecase/HandleExceptionPlanView/planDetail/planDetail.js

const duration = 2000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    handleMessage: '随便处理一下',
    executorGroup: 'WorkshopManager',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    if (typeof options.planId !== "undefined") {
      this.update(options.planId)
    }
  },

  setHandleMessage(e) {
    this.data.handleMessage = e.detail.value
  },

  setExecutorGroup(e) {
    this.data.executorGroup = e.detail.value
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



  handle: function() {
    const self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/HandleExceptionController/` + this.data.planId,
      method: 'post',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: {
        "content": this.data.handleMessage,
        "executorGroup": this.data.executorGroup
      },
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '处理成功',
            icon: 'success',
            mask: true,
            duration
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



  update: function(planId) {
    var self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://sop-dev.debugya.cn:30080/HandleExceptionController/` + planId,
      method: 'get',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: true,
      success(result) {
        if (result.statusCode == 200) {
          console.log('request success', result)
          self.setData({
            planId: 1,
            planName: result.data.planName,
            sopName: result.data.sopName,
            executedOrder: {
              content: result.data.eContent,
              executor: result.data.reportPerson,
              executeTime: result.data.reportTime
            }
          })
        } else {
          wx.showToast({
            title: '服务器错误' + result.statusCode,
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