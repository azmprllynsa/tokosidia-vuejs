<template>
  <div class="wrapper">
    <img src="https://ecs7.tokopedia.net/assets-unify/img/il-error-not-found.png" alt="Not Found">
    <h1>Waduh, tujuanmu nggak ada!</h1>
    <p>Mungkin kamu salah jalan atau alamat, ayo balik sebelum gelap!</p>
    <button @click="$router.go(-1)">Kembali</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
    height: 300px;
  }
  h1 {
    font-size: 38px;
    font-weight: 700;
    color: #393D43;
  }
  p {
    font-size: 14px;
    margin-top: 20px;
  }
  button {
    margin-top: 30px;
    padding: 15px 125px;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #03AC0E;
    border-radius: 8px;
    border: none;
  }
}
</style>
