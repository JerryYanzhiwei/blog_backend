import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/summary',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: 'summary',
          name: 'all',
          component: () => import('../views/summary/summary.vue')
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('../views/article/article.vue')
        }
      ]
    }
  ]
})
