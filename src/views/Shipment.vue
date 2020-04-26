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
          <ShoppingSummaryBtn @click="paymentModal = !paymentModal" :btnText="btnText"/>
        </ShoppingSummary>
      </div>
    </div>
    <ModalContainer :class="paymentModal ? '' : 'hidden'" class="payment-modal">
      <div class="header">
        <i @click="paymentModal = !paymentModal" class="fas fa-times"></i>
        <h3>Pilih Metode Pembayaran</h3>
      </div>
      <div class="main">
        <p class="title">Pembayaran di Tokopedia</p>
        <div class="payment-choose">
          <div class="bank-item">
            <div class="bank-itself">
              <img src="https://ecs7.tokopedia.net/img/toppay/sprites/bca.png" width="40px" alt="">
              <p>BCA</p>
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
      paymentModal: false
    }
  },
  components: {
    ShoppingSummary,
    ShoppingSummaryBtn,
    PeopleCheckout,
    ItemCheckout,
    ModalContainer
  }
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
    }
    .main {
      display: flex;
      flex-direction: column;
      .payment-choose {
        .bank-item {
          display: flex;
          flex-direction: row;
          .bank-itself {
            display: flex;
            flex-direction: row;
          }
        }
      }
    }
  }
}
</style>
