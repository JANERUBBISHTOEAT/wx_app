var ans = new Array(20).fill("");
Page({
  data: {
    checked_1: false,
    checked_2: false,
    checked_3: false,
    checked_4: false,
    hide_question: false,
    index_opt: 0,
    index_que: 0,
    id: 0, // 1-20
    array_opt: ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   array_opt: [['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  //   ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
  // ],
    questions: [
      '1 I feel more nervous and anxious than usual. ',
      '2 I feel afraid for no reason at all. ',
      '3 I get upset easily or feel panicky.',
      '4 I feel like I\'m falling apart and going to pieces.',
      '5 I feel that everything is all right and nothing bad will happen. ',
      '6 My arms and legs shake and tremble. ',
      '7 I am bothered by headaches neck and back pain. ',
      '8 I feel weak and get tired easily. ',
      '9 I feel calm and can sit still easily. ',
      '10 I can feel my heart beating fast. ',
      '11 I am bothered by dizzy spells. ',
      '12 I have fainting spells or feel like it. ',
      '13 I can breathe in and out easily. ',
      '14 I get feelings of numbness and tingling in my fingers & toes. ',
      '15 I am bothered by stomach aches or indigestion. ',
      '16 I have to empty my bladder often. ',
      '17 My hands are usually dry and warm. ',
      '18 My face gets hot and blushes. ',
      '19 I fall asleep easily and get a good night\'s rest. ',
      '20 I have nightmares. '
    ],
    answer: ans,
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
  radioChange: function (e) {
    // console.log(e.detail.value);
  },
  
// Fixed the problem:
// radio button does not uncheck when moving to another question.

  next_que: function () {
    var checked_1 = Object.values(ans)[(this.data.id + 1)] == '1';
    var checked_2 = Object.values(ans)[(this.data.id + 1)] == '2';
    var checked_3 = Object.values(ans)[(this.data.id + 1)] == '3';
    var checked_4 = Object.values(ans)[(this.data.id + 1)] == '4';
    console.log(this.data.id + ": ", checked_1, checked_2, checked_3, checked_4);
    // console.log(ans);
    this.setData({
      id: this.data.id + 1,
      checked_1: checked_1,
      checked_2: checked_2,
      checked_3: checked_3,
      checked_4: checked_4,
    })
  },

  last_que: function () {
    // console.log(typeof(this.data.answer), typeof(this.data.id));
    var checked_1 = Object.values(ans)[(this.data.id - 1)] == '1';
    var checked_2 = Object.values(ans)[(this.data.id - 1)] == '2';
    var checked_3 = Object.values(ans)[(this.data.id - 1)] == '3';
    var checked_4 = Object.values(ans)[(this.data.id - 1)] == '4';
    console.log(this.data.id + ": ", checked_1, checked_2, checked_3, checked_4);

    if (this.data.id != 0) {
      this.setData({
        id: this.data.id - 1,
        hide_question: false,
        checked_1: checked_1,
        checked_2: checked_2,
        checked_3: checked_3,
        checked_4: checked_4,
      })
    };
  },

  finish_que: function() {
    this.setData({
      id: this.data.id + 1,
      hide_question: true,
    })
  },

  submit: function (e) {
    // console.log(this.data.id, e.detail.value);
    ans[this.data.id - 1] = e.detail.value.answer;
    this.setData({
      answer: ans,
    })
    // console.log(this.data.answer);
  },

  formSubmit: function () {
    // must submit before formSubmit

    var finisheded;
    var i = 0;
    var _this = this;
    while (i < 20) {
      if (ans[i] == "") {
        finisheded = 'false';
        break;
      } else {
        finisheded = 'true';
      }
      i++;
    }
    i++;
    console.log("First unanswered question: " + i);
    if (finisheded == 'false') {
      wx.showModal({
        title: 'Submission Failed',
        content: 'You have not finished the test yet. Please finish the test before submitting.',
        showCancel: false,
        confirmText: "OK",
        success(res) {
          _this.setData({
            id: i,
          })
        }
      })
    } else {
      wx.showLoading({
        title: 'Loading...',
      })
      // to be continued...
    }
  },
  // bindPickerChange: function(e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },
});