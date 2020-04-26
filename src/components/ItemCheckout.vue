<template>
  <div>
    <div class="checkout-item mt-20 flex-col">
      <div class="flex-col">
        <div class="flex-row items-center">
          <img src="https://ecs7.tokopedia.net/img/blog/seller/2019/06/newpm-pm-icon%403x.png" width="15px" alt="" class="crown">
          <h3 class="text-md text-bold ml-5">{{ shipmentDetail.store.name }}</h3>
        </div>
        <p class="mt-10 text-soft-gray">{{ shipmentDetail.store.address }}</p>
      </div>
      <div class="flex-row justify-between">
        <div class="flex-row mt-20 w-60">
          <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp" width="70px" height="70px" alt="">
          <div class="ml-10">
            <h3 class="text-md text-bold">{{ shipmentDetail.product.name }}</h3>
            <p class="mt-15 text-md text-bold text-red">Rp. {{ shipmentDetail.totalPrice }}</p>
            <p class="mt-10 text-md text-soft-gray">{{ shipmentDetail.amount }} barang ({{ weightComputed }})</p>
            <p class="mt-15 text-soft-gray">Maroon, biru navy, sama putih. Masing masing 1</p>
          </div>
        </div>
        <div class="flex-col w-40">
          <div>
            <p class="text-bold">Pilih Durasi</p>
            <button class="btn-dropdown text-bold text-white mt-10">Next Day(1)</button>
          </div>
          <div class="mt-20">
            <p class="text-bold">Kurir Pilihan</p>
            <p class="mt-10 text-soft-gray">JNE</p>
            <!-- <div>
              <p>Jaminan Tepat Waktu</p>
            </div> -->
          </div>
          <div>
            <label class="container checkall-text mt-10 flex-row items-center">
              <p class="text-md text-soft-gray">Asuransi Pengiriman <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/a7e984a1.svg" width="14px" alt="information"></p>
              <input @click="addAsuransi($event)" type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="container checkall-text mt-10 flex-row items-center">
              <p class="text-md text-soft-gray">Dropshipper <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/a7e984a1.svg" width="14px" alt="information"></p>
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <hr class="hrthin">
      </div>
      <div class="flex-col mt-10">
        <div class="total-dropdown flex-row justify-between">
          <p class="text-md text-bold text-soft-gray">Subtotal</p>
          <div @click="isTotalOpen = !isTotalOpen" class="flex-row justify-center items-center">
            <p class="text-lg text-bold text-red">Rp. {{ totalAll }}</p>
              <i class="fas fa-sort-up"></i>
          </div>
        </div>
        <div :class="isTotalOpen ? 'flex-col' : 'hidden'">
          <div class="mt-10 flex-row justify-between">
            <p class="text-md text-soft-gray">Harga</p>
            <p class="text-sm text-bold">Rp. {{ shipmentDetail.totalPrice }}</p>
          </div>
          <div class="mt-10 flex-row justify-between">
            <p class="text-md text-soft-gray">Ongkos Kirim</p>
            <p class="text-sm text-bold">Rp. {{ ongkir }}</p>
          </div>
          <div class="mt-10 flex-row justify-between">
            <p class="text-md text-soft-gray">Asuransi Pengiriman</p>
            <p class="text-sm text-bold">Rp. {{ asuransi }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="hrbold mt-10">
  </div>
</template>

<script>
export default {
  name: 'ItemCheckout',
  data () {
    return {
      isTotalOpen: false,
      ongkir: 0,
      asuransi: 0
    }
  },
  computed: {
    shipmentDetail () {
      return this.$store.state.shipmentDetail
    },
    weightComputed () {
      return this.shipmentDetail.totalWeight >= 1000 ? this.shipmentDetail.totalWeight * 0.001 + 'kg' : this.shipmentDetail.totalWeight + 'gr'
    },
    totalAll () {
      return this.asuransi + this.ongkir + this.shipmentDetail.totalPrice
    }
  },
  methods: {
    addAsuransi (e) {
      e.target.checked ? this.asuransi = this.shipmentDetail.totalPrice * 0.1 : this.asuransi = 0
      this.$store.commit('SET_TOTAL_CHECKOUT', this.totalAll)
    }
  },
  mounted () {
    this.$store.commit('SET_TOTAL_CHECKOUT', this.totalAll)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.total-dropdown {
  cursor: pointer
}
.hidden {
  display: none;
}
.text-soft-gray {
  color: #9FA6B0;
}
.text-red {
  color: #FA591D;
}
.btn-dropdown {
  width: 100%;
  padding: 10px 0;
  background-color: #51AD13;
  border: none;
  border-radius: 8px;
}
.btn-dropdown:hover {
  background-color: #469710;
}
</style>
