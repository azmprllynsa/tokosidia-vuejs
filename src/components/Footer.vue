<template>
  <footer>
    <div class="wrapper">
      <div class="column">
        <ul>
          <li><h5>Tokosidia</h5></li>
          <li><router-link to="/">About Tokosidia</router-link></li>
          <li><router-link to="/">Career</router-link></li>
          <li><router-link to="/">Blog</router-link></li>
          <li><router-link to="/">Tokosidia Salam</router-link></li>
          <li><router-link to="/">Hotel</router-link></li>
          <li><router-link to="/">Bridestory</router-link></li>
          <li><router-link to="/">Parentstory</router-link></li>
          <li><router-link to="/">Tokosidia Dictionary</router-link></li>
          <li><router-link to="/">Official Store</router-link></li>
          <li><router-link to="/">Tokosidia Apps</router-link></li>
          <li><router-link to="/">Billing & Top up</router-link></li>
          <li><router-link to="/">Deals Tokosidia</router-link></li>
          <li><router-link to="/">Finance</router-link></li>
          <li><router-link to="/">Free Shipping</router-link></li>
          <li><router-link to="/">Trade In Handphone</router-link></li>
          <li><router-link to="/">Umroh Package</router-link></li>
          <li><router-link to="/">Alquran Online</router-link></li>
          <li><router-link to="/">Kotak Kejutan</router-link></li>
        </ul>
      </div>
      <div class="column">
        <ul>
          <li><h5>Buy</h5></li>
          <li><router-link to="/">Train Ticket</router-link></li>
          <li><router-link to="/">Flight Ticket</router-link></li>
          <li><router-link to="/">Ticket Events</router-link></li>
          <li><router-link to="/">Hotlist</router-link></li>
          <li><router-link to="/">Category</router-link></li>
        </ul>
        <ul>
          <li><h5>Sell</h5></li>
          <li><router-link to="/">Seller Education Centre</router-link></li>
          <li><router-link to="/">Mitra Toppers</router-link></li>
          <li><router-link to="/">Register Official Store</router-link></li>
        </ul>
      </div>
      <div class="column">
        <ul>
          <li><h5>Guiude Help</h5></li>
          <li><router-link to="/">Tokopedia Care</router-link></li>
          <li><router-link to="/">Terms and Condition</router-link></li>
          <li><router-link to="/">Privacy</router-link></li>
        </ul>
        <ul>
          <li><h5>Security</h5></li>
          <li>
            <router-link to="/">
              <img src="">
            </router-link>
          </li>
        </ul>
        <ul>
          <li><h5>Follow Us</h5></li>
          <li>
            <router-link to="/">
              <img src="">
            </router-link>
            <router-link to="/">
              <img src="">
            </router-link>
            <router-link to="/">
              <img src="">
            </router-link>
            <router-link to="/">
              <img src="">
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <div class="footer-img">
          <img src="@/assets/img/il-footer-2.jpg">
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  height: 677px;
  padding: 32px 0;
  box-shadow: 0px 1px 6px 0px rgba(49, 53, 59, 0.12);
  .wrapper {
    margin-top: 0;
    padding: 32px;
    box-sizing: content-box;
    display: flex;
    .column {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      ul {
        margin-bottom: 24px;
        > li {
          margin-bottom: 8px;
          h5 {
            font-size: 16px;
            font-family:'Nunito Sans', Arial, sans-serif;
            font-weight: 800;
            color: rgb(69, 69, 69);
            line-height: 20px;
          }
          a {
            font-size: 13px;
            font-weight: 600;
            color: rgb(194, 194, 194);
            line-height: 20px;
            cursor: pointer;
            transition: .3s;
            &:hover {
              color: #03ac0e;
            }
          }
        }
      }
    }
    .column:nth-child(1) {
      flex-grow: 1;
    }
    .column:nth-child(2) {
      flex-grow: 1;
    }
    .column:nth-child(3) {
      flex-grow: 1;
    }
    .column:nth-child(4) {
      flex-grow: 7;
    }
  }
}

</style>
