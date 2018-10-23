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
    async registerAPI (store, data) {
      let {
        data: res
      } = await axios.post('user/register', data)
      return res
    }
  }
}
