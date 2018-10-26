import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const routes = [
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
      },
      {
        path: 'add_article',
        name: 'add_article',
        component: () => import('../views/article/add_article.vue')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('index') !== -1 && !store.state.user.isLogin) {
    // router.push('/')
  }
  next()
})

export default router
