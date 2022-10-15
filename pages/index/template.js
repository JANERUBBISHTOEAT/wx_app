// 自定义tabbar列表
var userTabbar = {
  "activeIndex": 0,
  "list": [{
      pagePath: "/student/index/index",
      name: "锻炼",
      selected: true,
      icon: {
          normal: "/image/duanlian.png",
          active: "/image/duanlian-active.png",
      }
  }, {
      pagePath: "/student/index3/index3",
      name: "我的",
      selected: false,
      icon: {
          normal: "/image/wode.png",
          active: "/image/wode-active.png",
      }
  }]
}
var studentTabbar = {
  "activeIndex": 1,
  "list": [{
      pagePath: "/student/index2/index2",
      name: "体测",
      selected: false,
      icon: {
          normal: "/image/tice.png",
          active: "/image/tice-active.png",
      }
  }, {
      pagePath: "/student/index/index",
      name: "锻炼",
      selected: true,
      icon: {
          normal: "/image/duanlian.png",
          active: "/image/duanlian-active.png",
      }
  },{
      pagePath: "/student/index3/index3",
      name: "我的",
      selected: false,
      icon: {
          normal: "/image/wode.png",
          active: "/image/wode-active.png",
      }
  }]
}
var teacherTabbar = {
  "activeIndex": 0,
  "list": [{
      name: "首页",
      selected: true,
      icon: {
          normal: "/image/index.png",
          active: "/image/index-active.png",
      }
  }, {
      name: "体测",
      selected: false,
      icon: {
          normal: "/image/tice.png",
          active: "/image/tice-active.png",
      }
  }, {
      name: "锻炼",
      selected: false,
      icon: {
          normal: "/image/duanlian.png",
          active: "/image/duanlian-active.png",
      }
  }, {
      name: "我的",
      selected: false,
      icon: {
          normal: "/image/wode.png",
          active: "/image/wode-active.png",
      }
  }],
}
module.exports = {
  userTabbar,
  studentTabbar,
  teacherTabbar,
}