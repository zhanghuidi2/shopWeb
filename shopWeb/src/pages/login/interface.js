import axios from '@/util/request.js'
export default {
  login(params) {
    return axios({
      method: 'get',
      url:`/public/login`,
      params
    })
  }
}
