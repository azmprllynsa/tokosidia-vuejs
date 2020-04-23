import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import StoreDetail from '@/views/StoreDetail.vue'
import Search from '@/views/Search.vue'
import Cart from '@/views/Cart.vue'
import Category from '@/views/Category.vue'
import Listcategory from '@/views/Listcategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    // name: 'Category',
    component: Category,
    children: [
      {
        path: '/category/list-category',
        // name: 'Listcategory',
        component: Listcategory
      }
    ]
  },
  {
    path: '/:storename',
    name: 'Store Detail',
    component: StoreDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
