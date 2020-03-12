const goods = {
  state: {
    goodsList: [
      {
        value: '001',
        label: '黄金糕'
      }, {
        value: '002',
        label: '双皮奶'
      }, {
        value: '003',
        label: '蚵仔煎'
      }, {
        value: '004',
        label: '龙须面'
      }, {
        value: '005',
        label: '北京烤鸭'
      }
    ],
    classList: [
      {
        value: '01',
        label: '母婴用品',
        children: [{
          value: '0101',
          label: '奶粉',
          children: [{
            value: '010101',
            label: '粉爱'
          }, {
            value: '010102',
            label: '绿爱'
          }]
        }]
      },
      {
        value: '02',
        label: '蔬菜',
        children: [{
          value: '0202',
          label: '干菜',
          children: [{
            value: '020201',
            label: '粉条'
          }, {
            value: '020202',
            label: '折耳根'
          }]
        }, {
          value: '0202',
          label: '湿菜',
          children: [{
            value: '020201',
            label: '娃娃菜'
          }, {
            value: '020202',
            label: '莲藕'
          }]
        }]
      }
    ]
  },
  mutations: {
    GOODS_LIST (state, list) {
      state.goodsList = list
    }
  },
  actions: {
    getGoods () {
      // 请求200的时候,如果使用new promise以后可以在dispach的时候拿到then
      // commit('GOODS_LIST', data.data || [])
    }
  }
}
export default goods
