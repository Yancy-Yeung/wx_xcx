Page({
  data: {
    imgUrls: [
      { img: "/images/home/swiper01.jpg" },
      { img: "/images/home/swiper02.jpg" },
    ],
    // Tabs组件状态
    activeTab: 0,
  },

  navigateToSplash: function () {
    wx.navigateTo({
      url: "/pages/splash/splash",
    });
  },

  // Tabs切换事件
  onTabChange: function (e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      activeTab: index,
    });

    // 可以根据需要添加切换时的逻辑
    const tabNames = ["热门推荐", "机场服务", "出行工具"];
    console.log("切换到:", tabNames[index]);
  },

  // 功能按钮点击事件
  onTabClick: function (e) {
    const type = e.currentTarget.dataset.type;
    console.log("点击了功能按钮:", type);

    // 根据不同的type执行不同的操作
    switch (type) {
      case "service":
        wx.showToast({
          title: "常用服务",
          icon: "success",
        });
        break;
      case "departure":
        wx.showToast({
          title: "出发功能",
          icon: "success",
        });
        break;
      case "arrive":
        wx.showToast({
          title: "到达功能",
          icon: "success",
        });
        break;
      case "transfer":
        wx.showToast({
          title: "中转功能",
          icon: "success",
        });
        break;
      case "checkin":
        wx.showToast({
          title: "在线值机",
          icon: "success",
        });
        break;
      case "booking":
        wx.showToast({
          title: "交通接驳",
          icon: "success",
        });
        break;
      case "wifi":
        wx.showToast({
          title: "机场WiFi",
          icon: "success",
        });
        break;
      case "phone":
        wx.showToast({
          title: "常用电话",
          icon: "success",
        });
        break;
      case "shopping":
        wx.showToast({
          title: "餐饮购物",
          icon: "success",
        });
        break;
      case "special":
        wx.showToast({
          title: "特殊旅客服务",
          icon: "success",
        });
        break;
      case "parking":
        wx.showToast({
          title: "停车场",
          icon: "success",
        });
        break;
      case "custom":
        wx.showToast({
          title: "自定义功能",
          icon: "success",
        });
        break;
      default:
        wx.showToast({
          title: "功能开发中",
          icon: "none",
        });
    }
  },

  toPlaneSearch:function(){
    // let that = this;
    wx.navigateTo({
      url: '/pages/plane_search/plane_search',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onToNews:function(){
    wx.navigateTo({
        url: '/pages/to_news/to_news',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })

  }
});
