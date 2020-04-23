<template>
  <div id="tokosidia">
    <NavbarHome />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Situs Jual Beli Online Kurang Terpercaya | Tokosidia'
      },
      immediate: true
    }
  },
  components: {
    NavbarHome,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';

.wrapper {
  width: 1200px;
  margin: 85px auto 0;
}
</style>
