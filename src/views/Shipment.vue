<template>
  <div class="wrapper flex-col">
    <div>
      <h2 class="text-xl text-bold">Checkout</h2>
    </div>
    <div class="flex-row mt-50">
      <div class="w-60">
        <PeopleCheckout/>
        <ItemCheckout/>
      </div>
      <div class="w-40 flex-col items-center">
        <ShoppingSummary>
          <hr class="hrthin">
          <div class="flex-col justify-center ">
            <label class="container checkall-text ml-10 mt-10 flex-row items-center">
              <p class="text-md">Sembako untuk Masyarakat Terdampak COVID19 <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/a7e984a1.svg" width="14px" alt="information"></p>
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="container checkall-text ml-10 mt-10 flex-row items-center">
              <p class="text-md">Bulatkan Tagihan dengan Nabung Emas</p>
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <ShoppingSummaryBtn @button-click="paymentModal = true" :btnText="btnText"/>
        </ShoppingSummary>
      </div>
    </div>
    <ModalContainer @bg-clicked="paymentModal = false" v-show="paymentModal" widthModal="500px" class="payment-modal hidden">
      <div class="header">
        <i @click="paymentModal = false" class="fas fa-times fa-2x"></i>
        <h3>Pilih Metode Pembayaran</h3>
      </div>
      <div class="main">
        <p class="title">Pembayaran di Tokopedia</p>
        <div v-for="item in bank" :key="item.id" class="payment-choose">
          <div class="bank-item">
            <div class="bank-itself">
              <img src="https://ecs7.tokopedia.net/img/toppay/sprites/bca.png" width="40px" alt="">
              <p>{{ item.bank_name }}</p>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <hr>
        </div>
      </div>
    </ModalContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PeopleCheckout from '@/components/PeopleCheckout'
import ItemCheckout from '@/components/ItemCheckout'
import ShoppingSummary from '@/components/ShoppingSummary'
import ShoppingSummaryBtn from '@/components/ShoppingSummaryBtn'
import ModalContainer from '@/components/ModalContainer'

export default {
  name: 'Shipment',
  data () {
    return {
      btnText: 'Pilih Pembayaran',
      paymentModal: true
    }
  },
  components: {
    ShoppingSummary,
    ShoppingSummaryBtn,
    PeopleCheckout,
    ItemCheckout,
    ModalContainer
  },
  created () {
    this.$store.dispatch('loadBank')
  },
  computed: mapState([
    'bank'
  ])
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.hidden {
  display: none;
}
.wrapper {
  padding: 50px 0;
  .payment-modal {
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      h3 {
        margin-left: 20px;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .main {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      p {
        font-size: 15px;
      }
      .payment-choose {
        margin-top: 10px;
        padding: 20px 0;
        cursor: pointer;
        .bank-item {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .bank-itself {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            p {
              margin-left: 10px;
              font-weight: 700;
            }
          }
        }
        hr {
          margin: 20px 0 0 0;
        }
      }
      .payment-choose:hover {
        background-color: lightgray;
      }
    }
  }
}
</style>
