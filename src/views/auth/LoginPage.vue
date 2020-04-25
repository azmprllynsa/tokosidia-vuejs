<template>
  <div class="login-wrapper">
    <div class="login-head">
      <router-link to="/">
        <img src="@/assets/img/tokosidia-logo.png">
      </router-link>
    </div>
    <div class="login-body"
         :style="{ backgroundImage: `url(${require('@/assets/img/bg-tokosidia-full.png')})` }"
    >
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
@keyframes backIn {
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateX(0px);
  }
}
@keyframes nextIn {
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateX(0px);
  }
}
.login-head {
  padding: 32px 0 9px;
  text-align: center;
  img {
    height: 28px;
  }
}
.login-body {
  width: 800px;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 30px auto;
  padding-top: 40px;
}
</style>
