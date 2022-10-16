const questions = require("./questions.js")
var ans = new Array(20).fill("");
var qnaire = questions.questions;
Page({
  data: {
    qnaire: qnaire,
    sliderValue: -1,
    // checked_1: false,
    // checked_2: false,
    hide_question: false,
    hide_result: true,
    id: 0, // 1-20
    result: -1,
    result_text: "",
    result_color: "",
    answer: ans,
  },
  onLoad(options) {
    console.log(qnaire[0].question);
    console.log(qnaire[0].options.A);
    console.log(qnaire[0].options.B);
    console.log(qnaire.length);
    let arr = Array.from(qnaire);
    console.log(arr[0]);
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
    // var checked_1 = Object.values(ans)[(this.data.id + 1)] == '1';
    // var checked_2 = Object.values(ans)[(this.data.id + 1)] == '2';
    // console.log(this.data.id + ": ", checked_1, checked_2, checked_3, checked_4);
    // console.log(ans);

    this.setData({
      id: this.data.id + 1,
      // hide_question: false,
    })
  },

  // last_que: function () {
  //   // console.log(typeof(this.data.answer), typeof(this.data.id));
  //   var checked_1 = Object.values(ans)[(this.data.id - 1)] == '1';
  //   var checked_2 = Object.values(ans)[(this.data.id - 1)] == '2';
  //   // console.log(this.data.id + ": ", checked_1, checked_2, checked_3, checked_4);

  //   if (this.data.id != 0) {
  //     this.setData({
  //       id: this.data.id - 1,
  //       hide_question: false,
  //       // checked_1: true,
  //       hide_result: true,
  //     })
  //   };
  // },

  finish_que: function () {
    this.setData({
      id: this.data.id + 1,
      hide_question: true,
    })
  },

  sliderChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      sliderValue: e.detail.value,
    })
  },


  submit: function (e) {
    console.log(this.data.id, this.data.sliderValue);
    ans[this.data.id - 1] = this.data.sliderValue;
    this.setData({
      answer: ans,
    })
    console.log(this.data.answer);
  },

  sas_analysis: function () {
    var ans = this.data.answer;
    var E = 0;
    var I = 0;
    var S = 0;
    var N = 0;
    var T = 0;
    var F = 0;
    var J = 0;
    var P = 0;
    for (var i = 0; i < ans.length; i++) {

      if (i % 8 == 0) {
        E += ans[i];
        I += 5 - ans[i];
      }
      else if (i % 8 == 1 || i % 8 == 2) {
        S += ans[i];
        N += 5 - ans[i];
      }
      else if (i % 8 == 3 || i % 8 == 4) {
        T += ans[i];
        F += 5 - ans[i];
      }
      else if (i % 8 == 5 || i % 8 == 6) {
        J += ans[i];
        P += 5 - ans[i];
      }
    }
    var result_color = "";
    var result = '';
    console.log(E, I, S, N, T, F, J, P);
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
            hide_question: false,
            id: i,
          })
        }
      })
    } else {
      this.sas_analysis();
    }
  }
});