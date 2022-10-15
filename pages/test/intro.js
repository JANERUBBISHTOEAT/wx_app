Page({
  data: {
    test_id: '',
    test_name: '',
    test_intro: '',

  },
  onLoad(options) {
    console.log(options);
    if (options.test_id == '1') {
      this.setData({
        test_id: '1',
        test_name: 'SAS',
        test_intro: "The Zung Self-Rating Anxiety Scale (SAS) was \
designed by William W. K. Zung M.D. (1929-1992) to quantify a \
patient's level of anxiety. It is a 20-item self-report assessment \
device built to measure anxiety levels, based on scoring in 4 groups \
of manifestations: cognitive, autonomic, motor and central nervous \
system symptoms. Answering the statements a person should indicate how \
much each statement applies to him or her within a period of one or two \
weeks prior to taking the test.",
      test_url: "https://en.wikipedia.org/wiki/Zung_Self-Rating_Anxiety_Scale",
      })
    }
    else if (options.test_id == '2') {
      this.setData({
        test_id: '2',
        test_name: 'SDS',
        test_intro: 'Zung Self-Rating Depression Scale (SDS)',
      })
    }
    else if (options.test_id == '3') {
      this.setData({
        test_id: '3',
        test_name: 'MBTI',
        test_intro: 'Myers-Briggs Type Indicator (MBTI)',
      })
    }
    else {
      this.setData({
        test_id: '-1',
        test_name: 'undefined_name',
        test_intro: 'undefined_intro',
      })
    }
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
  goToTest() {
    console.log(this.data.test_id);
    if (this.data.test_id == '1') {
      wx.navigateTo({
        url: '../test/test',
      })
    }
    else if (this.data.test_id == '2') {
      wx.navigateTo({
        url: '../test/test2',
      })
    }
    else if (this.data.test_id == '3') {
      wx.navigateTo({
        url: '../test/test3',
      })
    }
  }
});