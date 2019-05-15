// pages/usecase/makeSopView/makeSopView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sopName: '',
    sopNumber: '',
    sopStepList: []
  },

  setSopName(e) {
    this.data.sopName = e.detail.value
  },

  setSopNumber(e) {
    this.data.sopNumber = e.detail.value
  },

  setOperationContent(e) {
    var index = e.currentTarget.dataset.index 
    this.data.sopStepList[index].operationContent = e.detail.value
  },

  setExecutor(e) {
    var index = e.currentTarget.dataset.index 
    this.data.sopStepList[index].executor = e.detail.value
  },


  createSopStep: function() {
    var index = this.data.sopStepList.length
    this.data.sopStepList = this.data.sopStepList.concat([{
      id: index + 1,
      operationContent: '',
      executor: ''
    }])
    this.setData({
      sopStepList: this.data.sopStepList
    })
  },


  makeSopRequest: function() {
    const self = this
    self.setData({
      loading: true
    })
    var sopName = this.data.sopName
    var sopNumber = this.data.sopNumber
    wx.request({
      url: `http://user.debugya.cn:30080/UserController/login`,
      method: 'post',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "name": sopName,
        "passwordToken": sopNumber
      },
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            mask: true,
            duration: 20000,
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