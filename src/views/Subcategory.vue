<template>
  <div class="wrapper">
    <div class="carousel-parent">
      <div v-for="item in 6" :key="item" class="carousel-wrap">
        <div class="item">
          <div class="carousel-item">
            <div class="item-image">
              <img src="@/assets/img/buku-sub-category.jpeg">
            </div>
            <div class="item-name">
              <p>Buku desain & bangunan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="direction">
      <div class="category-direction">
        <div class="direction-item">
          <p>Beranda <span>></span> Kategori utama <span>></span> Buku <span>></span><span> Arsitektur bangunan</span></p>
        </div>
      </div>
      <div class="box-share">
        <div class="share">
          <div class="icon"><img src="@/assets/img/share.png"></div>
          <div class="icon-name">
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-category">
      <div class="category-sort">
        <div class="sort"><p>Filter</p></div>
        <div class="sort-item"><p>Buku</p></div>
        <div class="item-selection"></div>
        <div class="search"><p>Cari di kategori ini</p></div>
        <div class="search-box"></div>
        <div class="price"><p>Harga</p></div>
        <div class="price-box">
          <div class="price-minimum">
            <div class="price-input">
              <div class="input-label"><input   class="input" type="text"     placeholder="Harga Minimum">
              </div>
              <div class="input-logo"><p>Rp</p></div>
            </div>
          </div>
          <div class="price-maksimum">
            <div class="price-input">
              <div class="input-label"><input   class="input" type="text"     placeholder="Harga Maksimal">
              </div>
              <div class="input-logo"><p>Rp</p></div>
            </div>
          </div>
          <div class="search-price">
            <div class="price-input">
              <div class="input-label"><input   class="input" type="text"     placeholder="Harga Maksimal">
              </div>
              <div class="input-logo"><p>Rp</p></div>
            </div>
          </div>
        </div>
        <div class="cashback"><p>Cashback</p></div>
        <div class="cashback-box">
          <div class="check-box">
            <button></button>
          </div>
          <div class="check-text"><p>Cashback</p></div>
        </div>
        <div class="offer"><p>Penawaran</p></div>
        <div class="offer-box">
        </div>
        <div class="location"><p>Lokasi</p></div>
        <div class="location-box"></div>
        <div class="shipment"><p>Pengiriman</p></div>
        <div class="shipment-box"></div>
        <div class="condition"><p>Kondisi</p></div>
        <div class="condition-box"></div>
        <div class="store"><p>Toko</p></div>
        <div class="store-box"></div>
        <div class="rating"><p>Rating</p></div>
        <div class="rating-box"></div>
        <div class="preorder"><p>Preorder</p></div>
        <div class="preorder-box"></div>
      </div>
      <div class="sub-category-item">
        <hr>
        <div class="sub-category-sort">
          <div class="text">
            <p>Menampilkan</p><p>11111</p>
            <p> produk untuk</p>
            <p><span>" Arsitektur & desain "</span></p>
            <span>(</span><span>1</span><span>-</span><span>60</span><p>of</p><span>123456</span><span>)</span>
          </div>
          <div class="sort-button">
            <div class="text-sort"><p> Urutkan:</p></div>
            <div class="button-sort">
              <button><label for="text">Paling sesuai</label></button>
              <button class="drop-down"><img src="../assets/img/v.png" width="25px" height="25px"></button>
            </div>
          </div>
        </div>
        <div class="book-on-category">
          <div class="book-list">
            <div class="card-book-parent">
              <div class="card-image">
                <img src="@/assets/img/buku-tokopedia-card.webp">
              </div>
              <div class="card-name">
                <p>Perancangan Struktur Beton Bertulang by.</p>
              </div>
              <div class="card-price"><p>Rp 57.500</p></div>
              <div class="card-store"><p>Jakarta Barat</p></div>
              <div class="card-rating">
                <img src="@/assets/img/star.png">
                <img src="@/assets/img/star.png">
                <img src="@/assets/img/star.png">
                <img src="@/assets/img/star.png">
                <img src="@/assets/img/star.png">
                <p>(24)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wrapper{
  // background-color: aquamarine;
  // width: 100%;
  // height: 200px;
  // padding-bottom: 100px;
  padding-top: 30px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  .carousel-parent{
    // background-color: rgb(180, 133, 70);
    width: 100%;
    height: 127px;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    padding-left: 40px;
    padding-right: 30px;
    box-sizing: border-box;
    .carousel-wrap{
      .item{
        // background-color: crimson;
        width: 100%;
        height: 100%;
        padding-left: 30px;
        padding-right: 30px;
        .carousel-item{
          background-color: white;
          width: 126px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.096);
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.048);
          .item-image{
            // background-color: darkcyan;
            width: 80px;
            height: 70px;
            img{
              object-fit: cover;
              height: 100%;
              width: 100%;
            }
          }
          .item-name{
            // background-color: darkgoldenrod;
            width: 90px;
            padding-top: 10px;
            // height: 30px;
            p{
              text-align: center;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .direction{
    background: rgb(255, 255, 255);
    widows: 100%;
    height: 53px;
    box-shadow: rgb(224, 224, 224) 1px 1px 6px 1px;
    border-radius: 6px;
    margin-top:30px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .category-direction{
      // background-color: burlywood;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 30px;
      .direction-item{
        // background-color: chocolate;
        width: 400px;
        height: 70%;
        padding-top: 12px;
        cursor: pointer;
        p{
          color: rgb(66, 181, 73);
          font-size: 13px;
        }
        span{
          color: rgba(0, 0, 0, 0.54);
          font-size: 13px;
        }
      }
    }
    .box-share{
      // background-color: cadetblue;
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 30px;
      cursor: pointer;
      .share{
        // background-color: white;
        border: 1px solid rgb(224, 224, 224);
        width: 92px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        // padding-left: 10px;
        .icon{
          // background-color: white;
          width: 20px;
          height: 20px;
          opacity: .3;
          margin-left: 12px;
          margin-top: 2px;
          img{
            object-fit: contain;
            width: 80%;
            height: 80%;
          }
        }
        .icon-name{
          // background-color: darkgray;
          // width: 20px;
          // height: 100%;
          margin-right: 9px;
          p{
            font-size: 12px;
            color: #31353B;
            font-weight: 700;
          }
        }
      }
    }
  }
  .sub-category{
    // background-color: rgb(177, 66, 66);
    width: 100%;
    // height: 1100px;
    margin-top: 60px;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    .category-sort{
      // background-color: royalblue;
      width: 246px;
      box-sizing: border-box;
      border: 1px solid rgb(224, 224, 224);
      // height: 100%;
      overflow: hidden;
      .sort{
        width: 246px;
        height: 48px;
        background: rgb(224, 224, 224);
        border-radius: 5px 15px 0 0;
        // border: none;
        // border-width: 1px;
        // border-style: solid;
        // border-color: rgb(224, 224, 224);
        p{
          text-align: left;
          color: rgba(0, 0, 0, 0.7);
          font-size: 14px;
          font-weight: 700;
          padding-left: 10px;
          padding-top: 15px;
        }
      }
      .sort-item{
        // background-color: seagreen;
        width: 247px;
        height: 40px;
        p{
          // font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .item-selection{
        // background-color: sienna;
        width: 247px;
        height: 642px;
      }
      .search{
        // background-color: slategrey;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .search-box{
        // background-color: steelblue;
        width: 247px;
        height: 69px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .price{
        // background-color: tan;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .price-box{
        // background-color: teal;
        width: 247px;
        height: 179px;
        // border-bottom: 1px solid rgb(224, 224, 224);
        padding: 7px 0px;
        box-sizing: border-box;
        .price-minimum{
          // background-color: rosybrown;
          width: 246px;
          height: 47px;
          margin-top: 7px;
          padding-left: 9px;
          padding-top: 3px;
          .price-input{
            // background-color: seagreen;
            width: 218px;
            height: 40px;
            display: flex;
            border: 1px solid rgb(224, 224, 224);
            border-radius: 7px;
            .input-label{
              // background-color: sienna;
              width: 180px;
              height: 100%;
              box-sizing: border-box;
              .input{
                width: 180;
                height: 100%;
                border: none;
                outline: none;
                padding-left: 10px;
              }
            }
            .input-logo{
              background-color: #fff;
              width: 38px;
              height: 100%;
              // border-left: 1px solid rgb(224, 224, 224);
              p{
                color: rgba(0, 0, 0, 0.500);
                font-weight: bold;
                font-size: 16px;
                padding-left: 6px;
                padding-top: 9px;
              }
            }
          }
        }
        .price-maksimum{
          // background-color: saddlebrown;
          width: 246px;
          height: 47px;
          margin-top: 10px;
          padding-left: 9px;
          padding-top: 3pX;
          .price-input{
            // background-color: seagreen;
            width: 218px;
            height: 40px;
            display: flex;
            border: 1px solid rgb(224, 224, 224);
            border-radius: 7px;
            .input-label{
              // background-color: sienna;
              width: 180px;
              height: 100%;
              box-sizing: border-box;
              .input{
                width: 180;
                height: 100%;
                border: none;
                outline: none;
                padding-left: 10px;
              }
            }
            .input-logo{
              background-color: #fff;
              width: 38px;
              height: 100%;
              // border-left: 1px solid rgb(224, 224, 224);
              p{
                color: rgba(0, 0, 0, 0.500);
                font-weight: bold;
                font-size: 16px;
                padding-left: 6px;
                padding-top: 9px;
              }
            }
          }
        }
        .search-price{
          width: 218px;
          height: 40px;
          display: flex;
          border: 1px solid rgb(224, 224, 224);
          border-radius: 7px;
          margin-left: 10px;
          margin-top: 7px;
            .price-input{
            // background-color: seagreen;
            width: 218px;
            height: 40px;
            display: flex;
            border: 1px solid rgb(224, 224, 224);
            border: none;
            border-radius: 7px;
            .input-label{
              // background-color: sienna;
              width: 180px;
              height: 100%;
              box-sizing: border-box;
              .input{
                width: 180;
                height: 100%;
                border: none;
                outline: none;
                padding-left: 10px;
              }
            }
            .input-logo{
              background-color: #fff;
              width: 38px;
              height: 100%;
              // border-left: 1px solid rgb(224, 224, 224);
              p{
                color: rgba(0, 0, 0, 0.500);
                font-weight: bold;
                font-size: 16px;
                padding-left: 6px;
                padding-top: 9px;
              }
            }
          }
        }
      }
      .cashback{
        // background-color: tomato;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .cashback-box{
        // background-color: rgb(105, 194, 185);
        width: 247px;
        // height: 45px;
        display: flex;
        padding-left: 20px;
        // border-bottom: 1px solid rgb(224, 224, 224);
        .check-box{
          // background-color: rgba(253, 0, 0, 0.603);
          // width: 50px;
          height: 35px;
          button{
            width: 20px;
            height: 20px;
            outline: none;
            border: 2px solid rgb(156, 154, 154);
            border-radius: 4px;
          }
        }
        .check-text{
          // background-color: rgba(59, 51, 51, 0.466);
          width: 100px;
          height: 100%;
          padding-top: 5px;
          padding-left: 7px;
          p{
            font-size: 14px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.541);
            // text-align: center;
          }
        }
      }
      .offer{
        // background-color: wheat;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .offer-box{
        // background-color: whitesmoke;
        width: 247px;
        height: 156px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .location{
        // background-color: yellowgreen;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .location-box{
        // background-color: #31353B;
        width: 247px;
        height: 187px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .shipment{
        // background-color: aquamarine;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .shipment-box{
        // background-color: blanchedalmond;
        width: 247px;
        height: 156px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .condition{
        // background-color: rgb(218, 120, 120);
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .condition-box{
        // background-color: burlywood;
        width: 247px;
        height: 76px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .store{
        // background-color: cadetblue;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .store-box{
        // background-color: chocolate;
        width: 247px;
        height: 76px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .rating{
        // background-color: coral;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .rating-box{
        // background-color: cornflowerblue;
        width: 247px;
        height: 45px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
      .preorder{
        // background-color: crimson;
        width: 247px;
        height: 40px;
        border-top: 1px solid rgb(224, 224, 224);
        p{
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          opacity: .7;
          padding-top: 15px;
          padding-left: 10px;
        }
      }
      .preorder-box{
        // background-color: darkblue;
        width: 247px;
        height: 45px;
        // border-bottom: 1px solid rgb(224, 224, 224);
      }
    }
    .sub-category-item{
      // background-color: rgb(202, 105, 95);
      width: 992px;
      height: 100vh;
      // margin-left: 10px;
      padding-left: 30px;
      // padding-top: 30px;
      hr{
        opacity: .4;
      }
      .sub-category-sort{
        // background-color: rosybrown;
        width: 100%;
        height: 50px;
        margin-bottom: 30px;
        display: flex;
        .text{
          // background-color: ;
          width: 70%;
          height: 100%;
          display: flex;
          p{
            font-size: 14px;
            color: rgba(0, 0, 0, 0.54);
          }
          span{
            font-weight: 700;
            font-size: 14px;
            color:rgba(0, 0, 0, 0.54);
          }
        }
        .sort-button{
          // background-color: salmon;
          width: 30%;
          height: 100%;
          display: flex;
          justify-content: center;
          .text-sort{
            // background-color: royalblue;
            width: 100px;
            height: 50px;
            p{
              font-size: 13px;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.54);
              padding-left: 30px;
              padding-top: 17px;
            }
          }
          .button-sort{
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(224, 224, 224);
            cursor: pointer;
            width: 129px;
            height: 40px;
            border-radius: 8px;
            position: relative;
            button{
              border: none;
              outline: none;
              padding-top: 10px;
              padding-left: 20px;
              cursor: pointer;
            }
            .drop-down{
              position: absolute;
              top: -3px;
              left: 73px;
              opacity: .4;
            }
          }
        }
      }
      .book-on-category{
        // background-color: salmon;
        width: 100%;
        height: 100vh;
        .book-list{
          // background-color: sandybrown;
          width: 100%;
          height: 400px;
          .card-book-parent{
            background-color: white;
            width: 192px;
            height: 305px;
            border-radius: 10px 10px 0 0;
            border: 1px solid rgba(0, 0, 0, 0.068);
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.027);
            overflow: hidden;
            .card-image{
              background-color: rosybrown;
              width: 100%;
              height: 179px;
              img{
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
            }
            .card-name{
              // background-color: royalblue;
              width: 100%;
              height: 45px;
              display: flex;
              align-items: center;
              p{
                color: rgb(0, 0, 0);
                font-size: 14px;
                font-weight: 600;
                opacity: .7;
              }
            }
            .card-price{
              // background-color: sandybrown;
              width: 100%;
              height: 30px;
              display: flex;
              align-items: center;
              p{
                font-size: 14px;
                color: #fa591d;
                font-weight: 700;
              }
            }
            .card-store{
              // background-color: sienna;
              width: 100%;
              height: 20px;
              p{
                font-weight: 500;
                color: rgba(0, 0, 0, 0.685);
              }
            }
            .card-rating{
              // background-color: skyblue;
              width: 15px;
              height: 15px;
              display: flex;
              img{
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
              p{
                color: rgba(0, 0, 0, 0.397);
                padding-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
