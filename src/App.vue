<template>
  <div id="tokosidia">
    <NavbarHome />
    <router-view/>
    <footer>
      <div>FOOTER nya NYUSUL GAES</div>
    </footer>
  </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome.vue'

export default {
  name: 'Home',
  components: {
    NavbarHome
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';

.wrapper {
  width: 1200px;
  margin: 85px auto 0;
}

footer {
  padding: 250px 600px;
  div {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
