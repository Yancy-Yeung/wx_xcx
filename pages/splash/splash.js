// pages/splash/splash.js
Page({
  data: {
    countdown: 5,
  },
  timer: null,

  onLoad: function (options) {
    this.startCountdown();
  },

  onUnload: function () {
    // 页面卸载时清除定时器
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  // 开始倒计时
  startCountdown: function () {
    this.timer = setInterval(() => {
      const countdown = this.data.countdown - 1;
      this.setData({
        countdown: countdown,
      });

      if (countdown <= 0) {
        clearInterval(this.timer);
        this.timer = null;
        this.navigateToIndex();
      }
    }, 1000);
  },

  // 跳转到首页
  navigateToIndex: function () {
    wx.reLaunch({
      url: "/pages/home/home",
      fail: (err) => {
        console.error("跳转失败:", err);
        // 如果跳转失败，尝试使用 switchTab
        wx.switchTab({
          url: "/pages/home/home",
          fail: (err2) => {
            console.error("switchTab 也失败:", err2);
          },
        });
      },
    });
  },

  // 点击按钮立即跳转
  skipToIndex: function () {
    // 清除定时器
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.navigateToIndex();
  },
});
