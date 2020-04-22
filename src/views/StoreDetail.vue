<template>
  <div class="store-detail wrapper">
    <div class="header-wrapper">
      <div class="header-img">
        <img src="@/assets/img/contoh-header-img.jpg">
      </div>
      <div class="header-info">
        <div class="info-wrapper">
          <div class="store-info1">
            <div class="profile-photo">
              <img src="@/assets/img/contoh-foto-profil.jpg">
            </div>
            <div class="detail">
              <div class="store-name">
                <h2>Vengoz</h2>
                <div class="gold">
                  <img src="@/assets/img/gold-4.gif">
                </div>
                <div class="help">
                  <img src="@/assets/img/help.png">
                </div>
              </div>
              <div class="info-detail">
                <div class="time-chatting">
                  <p>Dibalas &plusmn; 3 jam</p>
                </div>
                <div class="location">
                  <img src="">
                  <p>Jakarta Utara</p>
                </div>
                <div class="followers">
                  <p>62.8K Followers</p>
                </div>
              </div>
              <div class="info-btn">
                <button class="btn btn-primary" >Follow</button>
                <button class="btn btn-primary" >Chat Penjual</button>
                <button class="btn btn-flat" >Info Toko</button>
                <button class="btn btn-flat note" >
                  <div>
                    <img src="@/assets/img/paste.png">
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="store-info2">
            <div class="product-sold">
              <h3>Produk Terjual</h3>
              <div class="number-sold">
                18.3K
              </div>
            </div>
            <div class="product-quality">
              <h3>Nilai Kualitas Produk</h3>
              <div class="score-quality">
                <div class="score-number">4.8</div>
                <div class="score-stars">
                  <img src="@/assets/img/star.png">
                  <img src="@/assets/img/star.png">
                  <img src="@/assets/img/star.png">
                  <img src="@/assets/img/star.png">
                  <img src="@/assets/img/star.png">
                </div>
                <span>(8242 Ulasan)</span>
              </div>
              <div class="store-statistic">
                <p>Lihat statistik toko</p>
              </div>
            </div>
            <div class="share-btn">
              <button>
                <div>
                  <img src="@/assets/img/share.png">
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Store Detail',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.store-detail {
  padding: 23px 0;
}
.header-wrapper {
  position: relative;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.108);
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px 20px 10px 10px;
  .header-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 300px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .header-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgb(255, 255, 255);
    height: 138px;
    border-radius: 40px 40px 0 0;
    .info-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 16px 24px;
      .store-info1 {
        display: flex;
        width: 50%;
        height: 100%;
        .profile-photo {
          width: 86px;
          height: 86px;
          overflow: hidden;
          border-radius: 43px;
          border: 6px solid white;
          transform: translateY(-40px);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 75%;
          height: 100%;
          padding-left: 24px;
          .store-name {
            display: flex;
            align-items: center;
            h2 {
              font-size: 20px;
              font-weight: bold;
              color: #3d3d3d;
              text-transform: uppercase;
            }
            .gold {
              margin-left: 8px;
              height: 17px;
              cursor: pointer;
              img {
                object-fit: cover;
              }
            }
            .help {
              margin-left: 4px;
              height: 14px;
              align-self: flex-end;
              cursor: pointer;
              img {
                object-fit: cover;
                height: 100%;
              }
            }
          }
          .info-detail {
            display: flex;
            p {
              font-size: 12px;
              color: #6e6e6e;
            }
            .time-chatting {
              padding-right: 10px;
              border-right: 1px solid #dadada;
            }
            .location {
              display: flex;
              padding: 0 10px;
            }
            .followers {
              padding-left: 10px;
              border-left: 1px solid #dadada;
              p {
                font-weight: bold;
                color: #414141;
              }
            }
          }
          .info-btn {
            display: flex;
            align-items: center;
            .btn {
              width: 115px;
              height: 32px;
              font-weight: 700;
              border-radius: 8px;
              margin-right: 15px;
              &:last-child {
                margin-right: 0;
              }
            }
            .btn-flat {
              color: #979797;
              border: 1px solid #d4d4d4;
              background-color: white;
              width: auto;
              padding: 0 14px;
              &.note {
                padding: 0 5px;
                div {
                  height: 20px;
                  img {
                    object-fit: cover;
                    height: 100%;
                    opacity: 0.56;
                  }
                }
              }
            }
            .btn-primary {
              color: white;
              border: 1px solid #03ac0c;
              background-color: #03ac0c;
            }
          }
        }
      }
      .store-info2 {
        position: relative;
        display: flex;
        width: 50%;
        height: 80%;
        border-left: 1px solid #d4d4d4;
        padding-left: 40px;
        h3 {
          line-height: 1.5;
          font-size: 14px;
          color: #535353;
          margin-bottom: 8px;
        }
        .number-sold,
        .score-number {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 800;
          font-size: 24px;
          color: #414141;
        }
        .product-quality {
          padding-left: 56px;
          .score-quality {
            display: flex;
            align-items: center;
            .score-stars {
              margin-left: 8px;
              img {
                object-fit: cover;
                height: 25px;
                width: 25px;
              }
            }
            span {
              font-family: 'Nunito Sans', sans-serif;
              margin-left: 8px;
              font-size: 12px;
              font-weight: 800;
              color: rgb(112, 112, 112);
            }
          }
          .store-statistic {
            margin-top: 10px;
            letter-spacing: -0.3px;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #03ac0e;
            cursor: pointer;
          }
        }
        .share-btn {
          position: absolute;
          right: 0;
          bottom: 8px;
          button {
            width: 32px;
            height: 32px;
            border: 1px solid #d4d4d4;
            border-radius: 100px;
            padding: 5px;
            div {
              width: 15px;
              height: 15px;
              img {
                object-fit: cover;
                width: 100%;
                margin-left: 2px;
                opacity: .5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
