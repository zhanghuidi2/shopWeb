import axios from 'axios'
import store from '@/store'
import router from '../router'
export default function request(options){
const setting = {
    loading: true, // 默认加载loading
    contentType: 'application/json;charset=UTF-8',
    format: false // 是否qs序列化 
  }
  options = {...setting, ...options}
  console.log(process.env.BASE_API)
  console.log(options.url)
  return new Promise((resolve, reject) => {
    const axiosObj = axios.create({
      baseURL: `${process.env.BASE_API}${options.url}`,
      headers: {
        'Authorization': '',
        'AppId' : '',
        'Accept': '',
        'Content-Type': options.contentType,
        // 'userLoginId': JSON.parse(localStorage.getItem('loginMsg')) ? JSON.parse(localStorage.getItem('loginMsg')).userLoginId : ''
      }
    })
    // 请求拦截器，可以开始发请求的时候增加loading
    axiosObj.interceptors.request.use((config) => {
      store.commit('CHANGE_LOADING', true)
      return config
    }, error => {
      store.commit('CHANGE_LOADING', false)
      reject(error)
    })
    axiosObj(options).then((response) => {
      store.commit('CHANGE_LOADING', false)
      console.log('000000000')
      switch (response.status) {
        case 200: 
          resolve(response.data)
          break
        case 404:
          router.redirect('/404')
          break
        case 500:
          router.redirect('/500')
          break
        default:
          reject(response)
      }
    }).catch((error)=>{
      console.log(error)
    })
  })
}
