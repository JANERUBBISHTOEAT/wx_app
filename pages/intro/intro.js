Component({
  behaviors: [],
  properties: {
    test_id : {
      type: String,
      value: ''
    },
  },
  data: {
    test_id: '',
    test_name: '',
    test_intro: '',

  },
  lifetimes: {
    created() {
      if (this.data.test_id == '1') {
        this.setData({
          test_id: '1',
          test_name: 'SAS',
          test_intro: 'Zung Self-Rating Anxiety Scale (SAS)',
        })
      } else if (this.data.test_id == '2') {
        this.setData({
          test_id: '2',
          test_name: 'SDS',
          test_intro: 'Zung Self-Rating Depression Scale (SDS)',
        })
      } else if (this.data.test_id == '3') {
        this.setData({
          test_id: '3',
          test_name: 'MBTI',
          test_intro: 'Myers-Briggs Type Indicator (MBTI)',
        })
      }
    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {


  },
});