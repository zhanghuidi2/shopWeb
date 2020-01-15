import Vue from 'vue'
import Router from 'vue-router'
import leftMenu from '@/pages/leftMenu/index'
import login from '@/pages/login/index'
import member from './member'
Vue.use(Router)
const router = new Router({
  routes: [
    // 一级菜单有登陆页面和菜单页面
    {
      path: '/',
      name: 'leftMeau',
      redirect: '/login',
      component: leftMenu,
      // 菜单里面的页面
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: () => import('@/pages/overview/index')
        },
        {
          path: '/goods-manage',
          name: 'goodsManage',
          component: () => import('@/pages/goodsManage/index'),
          children: [
            {
              path: '/goods-manage/goods-list',
              name: 'goodsList',
              component: () => import('@/pages/goodsManage/goodsList/index')
            },
            {
              path: '/goods-manage/goods-add',
              name: 'goodsAdd',
              component: () => import('@/pages/goodsManage/addGoods/index')
            }
          ]
        },
        member,
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/pages/setting/index')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/errorPages/404.vue')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/pages/errorPages/500.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('loginMsg') && to.fullPath !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
export default router
