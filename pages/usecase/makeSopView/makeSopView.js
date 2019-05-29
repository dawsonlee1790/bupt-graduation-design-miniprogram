// pages/usecase/makeSopView/makeSopView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sopName: 'NewMadicine',
    sopNumber: 100,
    sopStepList: [{
        id: 1,
        operationContent: '叉车工从仓库运玉米粉到车间1',
        executorGroup: 'Forklift'
      },
      {
        id: 2,
        operationContent: '车间操作人将玉米粉投入到机器10中',
        executorGroup: 'WorkshopManager'
      }
    ],
    role: ["Planner", 'Researcher', 'Forklift', 'WorkshopManager', 'ProductionLeader']
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

  setExecutorGroup(e) {
    var index = e.currentTarget.dataset.index
    this.data.sopStepList[index].executorGroup = e.detail.value
  },


  createSopStep: function() {
    var index = this.data.sopStepList.length
    this.data.sopStepList = this.data.sopStepList.concat([{
      id: index + 1,
      operationContent: '',
      executorGroup: ''
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
    for (var i = 0; i < this.data.sopStepList.length; i++) {
      this.data.sopStepList[i].next = this.data.sopStepList[i + 1]
    }
    var sopName = this.data.sopName
    var sopNumber = this.data.sopNumber
    const data = {
      name: sopName,
      number: sopNumber,
      startStep: this.data.sopStepList[0]
    };
    console.log(data);
    wx.request({
      url: `http://sop-dev.debugya.cn:30080/MakeSopController/make`,
      // url: `http://localhost:8080/MakeSopController/make`,
      method: 'put',
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync("jwt")
      },
      data,
      success(result) {
        if (result.statusCode == 200) {
          wx.showToast({
            title: '制定成功',
            icon: 'success',
            mask: true,
            duration: 2000,
          })
          self.setData({
            loading: false
          })
          console.log('request success', result)
        } else {
          wx.showToast({
            title: '制定失败  ' + result.data.message,
            icon: 'none',
            duration: 2000
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
          duration: 2000
        })
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})