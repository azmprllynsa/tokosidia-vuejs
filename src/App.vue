<template>
  <div id="tokosidia">
    <NavbarHome />
    <router-view/>
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
  margin: 105px auto 0;
}
</style>
