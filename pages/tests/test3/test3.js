const questions = require("./questions.js")
var ans = new Array(75).fill("");
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
    _I: 0,
    _E: 0,
    _S: 0,
    _N: 0,
    _T: 0,
    _F: 0,
    _J: 0,
    _P: 0,
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

  next_que: function () {

    this.setData({
      id: this.data.id + 1,
    })
  },

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
    // console.log(this.data.answer);
  },

  mbti_analysis: function () {
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

      if (i % 7 == 0) {
        E += ans[i];
        I += 5 - ans[i];
      }
      else if (i % 7 == 1 || i % 7 == 2) {
        S += ans[i];
        N += 5 - ans[i];
      }
      else if (i % 7 == 3 || i % 7 == 4) {
        T += ans[i];
        F += 5 - ans[i];
      }
      else if (i % 7 == 5 || i % 7 == 6) {
        J += ans[i];
        P += 5 - ans[i];
      }
    }
    var result_color = "";
    var result_text = "";
    if (E > I) {
      result_text += "E";
    } else {
      result_text += "I";
    } if (S > N) {
      result_text += "S";
    } else {
      result_text += "N";
    } if (T > F) {
      result_text += "T";
    } else {
      result_text += "F";
    } if (J > P) {
      result_text += "J";
    } else {
      result_text += "P";
    }

    if (result_text == "ESTJ") {
      result_color = "#FF0000";
    } else if (result_text == "ESFJ") {
      result_color = "#FFA500";
    } else if (result_text == "ENTJ") {
      result_color = "#FFFF00";
    } else if (result_text == "ENFJ") {
      result_color = "#00FF00";
    } else if (result_text == "ISTJ") {
      result_color = "#00FFFF";
    } else if (result_text == "ISFJ") {
      result_color = "#0000FF";
    } else if (result_text == "INTJ") {
      result_color = "#FF00FF";
    } else if (result_text == "INFJ") {
      result_color = "#FF0000";
    } else if (result_text == "ISTP") {
      result_color = "#FFA500";
    } else if (result_text == "ISFP") {
      result_color = "#FFFF00";
    } else if (result_text == "INTP") {
      result_color = "#00FF00";
    } else if (result_text == "INFP") {
      result_color = "#00FFFF";
    } else if (result_text == "ESTP") {
      result_color = "#0000FF";
    } else if (result_text == "ESFP") {
      result_color = "#FF00FF";
    } else if (result_text == "ENTP") {
      result_color = "#FF0000";
    } else if (result_text == "ENFP") {
      result_color = "#FFA500";
    }

    console.log(E, I, S, N, T, F, J, P);
    this.setData({
      _E: E,
      _I: I,
      _S: S,
      _N: N,
      _T: T,
      _F: F,
      _J: J,
      _P: P,
      result_text: result_text,
      result_color: result_color,
      hide_result: false,

    })
  },


  formSubmit: function () {
    this.mbti_analysis();
    // No need to varify that all questions are answered.
    // This program guarantees that all questions are answered.
  },
});