<template>
  <div class="store-detail wrapper">
    <div class="header">
      <div class="header-wrapper">
        <div class="header-img">
          <img src="@/assets/img/contoh-header-img.jpg">
        </div>
        <div class="header-info">
          <div class="info-wrapper">
            <div class="store-info1">
              <div class="profile-photo">
                <img src="@/assets/img/contoh-foto-profil.jpg">
              </div>
              <div class="detail">
                <div class="store-name">
                  <h2>Vengoz</h2>
                  <div class="gold">
                    <img src="@/assets/img/gold-4.gif">
                  </div>
                  <div class="help">
                    <img src="@/assets/img/help.png">
                  </div>
                </div>
                <div class="info-detail">
                  <div class="time-chatting">
                    <p>Dibalas &plusmn; 3 jam</p>
                  </div>
                  <div class="location">
                    <img src="">
                    <p>Jakarta Utara</p>
                  </div>
                  <div class="followers">
                    <p>62.8K Followers</p>
                  </div>
                </div>
                <div class="info-btn">
                  <button class="btn btn-primary" >Follow</button>
                  <button class="btn btn-primary" >Chat Penjual</button>
                  <button class="btn btn-flat" >Info Toko</button>
                  <button class="btn btn-flat note" >
                    <div>
                      <img src="@/assets/img/paste.png">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="store-info2">
              <div class="product-sold">
                <h3>Produk Terjual</h3>
                <div class="number-sold">
                  18.3K
                </div>
              </div>
              <div class="product-quality">
                <h3>Nilai Kualitas Produk</h3>
                <div class="score-quality">
                  <div class="score-number">4.8</div>
                  <div class="score-stars">
                    <img src="@/assets/img/star.png">
                    <img src="@/assets/img/star.png">
                    <img src="@/assets/img/star.png">
                    <img src="@/assets/img/star.png">
                    <img src="@/assets/img/star.png">
                  </div>
                  <span>(8242 Ulasan)</span>
                </div>
                <div class="store-statistic">
                  <p>Lihat statistik toko</p>
                </div>
              </div>
              <div class="share-btn">
                <button>
                  <div>
                    <img src="@/assets/img/share.png">
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
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
    <div class="path">
      <ul>
        <li>
          <router-link to="/">Official Store</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/">Brand</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <router-link to="/">Vengoz</router-link>
          <img src="@/assets/img/arrow-triangle.png">
        </li>
        <li>
          <p>Produk</p>
        </li>
      </ul>
    </div>
    <div class="product-list">
      <aside>
        <div class="info-store">
          <div class="box voucher">
            <div class="box-header">
              <h5>Voucher</h5>
              <div class="dropdown" :class="{ rotate: dropVoucher }"
                   @click="dropVoucher = !dropVoucher">
                <img src="@/assets/img/v.png">
              </div>
            </div>
            <div class="box-body">
            </div>
          </div>
          <div class="box etalase">
            <h5>Etalase Toko</h5>
            <div class="box-body">
              <ul>
                <li>
                  <router-link to="/">Semua Produk</router-link>
                </li>
                <li>
                  <router-link to="/">Diskon</router-link>
                </li>
                <li>
                  <router-link to="/">Produk Terjual</router-link>
                </li>
                <li>
                  <router-link to="/">Semua Produk</router-link>
                </li>
                <li>
                  <router-link to="/">Diskon</router-link>
                </li>
                <li>
                  <router-link to="/">Produk Terjual</router-link>
                </li>
                <li>
                  <router-link to="/">Semua Produk</router-link>
                </li>
                <li>
                  <router-link to="/">Diskon</router-link>
                </li>
                <li>
                  <router-link to="/">Produk Terjual</router-link>
                </li>
                <li>
                  <router-link to="/">Semua Produk</router-link>
                </li>
                <li>
                  <router-link to="/">Diskon</router-link>
                </li>
                <li>
                  <router-link to="/">Produk Terjual</router-link>
                </li>
                <li>
                  <router-link to="/">Semua Produk</router-link>
                </li>
                <li>
                  <router-link to="/">Diskon</router-link>
                </li>
                <li>
                  <router-link to="/">Produk Terjual</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div class="product-list-wrap">
        <div class="pagination-search-sort">
          <div class="search">
            <form @submit.prevent>
              <input type="text" placeholder="Cari es batu">
              <button><img src="@/assets/img/search.png" class="icon-search"></button>
            </form>
          </div>
          <div class="sort">
            <label for="sort">Urutkan</label>
            <select id="sort">
              <option selected>Paling Sesuai</option>
              <option value="1">Terbaru</option>
              <option value="2">Harga Tertinggi</option>
              <option value="3">Harga Terendah</option>
              <option value="4">Ulasan Terbanyak</option>
              <option value="5">Pembelian Terbanyak</option>
              <option value="6">Dilihat Terbanyak</option>
              <option value="7">Pembaruan Terakhir</option>
            </select>
          </div>
        </div>
        <div class="title-etalase">
          <h2>Semua Produk</h2>
        </div>
        <div class="products">
          <div v-for="item in 3" :key="item" class="card-product">
            <router-link to="/">
              <div class="whitelist">
                <div class="love">
                  <img src="">
                </div>
              </div>
              <div class="card-wrap">
                <div class="card-img">
                  <img src="@/assets/img/contoh-img-product.jpg">
                </div>
                <div class="card-body">
                  <div class="super"
                       :style="{ backgroundImage: `url(${require('@/assets/img/unggulan.png')})` }">
                    <span class="unggulan">Produk Unggulan</span>
                    <span class="title-product">Jeans ENERGIE Slim Fit Original 100% SALE</span>
                    <div class="prices">
                      <div class="discount">
                        <div class="discount-number" >76%</div>
                        <div class="discount-price">Rp. 889.000</div>
                      </div>
                      <div class="product-price">
                        <span>Rp. 213.360</span>
                      </div>
                    </div>
                    <div class="rating">
                      <div class="stars">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                      </div>
                      <span class="testimo-total">(183)</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div v-for="item in 40" :key="item" class="card-product">
            <router-link to="/">
              <div class="whitelist">
                <div class="love">
                  <img src="">
                </div>
              </div>
              <div class="card-wrap">
                <div class="card-img">
                  <img src="@/assets/img/contoh-img-product.jpg">
                </div>
                <div class="card-body">
                  <div class="common"
                       :style="{ backgroundImage: `url(${require('@/assets/img/unggulan.png')})` }">
                    <!-- <span class="unggulan">Produk Unggulan</span> -->
                    <span class="title-product">Jeans ENERGIE Slim Fit Original 100% SALE</span>
                    <div class="prices">
                      <div class="discount">
                        <div class="discount-number" >76%</div>
                        <div class="discount-price">Rp. 889.000</div>
                      </div>
                      <div class="product-price">
                        <span>Rp. 213.360</span>
                      </div>
                    </div>
                    <div class="rating">
                      <div class="stars">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                        <img src="@/assets/img/star.png">
                      </div>
                      <span class="testimo-total">(183)</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="pagination-limit">
          <div class="limit">
            <span>Jumlah produk per halaman</span>
            <span>
              <router-link to="/">20</router-link>
            </span>
            <span>
              <router-link to="/">40</router-link>
            </span>
            <span class="current">
              <router-link to="/">80</router-link>
            </span>
          </div>
          <div class="prev-next">
            <ul>
              <router-link to="/">&lsaquo;</router-link>
              <router-link to="/">&rsaquo;</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Store Detail',
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
.header {
  padding: 23px 0 16px;
}
.header-wrapper {
  position: relative;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.108);
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px 20px 10px 10px;
  .header-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 300px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .header-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgb(255, 255, 255);
    height: 138px;
    border-radius: 40px 40px 0 0;
    .info-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 16px 24px;
      .store-info1 {
        display: flex;
        width: 50%;
        height: 100%;
        .profile-photo {
          width: 86px;
          height: 86px;
          overflow: hidden;
          border-radius: 43px;
          border: 6px solid white;
          transform: translateY(-40px);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 75%;
          height: 100%;
          padding-left: 24px;
          .store-name {
            display: flex;
            align-items: center;
            h2 {
              font-size: 20px;
              font-weight: bold;
              color: #3d3d3d;
              text-transform: uppercase;
            }
            .gold {
              margin-left: 8px;
              height: 17px;
              cursor: pointer;
              img {
                object-fit: cover;
              }
            }
            .help {
              margin-left: 4px;
              height: 14px;
              align-self: flex-end;
              cursor: pointer;
              img {
                object-fit: cover;
                height: 100%;
              }
            }
          }
          .info-detail {
            display: flex;
            p {
              font-size: 12px;
              color: #6e6e6e;
            }
            .time-chatting {
              padding-right: 10px;
              border-right: 1px solid #dadada;
            }
            .location {
              display: flex;
              padding: 0 10px;
            }
            .followers {
              padding-left: 10px;
              border-left: 1px solid #dadada;
              p {
                font-weight: bold;
                color: #414141;
              }
            }
          }
          .info-btn {
            display: flex;
            align-items: center;
            .btn {
              width: 115px;
              height: 32px;
              font-weight: 700;
              border-radius: 8px;
              margin-right: 15px;
              &:last-child {
                margin-right: 0;
              }
            }
            .btn-flat {
              color: #979797;
              border: 1px solid #d4d4d4;
              background-color: white;
              width: auto;
              padding: 0 14px;
              &.note {
                padding: 0 5px;
                div {
                  height: 20px;
                  img {
                    object-fit: cover;
                    height: 100%;
                    opacity: 0.56;
                  }
                }
              }
            }
            .btn-primary {
              color: white;
              border: 1px solid #03ac0c;
              background-color: #03ac0c;
            }
          }
        }
      }
      .store-info2 {
        position: relative;
        display: flex;
        width: 50%;
        height: 80%;
        border-left: 1px solid #d4d4d4;
        padding-left: 40px;
        h3 {
          line-height: 1.5;
          font-size: 14px;
          color: #535353;
          margin-bottom: 8px;
        }
        .number-sold,
        .score-number {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 800;
          font-size: 24px;
          color: #414141;
        }
        .product-quality {
          padding-left: 56px;
          .score-quality {
            display: flex;
            align-items: center;
            .score-stars {
              margin-left: 8px;
              img {
                object-fit: cover;
                height: 25px;
                width: 25px;
              }
            }
            span {
              font-family: 'Nunito Sans', sans-serif;
              margin-left: 8px;
              font-size: 12px;
              font-weight: 800;
              color: rgb(112, 112, 112);
            }
          }
          .store-statistic {
            margin-top: 10px;
            letter-spacing: -0.3px;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #03ac0e;
            cursor: pointer;
          }
        }
        .share-btn {
          position: absolute;
          right: 0;
          bottom: 8px;
          button {
            width: 32px;
            height: 32px;
            border: 1px solid #d4d4d4;
            border-radius: 100px;
            padding: 5px;
            div {
              width: 15px;
              height: 15px;
              img {
                object-fit: cover;
                width: 100%;
                margin-left: 2px;
                opacity: .5;
              }
            }
          }
        }
      }
    }
  }
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
.nav-store .active {
  border-bottom: 2px solid #03ac0e;
  p {
    color: #03ac0e;
  }
}
.path {
  padding-top: 20px;
  ul {
    margin: 0 16px 20px;
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
.product-list {
  display: flex;
  flex-wrap: nowrap;
  min-height: 1000px;
  padding-bottom: 60px;
  aside {
    width: 270px;
    .info-store {
      position: sticky;
      top: 100px;
      h5 {
        font-weight: 800;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        color: #464646;
        margin-bottom: 16px;
      }
      .dropdown {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        img {
          margin-top: -5px;
          margin-right: -5px;
          width: 25px;
          opacity: .4;
          transition: transform .3s;
        }
        &.rotate {
          img {
            transform: rotate(180deg);
          }
        }
      }
      .box {
        min-height: 140px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.197);
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 8px;
        .box-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          height: 30px;
          h5 {
            margin-bottom: auto;
            display: inline-block;
          }
        }
      }
      .box.etalase {
        height: 450px;
        .box-body {
          height: 400px;
          overflow: auto;
          ul {
            > li {
              margin-bottom: 2px;
              a {
                display: block;
                line-height: 1.5;
                width: 100%;
                padding: 8px 16px;
                font-size: 14px;
                color: rgb(46, 46, 46);
                border-radius: 5px;
                &:hover {
                  font-weight: bold;
                  background-color: #f8f8f8
                }
              }
            }
          }
        }
      }
    }
  }
  .product-list-wrap {
    width: 930px;
    padding-left: 12px;
    .pagination-search-sort {
      display: flex;
      justify-content: space-between;
      .search {
        width: 300px;
        form {
          border: 1px solid #dddddd;
          border-radius: 7px;
          display: flex;
          overflow: hidden;
          transition: .4s;
          &:active {
            border: 1px solid #03ac0e;
          }
          input {
            font-size: 14px;
            color: #929292;
            background-color: transparent;
            outline: none;
            border: none;
            padding: 7px 12px;
            width: 100%;
          }
          button {
            background-color: #dadada;
            width: 43px;
            border: none;
            .icon-search {
              height: 23px;
              width: 23px;
              margin-top: 4px;
              opacity: .3;
            }
          }
        }
      }
      .sort {
        label {
          margin-right: 20px;
        }
      }
    }
    .title-etalase {
      margin: 24px 0 16px;
      h2 {
        font-size: 15px;
        font-weight: bold;
        line-height: 1.5;
      }
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      .card-product {
        width: 176px;
        height: 342px;
        margin: 0 7px 10px 0;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.122);
        border-radius: 8px 8px 3px 3px;
        overflow: hidden;
        a {
          width: 100%;
          height: 100%;
          position: relative;
          .whitelist {
            position: absolute;
          }
          .card-wrap {
            .card-img {
              width: 100%;
              height: 176px;
              overflow: hidden;
              img {
                object-fit: cover;
                width: 100%;
                background-position: center;
              }
            }
            .card-body {
              width: 100%;
              height: 342px - 176px;
              .super {
                padding: 8px;
                width: 100%;
                height: 100%;
                line-height: 1.3;
                background-position: top center;
                background-size: contain;
                background-repeat: no-repeat;
              }
              .common {
                padding: 8px;
                width: 100%;
                height: 100%;
                line-height: 1.3;
                background-position: top center;
                background-size: 0;
                background-repeat: no-repeat;
              }
              .unggulan {
                font-size: 10px;
                font-weight: bold;
                color: #03ac0e;
                display: flex;
                flex-direction: column;
                line-height: 1.7;
              }
              .title-product {
                font-size: 14px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.7);
              }
              .prices {
                .discount {
                  display: flex;
                  align-items: center;
                  margin: 4px 0;
                  .discount-number {
                    font-size: 10px;
                    font-weight: bold;
                    background-color: #FFEAEF;
                    color: #FF5C8F;
                    padding: 2px 4px;
                    border-radius: 3px;
                  }
                  .discount-price {
                    margin-left: 4px;
                    font-size: 10px;
                    color: rgb(191, 191, 191);
                    text-decoration: line-through;
                  }
                }
                .product-price {
                  span {
                    font-size: 14px;
                    font-weight: bold;
                    color: #FA591D;
                  }
                }
              }
              .rating {
                display: flex;
                align-items: center;
                margin: 4px 0;
                .stars {
                  display: flex;
                  align-items: center;
                  img {
                    width: 14px;
                    margin: 0.5px;
                  }
                }
                span {
                  margin-left: 2px;
                  color:rgb(177, 177, 177);
                }
              }
            }
          }
        }
      }
    }
    .pagination-limit {
      margin-top: 16px;
      padding: 20px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span, a {
        font-size: 14px;
        color: rgb(105, 105, 105);
      }
      span {
        padding: 5px 10px;
        a {
          color: rgb(68, 68, 68);
        }
        &.current {
          a {
            padding: 5px 10px;
            background-color: rgb(177, 177, 177);
            color: white;
            font-weight: bold;
            border-radius: 3px;
          }
        }
      }
      .prev-next {
        ul {
          a {
            margin-left: 10px;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            border: 1px solid rgb(181, 181, 181);
            font-size: 40px;
            line-height: 30px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
