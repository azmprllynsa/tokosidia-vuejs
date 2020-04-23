<template>
  <div class="summary flex-col">
    <h3 class="text-bold">Ringkasan Belanja</h3>
    <hr class="w-full mt-10 thinhr">
    <div class="mt-10 flex-row justify-between">
      <p class="text-gray">Total Harga</p>
      <p class="text-bold">Rp. 1.000.000</p>
    </div>
    <slot></slot>
    <button class="mt-10 py-12 btn-promo text-green flex-row justify-center items-center">
      <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/1c511130.png" width="20px" alt="Coupon">
      <p> Gunakan promo Tokopedia</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingSummary'
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';
.h-full {
  height: 100%;
}
.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 10px;
}
.ml-10 {
  margin-left: 10px;
}
.py-10 {
  padding: 10px 0;
}
.py-12 {
  padding: 12px 0;
}
hr.thinhr {
  border: 1px solid #cbd5e0;
}
.text-bold {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
.text-gray {
  color: #9FA6B0;
  font-size: 14px;
}
.text-white {
  color: white;
}
.text-green {
  font-size: 12px;
  font-weight: 700;
  color: #51AD13;
}
.summary {
  position: sticky;
  top: 100px;
  // height: 244px;
  width: 350px;
  padding: 16px;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  .btn-buy {
    background-color: #FA591D;
    border: none;
    border-radius: 8px;
  }
  .btn-promo {
    background-color: white;
    border:none;
    border-radius: 8px;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  }
}
</style>
