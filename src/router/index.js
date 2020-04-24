import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import StoreDetail from '@/views/StoreDetail.vue'
import Search from '@/views/Search.vue'
import Cart from '@/views/Cart.vue'
import Category from '@/views/Category.vue'
import People from '@/views/People.vue'
import PeopleEdit from '@/views/PeopleEdit.vue'
import Listcategory from '@/views/Listcategory.vue'
import Subcategory from '@/views/Subcategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Situs Jual Beli Online Kurang Terpercaya | Tokosidia'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: 'Jual | Tokosidia'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: 'Keranjang | Tokosidia'
    }
  },
  {
    path: '/p',
    name: 'Category',
    component: Category,
    meta: {
      title: 'Daftar Produk | Tokosidia'
    }
  },
  {
    path: '/p/list-category',
    name: 'Listcategory',
    component: Listcategory,
    meta: {
      title: 'Jual | Tokosidia'
    }
  },
  {
    path: '/p/list-category/sub-category',
    name: 'Subcategory',
    component: Subcategory,
    meta: {
      title: ' Jual | Tokosidia'
    }
  },
  {
    path: '/people/:id',
    name: 'People',
    component: People,
    meta: {
      title: 'User Detail | Tokosidia'
    }
  },
  {
    path: '/people/:id/edit',
    name: 'PeopleEdit',
    component: PeopleEdit,
    meta: {
      title: 'Ubah Profil | Tokosidia'
    }
  },
  {
    path: '/:storename',
    name: 'Store Detail',
    component: StoreDetail,
    meta: {
      title: 'Toko Detail | Tokosidia'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
