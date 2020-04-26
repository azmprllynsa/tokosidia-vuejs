<template>
  <main >
    <!-- <div v-for="data in peopleDetail" :key="data.id"> -->
      <div class="main-header">
        <img src="https://ecs7.tokopedia.net/img/user/setting/icon-people.svg" alt="User Icon">
        <p class="text-bold">{{ peopleDetail.fullname }}</p>
      </div>
      <div class="main-content">
        <nav>
          <ol class="text-gray text-lg">
            <li>Biodata Diri</li>
            <li>Daftar Alamat</li>
            <li>Pembayaran</li>
            <li>Rekening Bank</li>
            <li>Notifikasi</li>
            <li>Keamanan</li>
            <li>Google Authenticator</li>
          </ol>
          <hr>
        </nav>
        <div class="personal-information">
          <div class="picture-section">
            <div class="profile-picture-container">
              <img id="profile-picture" src="https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-20.jpg" alt="">
              <div class="upload">
                <input type="file" class="custom-file-input">
                <p class="text-md text-gray">Besar file: maksimum 10.000.000 bytes (10 Megabytes)</p>
                <p class="text-md text-gray">Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
              </div>
            </div>
            <button class="text-gray"><i class="fas fa-key"></i> Ubah Kata Sandi</button>
            <button class="text-white btn-green"><i class="fas fa-lock"></i> PIN Tokopedia</button>
          </div>
          <div class="biodata-section">
            <div class="biodata">
              <h4 class="text-xl text-semibold">Ubah Biodata Diri</h4>
              <div class="biodata-section-flex text-gray text-lg">
                <div class="biodata-section-title">Nama</div>
                <div class="name-edit">
                  <p>{{ peopleDetail.fullname }}</p>
                  <button @click="showModal = !showModal" class="btn-borderless text-green hover-red">Ubah</button>
                  <ModalContainer :class="showModal ? '' : 'hidden'" class="edit-name-modal">
                    <div class="w-full flex-col justify-end items-end">
                      <img @click="showModal = !showModal" src="https://ecs7.tokopedia.net/img/profile-address/icon-close.png" width="30px" alt="">
                    </div>
                    <div class="flex-col justify-center items-center">
                      <h3 class="text-2xl text-bold">Ubah Nama</h3>
                      <p class="mt-20 text-lg">Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan nama sudah benar.</p>
                    </div>
                    <div class="mt-20">
                      <form id="form" action="" class="flex-col">
                        <label for="fullname">Nama</label>
                        <input type="text" name="fullname" id="fullname" v-model="peopleDetail.fullname" class="mt-10 modal-textfield">
                        <p class="mt-10">Nama dapat dilihat oleh pengguna lainnya</p>
                      </form>
                    </div>
                    <div class="mt-50 flex-row justify-center items-center">
                      <button class="btn-submit text-lg text-bold" type="submit" form="form">Simpan</button>
                    </div>
                  </ModalContainer>
                </div>
              </div>
              <div class="biodata-section-flex text-gray text-lg">
                <div class="biodata-section-title">Tanggal Lahir</div>
                <div>17 Agustus 1945</div>
              </div>
              <div class="biodata-section-flex text-gray text-lg biodata-section-bottom">
                <div class="biodata-section-title">Jenis Kelamin</div>
                <div>Pria</div>
              </div>
            </div>
            <div class="contact">
              <h4 class="text-xl text-semibold">Ubah Kontak</h4>
              <div class="biodata-section-flex text-gray text-lg">
                <div class="biodata-section-title">Email</div>
                <div class="email-edit">
                  <p>{{ peopleDetail.email }}</p>
                  <p class="verified text-green"><i class="fas fa-check fa-xs"></i> Terverifikasi</p>
                  <button class="btn-borderless text-green hover-red">Ubah</button>
                </div>
              </div>
              <div class="biodata-section-flex text-gray text-lg">
                <div class="biodata-section-title">Nomor HP</div>
                <div class="phone-edit">
                  <p>{{ peopleDetail.phone_number }}</p>
                  <p class="verified text-green"><i class="fas fa-check fa-xs"></i> Terverifikasi</p>
                  <button class="btn-borderless text-green hover-red">Ubah</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'

import ModalContainer from '@/components/ModalContainer'

export default {
  name: 'EditPeopleMain',
  data () {
    return {
      showModal: false
    }
  },
  components: {
    ModalContainer
  },
  computed: mapState([
    'peopleDetail'
  ])
}
</script>

<style lang="scss" scoped>
@import '@/assets/fblazt.scss';

.btn-submit {
  padding: 10px 50px;
  background-color: #4FA149;
  border: none;
  color: #FFFFFF;
  border-radius: 3px;
}
.modal-textfield {
  border: 1px solid lightgray;
  padding: 10px 15px;
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
main {
  width: 83%;
  margin-left: 20px;
  .main-header {
    display: flex;
    flex-direction: row;
    p {
      margin-left: 10px;
    }
  }
  .main-content {
    margin-top: 20px;
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    nav {
      ol {
        display: flex;
        flex-direction: row;
        li {
          margin: 20px;
        }
      }
    }
    .personal-information {
      padding: 40px 20px 20px 20px;
      display: flex;
      flex-direction: row;
      .picture-section {
        display: flex;
        flex-direction: column;
        .profile-picture-container {
          width: 298px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #E0E0E0;
          border-radius: 5px;
          background-color: #F7F7F7;
          img#profile-picture {
            height: 258px;
            width: 258px;
          }
          .upload {
            margin-top: 20px;
          }
          div {
            p {
              word-wrap: break-word;
              line-height: 22px;
            }
          }
        }
        button {
          width: 298px;
          padding: 5px 0;
          margin-top: 5px;
          background-color: #FFFFFF;
          border: 1px solid #E0E0E0;
        }
        button.btn-green {
          background-color: #56B54A;
        }
        button:hover {
            background-color:#F5F5F5
        }
        button.btn-green:hover {
          background-color: green;
        }
      }
      .biodata-section {
        margin-left: 20px;
        .biodata {
          .biodata-section-flex {
            .name-edit {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
          }
        }
        .contact {
          .biodata-section-flex {
            .email-edit {
              display: flex;
              flex-direction: row;
            }
            .phone-edit {
              display: flex;
              flex-direction: row;
            }
          }
        }
      }
    }
  }
}

// PROFILE PICTURE INPUT STYLING
.custom-file-input {
  color: transparent;
  height: 28px;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  height: auto;
  width: 99%;
  text-align: center;
  content: 'Pilih Foto';
  color: black;
  display: inline-block;
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  padding: 5px 0;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
}
.custom-file-input:hover::before {
  background-color:#F5F5F5
}
.custom-file-input:active {
  outline: 0;
}
.custom-file-input:active::before {
  background-color: -webkit-#FFFFFF;
}
</style>
