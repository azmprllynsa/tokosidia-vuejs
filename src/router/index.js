import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
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
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Masuk / Login | Tokosidia'
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
    path: '/cart/shipment',
    name: 'Shipment',
    component: Shipment,
    meta: {
      title: 'Checkout | Tokosidia'
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
    path: '/p/:listcategory',
    name: 'Listcategory',
    component: Listcategory,
    meta: {
      title: 'Jual | Tokosidia'
    }
  },
  {
    path: '/p/:listcategory/:subcategory',
    name: 'Subcategory',
    component: Subcategory,
    meta: {
      title: ' Jual | Tokosidia'
    }
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList,
    meta: {
      title: 'Daftar Transaksi | Tokosidia'
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
      title: 'Rincian Toko | Tokosidia'
    }
  },
  {
    path: '/:storename/:productname',
    name: 'Product Detail',
    component: ProductDetail,
    meta: {
      title: 'Rincian Produk | Tokosidia'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
