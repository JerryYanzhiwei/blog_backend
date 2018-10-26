import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {

    }
  },
  mutations: {
  },
  actions: {
    // 添加文章
    async addArticle (store, data) {
      let {
        data: res
      } = await axios.post('article/add_article', data)
      return res
    }
  }
}
