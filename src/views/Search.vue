<template>
  <div class="wrapper">
    <aside>
      <div class="filters">Side bar</div>
    </aside>
    <section class="search-wrapper">
      <div class="search-nav">
        <div @click="searchNavbar = 1" class="product"
             :class="{ active: searchNavbar === 1 }">
          <img :src="require(`@/assets/img/search-product${ searchNavbar === 1 ? '-active' : '' }.svg`)">
          <p :style="{ color: searchNavbar === 1 ? '#42b549' : '' }" >Produk</p>
        </div>
        <div @click="searchNavbar = 2" class="store"
             :class="{ active: searchNavbar === 2 }">
          <img :src="require(`@/assets/img/search-store${ searchNavbar === 2 ? '-active' : '' }.svg`)">
          <p :style="{ color: searchNavbar === 2 ? '#42b549' : '' }" >Toko</p>
        </div>
        <div @click="searchNavbar = 3" class="profile"
             :class="{ active: searchNavbar === 3 }">
          <img :src="require(`@/assets/img/search-profile${ searchNavbar === 3 ? '-active' : '' }.svg`)">
          <p :style="{ color: searchNavbar === 3 ? '#42b549' : '' }" >Profile</p>
        </div>
      </div>
      <div class="search-body">
        <div class="card-list">
          <CardProduct :storeName="true" v-for="(card, i) in 10" :key="i" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'

export default {
  data () {
    return {
      searchNavbar: 1
    }
  },
  components: {
    CardProduct
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 40px 0 100px;
}
.wrapper, .search-nav, .product, .store, .profile, .search-body, .card-list {
  display: flex;
}
aside {
  width: 200px;
  .filters {
    padding: 19px 0;
  }
}
.search-wrapper {
  width: 960px;
  padding-left: 40px;
}
.search-nav {
  border-bottom: .8px solid rgba(0, 0, 0, 0.129);
}
.product, .store, .profile {
  padding: 15px 24px;
  align-items: center;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    opacity: 0;
    width: 0;
    border-bottom: 3px solid #42b549;
    transition: .2s;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    width: 0;
    border-bottom: 3px solid #42b549;
    transition: .2s;
  }
  &.active {
    &::after {
      width: 50%;
      opacity: 1;
    }
    &::before {
      width: 50%;
      opacity: 1;
    }
  }
  img {
    height: 24px;
    object-fit: cover;
    margin-right: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.381);
  }
}
.search-body {
  padding-top: 40px;
  .card-list {
    flex-wrap: wrap;
  }
}
</style>
