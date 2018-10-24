import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      userName: null
    }
  },
  mutations: {
    // setUser (state, data) {
    //   state.userName = data
    // }
  },
  actions: {
    // 用户注册
    async registerAPI (store, data) {
      let {
        data: res
      } = await axios.post('user/register', data)
      return res
    },
    // 用户登录
    async loginAPI (store, data) {
      let {
        data: res
      } = await axios.post('/user/login', data)
      return res
    }
  }
}
