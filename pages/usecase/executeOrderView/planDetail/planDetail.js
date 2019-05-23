// pages/usecase/executeOrderView/planDetail/planDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planId: 1,
    planName: "生产批次计划1",
    sopName: "sop1",
    number: 100,
    startDate: "2019-06-24",
    endDate: "2019-07-24",
    responsible: "Dawson",
    orderList: [{
      id: 1,
      operationContent: '从仓库搬运物料1，2到车间1',
      executor: '叉车工-001',
      executeTime: '2019-5-19 14:20:40'
    }, {
      id: 2,
      operationContent: '往机器中添加物料1，2',
      executor: '车间操作员-007',
      executeTime: '2019-5-20 08:40:30'
    }, {
      id: 3,
      operationContent: '往机器中添加物料3',
      executor: null ,
      executeTime: null
    }, {
      id: 4,
      operationContent: '产出成品后，将成品运往仓库保存',
      executor: null ,
      executeTime: null
    }]
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