<template>
  <div class="ordered-item">
    <div>
      <p>20 Nov 2019</p>
    </div>
    <hr class="hrfull hrthin">
    <div class="flex-row status-group">
      <div class="status-first">
        <h3 class="text-bold text-md text-product-title">SanDisk Official</h3>
        <p class="mt-10">(INV/{{ filteredOrder[0].invoice }})</p>
      </div>
      <hr class="hrthin">
      <div class="status-second flex-col justify-center ml-10">
        <p class="mt-5">Status</p>
        <p class="text-bold mt-5">Pesanan Selesai</p>
      </div>
      <hr class="hrthin">
      <div class="status-third flex-col justify-center ml-10">
        <p class="mt-5">Kurir</p>
        <p class="text-red text-bold text-lg mt-5">{{ filteredOrder[0].shipping }}</p>
      </div>
    </div>
    <hr class="hrfull hrthin">
    <div class="flex-row product-group">
      <div class="flex-row product-detail">
        <img src="https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/9/26/24589641/24589641_49a20b6b-3c51-42ef-90a3-b9e9c265c2e3_700_700" width="56px" alt="">
        <div class="ml-10 flex-col product-info">
          <h3 class="text-bold text-md text-product-title">SanDisk Ultra MicroSD 32GB A1 98MB/S MicroSDHC UHS -I Micro Sd</h3>
          <div class="mt-10 flex-row">
            <p class="text-red">Rp.30000</p>
            <p class="ml-5">1 Produk (35gr)</p>
          </div>
        </div>
      </div>
      <hr class="hrthin">
      <div class="ml-10 flex-row justify-between items-center buy-again">
        <div class="flex-col">
          <p>Total Harga Produk</p>
          <p class="text-lg text-red text-bold mt-10">Rp.{{filteredOrder[0].grand_total}}</p>
        </div>
        <button class="btn-buy">Beli Lagi</button>
      </div>
    </div>
    <hr class="hrfull hrthin">
    <div class="flex-row footer">
      <p><i class="fas fa-eye"></i> Lihat Detail Pesanan</p>
      <hr class="hrthin">
      <p><i class="fas fa-comment-dots"></i> Chat Penjual</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OrderedItem',
  created () {
    this.$store.dispatch('loadOrderList')
  },
  computed: {
    filteredOrder () {
      return this.$store.getters.filteredOrder
    },
    ...mapState([
      'peopleDetail',
      'orderList'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.hrthin {
  border: 1px solid rgb(240, 240, 240);
}
.text-product-title {
  color: #56B54A;
}
.text-red {
  color: orangered;
}
.ordered-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 20px;
  padding: 10px 20px;
  hr.hrfull {
    margin: 10px -20px;
    border-color: lightgray;
  }
  .status-group {
    .status-first {
      width: 45%;
    }
    .status-second {
      width: 40%;
    }
    .status-third {
      width: 15%;
    }
  }
  .product-group {
    .product-detail {
      width: 45%;
    }
    .buy-again {
      width: 55%;
      .btn-buy {
        padding: 8px 30px;
        border-radius: 5px;
        background-color: orangered;
        border: none;
        color: #FFFFFF;
        font-weight: 700;
      }
    }
  }
  .footer {
    width: 30%;
    hr {
      width: 20px;
      transform: rotate(90deg);
    }
  }
}
</style>
