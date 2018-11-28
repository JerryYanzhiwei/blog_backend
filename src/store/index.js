import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import user from './user'
import article from './article'

Vue.prototype.$http = axios

// 线上环境
// axios.defaults.baseURL = 'http://www.jerryzw.top/api/'

// 测试
axios.defaults.baseURL = 'http://localhost:3000/api/'

axios.defaults.timeout = 5000

// 请求拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    article
  }
})
