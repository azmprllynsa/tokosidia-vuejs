<template>
  <div class="wrapper">
    <div class="carousel-parent">
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
    <div class="direction">
      <div class="category-direction">
        <div class="direction-item"></div>
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
        <div class="sort"></div>
        <div class="sort-item"></div>
        <div class="item-selection"></div>
        <div class="search"></div>
        <div class="search-box"></div>
        <div class="price"></div>
        <div class="price-box"></div>
        <div class="cashback"></div>
        <div class="cashback-box"></div>
        <div class="offer"></div>
        <div class="offer-box"></div>
        <div class="location"></div>
        <div class="location-box"></div>
        <div class="shipment"></div>
        <div class="shipment-box"></div>
        <div class="condition"></div>
        <div class="condition-box"></div>
      </div>
      <div class="sub-category-item"></div>
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
    background-color: rgb(180, 133, 70);
    width: 100%;
    height: 127px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    padding-right: 30px;
    box-sizing: border-box;
    .item{
      // background-color: crimson;
      width: 100%;
      height: 100%;
      column-count: 7;
      column-fill: auto;
      padding-left: 30px;
      padding-right: 30px;
      .carousel-item{
        // background-color: darkblue;
        width: 126px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-image{
          // background-color: darkcyan;
          width: 90px;
          height: 80px;
          img{
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
        .item-name{
          // background-color: darkgoldenrod;
          width: 90px;
          // height: 30px;
          p{
            text-align: center;
            font-size: 12px;
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
      background-color: burlywood;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 30px;
      .direction-item{
        background-color: chocolate;
        width: 400px;
        height: 70%;
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
    background-color: rgb(177, 66, 66);
    width: 100%;
    // height: 1100px;
    margin-top: 60px;
    display: flex;
    .category-sort{
      background-color: royalblue;
      width: 247px;
      padding-left: 10px;
      box-sizing: border-box;
      // height: 100%;
      .sort{
        background-color: sandybrown;
        width: 247px;
        height: 48px;
      }
      .sort-item{
        background-color: seagreen;
        width: 247px;
        height: 40px;
      }
      .item-selection{
        background-color: sienna;
        width: 247px;
        height: 642px;
      }
      .search{
        background-color: slategrey;
        width: 247px;
        height: 40px;
      }
      .search-box{
        background-color: steelblue;
        width: 247px;
        height: 69px;
      }
      .price{
        background-color: tan;
        width: 247px;
        height: 40px;
      }
      .price-box{
        background-color: teal;
        width: 247px;
        height: 179px;
      }
      .cashback{
        background-color: tomato;
        width: 247px;
        height: 40px;
      }
      .cashback-box{
        background-color: turquoise;
        width: 247px;
        height: 45px;
      }
      .offer{
        background-color: wheat;
        width: 247px;
        height: 40px;
      }
      .offer-box{
        background-color: whitesmoke;
        width: 247px;
        height: 156px;
      }
      .location{
        background-color: yellowgreen;
        width: 247px;
        height: 40px;
      }
      .location-box{
        background-color: #31353B;
        width: 247px;
        height: 187px;
      }
      .shipment{
        background-color: aquamarine;
        width: 247px;
        height: 40px;
      }
      .shipment-box{
        background-color: blanchedalmond;
        width: 247px;
        height: 156px;
      }
      .condition{
        background-color: rgb(218, 120, 120);
        width: 247px;
        height: 40px;
      }
      .condition-box{
        background-color: burlywood;
        width: 247px;
        height: 76px;
      }
    }
    .sub-category-item{
      background-color: salmon;
      width: 992px;
      height: 100%;
      // padding-top: 30px;
    }
  }
}
</style>
