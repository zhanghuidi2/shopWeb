import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods.js'
import member from './modules/member.js'
import common from './modules/common.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    goods,
    member,
    common
  }
})
