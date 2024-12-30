import { createRouter, createWebHistory } from 'vue-router'
import Page from '../Page.vue'
import PageAdd from '../PageAdd.vue'
import PageBuy from '../PageBuy.vue'
import PageLogin from '../PageLogin.vue'
import PageCart from '../PageCart.vue'
import PageProduct from '../PageProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Page
    },
    {
      path: '/add',
      name: 'add',
      component: PageAdd
    },
    {
      path: '/buy',
      name: 'buy',
      component: PageBuy
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },
    {
      path: '/cart',
      name: 'cart',
      component: PageCart
    },
    {
      path: '/products/:prodId',
      name: 'product',
      props: true,
      component: PageProduct,
    }
    /*,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }*/
  ],
  scrollBehavior: () => ({top: 0})
})

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('login') === null && to.name !== 'main' && to.name !== 'login') {
    return next(false)
  }
  return next(true)
})

export default router
