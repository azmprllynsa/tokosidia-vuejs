<template>
  <div id="tokosidia">
    <NavbarHome v-if="$route.name !== 'Login' && $route.name !== 'Register' && $route.name !== 'Confirmation'" />
    <router-view/>
    <Footer v-if="$route.name !== 'Login' && $route.name !== 'Register' && $route.name !== 'Confirmation'"/>
    <Modal v-show="$route.name !== 'Login' && $route.name !== 'Register' && $store.state.modalLogin"
    @bg-clicked="$store.state.modalLogin = false"
    widthModal="369px"
    :closeButton="true">
      <Login resetWrapper="yes" />
    </Modal>
  </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/ModalContainer.vue'
import Login from '@/components/Login.vue'

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
    Footer,
    Modal,
    Login
  },
  created () {
    // this.$store.dispatch('loadPeopleDetail')
    this.$store.dispatch('categoryList')
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
