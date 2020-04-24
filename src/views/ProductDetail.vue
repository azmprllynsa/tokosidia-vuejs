<template>
  <div class="product-detail wrapper">
    <div class="path">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/">Category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/">Sub-category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/">Sub-sub-category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <p>Nama Produk</p>
        </li>
      </ul>
    </div>
    <div class="product-detail-wrapper">
      <div class="product-img">
        <div class="product-img-wrapper">
          <div class="img-primary">
            <img src="@/assets/img/contoh-img-product.jpg">
          </div>
          <div class="img-part">
            <div class="img img-1">
              <img src="@/assets/img/contoh-img-product.jpg">
            </div>
            <div class="img img-2">
              <img src="@/assets/img/contoh-img-product.jpg">
            </div>
            <div class="img img-3">
              <img src="@/assets/img/contoh-img-product.jpg">
            </div>
            <div class="img img-4">
              <img src="@/assets/img/contoh-img-product.jpg">
            </div>
            <div class="img img-5">
              <img src="@/assets/img/contoh-img-product.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="product-detail-info">
      </div>
    </div>
    <div class="nav-store">
      <div class="home">
        <p>Beranda</p>
      </div>
      <div class="product active">
        <p>Produk</p>
      </div>
      <div class="testimo">
        <p>Ulasan</p>
      </div>
      <div class="product-discuss">
        <p>Diskusi Produk</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product-detail',
  data () {
    return {
      dropVoucher: false
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
  padding-bottom: 60px;
}
.nav-store {
  border-bottom: 1px solid #cacaca;
  display: flex;
  div {
    padding: 16px 24px;
    cursor: pointer;
    &:hover > p {
      color: #03ac0e;
    }
    > p {
      line-height: 1.5;
      color: #c2c2c2;
    }
  }
}
.product-detail-wrapper {
  display: flex;
}
.product-img {
  width: 446px;
}
.img-primary {
  width: 446px;
  height: 446px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.img-part {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .img {
    width: 72px;
    height: 72px;
    margin: 8px;
    img {
      width: 100%;
    }
  }
}
.nav-store .active {
  border-bottom: 2px solid #03ac0e;
  p {
    color: #03ac0e;
  }
}
.path {
  padding-top: 20px;
  ul {
    margin: 0 0px 10px;
    height: 60px;
    display: flex;
    align-items: center;
    > li {
      display: flex;
      align-items: center;
      a {
        color: #03ac0e;
      }
      img {
        height: 10px;
        padding: 0px 4px;
        margin: 0px 8px;
        opacity: .3;
      }
      p {
        color: #7e7e7e;
      }
    }
  }
}
</style>
