<template>
  <div class="card-product">
    <router-link :to="`/${idSeller || data.seller_id}/${data.id}`">
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
          <div :class="unggulan ? 'super' : 'common'"
                :style="{ backgroundImage: `url(${require('@/assets/img/unggulan.png')})` }">
            <span v-if="unggulan" class="unggulan">Produk Unggulan</span>
            <span class="title-product">{{ data.name || '' }}</span>
            <div class="prices">
              <div class="discount">
                <div class="discount-number" >76%</div>
                <div class="discount-price">Rp. 889.000</div>
              </div>
              <div class="product-price">
                <span>Rp. {{ data.price || 0 }}</span>
              </div>
            </div>
            <div v-if="storeName" class="store-info">
              <img class="label-store" src="@/assets/img/label-store-icon.svg">
              <div class="store-name-location">
                <div class="text-info-wrapper">
                  <p>Nama Seller</p>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>
            <div class="rating">
              <div class="stars">
                <img v-for="(star, i) in Math.ceil(parseInt(data.rating || 10)/2)" :key="i + 1" src="@/assets/img/star.png">
              </div>
              <span class="testimo-total">(183)</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'card-product',
  props: ['data', 'idSeller', 'unggulan', 'storeName']
}
</script>

<style lang="scss" scoped>
.card-product {
  width: 176px;
  min-height: 342px;
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
        .store-info {
          display: flex;
          align-items: center;
          img.label-store {
            margin-right: 7px;
            height: 12px;
          }
          .store-name-location {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 20px;
            margin: 3px 0;
            position: relative;
            overflow: hidden;
            p {
              padding: 2px 0;
              line-height: normal;
              color: rgba(0, 0, 0, 0.408);
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
  .text-info-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0%;
    transition: .2s;
  }
  &:hover .text-info-wrapper {
    top: -100%;
  }
}
</style>
