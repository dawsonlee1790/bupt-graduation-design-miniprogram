// pages/usecase/HandleExceptionPlanView/planDetail/planDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planId: 1,
    planName: "生产批次计划1",
    executedOrder: {
      content: "车间玉米粉物料不足量，还差100千克",
      executor: "车间操作人-007",
      executeTime: "2019-05-19 20:40:12"
    },
    handleMessage: null,
    appointExecutor: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    if (typeof options.planId !== "undefined") {
      this.setData({
        planId: options.planId
      })
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