<template>
  <div class="wrapper">
    <div class="carousel-parent">
      <div class="item">
        <div class="carousel-item">
          <div class="item-image">
            <img src="@/assets/img/buku-sub-category.jpeg">
          </div>
          <div class="item-name">
            <p>Buku desain & bangunan</p>
          </div>
        </div>
      </div>
    </div>
    <div class="direction">
      <div class="category-direction"></div>
      <div class="box-share"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wrapper{
  // background-color: aquamarine;
  // width: 100%;
  // height: 200px;
  // padding-bottom: 100px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  .carousel-parent{
    // background-color: rgb(180, 133, 70);
    width: 100%;
    height: 127px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    padding-right: 30px;
    box-sizing: border-box;
    .item{
      // background-color: crimson;
      width: 100%;
      height: 100%;
      column-count: 7;
      column-fill: auto;
      padding-left: 30px;
      padding-right: 30px;
      .carousel-item{
        // background-color: darkblue;
        width: 126px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-image{
          // background-color: darkcyan;
          width: 90px;
          height: 80px;
          img{
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
        .item-name{
          // background-color: darkgoldenrod;
          width: 90px;
          // height: 30px;
          p{
            text-align: center;
            font-size: 12px;
          }
        }
      }
    }
  }
  .direction{
    background: rgb(225, 225, 225);
    widows: 100%;
    height: 53px;
    box-shadow: rgb(224, 224, 224) 1px 1px 6px 1px;
    border-radius: 6px;
  }
}
</style>
