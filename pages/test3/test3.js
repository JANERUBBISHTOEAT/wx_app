var ans = new Array(20).fill("");
Page({
  data: {
    checked_1: false,
    checked_2: false,
    checked_3: false,
    checked_4: false,
    hide_question: false,
    hide_result: true,
    index_opt: 0,
    index_que: 0,
    id: 0, // 1-20
    result: -1,
    result_text: "",
    result_color: "",
    array_opt: ['A little of time', 'Some of the time', 'Good part of the time', 'Most of the time'],
    questions: [
      '1 I feel down-hearted and blue. ',
      '2 Morning is when I feel the best. ',
      '3 I have crying spells or feel like it.',
      '4 I have trouble sleeping at night.',
      '5 I eat as much as I used to. ',
      '6 Feeling bad about yourself or that you are a failure or have let yourself or your family down ',
      '7 I notice that I am losing weight. ',
      '8 I have trouble with constipation. ',
      '9 My heart beats faster than usual. ',
      '10 I get tired for no reason. ',
      '11 My mind is as clear as it used to be. ',
      '12 I find it easy to do the things I used to. ',
      '13 I am restless and can’t keep still. ',
      '14 I feel hopeful about the future. ',
      '15 I am more irritable than usual. ',
      '16 I find it easy to make decisions. ',
      '17 I feel that I am useful and needed. ',
      '18 My life is pretty full. ',
      '19 I feel that others would be better off if I were dead. ',
      '20 I still enjoy the things I used to do. '
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
  // Interactions enhanced:
  // radio button will keep your choice when moving to another question.

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
        // checked_1: true,
        checked_1: checked_1,
        checked_2: checked_2,
        checked_3: checked_3,
        checked_4: checked_4,
        hide_result: true,
      })
    };
  },

  finish_que: function () {
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

  sas_analysis: function () {
    var ans = this.data.answer;
    var total = 0;
    for (var i = 0; i < ans.length; i++) {

      if (i == 2 || i == 5 || i == 11 || i == 12 || i == 14 || i == 16 || i == 17 || i == 18 || i == 20) {
        total += 5 - parseInt(ans[i]);
      }
      else {
        total += parseInt(ans[i]);
      }
    }
    total *= 1.25;
    var result_color = "";
    var result = '';
    if (total < 50) {
      result = 'Normal';
      result_color = '#b1fdbb';
    }
    else if (total < 60) {
      result = 'Mild';
      result_color = 'yellow';
    }
    else if (total < 70) {
      result = 'Moderate';
      result_color = 'orange';
    }
    else {
      result = 'Severe';
      result_color = 'red';
    }
    console.log(total);
    this.setData({
      result: total,
      result_text: result,
      result_color: result_color,
      hide_result: false,
    })
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
      if (finisheded == 'false') {
        console.log("First unanswered question: " + i);
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
        this.sas_analysis();
        // wx.showLoading({
        //   title: 'Loading...',
        // })
      }
    },
    // bindPickerChange: function(e) {
    //   console.log('picker发送选择改变，携带值为', e.detail.value)
    //   this.setData({
    //     index: e.detail.value
    //   })
    // },
  });