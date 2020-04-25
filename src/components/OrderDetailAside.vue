<template>
  <aside>
    <div class="sidebar-user">
      <div class="top">
        <img id="small-pict" src="https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-20.jpg" alt="">
        <div class="side-profile">
          <p id="side-name" class="hover-green text-md text-bold">Firman</p>
          <p class="text-gray text-sm">
            Verified Account
          </p>
        </div>
      </div>
      <hr class="hrfull">
      <div class="ovo-balance">
        <img id="ovo-logo" src="https://ecs7.tokopedia.net/img/ovo-logo.png" alt="Ovo logo">
        <div class="total-ovo-balance">
          <div class="flex-row">
            <p class="text-sm text-gray">OVO Cash</p>
            <p class="text-sm text-bold">Rp. 6.143</p>
          </div>
          <div class="flex-row">
            <p class="text-sm text-gray">OVO Points</p>
            <p class="text-sm text-bold">1.874</p>
          </div>
          <hr class="hrthin">
        </div>
      </div>
      <div class="saldo">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIwIDE2Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0wLTJoMjB2MjBIMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNDRUY0Q0YiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMjIyIDEuMzAzdjEyLjI5NGE4LjMwNyA4LjMwNyAwIDAgMC0xLjczLS4xOWMtMS4wOTMgMC0xLjc0LjM0MS0yLjY5NS43MjUtMS4zNzcuNTUzLTEuOTU1LS4yMy0xLjk1NS0xLjIwNFYzLjMxYzAtMi4zNTkgMi43NC0yLjI0NCA0LjI3Ni0yLjI0NGE5LjIzIDkuMjMgMCAwIDEgMi4xMDQuMjM4eiIvPiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDJCNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4wMzEiIGQ9Ik0xOS4xNzYgMTIuNThWMy42NzZjMC0xLjQ4NC0uMzI0LTIuMjEzLTEuNzAyLTIuMTA1LTEuMDI2LjA4LTIuNzc3IDEuMjYtMy44NjggMS4yNi0xLjQ1OCAwLTIuMzEzLS40MDYtMy45MDMtLjgzNy0xLjY4NC0uNDU3LTIuNzgtLjkzLTQuNTg1LS45M0MzLjU4MiAxLjA2NS44NDIuOTUuODQyIDMuMzF2OS42MmMwIC45NzMuNTc4IDEuNzU2IDEuOTU1IDEuMjAzLjk1NS0uMzg0IDEuNjAyLS43MjUgMi42OTUtLjcyNCAxLjQ1NyAwIDIuNTg1LjQwNiA0LjE3NS44MzcgMS42ODUuNDU3IDMuNDMuNjA0IDUuMjM0LjYwNCAzLjIyMSAwIDQuMjc1LTEuMzc5IDQuMjc1LTIuMjd6Ii8+ICAgICAgICA8cGF0aCBzdHJva2U9IiM0MkI1NDkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNzczIiBkPSJNMTUuMjAzIDQuMTYycy41NDcuNDEgMS45ODUtLjQ0bS0xMi42NSA4LjE2M3MtLjU0Ny0uNDA4LTEuOTg2LjQ0Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjNDJCNTQ5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik02LjU0MiA5LjYxN2EuMzM1LjMzNSAwIDAgMS0uMDk5LjI0NC4zNDUuMzQ1IDAgMCAxLS40NzQuMDAyLjMzNS4zMzUgMCAwIDEtLjEwMS0uMjQ2VjUuMTgyYzAtLjA5Ni4wMzMtLjE3OC4xLS4yNDVhLjMxOC4zMTggMCAwIDEgLjIzOC0uMTAxbDEuNDQ3LS4wMDRhMS40IDEuNCAwIDAgMSAxLjAyNy40MzNjLjI4Mi4yODcuNDI2LjY0MS40MjYgMS4wNDkgMCAuNDA2LS4xNDIuNzYxLS40MjIgMS4wNDdsLS4xMy4xMjIgMS4xMDUgMS45NmEuMzI1LjMyNSAwIDAgMSAuMDMzLjI2Ny4zMjguMzI4IDAgMCAxLS4xNTguMjA2Yy0uMDczLjA0My0uMTI2LjA2LS4xOS4wNWEuMzgyLjM4MiAwIDAgMS0uMDY0LS4wMTcuMzIzLjMyMyAwIDAgMS0uMjA0LS4xNTdMNy45MzUgNy43NzdsLS4wNzMuMDFhMS41MjYgMS41MjYgMCAwIDEtLjIwOS4wMTJoLTEuMTF2MS44MTh6bS0uMTM5LTQuMjQzdjEuODgyaDEuMjVhLjg5Ny44OTcgMCAwIDAgLjY2LS4yNzguOTIzLjkyMyAwIDAgMCAuMjctLjY2NC45MS45MSAwIDAgMC0uMjcyLS42Ni44OS44OSAwIDAgMC0uNjU4LS4yOGgtMS4yNXptNS4wNTkgNS42ODVhLjMzOC4zMzggMCAxIDEtLjY3NSAwVjguMTdjLjAwNi0uNDgzLjE3OC0uOTAzLjUxLTEuMjQyLjMzNy0uMzQ0Ljc1My0uNTIgMS4yMy0uNTIuNDc4IDAgLjg5My4xNzYgMS4yMy41Mi4zMzcuMzQ0LjUxLjc3LjUxIDEuMjU5IDAgLjQ4OS0uMTczLjkxNC0uNTEyIDEuMjU4LS4zMzYuMzQzLS43NTIuNTItMS4yMjguNTJhMS42NyAxLjY3IDAgMCAxLS45MDItLjI1NGwtLjE2My0uMTA0djEuNDUzem0xLjkyMy0yLjAwOWMuMjM1LS4yNDMuMzUtLjUyNy4zNS0uODY4IDAtLjM0Mi0uMTE1LS42MjYtLjM1Mi0uODY3YTEuMTQ3IDEuMTQ3IDAgMCAwLS44NTYtLjM2Yy0uMzM5IDAtLjYyLjExNy0uODU4LjM1OC0uMjIuMjI0LS4zMzMuNDktLjM0OC44MXYuMDM3bC4wMDMuMTc3Yy4wMy4yNy4xNDYuNTEuMzQ1LjcxNC4yNC4yNDMuNTIuMzYyLjg1OC4zNjIuMzM4IDAgLjYxOC0uMTE5Ljg1OC0uMzYzeiIvPiAgICA8L2c+PC9zdmc+" alt="">
        <div class="">
          <p class="text-sm text-gray">Saldo</p>
          <p class="text-sm text-bold">Rp. 0</p>
        </div>
      </div>
      <div class="shop">
        <p class="text-md text-soft-gray">You do not have shop yet</p>
        <button>Open Shop</button>
        <a href="" class="text-md text-green hover-red">Learn more at seller center</a>
      </div>
      <div class="inbox">
        <div @click="inboxOpen = !inboxOpen" class="text-lg">
          <h4>INBOX</h4>
          <i :class="inboxOpen ? '' : 'dropdown'" class="dropdown-close pointer fas fa-chevron-up fa-xs"></i>
        </div>
        <ul :class="inboxOpen ? 'text-md text-green':'hidden'">
          <li class="hover-red hover-bg-gray">Chat</li>
          <li class="hover-red hover-bg-gray">Talk About It</li>
          <li class="hover-red hover-bg-gray">Reviews</li>
          <li class="hover-red hover-bg-gray">Support Message</li>
          <li class="hover-red hover-bg-gray">Order Complaint</li>
          <li class="hover-red hover-bg-gray">Update</li>
        </ul>
      </div>
      <div class="purchase">
        <div @click="purchaseOpen = !purchaseOpen" class="text-lg">
          <h4>PURCHASE</h4>
          <i :class="purchaseOpen ? '' : 'dropdown'" class= "dropdown-close pointer fas fa-chevron-up fa-xs"></i>
        </div>
        <ul :class="purchaseOpen ? 'text-md text-green':'hidden'">
          <li class="hover-red hover-bg-gray">Awaiting Payment</li>
          <li class="hover-red hover-bg-gray">Transaction List</li>
        </ul>
      </div>
      <div class="my-profile">
        <div @click="myProfileOpen = !myProfileOpen" class="text-lg">
          <h4>MY PROFILE</h4>
          <i :class="myProfileOpen ? '' : 'dropdown'" class="dropdown-close pointer fas fa-chevron-up fa-xs"></i>
        </div>
        <ul :class="myProfileOpen ? 'text-md text-green':'hidden'">
          <li class="hover-red hover-bg-gray">Wishlist</li>
          <li class="hover-red hover-bg-gray">Favorite Shop</li>
          <li class="hover-red hover-bg-gray">Setting</li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'OrderDetailAside',
  data () {
    return {
      inboxOpen: true,
      purchaseOpen: true,
      myProfileOpen: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-close {
  -webkit-transition: -webkit-transform .5s ease-in-out;
  -ms-transition: -ms-transform .5s ease-in-out;
  transition: transform .5s ease-in-out;
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
.hover-green:hover {
  color: #42B549;
}
.hover-bg-gray:hover {
  background-color: #F7F7F7;
}
.btn-borderless {
  border: none;
}
.biodata-section-flex {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
}
.biodata-section-title {
  width: 150px;
}
.biodata-section-bottom {
  margin-bottom: 25px;
}
.verified {
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 25px;
  background-color: #D4EFD5;
}
aside {
  width: 20%;
  .sidebar-user {
    background-color: #FFFFFF;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    .top {
      padding: 2px;
      display: flex;
      flex-direction: row;
      img#small-pict {
        height: 48px;
        width: 48px;
        border-radius: 50%;
      }
      .side-profile {
        margin-left: 10px;
        padding: 10px 0;
        p#side-name {
          padding: 1px 0;
        }
        p {
          margin-bottom: 5px;
          img#egg {
            height: 12px;
            width: 10px;
          }
        }
      }
    }
    .ovo-balance {
      width: 100%;
      display: flex;
      flex-direction: row;
      img#ovo-logo {
        height: 25px;
        width: 25px;
      }
      .total-ovo-balance {
        width: 100%;
        margin-left: 10px;
        div {
          margin: 10px 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
    .saldo {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      div{
        width: 100%;
        margin: 10px 0 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    .shop {
      width: 100%;
      p {
        margin: 5px 0;
      }
      button {
        width: 100%;
        padding: 5px 0;
        border: none;
        background-color: #56B54A;
        border-radius: 3px;
        color: #FFFFFF;
        text-align: center;
      }
      button:hover {
        background-color: #4FA149;
      }
    }
    .inbox {
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0 10px 0;
      }
      ul {
        li {
          margin: 0 -10px;
          padding: 10px 10px;
        }
      }
    }
    .purchase {
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0 10px 0;
      }
      ul {
        li {
          margin: 0 -10px;
          padding: 10px 10px;
        }
      }
    }
    .my-profile {
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0 10px 0;
      }
      ul {
        li {
          margin: 0 -10px;
          padding: 10px 10px;
        }
      }
    }
  }
}
</style>
