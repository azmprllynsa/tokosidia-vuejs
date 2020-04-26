<template>
  <button @click="$emit('button-click')" class="mt-10 py-10 btn-red text-white text-bold">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'ShoppingSummaryBtn',
  props: ['btnText']
}
</script>

<style lang="scss" scoped>
.ml-10 {
  margin-left: 10px;
}
.py-10 {
  padding: 10px 0;
}
.btn-red {
  background-color: #FA591D;
  border: none;
  border-radius: 8px;
}
.text-white {
  color: white;
}
.text-bold {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
</style>
