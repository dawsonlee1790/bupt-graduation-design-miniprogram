// pages/usecase/usecase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usecases: [{
        id: "0",
        name: "登陆",
        url: "login/login"
      },
      {
        id: "1",
        name: "制定Sop",
        url: "makeSopView/makeSopView"
      },
      {
        id: "2",
        name: "计划生产批次",
        url: "makeProductionPlanView/makeProductionPlanView"
      },
      {
        id: "3",
        name: "审核生产批次计划",
        url: "reviewPlanView/reviewPlanView"
      },
      {
        id: "4",
        name: "执行生产指令",
        url: "executeOrderView/executeOrderView"
      },
      {
        id: "5",
        name: "报告异常",
        url: "reportExceptionView/reportExceptionView"
      },
      {
        id: "6",
        name: "处理生产过程异常",
        url: "HandleExceptionPlanView/HandleExceptionPlanView"
      }
    ]
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

  }
})