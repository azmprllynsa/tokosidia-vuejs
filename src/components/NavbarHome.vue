<template>
  <header>
    <div class="bg-modal"
         :class="{ fade: hoverCategory || hoverUser }"></div>
    <nav>
      <div class="sub-nav">
        <div class="promo-app">
          <img src="@/assets/img/hp.png">
          <router-link to="/">Download Tokosidia App</router-link>
        </div>
        <div class="promos">
          <router-link to="/">Tentang Tokosidia</router-link>
          <router-link to="/">Mitra Tokosidia</router-link>
          <router-link to="/">Mulai Berjualan</router-link>
          <router-link to="/">Promo</router-link>
          <router-link to="/">Tokosidia Care</router-link>
        </div>
      </div>
      <div class="body-nav">
        <router-link to="/">
          <img src="@/assets/img/tokosidia-logo.png">
        </router-link>
        <div class="category"
             @mouseenter="hoverCategory = true"
             @mouseleave="hoverCategory = false"
        >
          <div class="semi-btn"
               :class="{ onhover: hoverCategory }"
          >Kategori</div>
        </div>
        <SearchBox :placeholder="placeholder[Math.round(Math.random() * 3)]"
                   @getValue="submitSearch" />
        <div v-if="$store.getters.isLogin" class="user-info login">
          <div class="icon">
            <div>
              <img src="@/assets/img/trolly.png">
            </div>
          </div>
          <div class="icon">
            <div>
              <img src="@/assets/img/notification.png">
            </div>
          </div>
          <div class="icon">
            <div>
              <img src="@/assets/img/mail.png">
            </div>
          </div>
          <div class="line"></div>
          <div class="user-info-detail">
            <div class="shop-wrapper">
              <a v-if="peopleDetail.role === '1'">
                <div class="shop">
                  <img src="@/assets/img/shopnophoto.png">
                  <p>Toko</p>
                </div>
              </a>
              <router-link v-if="peopleDetail.role === '2'" :to="'/' + peopleDetail.seller_id">
                <div class="shop">
                  <img src="@/assets/img/seller_no_logo_1.png">
                  <p>{{ peopleDetail.store[0].name || 'Nama Toko' }}</p>
                </div>
              </router-link>
            </div>
            <div @mouseenter="hoverUser = true"
                 @mouseleave="hoverUser = false"
                 class="user-wrapper">
              <router-link :to="'/people/' + peopleDetail.id">
                <div class="user">
                  <img src="@/assets/img/defaultphotouser.jpg">
                  <p>{{ peopleDetail.fullname }}</p>
                </div>
              </router-link>
            </div>
            <div @mouseenter="hoverUser = true"
                 @mouseleave="hoverUser = false" class="modal-user" :class="{ roll: hoverUser }">
              <div class="box-user">
                <img src="@/assets/img/defaultphotouser.jpg">
                <div class="info-user">
                  <h3>{{ peopleDetail.fullname }}</h3>
                  <p>Akun Terverifikasi</p>
                </div>
              </div>
              <div class="box-user-option">
                <div class="left-side">
                  <ul>
                    <li>
                      <router-link to="/">
                        OVO Cash
                        <span>Rp. 0</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/">
                        Aktivasi
                      </router-link>
                    </li>
                    <div class="lineX"></div>
                    <li>
                      <router-link to="/">
                        Saldo
                        <span>Rp. 0</span>
                      </router-link>
                    </li>
                    <div class="lineX"></div>
                    <li>
                      <router-link to="/">
                        Toko Points
                        <span>0 Points</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/">
                        Kupon Saya
                        <span>7</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="right-side">
                  <ul>
                    <li>
                      <router-link to="/order-list">Pembelian</router-link>
                    </li>
                    <li>
                      <router-link to="/">Wishlist</router-link>
                    </li>
                    <li>
                      <router-link to="/">Toko Favorit</router-link>
                    </li>
                    <li>
                      <router-link :to="'/people/' + peopleDetail.id + '/edit'">Pengaturan</router-link>
                    </li>
                  </ul>
                  <ul>
                    <li @click="logout" ><a>Keluar <img src="@/assets/img/log-out.svg"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!$store.getters.isLogin" class="user-info">
          <div class="icon trolly">
            <div>
              <img src="@/assets/img/trolly.png">
            </div>
          </div>
          <div class="line"></div>
          <div class="auth-btn">
            <button @click="$store.state.modalLogin = true" class="btn btn-secondary">Masuk</button>
            <button @click="$router.push('/register')" class="btn btn-primary">Daftar</button>
          </div>
        </div>
      </div>
    </nav>
    <div class="modal-category"
         @mouseenter="hoverCategory = true"
         @mouseleave="hoverCategory = false"
         :class="{ roll: hoverCategory }"
    >
      <div class="modal-category__header">
        <div class="semi-btn active">
          <div>Belanja</div>
        </div>
        <div class="semi-btn ">
          <div>Featured</div>
        </div>
        <div class="semi-btn ">
          <div>Hanya Di Tokosidia</div>
        </div>
        <div class="semi-btn ">
          <div>Keuangan</div>
        </div>
        <div class="semi-btn ">
          <div>Top-Up & Tagihan</div>
        </div>
        <div class="semi-btn ">
          <div>Travel & Entertainment</div>
        </div>
        <div class="semi-btn ">
          <div>Untuk Seller</div>
        </div>
      </div>
      <div class="modal-category__body">
        <div class="list-category__wrapper">
          <div class="list-category">
            <div v-for="(cat, i) in categoryList" :key="i" class="semi-a" @mouseenter="categoryActive(cat)" :class="{ 'category-active': cat.id === currentCategory.id }">
              <a @click="hoverCategory = false" >{{ cat.name || '' }}</a>
            </div>
            <!-- <div class="semi-a">
              <a>Buku</a>
            </div> -->
          </div>
        </div>
        <div class="sub-category__wrapper">
          <div class="sub-category">
            <div class="sub-category__head">
              <img src="@/assets/img/category-book.png">
              <h2>{{ catActived.name || categoryList[0].name || '' }}</h2>
              <!-- <h2>{{ currentCategory.name }}</h2> -->
            </div>
            <div class="sub-category__body">
              <div v-for="(sc, i) in catActived.SubCategory" :key="i" class="list-sub-category">
                <div class="list-sub-category__head">
                  <div @click="hoverCategory = false" class="semi-a">
                    <router-link to="/p/kategori/subkategori">{{ sc.name || '' }}</router-link>
                  </div>
                </div>
                <div v-for="(ssc, i) in sc.SubSubCategory" :key="i" class="list-sub-category__body">
                  <div @click="hoverCategory = false" class="semi-a">
                    <router-link to="/p/kategori/subkategori/subsubkategori">{{ ssc.name || '' }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import SearchBox from '@/components/SearchBox.vue'

export default {
  data () {
    return {
      hoverCategory: false,
      hoverUser: false,
      catActived: {}
    }
  },
  components: {
    SearchBox
  },
  methods: {
    logout () {
      delete localStorage.token
      this.$router.go()
    },
    categoryActive (data) {
      this.catActived = data
      this.$store.dispatch('categoryList')
    },
    submitSearch (data) {
      // console.log(data)
    }
  },
  computed: {
    currentCategory () {
      return this.$store.state.categoryList[0]
    },
    ...mapState([
      'peopleDetail',
      'categoryList',
      'placeholder'
    ])
  }
}
</script>

<style lang="scss" scoped>
.bg-modal {
  position: fixed;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  transition: .2s;
}
.fade {
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.598);
}
.modal-category {
  background-color: white;
  border-top: 1px solid #dfdfdf;
  box-shadow: 0 7px 7px -7px rgba(0, 0, 0, 0.144);
  font-size: 12px;
  color: #929292;
  position: fixed;
  z-index: 3;
  visibility: hidden;
  top: 85px;
  left: 0;
  right: 0;
  height: 0;
  overflow: hidden;
  transition: .4s;
  .modal-category__header {
    display: flex;
    padding: 0 32px;
    border-bottom: 1px solid #dfdfdf;
    .semi-btn {
      padding: 20px;
      cursor: pointer;
      &:hover {
        color: #03ac0c;
      }
    }
  }
  .modal-category__body {
    padding-left: 32px;
    display: flex;
    .list-category__wrapper {
      width: 17%;
      height: 429px;
      border-right: 1px solid #dfdfdf;
      overflow: auto;
      .list-category {
        padding: 0 8px 0 0;
        .semi-a {
          margin-top: 8px;
          border-radius: 4px;
          display: flex;
          transition: .2s;
          a {
            width: 100%;
            padding: 8px 14px;
            color: rgb(39, 39, 39);
            font-weight: 600;
            cursor: pointer;
          }
          &:hover {
            background-color: #f3f3f3;
          }
          &.category-active {
            background-color: #f3f3f3;
          }
        }
      }
    }
    .sub-category__wrapper {
      width: 83%;
      height: 429px;
      overflow: auto;
      .sub-category {
        padding: 32px 0 0 32px;
        .sub-category__head {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          img {
            height: 30px;
            margin-right: 5px;
          }
          h2 {
            font-size: 18px;
            font-weight: bold;
            color: #3b3b3b;
          }
        }
        .sub-category__body {
          min-height: 500px;
          column-count: 5;
          column-fill: auto;
          overflow: hidden;
          .list-sub-category {
            overflow: hidden;
            margin-bottom: 20px;
            .semi-a {
              margin: 10px 0;
              &:hover>a {
                color: #03ac0c;
              }
            }
            .list-sub-category__head {
              .semi-a {
                margin: 0 0 10px;
              }
              a {
                font-weight: 600;
                color: #3b3b3b;
              }
            }
            .list-sub-category__body {
              a {
                color: #929292;
              }
            }
          }
        }
      }
    }
  }
}
.active {
  border-bottom: 2px solid #03ac0c;
}
.roll {
  visibility: visible;
  height: 492px;
}
nav {
  font-size: 12px;
  color: #929292;
  background-color: white;
  position: fixed;
  z-index: 3;
  height: 85px;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.144);
}
.sub-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  background-color: #f3f3f3;
  padding: 0 32px;
  a {
    color: #929292;
    transition: .3s;
    &:hover {
      color: #03ac0c;
    }
  }
  .promo-app {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      background-image: url('/assets/img/tokosidia-logo.png');
      background-size: 100%;
      background-repeat: no-repeat;
      display: inline-block;
      opacity: 0.5;
      margin-right: 3px;
    }
  }
  .promos {
    a {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.body-nav {
  padding: 0 32px;
  height: 50px;
  display: flex;
  align-items: center;
  a {
    img {
      height: 25px;
    }
  }
  .category {
    margin: 0 20px;
    height: 55px;
    display: flex;
    align-items: center;
    .semi-btn {
      cursor: pointer;
      padding: 8.5px 6px;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 20px;
      div {
        padding: 5px 8px;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
        img {
          width: 20px;
          height: 20px;
          opacity: .5;
        }
      }
    }
    &.login {
      position: relative;
      .icon {
        margin-left: 10px;
        &:first-child {
          margin-left: 20px;
        }
        div.icon {
          padding: 5px 8px;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background-color: #f3f3f3;
          }
          img {
            width: 20px;
            height: 20px;
            opacity: .5;
          }
        }
      }
      .user-info-detail {
        display: flex;
        padding-left: 17px;
        .user-wrapper, .shop-wrapper {
          padding: 12px 0;
        }
        .shop, .user {
          display: flex;
          align-items: center;
          padding: 2px 6px;
          width: 110px;
          margin-left: 4px;
          border-radius: 3px;
          &:hover {
            background-color: rgb(247, 247, 247);
            cursor: pointer;
          }
          img {
            height: 25px;
            object-fit: cover;
            border-radius: 100px;
          }
          p {
            overflow: hidden;
            padding: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .modal-user {
          background-color: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.081);
          border-radius: 0 0 8px 8px;
          height: 0;
          font-size: 12px;
          color: #929292;
          position: absolute;
          width: 400px;
          z-index: 3;
          top: 56px;
          right: 0;
          padding: 0 20px 0;
          overflow: hidden;
          transition: .3s;
          &.roll {
            height: 290px;
            padding: 10px 20px 20px;
          }
          .box-user {
            display: flex;
            align-items: center;
            padding: 8px 20px;
            box-shadow: 0 0 7px rgba(0, 0, 0, 0.129);
            border-radius: 3px;
            img {
              display: block;
              height: 45px;
              width: 45px;
              border-radius: 100px;
            }
            .info-user {
              margin-left: 10px;
              h3 {
                margin-bottom: 10px;
                font-size: 15px;
                color: rgb(64, 64, 64);
              }
              p {
                font-size: 11px;
              }
            }
          }
          .box-user-option {
            display: flex;
            margin: 8px 0 0;
            line-height: normal;
            .lineX {
              border-top: 1.2px solid rgb(214, 214, 214);
              margin: 7px 16px 7px 0;
            }
            li {
              display: flex;
              flex-direction: column;
              a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px;
                color: rgb(113, 113, 113);
                font-size: 13px;
                transition: .2s;
                cursor: pointer;
                border-radius: 9px;
                span {
                  font-weight: 600;
                  font-size: 13px;
                  color: rgb(39, 39, 39);
                }
                &:hover {
                  background-color: rgba(0, 0, 0, 0.047);
                }
              }
            }
            .left-side {
              a {
                margin-right: 8px;
              }
              border-right: .8px solid rgba(0, 0, 0, 0.081);
              flex-grow: 1.5;
            }
            .right-side {
              a {
                justify-content: flex-start;
                margin-left: 8px;
                img {
                  margin-left: 8px;
                  width: 20px;
                  object-fit: contain;
                }
              }
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              flex-grow: 1;
            }
          }
        }
      }
    }
    .line {
      height: 20px;
      border-right: 1.2px solid rgb(214, 214, 214);
      margin-left: 20px;
    }
    .auth-btn {
      margin-left: 20px;
      display: flex;
      width: 158px;
      .btn {
        width: 72.5px;
        height: 32px;
        font-weight: 800;
        border-radius: 8px;
      }
      .btn-secondary {
        color: #03ac0c;
        border: 1px solid #03ac0c;
        background-color: white;
      }
      .btn-primary {
        margin-left: 10px;
        color: white;
        border: 1px solid #03ac0c;
        background-color: #03ac0c;
      }
    }
  }
}
.onhover {
  background-color: #f3f3f3;
  border-radius: 4px;
  color: #03ac0c;
}

</style>
