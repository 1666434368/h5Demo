import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home')
    },
    { path: '/category',
      name: 'Category',
      component: () => import('@/views/category/category')
    },
    { path: '/my',
      name: 'My',
      component: () => import('@/views/my/my')
    },
    { path: '/shoppingCart',
      name: 'ShoppingCart',
      component: () => import('@/views/shoppingCart/shoppingCart')
    }
  ]
})
