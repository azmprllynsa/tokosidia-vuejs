<template>
  <div class="w-full flex-col">
    <div class="w-full flex-row">
      <div class="flex-row items-center">
        <label class="container">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <div class="flex-row items-center">
          <img src="https://ecs7.tokopedia.net/img/blog/seller/2019/06/newpm-pm-icon%403x.png" width="15px" alt="" class="crown">
          <h3 class="text-bold">GLASS PRO INDONESIA</h3>
        </div>
        <p class="text-gray mt-5">Kota Surabaya</p>
      </div>
    </div>
    <div class="product w-full mt-20 flex-row">
      <div class="flex-row items-center">
        <label class="container">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="w-full">
        <div class="flex-row">
          <div>
            <img src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp" width="70px" height="70px" alt="">
          </div>
          <div class="ml-10">
            <h3 class="text-bold">Tempered Glass</h3>
            <p class="text-bold text-red mt-5">Rp. 50000</p>
          </div>
        </div>
        <div class="product-footer w-full flex-row justify-between">
          <div @click="addNote = !addNote" :class="addNote ? 'note-none' : 'note-active text-green'">Add Notes For This Shop</div>
          <div :class="addNote ? 'product-note-active flex-col' : 'product-note-none'">
            <p class="text-gray">Notes for This Shop (Optional)</p>
            <input type="text" name="note" id="note">
          </div>
          <div class="button-collection flex-row justify-between">
            <i @click="isLoved = !isLoved" :class="isLoved ? 'loved' : ''" class="fas fa-heart fa-lg"></i>
            <i class="fas fa-trash fa-lg"></i>
            <div>
              <i @click="decrement" :class="count >= 2 ? 'counter-green' : ''" class="fas fa-minus-circle fa-lg"></i>
              <input type="number" class="counter" v-model="count">
              <i @click="increment" class="counter-green fas fa-plus-circle fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-full mt-20">
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  data () {
    return {
      isLoved: false,
      addNote: false,
      count: 1
    }
  },
  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
@import '@/assets/fblazt.scss';
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.button-collection {
  width: 200px;
}
.checkbox {
  margin-right: 10px;
}
.counter {
  width: 50px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  outline: none;
  text-align: center;
  font-size: 16px;
  color: #03AC0E;
  border-color: #9FA6B0;
  user-select: none;
}
.crown {
  margin-right: 3px;
}
.mt-5 {
  margin-top: 5px;
}
.mt-20 {
  margin-top: 20px;
}
.ml-10 {
  margin-left: 10px;
}
.text-bold {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
.text-red {
  color: #FA591D;
}
.text-gray {
  color: #9FA6B0;
  font-size: 12px;
}
.text-green {
  font-size: 12px;
  font-weight: 700;
  color: #51AD13;
}
hr {
  border: 3px solid #F3F4F5;
}
.fas {
  color: #E0E0E0;
  cursor: pointer;
}
.product {
  .note-none {
    display: none;
  }
  .note-active {
    cursor: pointer;
  }
  .product-note-none {
    display: none;
  }
  .product-note-active {
    display: flex;
  }
  #note {
    line-height: 35px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    outline: none;
    border-color: #03AC0E;
  }
}
.product-footer {
  .counter-green {
    color: #51AD13;
  }
}
.loved {
  color: #E62F48;
}
</style>
