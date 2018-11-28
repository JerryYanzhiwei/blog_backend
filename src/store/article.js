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
    },
    // 获取文章列表
    async getArticle (store, data) {
      let {
        data: res
      } = await axios.get('article/get_artical', data)
      return res
    },
    // 获取文章详情
    async getArticleDetail (store, data) {
      console.log('/*************************/', data)
      let {
        data: res
      } = await axios.get('article/get_article_detail', data)
      return res
    },
    // 修改文章
    async editArticle (store, data) {
      let {
        data: res
      } = await axios.post('article/edit_article', data)
      return res
    }
  }
}
