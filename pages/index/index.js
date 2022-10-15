// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 切换tabbar
  onChange(e) {
    if (e.detail == this.data.tabbar.activeIndex) return;
    this.setData({
        'tabbar.activeIndex': e.detail
    })
    getApp().globalData.pageIndex = '';
    this.changeTitle();
},
// 改变导航栏名称
changeTitle() {
    if (getApp().globalData.pageIndex == 'mine') {
        if (this.data.userType == 2) { // 学生
            this.setData({
                'tabbar.activeIndex': 2 // 我的
            })
        } else if (this.data.userType == 1) { // 教师
            this.setData({
                'tabbar.activeIndex': 3 // 我的
            })
        }
    }
    let title, index = this.data.tabbar.activeIndex,
        userType = this.data.userType;
    if (userType == 3) { // 自由用户
        title = index === 0 ? '锻炼' : '我的';
    } else if (userType == 2) { // 学生
        title = index === 0 ? '体测' : index === 1 ? '锻炼' : index === 2 ? '场馆' : '我的';
    } else if (userType == 1) { // 教师
        title = index === 0 ? '首页' : index === 1 ? '体测' : index === 2 ? '锻炼' : '我的';
    }
    wx.setNavigationBarTitle({
        title
    })
}
})
