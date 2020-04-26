<template>
  <main>
    <div class="main-content">
      <nav>
        <ul class="text-soft-gray text-lg">
          <li>Daftar Belanja</li>
          <li>Daftar Transaksi Top-Up & Tagihan</li>
          <li>Daftar Transaksi Travel & Entertainment</li>
          <li>Daftar Investasi</li>
          <li>Daftar Transaksi Print</li>
        </ul>
        <hr>
      </nav>
      <div v-if="filteredOrder.length === 0" class="no-order">
        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/dd7dcb8c.png" width="200px" alt="">
        <h1>Wah, ternyata kamu belum pernah beli apa apa nih</h1>
        <router-link class="to-home" to="/">Buang duit yuk</router-link>
      </div>
      <OrderedItem v-if="filteredOrder.length !== 0"/>
    </div>
  </main>
</template>

<script>
import OrderedItem from '@/components/OrderedItem'

export default {
  name: 'OrderDetailMain',
  components: {
    OrderedItem
  },
  computed: {
    filteredOrder () {
      return this.$store.getters.filteredOrder
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.no-order {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .to-home {
    margin-top: 20px;
    background-color: #56B54A;
    padding: 20px 70px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    border-radius: 10px;
  }
}

.mt-50 {
  margin-top: 50px;
}
.dropdown {
  -webkit-transition: -webkit-transform .5s ease-in-out;
  -ms-transition: -ms-transform .5s ease-in-out;
  transition: transform .5s ease-in-out;
  transform:rotate(-180deg);
  -ms-transform:rotate(-180deg);
  -webkit-transform:rotate(-180deg);
}
.hidden {
  display: none;
}
hr {
  margin: 0;
}
.hrthin {
  margin: 20px 0;
}
.pointer {
  cursor: pointer;
}
.text-semibold {
  font-weight: 600;
}
.text-bold {
  font-weight: 700;
}
.text-xl {
  font-size: 14px;
}
.text-2xl {
  font-size: 18px;
}
.text-lg {
  font-size: 13px;
}
.text-md {
  font-size: 12px;
}
.text-sm {
  font-size: 11px;
}
.text-soft-gray {
  color:#C6C6C6;
}
.text-gray {
  color: #757575;
}
.text-green {
  color: #56B54A;
}
.hover-red:hover {
  color:tomato;
}
.hover-bg-gray:hover {
  background-color: #F7F7F7;
}
.btn-borderless {
  border: none;
}
main {
  width: 80%;
  margin-left: 20px;
  .main-header {
    display: flex;
    flex-direction: row;
    p {
      margin-left: 10px;
    }
  }
  .main-content {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    nav {
      ul {
        display: flex;
        flex-direction: row;
        li {
          margin: 20px;
        }
        li:nth-child(1) {
          color: #03AC0e;
        }
      }
    }
  }
}
</style>
