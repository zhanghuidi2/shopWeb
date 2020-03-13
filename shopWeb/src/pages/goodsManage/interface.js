import axios from '@/util/request.js'
export default {
  goodsApi () {
    return axios({
      method: 'get',
      url: `@/json/goods.json`
    })
  }
}
