Page({
  onShareAppMessage() {
    return {
      title: '资讯列表',
      path: 'page/default/pages/detail-list'
    }
  },
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  inputValue: '',
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 600,
    icon60: "../../../../image/lun3.jpg",
    src: '',
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: "../detail/detail?id=" + postId,
    })
  },
  onTapToDetail1(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: "../detail1/detail1",
    })
  },
  onTapToDetail2(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: "../detail2/detail2",
    })
  }
})
