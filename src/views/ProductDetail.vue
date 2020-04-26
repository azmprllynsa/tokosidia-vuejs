<template>
  <div class="product-detail wrapper">
    <div class="path">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/p/kategori">Category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/p/kategori/subkategori">Sub-category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/p/kategori/subkategori/subsubkategori">Sub-sub-category</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <p>{{ productDetail.name }}</p>
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
        <div>
          <div class="label-store">
            <img src="@/assets/img/label-store-icon.svg">
            <p class="label-name">Official Store</p>
          </div>
          <h2 class="product-name">{{ productDetail.name }}</h2>
          <div class="product-score">
            <div class="score">
              <p>{{ productDetail.rating + '.0' }}</p>
              <div class="stars">
                <img v-for="star in parseInt(productDetail.rating)" :key="star" src="@/assets/img/star.png" alt="">
              </div>
              <p>(184)</p>
            </div>
            <p class="dot">&#8226;</p>
            <div class="sold">
              <p><strong>Terjual 399 Produk</strong> (100%)</p>
            </div>
            <p class="dot">&#8226;</p>
            <div class="seen"><p><strong>54238x</strong> Dilihat</p></div>
          </div>
          <div class="product-guarantee">
            <div class="ready">
              <img src="@/assets/img/ready-icon.svg">
              <p>Pasti Ready</p>
            </div>
            <div class="original">
              <img src="@/assets/img/ori-icon.svg">
              <p>Pasti Ori</p>
            </div>
            <div class="guarantee">
              <img src="@/assets/img/guarantee-7-icon.svg">
              <p>Garansi 7 hari</p>
            </div>
          </div>
        </div>
        <div class="detail-group product-price">
          <div class="left-header">
            <p>HARGA</p>
          </div>
          <div class="right-description">
            <div class="discount">
              <div class="amount-discount">76%</div>
              <p>Rp. 889.000</p>
            </div>
            <div class="price">
              <p>Rp. {{ productDetail.price }}</p>
            </div>
            <div class="price-guarantee">
              <img src="@/assets/img/rp-icon.svg">
              <p>Garansi harga termurah</p>
            </div>
          </div>
        </div>
        <div class="detail-group amount-buy">
          <div class="left-header">
            <p>JUMLAH</p>
          </div>
          <div class="right-description">
            <p class="counter-label">Stok tersedia</p>
            <div class="counter">
              <div class="counter-box">
                <img v-if="buttonEnabled" @click="decrement" :src="require(`@/assets/img/counter-minus.svg`)">
                <img v-if="!buttonEnabled" @click="decrement" :src="require(`@/assets/img/counter-minus-disabled.svg`)">
                <input v-model="amount" type="number" @input="toggleCounter">
                <img @click="increment" src="@/assets/img/counter-plus.svg">
              </div>
            </div>
          </div>
        </div>
        <div class="detail-group product-promo">
          <div class="left-header">
            <p>PROMO</p>
          </div>
        </div>
        <div class="detail-group product-info">
          <div class="left-header">
            <p>INFO PRODUK</p>
          </div>
          <div class="right-description">
            <div class="weight">
              <p>Berat</p>
              <span>{{ productDetail.weight }}</span>
            </div>
            <div>
              <p>Kondisi</p>
              <span>{{ productDetail.condition }}</span>
            </div>
            <div>
              <p>Asuransi</p>
              <span>Opsional</span>
            </div>
            <div class="etalase">
              <p>Etalase</p>
              <span @click="etalaseDrop = !etalaseDrop" >Jeans Energie <img src="@/assets/img/v.png" :class="{ 'drop-open': etalaseDrop }"></span>
              <div :class="{ 'drop-open': etalaseDrop }" class="drop-etalase">
                <ul>
                  <li>Semua Etalase</li>
                  <li v-for="etalase in 5" :key="etalase">Celana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-group shipping">
          <div class="left-header">
            <p>ONGKOS KIRIM</p>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-store">
      <div class="description active">
        <p>Deskripsi</p>
      </div>
      <div class="testimo">
        <p>Ulasan</p>
      </div>
      <div class="discuss">
        <p>Diskusi</p>
      </div>
      <div class="recommend-discuss">
        <p>Rekomendasi</p>
      </div>
    </div>
    <div id="description">
      <p>{{ productDetail.description }}</p>
    </div>
    <div class="navbar-bottom">
      <div class="navbar-bottom-wrapper">
        <div class="store-detail">
          <div class="group-store-name">
            <img src="@/assets/img/seller_no_logo_1.png">
            <div class="store-name">
              <div class="group-name">
                <h1>{{ sellerDetail.name }}</h1>
                <img src="@/assets/img/gold-4.gif">
              </div>
              <div class="store-info">
                <span>{{ sellerDetail.address }}</span>
                <span class="dot-small">&#8226;</span>
                <span>Aktfi 7 jam yang lalu</span>
                <span class="dot-small">&#8226;</span>
                <span>Dibalas &plusmn; 2 menit</span>
              </div>
            </div>
          </div>
          <button @click="follow" >Ikuti</button>
        </div>
        <div class="checkout-info">
          <div class="total">
            <p>Total</p>
            <h2>Rp. {{ totalPrice }}</h2>
          </div>
          <button @click="wishlist" class="love-flat"><img src="@/assets/img/love-flat.svg"></button>
          <button @click="shipment" class="putih-oren">Beli</button>
          <button @click="cart" class="oren-putih">Tambah Ke Keranjang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'product-detail',
  data () {
    return {
      dropVoucher: false,
      amount: 1,
      buttonEnabled: false,
      etalaseDrop: false,
      productDetail: {},
      sellerDetail: {}
    }
  },
  computed: {
    totalPrice () {
      return parseInt(this.productDetail.price) * this.amount
    }
  },
  components: {
  },
  methods: {
    decrement () {
      if (this.amount <= 1) {
        this.amount = 1
        return
      }
      this.amount--
      this.toggleCounter()
    },
    increment () {
      if (this.amount >= this.productDetail.stock_product) {
        this.amount = this.productDetail.stock_product
        return
      }
      this.amount++
      this.toggleCounter()
    },
    toggleCounter () {
      if (this.amount <= 1) this.buttonEnabled = false
      else this.buttonEnabled = true
    },
    follow () {
      if (!this.$store.getters.isLogin) this.$store.state.modalLogin = true
    },
    cart () {
      if (!this.$store.getters.isLogin) this.$store.state.modalLogin = true
      else this.$router.push('/cart')
    },
    shipment () {
      if (!this.$store.getters.isLogin) this.$store.state.modalLogin = true
      else {
        const dataShipment = {
          amount: this.amount,
          totalPrice: parseInt(this.productDetail.price) * this.amount,
          totalWeight: parseInt(this.productDetail.weight.match(/[0-9]/g).join('')) * this.amount,
          product: this.productDetail,
          store: this.sellerDetail
        }
        this.$store.commit('MOVE_TO_SHIPMENT', dataShipment)
        this.$router.push('/cart/shipment')
      }
    },
    wishlist () {
      if (!this.$store.getters.isLogin) this.$store.state.modalLogin = true
    },
    getProductDetail () {
      Axios.get(`${process.env.VUE_APP_URL_API}product/${this.$route.params.idProduct}`)
        .then(res => {
          this.productDetail = res.data.data
        })
    },
    getSellerDetail () {
      Axios.get(`${process.env.VUE_APP_URL_API}seller/${this.$route.params.idStore}`)
        .then(res => {
          this.sellerDetail = res.data.data
        })
    }
  },
  created () {
    this.getProductDetail()
    this.getSellerDetail()
  }
}
</script>

<style lang="scss" scoped>
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
.product-detail {
  padding-bottom: 60px;
}
.product-detail-wrapper {
  display: flex;
  padding-bottom: 40px;
}
.product-img {
  width: 446px;
}
.product-img-wrapper {
  position: sticky;
  top: 100px;
}
.img-primary {
  width: 446px;
  height: 446px;
  overflow: hidden;
  img {
    width: 100%;
    cursor:crosshair;
  }
}
.img-primary, .img-part {
  img {
    border-radius: 12px;
  }
}
.img-part {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  border-top: .8px solid rgba(0, 0, 0, 0.163);
  .img {
    width: 72px;
    height: 72px;
    margin: 8px;
    img {
      cursor: pointer;
      width: 100%;
      &:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, .3);
      }
    }
  }
}
.product-detail-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 60px;
  line-height: normal;
  .label-store {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    img {
      height: 16px;
    }
    p {
      margin-left: 6px;
      font-size: 12px;
      font-weight: 700;
      color: #7A08C9;
    }
  }
  .product-name {
    margin: 12px 0;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 800;
    color: #31353B;
  }
  .product-score {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      color: rgba(0, 0, 0, .5);
    }
    strong {
      font-size: 14px;
      font-weight: bold;
      color: rgba(0, 0, 0, .5);
    }
    .score {
      display: flex;
      align-items: center;
    }
    .dot {
      margin: 0 6px;
      font-size: 12px;
      font-weight: 800;;
    }
    .score {
      .stars {
        margin: 0 3px;
        display: flex;
        align-items: center;
        img {
          height: 17px;
        }
      }
    }
  }
  .product-guarantee {
    margin: 14px 0 20px;
    display: flex;
    align-items: center;
    .ready, .original, .guarantee {
      display: flex;
      align-items: center;
      margin-right: 16px;
      p {
        color: rgb(125, 125, 125);
      }
    }
    img {
      margin-right: 4px;
      height: 18px;
    }
  }
  .detail-group {
    display: flex;
    padding: 20px 0;
    border-top: .8px solid rgba(0, 0, 0, 0.163);
  }
  .left-header {
    width: 70px;
    p {
      color: rgba(0, 0, 0, 0.258);
      font-weight: bold;
    }
  }
  .right-description {
    padding-left: 20px;
  }
  .product-price {
    .discount {
      display: flex;
      .amount-discount {
        font-size: 10px;
        font-weight: bold;
        background-color: #FFEAEF;
        color: #FF5C8F;
        padding: 2px 4px;
        border-radius: 3px;
      }
      p {
        margin-left: 4px;
        font-size: 12px;
        color: rgb(191, 191, 191);
        text-decoration: line-through;
      }
    }
    .price {
      p {
        font-size: 24px;
        font-weight: bold;
        color: #FA591D;
      }
    }
    .price-guarantee {
      display: flex;
      align-items: center;
      margin-top: 6px;
      img {
        height: 18px;
        margin-right: 4px;
      }
      p {
        color: rgba(0, 0, 0, .5);
      }
    }
  }
  .amount-buy {
    .counter-label {
      margin-bottom: 10px;
    }
    .counter-box {
      display: flex;
      align-items: center;
      img {
        height: 20px;
        cursor: pointer;
      }
      input {
        outline: none;
        font-size: 16px;
        line-height: 22px;
        width: 70px;
        padding-bottom: 3px;
        text-align: center;
        border: none;
        border-bottom: .8px solid rgba(0, 0, 0, 0.115);
      }
    }
  }
  .product-promo {
    height: 200px;
  }
  .product-info {
    .right-description {
      display: flex;
      div {
        padding: 0 20px;
        border-right: .8px solid rgba(0, 0, 0, 0.204);
        &:firs-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          border-right: none;
        }
      }
      p {
        color: rgba(0, 0, 0, 0.496);
      }
      span {
        margin-top: 4px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, .7);
      }
      .etalase {
        position: relative;
        span {
          display: flex;
          align-items: center;
          color: #03ac0e;
          cursor: pointer;
          img {
            height: 20px;
            opacity: .6;
            margin: 2px 0 0 4px;
            transition: .2s;
            &.drop-open {
              transform: rotate(-180deg);
            }
          }
        }
        .drop-etalase {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.115);
          background-color: white;
          max-height: 0;
          min-width: 170px;
          position: absolute;
          padding: 0;
          top: 50px;
          border-radius: 7px;
          overflow: auto;
          transition: .2s;
          &.drop-open {
            max-height: 150px;
          }
          ul {
            li {
              font-weight: 800;
              font-size: 14px;
              color: rgba(0, 0, 0, 0.656);
              font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
              padding: 5px 20px 5px 9px;
              white-space: nowrap;
              &:hover {
                background-color: rgb(251, 251, 251);
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
#description {
  padding: 40px 0;
  p {
    line-height: normal;
    color: rgba(0, 0, 0, 0.489);
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.nav-store {
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  display: flex;
  div {
    padding: 18px 24px;
    cursor: pointer;
    > p {
      line-height: 1.5;
      color: #c2c2c2;
      font-size: 14px;
      font-weight: bold;
    }
    &:hover > p {
      color: #03ac0e;
    }
  }
}
.nav-store .active {
  border-bottom: 2px solid #03ac0e;
  p {
    color: #03ac0e;
  }
}
.navbar-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  border-radius: 25px 25px 0 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.163);
  z-index: 1;
  background-color: white;
  overflow: hidden;
  .navbar-bottom-wrapper, .store-detail, .checkout-info, .group-store-name, .store-info {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .navbar-bottom-wrapper {
    width: 1200px;
    height: 100%;
    margin: auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      font-size: 14px;
      font-weight: bold;
      height: 40px;
      padding: 0 16px;
      border-radius: 8px;
    }
  }
  .group-store-name {
    img {
      height: 60px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
  .store-name {
    flex-direction: column;
    .group-name {
      display: flex;
      align-items: center;
      margin-bottom: 3px;
      height: 17px;
      h1 {
        font-size: 14px;
        color: #03ac0e;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 5px;
      }
      img {
        height: 18px;
        object-fit: cover;
      }
    }
    .store-info {
      span {
        font-size: 9.8px;
        color: rgba(0, 0, 0, 0.497);
        &.dot-small {
          margin: 0 5px;
        }
      }
    }
  }
  .store-detail {
    justify-content: space-between;
    flex-grow: .2;
    button {
      border: none;
      color: white;
      background-color: #03ac0e;
    }
  }
  .checkout-info {
    margin-left: 30px;
    .total {
      margin-right: 20px;
      p {
        font-size: 12px;
        font-weight: bold;
        color: rgb(125, 125, 125);
        margin-bottom: 4px;
      }
      h2 {
        font-size: 16px;
        font-weight: bold;
      }
    }
    button {
      margin-left: 14px;
    }
    .love-flat {
      border: .9px solid rgba(0, 0, 0, .3);
      display: flex;
      align-items: center;
      img {
        height: 23px;
      }
    }
    .putih-oren {
      background-color: white;
      color: #DC4E1A;
      border: .9px solid #DC4E1A;
      min-width: 90px;
    }
    .oren-putih {
      background-color: #DC4E1A;
      border: none;
      color: white;
    }
  }
}
</style>
