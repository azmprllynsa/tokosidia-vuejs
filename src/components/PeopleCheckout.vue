<template>
  <div class="people-checkout">
    <div>
      <h3 class="text-bold text-md">Alamat Pengiriman</h3>
      <hr class="hrthin mt-10">
    </div>
    <div class="mt-10">
      <div class="flex-row items-center">
        <p class="text-bold text-md">Firman</p>
        <p class="ml-5">(Alamat Rumah)</p>
        <p class="ml-5 badge-green text-bold">Utama</p>
      </div>
      <div class="mt-10">
        62895605483230
      </div>
      <div class="mt-10 text-soft-gray text-md">
        Jalan jalan di tengah kota dikala corona
      </div>
    </div>
    <hr class="hrthin mt-15">
    <div class="btn-collection mt-15 text-md">
      <button>Pilih Alamat Lain</button>
      <button class="ml-10">Kirim Ke Beberapa Alamat</button>
    </div>
    <hr class="hrbold mt-15">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.badge-green {
  padding: 5px;
  background-color: #D6FEDE;
  color: #51AD13;
}
.people-checkout {
  .btn-collection {
    button {
      padding: 10px 15px;
      border-color: #E3E3E3;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      color: gray;
    }
    button:hover {
      color: #CACBCD;
      border-color: #CACBCD;
    }
  }
}
</style>
