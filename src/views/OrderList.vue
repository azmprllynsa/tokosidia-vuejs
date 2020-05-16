<template>
  <div class="wrapper flex-col">
    <div class="banner flex-col">
      <h4>Buyer Info</h4>
      <p>Dikarenakan adanya pembatasan akses di beberapa wilayah Jabodetabek, pengiriman pesanan berpotensi mengalami keterlambatan. Mohon tunggu atau coba cek ke Pos Security perumahan kamu ya. Pastikan juga nomor telepon kamu selalu aktif untuk bisa dihubungi kurir.</p>
    </div>
    <div class="mt-20 flex-row">
      <OrderDetailAside/>
      <OrderDetailMain/>
    </div>
    <FloatingBtn>
      <p><i class="fas fa-comment-dots"></i> Chat Penjual</p>
    </FloatingBtn>
  </div>
</template>

<script>
import OrderDetailAside from '@/components/OrderDetailAside'
import OrderDetailMain from '@/components/OrderDetailMain'
import FloatingBtn from '@/components/FloatingBtn'

export default {
  name: 'OrderList',
  data () {
    return {
      content: '<p><i class="fas fa-comment-dots"></i> Chat Penjual</p>'
    }
  },
  components: {
    OrderDetailAside,
    OrderDetailMain,
    FloatingBtn
  },
  created () {
    this.$store.dispatch('loadOrderList')
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.wrapper {
  padding: 50px 0;
  .banner {
    height: 125px;
    padding: 20px;
    border-radius: 8px;
    background-color: #EBF6F6;
    h4 {
      font-weight: 700;
      font-size: 15px;
    }
    p {
      margin-top: 20px;
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>
