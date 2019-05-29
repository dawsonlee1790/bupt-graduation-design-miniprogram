// pages/usecase/executeOrderView/planDetail/planDetail.js
const duration = 2000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // planId: 1,
    // planName: "生产批次计划1",
    // number: 100,
    // startDate: "2019-06-24",
    // endDate: "2019-07-24",
    // responsible: "Dawson",
    // orderList: [{
    //   id: 1,
    //   operationContent: '从仓库搬运物料1，2到车间1',
    //   executor: '叉车工-001',
    //   executeTime: '2019-5-19 14:20:40'
    // }, {
    //   id: 2,
    //   operationContent: '往机器中添加物料1，2',
    //   executor: '车间操作员-007',
    //   executeTime: '2019-5-20 08:40:30'
    // }, {
    //   id: 3,
    //   operationContent: '往机器中添加物料3',
    //   executor: null ,
    //   executeTime: null
    // }, {
    //   id: 4,
    //   operationContent: '产出成品后，将成品运往仓库保存',
    //   executor: null ,
    //   executeTime: null
    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    if (typeof options.planId !== "undefined") {
      this.setData({planId: options.planId})
    }
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
    this.update(this.data.planId)
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

  executeOrder: function() {
    var self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://localhost:8080/ExecuteOrderController/` + this.data.planId,
      method: 'post',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: true,
      success(result) {
        if (result.statusCode == 200) {
          console.log('request success', result)
          self.update(self.data.planId)
          wx.showToast({
            title: '执行成功' + result.statusCode,
            icon: 'success',
            duration
          })
        } else {
          wx.showToast({
            title: result.data,
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


  update: function(planId) {
    var self = this
    wx.request({
      // url: `http://sop-dev.debugya.cn:30080/ReviewPlanController`,
      url: `http://localhost:8080/ExecuteOrderController/` + planId,
      method: 'get',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync('jwt')
      },
      data: true,
      success(result) {
        if (result.statusCode == 200) {
          console.log('request success', result)
          var orderList = [];
          var order = result.data.startOrder
          var i = 0;
          while (order !== null) {
            orderList[i] = order
            order = order.next
            i++
          }
          self.setData({
            planId: result.data.id,
            planName: result.data.name,
            number: result.data.number,
            startDate: result.data.planningStartDate,
            endDate: result.data.planningEndDate,
            responsible: result.data.responsible,
            orderList: orderList
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