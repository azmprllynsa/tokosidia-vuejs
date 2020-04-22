<template>
  <div class="wrapper flex-row justify-between">
    <div class="w-60">
      <div>
        <div class="checkall-container w-full flex-row justify-between items-center">
          <div class=" flex-row justify-center items-center">
            <label class="container checkall-text ml-10 flex-row items-center"> Choose All Product
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <button class="checkall-remove">Remove</button>
          </div>
        </div>
        <hr class="boldhr">
      </div>
      <CartItem v-for="item in 10" :key="item.id"/>
    </div>
    <div class="w-40 flex-row justify-center">
      <div class="summary flex-col">
        <h3 class="text-bold">Shopping Summary</h3>
        <hr class="w-full mt-10 thinhr">
        <div class="mt-10 flex-row justify-between">
          <p class="text-gray">Total Price</p>
          <p class="text-bold">Rp. 1.000.000</p>
        </div>
        <button class="mt-10 py-10 btn-buy text-white text-bold">Buy</button>
        <button class="mt-10 py-10 btn-promo text-green">Use promo from Tokopedia</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'

export default {
  name: 'Cart',
  data () {
    return {
      isCheckallSelected: false
    }
  },
  components: {
    CartItem
  }
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
.summary {
  position: sticky;
  top: 0;
  height: 244px;
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
