<template>
  <div class="wrapper">
    <div class="carousel"></div>
    <div class="header">
      <div class="first">
        <div class="category-suggestion">
          <h3>Kategori Pilihan</h3>
          <div class="img-category">
            <div v-for="item in 4" :key="item.id" class="img-item">
              <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" width="120px" alt="">
            </div>
          </div>
        </div>
        <div class="topup">
          <div class="topup-header">
            <h3>Top-Up & Tagihan</h3>
            <p>Lihat Semua</p>
          </div>
          <div class="topup-main">
            <div class="navigation">
              <ul>
                <li>Pulsa</li>
                <li>Paket Data</li>
                <li>Listrik PLN</li>
                <li>Flight</li>
              </ul>
              <hr>
            </div>
            <div class="input-section">
              <div>
                <label for="">Nomor Telepon</label>
                <input type="text" placeholder="01298403198401">
              </div>
              <div>
                <label for="">Nominal</label>
                <select name="" id="" disabled>
                  <option value="">Pilih</option>
                </select>
              </div>
              <button disabled>Beli</button>
            </div>
          </div>
        </div>
      </div>
      <div class="second">
        <button v-for="item in 10" :key="item.id">
          <img src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/8/27/20723472/20723472_f54f6a04-c778-4b88-8bc8-4fa9556383dc.png.webp" width="24" alt="">
          <p>Belanja</p>
        </button>
      </div>
    </div>
    <div class="most-wanted">
      <div class="first">
        <h3>Paling Banyak Dicari</h3>
        <p>
          <i class="fas fa-redo"></i>
          Muat Lainnya
        </p>
      </div>
      <div class="main">
        <div v-for="item in 4" :key="item.id" class="item-container">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/catalog/2017/1/12/15524491/15524491_1203c267-d9b5-4f23-8ccd-2f4fb9e7e369.png.webp" width="64px" alt="">
          <div>
            <h4>PS4</h4>
            <p>24rb Produk</p>
          </div>
        </div>
      </div>
    </div>
    <div class="diskon-ala-ala"></div>
    <div class="banner">
      <div class="left">
        <div class="first">
          <h3>Official Store</h3>
          <p>Lihat Semua</p>
        </div>
        <div class="main">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/24/71149346/71149346_161b34c5-12bd-4c30-a9af-3193a86d864f.jpg.webp" alt="">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/24/71149346/71149346_b8606f23-a93a-41e7-8849-6746a70d1d18.jpg.webp" alt="">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/24/71149346/71149346_0f6c61d1-ad1d-4abe-adc4-d81f64b4b937.jpg.webp" alt="">
        </div>
      </div>
      <div class="right">
        <div class="first">
          <h3>Lengkapi Persediaanmu</h3>
        </div>
        <div class="main">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_7d2dccd9-b1da-4ff2-9026-297609e87cc9.jpg.webp" alt="">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_65a980b5-957b-40dd-938a-c63d86e3ac01.jpg.webp" alt="">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2020/4/17/88321389/88321389_9f94f494-0114-4b92-9015-c29a11e7b64a.jpg.webp" alt="">
        </div>
      </div>
    </div>
    <div class="products-section">
      <div class="product-nav">
        <div class="nav-item" v-for="item in 5" :key="item.id">
          Special Discount
        </div>
      </div>
      <div class="all-products">
        <CardProduct class="product-item" v-for="item in products.data" :key="item.id" :data="item" :storeName="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CardProduct from '@/components/CardProduct'

export default {
  name: 'Home',
  components: {
    CardProduct
  },
  created () {
    this.$store.dispatch('loadProducts')
  },
  computed: mapState([
    'products'
  ])
}
</script>

<style lang="scss" scoped>

h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
}
.wrapper {
  padding: 50px 0;
  .header {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    border: none;
    background-color: #FFFFFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .first {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .category-suggestion {
        width: 47%;
        .img-category {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 5px;
          .img-item {
            padding: 2px;
            border: 1px solid lightgray;
            border-radius: 10px;
          }
        }
      }
      .topup {
        width: 47%;
        .topup-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          p {
            color: #03AC0e;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .topup-main {
          border: 1px solid lightgray;
          border-radius: 5px;
          padding: 10px;
          .navigation {
            ul {
              display: flex;
              flex-direction: row;
              li {
                margin: 5px 25px;
                font-size: 12px;
                color: lightgray;
              }
              li:nth-child(1) {
                color: #03AC0e;
              }
            }
            hr {
              margin: 10px -10px;
            }
          }
          .input-section {
            display: flex;
            flex-direction: row;
            div {
              display: flex;
              flex-direction: column;
              margin-right: 20px;
              label {
                font-weight: 700;
                color: gray;
                margin-bottom: 10px;
              }
              input {
                padding: 10px;
                border-radius: 5px;
                color: lightgray;
                border: 1px solid lightgray;
              }
              select {
                width: 200px;
                padding: 10px;
                border-radius: 5px;
                background-color: lightgray;
              }
            }
            button {
              padding: 10px 20px;
              background-color: lightgray;
              border: none;
              margin-top: 22px;
              border-radius: 5px;
            }
          }
        }
      }
    }
    .second {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid lightgray;
        padding: 6px 12px;
        font-size: 14px;
        color: lightgray;
        border-radius: 30px;
        margin-right: 10px;
      }
    }
  }
  .most-wanted {
    margin-top: 50px;
    .first {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      p {
        color: #03AC0e;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .main {
      display: flex;
      flex-direction: row;
      .item-container {
        width: 25%;
        display: flex;
        flex-direction: row;
        padding: 10px;
        margin: 0 5px;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
        div {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          h4 {
            font-weight: 700;
          }
          p {
            margin-top: 10px;
            color: lightgray;
          }
        }
      }
    }
  }
  .banner {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 47%;
      .first {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p {
          color: #03AC0e;
          font-weight: 700;
          font-size: 14px;
        }
      }
      .main {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        img {
          width: 187px;
        }
      }
    }
    .right {
      width: 47%;
      .main {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        img {
          width: 187px;
        }
      }
    }
  }
  .products-section {
    margin-top: 50px;
    .product-nav {
      display: flex;
      flex-direction: row;
      .nav-item {
        background: rgb(2,0,36);
        background: linear-gradient(256deg, rgba(2,0,36,1) 0%, rgba(50,71,255,1) 0%, rgba(187,33,186,1) 100%);
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 70px 40px 10px;
        border-radius: 10px;
        margin-right: 10px;
      }
    }
    .all-products {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .product-item {
        margin-right: 23px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
