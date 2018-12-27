Page({
  onShareAppMessage() {
    return {
      title: '首页',
      path: 'page/index/index.html'
    }
  },
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  inputValue: '',
  data: {
    background: ["../../../../image/lun3.jpg", "../../../../image/lun2.jpg", "../../../../image/lun1.jpg"],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 600,
    src: ''
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

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  onTapToDetailList(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: 'pages/detail-list/detail-list',
    })
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: "pages/detail/detail",
    })
  },
  onTapToDetail1(event) {
    var postId = event.currentTarget.dataset.postId;
    //console.log(postId);
    wx.navigateTo({
      url: "pages/detail1/detail1",
    })
  }
})
