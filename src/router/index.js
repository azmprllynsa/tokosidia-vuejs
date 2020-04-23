import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Cart from '@/views/Cart.vue'
import Category from '@/views/Category.vue'
import People from '@/views/People.vue'
import PeopleEdit from '@/views/PeopleEdit.vue'

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
    path: '/p',
    name: 'Category',
    component: Category
  },
  {
    path: '/people/:id',
    name: 'People',
    component: People
  },
  {
    path: '/people/:id/edit',
    name: 'PeopleEdit',
    component: PeopleEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
