<template>
  <div class="wrapper flex-row justify-between">
    <div class="w-60">
      <div>
        <div class="checkall-container w-full flex-row justify-between items-center">
          <div class=" flex-row justify-center items-center">
            <label class="container checkall-text ml-10 flex-row items-center"> Pilih Semua Produk
              <input type="checkbox">
              <span @click="checkmark = !checkmark" class="checkmark"></span>
            </label>
          </div>
          <div>
            <button :class="checkmark ? '' : 'hidden'" class="checkall-remove">Hapus</button>
          </div>
        </div>
        <hr class="boldhr">
      </div>
      <CartItem v-for="item in 10" :key="item.id"/>
    </div>
    <div class="w-40 flex-col justify-start items-center">
      <ShoppingSummary>
        <ShoppingSummaryBtn :btnText="btnText"/>
      </ShoppingSummary>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import ShoppingSummary from '@/components/ShoppingSummary.vue'
import ShoppingSummaryBtn from '@/components/ShoppingSummaryBtn.vue'

export default {
  name: 'Cart',
  data () {
    return {
      isCheckallSelected: false,
      btnText: 'Beli',
      checkmark: false
    }
  },
  components: {
    CartItem,
    ShoppingSummary,
    ShoppingSummaryBtn
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.hidden {
  display: none;
}
.wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
}
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
.checkall-container {
  position: sticky;
  top: 0;
  height: 58px;
  font-size: 14px;
  .checkall-text {
    color: #a0aec0;
    font-size: 14px;
  }
  .checkall-remove {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    color: #03970C;
    cursor:pointer;
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    outline:none;
  }
}
hr.boldhr {
  border: 3px solid #F3F4F5;
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
</style>
