<template>
  <header>
    <div class="bg-modal"
         :class="{ fade: hoverCategory }"></div>
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
        <div class="search">
          <form @submit.prevent>
            <input type="text" placeholder="Cari es batu">
            <button><img src="@/assets/img/search.png" class="icon-search"></button>
          </form>
        </div>
        <div class="trolly">
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
            <div class="semi-a">
              <router-link to="/">Buku</router-link>
            </div>
          </div>
        </div>
        <div class="sub-category__wrapper">
          <div class="sub-category">
            <div class="sub-category__head">
              <img src="@/assets/img/category-book.png">
              <h2>Buku</h2>
            </div>
            <div class="sub-category__body">
              <div class="list-sub-category">
                <div class="list-sub-category__head">
                  <div class="semi-a">
                    <router-link to="/">Arsitektur & Desain</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Bangunan</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Codes Standar</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
                  </div>
                </div>
              </div>
              <div class="list-sub-category">
                <div class="list-sub-category__head">
                  <div class="semi-a">
                    <router-link to="/">Arsitektur & Desain</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Bangunan</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Codes Standar</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
                  </div>
                </div>
              </div>
              <div class="list-sub-category">
                <div class="list-sub-category__head">
                  <div class="semi-a">
                    <router-link to="/">Arsitektur & Desain</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Bangunan</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Codes Standar</router-link>
                  </div>
                </div>
                <div class="list-sub-category__body">
                  <div class="semi-a">
                    <router-link to="/">Buku Memasak</router-link>
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
export default {
  data () {
    return {
      hoverCategory: false
    }
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
  z-index: 1;
  transition: .4s;
}
.fade {
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.411);
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
        padding: 0 8px;
        .semi-a {
          margin-top: 8px;
          padding: 6px 10px;
          border-radius: 3px;
          background-color: #f3f3f3;
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
          max-height: 1000px;
          height: 1000px;
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
  .search {
    width: 100%;
    form {
      border: 1px solid #dddddd;
      border-radius: 7px;
      display: flex;
      overflow: hidden;
      transition: .4s;
      &:active {
        border: 1px solid #03ac0c;
      }
      input {
        font-size: 12px;
        color: #929292;
        background-color: transparent;
        outline: none;
        border: none;
        padding: 6px 10px;
        width: 100%;
      }
      button {
        background-color: #dadada;
        width: 35px;
        border: none;
        .icon-search {
          height: 20px;
          width: 20px;
          margin-top: 4px;
          opacity: .3;
        }
      }
    }
  }
  .trolly {
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
.onhover {
  background-color: #f3f3f3;
  border-radius: 4px;
  color: #03ac0c;
}

</style>
