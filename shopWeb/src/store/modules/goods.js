import axios from 'axios'
const goods = {
  state: {
    goodsList: [],
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
      console.log(list)
    }
  },
  actions: {
    getGoods ({commit}) {
      // 请求200的时候,如果使用new promise以后可以在dispach的时候拿到then
      axios.get('static/data.json')
        .then((response) => {
          console.log(response)
          commit('GOODS_LIST', response.data.goodsList || [])
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
export default goods
