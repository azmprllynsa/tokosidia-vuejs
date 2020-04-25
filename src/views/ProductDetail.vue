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
        <div>
          <div class="label-store">
            <img src="@/assets/img/label-store-icon.svg">
            <p class="label-name">Official Store</p>
          </div>
          <h2 class="product-name">Jeans ENERGIE Slim Fit Original 100% SALE</h2>
          <div class="product-score">
            <div class="score">
              <p>4.8</p>
              <div class="stars">
                <img v-for="star in 5" :key="star" src="@/assets/img/star.png" alt="">
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
              <p>Rp. 213.360</p>
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
                <img @click="decrement" :src="require(`@/assets/img/${nameCounter}.svg`)">
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
              <span>650gr</span>
            </div>
            <div>
              <p>Kondisi</p>
              <span>Baru</span>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam officiis numquam optio rerum maxime, dicta soluta repudiandae facere ipsa tempora! Eius, aliquid perferendis sunt nostrum tenetur veritatis! Corporis impedit cum distinctio natus? Magnam eum fuga autem suscipit fugit debitis officia quis sapiente vero expedita totam delectus, eveniet in eius neque ea cupiditate voluptas maxime molestiae esse quaerat architecto ab modi facere. Corrupti aperiam consectetur iusto quam doloremque a officiis! Molestias optio explicabo facilis nam amet enim placeat magni unde. Quo, perferendis dolor numquam sint fugit quisquam excepturi quasi ab pariatur soluta dolore ad debitis modi eum nobis inventore atque?<br></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam officiis numquam optio rerum maxime, dicta soluta repudiandae facere ipsa tempora! Eius, aliquid perferendis sunt nostrum tenetur veritatis! Corporis impedit cum distinctio natus? <br></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product-detail',
  data () {
    return {
      dropVoucher: false,
      amount: 0,
      nameCounter: 'counter-minus-disabled',
      etalaseDrop: false
    }
  },
  components: {
  },
  methods: {
    decrement () {
      if (this.amount <= 0) return
      this.amount--
      this.toggleCounter()
    },
    increment () {
      this.amount++
      this.toggleCounter()
    },
    toggleCounter () {
      if (this.amount <= 0) this.nameCounter = 'counter-minus-disabled'
      else this.nameCounter = 'counter-minus'
    }
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
</style>
