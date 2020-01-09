const goods = {
  state: {
    goodsList: []
  },
  mutations: {
    GOODS_LIST (state, list) {
      state.goodsList = list
    }
  },
  actions: {
    getGoods () {
      // 请求200的时候
      // commit('GOODS_LIST', data.data || [])
    }
  }
}
export default goods
