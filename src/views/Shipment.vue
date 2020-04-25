<template>
  <div class="wrapper flex-col">
    <ModalContainer :widtModal="widthModal">
      tes
    </ModalContainer>
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
          <ShoppingSummaryBtn :btnText="btnText"/>
        </ShoppingSummary>
      </div>
    </div>
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
      widthModal: '448px'
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

.wrapper {
  padding: 50px 0;
}
</style>
