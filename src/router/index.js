import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import RegisterPage from '@/views/auth/RegisterPage.vue'
import StoreDetail from '@/views/StoreDetail.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Search from '@/views/Search.vue'
import Cart from '@/views/Cart.vue'
import Shipment from '@/views/Shipment.vue'
import Category from '@/views/Category.vue'
import People from '@/views/People.vue'
import OrderList from '@/views/OrderList.vue'
import PeopleEdit from '@/views/PeopleEdit.vue'
import Listcategory from '@/views/Listcategory.vue'
import Subcategory from '@/views/Subcategory.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Situs Jual Beli Online Kurang Terpercaya | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Masuk / Login | Tokosidia',
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: {
      title: 'Daftar | Tokosidia',
      requiresVisitor: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: 'Jual | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: 'Keranjang | Tokosidia',
      requiresAuth: true
    }

  },
  {
    path: '/cart/shipment',
    name: 'Shipment',
    component: Shipment,
    meta: {
      title: 'Checkout | Tokosidia',
      requiresAuth: true
    }

  },
  {
    path: '/p',
    name: 'Category',
    component: Category,
    meta: {
      title: 'Daftar Produk | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/p/:listcategory',
    name: 'Listcategory',
    component: Listcategory,
    meta: {
      title: 'Jual | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/p/:listcategory/:subcategory',
    name: 'Subcategory',
    component: Subcategory,
    meta: {
      title: ' Jual | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList,
    meta: {
      title: 'Daftar Transaksi | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/people/:id',
    name: 'People',
    component: People,
    meta: {
      title: 'User Detail | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/people/:id/edit',
    name: 'PeopleEdit',
    component: PeopleEdit,
    meta: {
      title: 'Ubah Profil | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/:storename',
    name: 'Store Detail',
    component: StoreDetail,
    meta: {
      title: 'Rincian Toko | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '/:storename/:productname',
    name: 'Product Detail',
    component: ProductDetail,
    meta: {
      title: 'Rincian Produk | Tokosidia',
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: PageNotFound,
    meta: {
      title: 'Halaman Tidak Ditemukan | Tokosidia',
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLogin) next({ name: 'Login' })
  else next()
  if (to.matched.some(record => record.meta.requiresVisitor) && store.getters.isLogin) next({ name: 'Home' })
  else next()
})

export default router
