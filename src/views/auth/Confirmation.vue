<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'confirmation',
  data () {
    return {
      message: 'Error: 404'
    }
  },
  created () {
    const url = process.env.VUE_APP_URL_API + 'user/auth?activated=' + this.$route.query.key
    Axios
      .get(url)
      .then(res => {
        this.message = res.data.message
      })
    setTimeout(() => {
      this.$router.push('/')
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  h1 {
    padding-top: 100px;
    text-align: center;
    font-size: 20px;
  }
}
</style>
