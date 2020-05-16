<template>
  <div class="wrapper">
    <div class="card-container">
      <div class="profile-card">
        <div class="header">
          <img src="https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-20.jpg" alt="Profile Picture">
          <h3 id="name">{{ usersDetail.fullname }}</h3>
          <p id="username">@username</p>
          <p id="following">71 Following</p>
        </div>
        <div class="footer">
          <router-link :to="'/people/' + peopleDetail.id + '/edit'">
            <button>Edit Profil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'People',
  computed: {
    ...mapState([
      'usersDetail',
      'peopleDetail'
    ])
  },
  created () {
    this.$store.dispatch('loadUsersDetail', this.$route.params.idPeople)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px 0;
  .card-container {
    width: 302px;
    padding: 0 7px;
    .profile-card {
      width: 288px;
      border-radius: 8px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,0.12);
      position: sticky;
      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-20.jpg");
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,255,50,0.75) 0%, rgba(33,35,187,0.50) 100%);
        border-radius: 8px 8px 40px 40px;
        img {
          height: 80px;
          width: 80px;
          margin-top: 30px;
          border-radius: 50%;
          border: 2px solid white;
        }
        #name {
          margin-top: 25px;
          color: white;
          font-weight: 800;
        }
        #username {
          margin-top: 10px;
          color: white;
          font-size: 14px;
        }
        #following {
          margin-top: 25px;
          margin-bottom: 30px;
          font-size: 14px;
          color: white;
        }
      }
      .footer {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 265px;
          padding: 10px 0;
          border-color: #E3E3E3;
          border-radius: 8px;
          font-weight: 600;
          color: gray;
        }
        button:hover {
          color: #CACBCD;
          border-color: #CACBCD;
        }
      }
    }
  }
}

</style>
