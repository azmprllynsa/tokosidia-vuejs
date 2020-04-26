<template>
  <div :style="{ width: customWidth || '100%' }" class="search">
    <form @submit.prevent="$emit('getValue', searchValue)">
      <input type="text" v-model="searchValue" :placeholder="placeholder || 'Cari es batu'">
      <button><img src="@/assets/img/search.png" class="icon-search"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  props: ['customWidth', 'placeholder'],
  data () {
    return {
      searchValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  form {
    border: 1px solid #dddddd;
    border-radius: 7px;
    display: flex;
    overflow: hidden;
    transition: .4s;
    &:active {
      border: 1px solid #03ac0c;
    }
    input {
      font-size: 12px;
      color: #929292;
      background-color: transparent;
      outline: none;
      border: none;
      padding: 6px 10px;
      width: 100%;
    }
    button {
      background-color: #dadada;
      width: 35px;
      border: none;
      .icon-search {
        height: 20px;
        width: 20px;
        margin-top: 4px;
        opacity: .3;
      }
    }
  }
}
</style>
