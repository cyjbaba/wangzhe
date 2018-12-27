var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["全部", "战士", "坦克","法师","辅助","射手","刺客"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  onTapToDetail(event) {
   wx.navigateTo({
      url: "pages/hero-message/hero-message",
    })
  },
  onTapToDetail1(event) {
    wx.navigateTo({
      url: "pages/hero-message1/hero-message1",
    })
  },
  onTapToDetail2(event) {
    wx.navigateTo({
      url: "pages/hero-message2/hero-message2",
    })
  }
});