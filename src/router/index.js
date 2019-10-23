import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index')
    }
  ]
})
