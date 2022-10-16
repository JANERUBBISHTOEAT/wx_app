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
        test_intro: 'The Zung Self-Rating Depression \
Scale was designed by Duke University psychiatrist William \
W.K. Zung MD (1929–1992) to assess the level of depression \
for patients diagnosed with depressive disorder.',
        test_url: 'https://en.wikipedia.org/wiki/Zung_Self-Rating_Depression_Scale',
      })
    }
    else if (options.test_id == '3') {
      this.setData({
        test_id: '3',
        test_name: 'MBTI',
        test_intro: 'In personality typology, the Myers-Briggs \
Type Indicator (MBTI) is an introspective self-report questionnaire \
indicating differing psychological preferences in how people perceive \
the world and make decisions. The test attempts to assign a value to \
each of four categories: introversion or extraversion, sensing or \
intuition, thinking or feeling, and judging or perceiving. One letter \
from each category is taken to produce a four-letter test result, such \
as "INTJ" or "ESFP"',
        test_url: 'https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator',
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
        url: '../tests/test1/test1',
      })
    }
    else if (this.data.test_id == '2') {
      wx.navigateTo({
        url: '../tests/test2/test2',
      })
    }
    else if (this.data.test_id == '3') {
      wx.navigateTo({
        url: '../tests/test3/test3',
      })
    }
  }
});