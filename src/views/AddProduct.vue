<template>
  <div class="wrapper">
    <div class="addProduct"><p>Tambah Produk</p></div>
    <div class="terms">
      <div class="textTerms">
        <p>Pastikan produk Anda sudah sesuai dengan <span>syarat dan ketentuan Tokopedia.</span> Tokopedia menghimbau seller untuk menjual produk dengar harga yang wajar atau produk Anda dapat diturunkan oleh Tokopedia sesuai S&K yang berlaku.</p>
      </div>
    </div>
    <div class="boxInput">
      <div class="nameInput">
        <div class="topInput">
          <p>Upload Product</p>
        </div>
        <div class="buttomInput">
          <p>Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px)</p>
        </div>
      </div>
      <div class="imageInput">
        <input type="file" class="custom-file-input">
        <input type="file" class="custom-file-input">
        <input type="file" class="custom-file-input">
        <input type="file" class="custom-file-input">
        <input type="file" class="custom-file-input">
      </div>
      <div class="upload">
        <div class="selectProduk">
          <p>+ Pilih Gambar Produk</p>
        </div>
        <div class="uploadText">
          <p>atau tarik dan letakkan hingga 5 gambar sekaligus di sini</p>
        </div>
      </div>
    </div>
    <div class="information">
      <div class="label">
        <p>Informasi Produk</p>
      </div>
      <div class="inputLabelParent">
        <div class="labelName">
          <div class="nameProduct">
            <p>Nama Produk</p>
            <span>Nama produk min. 5 kata dan   terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.
            </span>
          </div>
          <div class="category">
            <p>Kategori</p>
          </div>
          <div class="etalase">
            <p>Etalase</p>
          </div>
        </div>
        <div class="inputLabel">
          <div class="inputName">
            <input type="text" placeholder="Contoh: Sepatu Pria (jenis/Kategori produk) + Tokostore (merk) + Kanvas Hitam (keterangan)">
          </div>
          <div class="inputCategory">
            <input type="text">
          </div>
          <div class="inputEtalase">
            <select>
              <option value="1">Tambah etalase</option>
            </select>
            <input type="text" placeholder="Masukkan Nama Etalase">
          </div>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="title"><p>Deskripsi Produk</p></div>
      <div class="condition">
        <div class="conditionText">
          <p>Kondisi</p>
        </div>
        <div class="conditionOption">
          <div class="new">
            <label class="container">Baru
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="second">
            <label class="container">Bekas
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="additional">
        <div class="leftSide">
          <div class="up"><p>Keterangan Produk</p></div>
          <div class="down"><p>Cantumkan deskripsi lengkap sesuai produk, seperti keunggulan, spesifikasi, material, ukuran, masa berlaku, dan lainnya. Panjang deskripsi antara 450-2000 karakter.</p></div>
        </div>
        <div class="rightSide">
            <textarea name="" id="" cols="300" rows="100"></textarea>
        </div>
      </div>
      <div class="video">
        <div class="videoAdd">
          <div class="up"><p>Video Produk</p></div>
          <div class="down"><p>URL video yang didukung saat ini adalah URL video dari <span>Youtube. Info Lengkap</span>
          </p></div>
        </div>
        <div class="videoInput">
          <div class="buttonVideo"><p>+ Tambah URL Video</p></div>
        </div>
      </div>
    </div>
    <div class="varianProduct">
      <div class="varianItem">
        <div class="up"><p>Varian Produk</p></div>
        <div class="down">
          <div class="left"><p>Aktifkan Varian Produk agar memudahkan pembeli cek stok produkmu. Tambahkan detail varian seperti warna, ukuran, atau pilihan varian lainnya.</p></div>
          <div class="right"><p>+ Tambah Varian Produk</p></div>
        </div>
      </div>
    </div>
    <div class="priceProduct">
      <div class="price"><p>Harga</p></div>
      <div class="minimum">
        <div class="left">
          <div class="up"><p>Minimum Pemesanan</p></div>
          <div class="down"><p>Atur jumlah minimum yang harus dibeli untuk produk ini.
          </p></div>
        </div>
        <div class="right">
          <input type="text" placeholder="1">
        </div>
      </div>
      <div class="eachPrice">
        <div class="left"><p>Harga Satuan</p></div>
        <div class="right">
          <div class="first"><p>Rp</p></div>
          <div class="second">
            <input type="text" placeholder="Masukkan Harga">
          </div>
        </div>
      </div>
      <div class="distributor">
        <div class="left">
          <div class="up"><p>Harga Grosir</p>
          </div>
          <div class="down"><p>Tambahkan harga grosir untuk pembelian produk dalam jumlah tertentu.</p>
          </div>
        </div>
        <div class="right"><p> + Tambah Harga Grosir</p></div>
      </div>
    </div>
    <div class="management">
      <div class="managementProduct"><p>Pengelolaan Product</p></div>
      <div class="status">
        <div class="left">
          <div class="up"><p>Status Produk</p></div>
          <div class="down"><p>Jika status aktif, produkmu dapat dicari oleh calon pembeli.</p></div>
        </div>
        <div class="right">
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
          <p>Aktif</p>
        </div>
      </div>
      <div class="stock">
        <div class="left"><p>Stock Produk</p></div>
        <div class="right">
          <input type="text" placeholder="Masukkan Jumlah Stok">
        </div>
      </div>
      <div class="SKU">
        <div class="left">
          <div class="up"><p>SKU (Stock Keeping Unit)</p></div>
          <div class="down"><p>Gunakan SKU untuk menambahkan kode unik pada produk ini.</p></div>
        </div>
        <div class="right">
          <input type="text" placeholder="Masukkan SKU">
        </div>
      </div>
    </div>
    <div class="weight">
      <div class="weightShipment"><p>Berat & Pengiriman</p></div>
      <div class="weightTotal">
        <div class="left">
          <div class="up"><p>Berat</p></div>
          <div class="down"><p>Produk ringan dengan ukuran yang besar hitung dengan  <span>Volume Weight.</span></p>
          </div>
        </div>
        <div class="right">
          <select name="gram" id="gram">
            <option value="gram">Gram (gr)</option>
          </select>
          <input type="text" placeholder="Masukkan Berat">
        </div>
      </div>
      <div class="insurance">
        <div class="left">
          <div class="up"><p>Asusransi Pengiriman</p></div>
          <div class="down"><p>Aktifkan jaminan kerugian, kerusakan & kehilangan atas pengiriman produk ini.</p></div>
        </div>
        <div class="right">
          <div class="new">
            <label class="container"> Opsional
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="second">
            <label class="container"> Ya
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <!-- <div class="preorder">
        <div class="left"><p>Preorder</p></div>
        <div class="right"></div>
      </div> -->
    </div>
    <div class="buttonSelect">
      <div class="btnCancel"><p>Batal</p></div>
      <div class="btnSave-add"><p>Simpan & Tambah Baru</p></div>
      <div class="btnSave"><p>Simpan</p></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wrapper{
  padding-top: 100px;
  padding-bottom: 100px;
  .addProduct{
    // background-color: brown;
    width: 100%;
    height: 40px;
    p{
      color: rgba(0, 0, 0, 0.76);
      font-size: 18px;
      font-weight: 600;
    }
  }
  .terms{
    background-color: rgba(109, 109, 109, 0.041);
    border: 1px solid rgb(66, 181, 73);
    box-shadow: 4px 0 0 0 rgb(66, 181, 73);
    border-radius: 10px;
    width: 100%;
    height: 72px;
    transform: rotate(180deg);
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    .textTerms{
      // background-color: rosybrown;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 97%;
      height: 80%;
      p{
        padding-left: 13px;
        padding-bottom: 2px;
        line-height: 20px;
        transform: rotate(180deg);
        font-size: 14px;
        color: rgba(0, 0, 0, 0.54);
      }
      span{
        color: rgb(66, 181, 73);
        font-size: 14px;
      }
    }
  }
  .boxInput{
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    border-radius: 5px;
    margin: 20px 0;
    width: 100%;
    height: 407px;
    box-sizing: border-box;
    .nameInput{
      // background-color: rosybrown;
      width: 100%;
      height: 107px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .topInput{
        // background-color: sandybrown;
        width: 300px;
        height: 40px;
        box-sizing: border-box;
        p{
          font-size: 16px;
          font-weight: 600;
          opacity: .8;
          padding-left: 40px;
          padding-top: 10px;
        }
      }
      .buttomInput{
        // background-color: seagreen;
        width: 100%;
        height: 30px;
        p{
          padding-left: 40px;
          font-size: 10px;
          opacity: .7;
        }
      }
    }
    .imageInput{
      // background-color: royalblue;
      width: 100%;
      // height: 300px;
      display: flex;
      align-items: center;
      .custom-file-input {
        color: transparent;
        width: 172px;
        height: 170px;
        margin-left: 55px;
        display: flex;
        justify-content: center;
      }
      .custom-file-input::-webkit-file-upload-button {
        visibility: hidden;
      }
      .custom-file-input::before {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 170px;
        content: 'Select some files';
        color: rgba(0, 0, 0, 0.281);
        background: -webkit-linear-gradient(top, #f9f9f9, #00000013);
        border: 1px solid rgba(0, 0, 0, 0.24);
        border-radius: 3px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
      }
      .custom-file-input:hover::before {
        border-color: rgb(66, 181, 73);
      }
      .custom-file-input:active {
        outline: 0;
      }
      .custom-file-input:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
      }
    }
    .upload{
      // background-color: salmon;
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .selectProduk{
        // background-color: violet;
        padding-top: 50px;
        width: 280px;
        height: 40px;
        p{
          color: rgb(23, 207, 23);
          font-size: 13px;
          font-weight: 700;
        }
      }
      .uploadText{
        // background-color: yellowgreen;
        width: 100%;
        height: 40px;
        p{
          padding-top: 30px;
          padding-right: 130px;
          font-size: 12px;
          color: grey;
          text-align: center;
        }
      }
    }
  }
  .information{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    border-radius: 5px;
    width: 100%;
    height: 369px;
    margin: 30px 0;
    .label{
      // background-color: rgb(66, 181, 73);
      width: 100%;
      height: 20%;
      p{
        font-size: 18px;
        font-weight: 600;
        padding-left: 40px;
        padding-top: 20px;
        opacity: .7;
      }
    }
    .inputLabelParent{
      // background-color: rgba(77, 72, 72, 0.596);
      width: 100%;
      height: 80%;
      display: flex;
      .labelName{
        // background-color: rosybrown;
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        opacity: .6;
        .nameProduct{
          // background-color: salmon;
          width: 83%;
          height: 50%;
          margin-left: 20px;
          padding-left: 20px;
          box-sizing: border-box;
          p{
            font-size: 15px;
            font-weight: 600;
          }
          span{
            padding-top: 20px;
            text-align: left;
          }
        }
        .category{
          // background-color: sienna;
          width: 90%;
          height: 25%;
          margin-left: 30px;
          p{
            font-size: 15px;
            font-weight: 600;
            padding-left: 20px;
          }
        }
        .etalase{
          // background-color: slateblue;
          width: 90%;
          height: 25%;
          margin-left: 30px;
          p{
            font-size: 15px;
            font-weight: 600;
            padding-left: 20px;
          }
        }
      }
      .inputLabel{
        // background-color: royalblue;
        width: 80%;
        height: 100%;
        .inputName{
          // background-color: slategrey;
          width: 95%;
          height: 50%;
          input{
            border: 1px solid rgba(0, 0, 0, 0.12);;
            outline: none;
            width: 100%;
            height: 40px;
            transition: all 0.3s ease 0s;
            padding: 10px 16px;
            border-radius: 5px;
            color: grey;
          }
        }
        .inputCategory{
          // background-color: teal;
          width: 95%;
          height: 25%;
          input{
            border: 1px solid rgba(0, 0, 0, 0.12);;
            outline: none;
            width: 100%;
            height: 40px;
            transition: all 0.3s ease 0s;
            padding: 10px 16px;
            border-radius: 5px;
            color: grey;
          }
        }
        .inputEtalase{
          // background-color: tomato;
          width: 95%;
          height: 25%;
          select{
            width: 250px;
            height: 40px;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.12);;
            background-color: white;
            padding-left: 20px;
            border-radius: 5px;
          }
          input{
            width: 200px;
            height: 40px;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.12);;
            background-color: white;
            margin-left: 20px;
            border-radius: 5px;
            padding-left: 20px;
          }
        }
      }
    }
  }
  .description{
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    width: 100%;
    height: 654px;
    border-radius: 5px;
    .title{
      // background-color: yellowgreen;
      width: 100%;
      height: 90px;
      p{
        color: rgba(0, 0, 0, 0.7);
        opacity: .9;
        font-size: 16px;
        font-weight: 700;
        padding-top: 40px;
        padding-left: 45px;
      }
    }
    .condition{
      // background-color: #999;
      width: 70%;
      height: 70px;
      display: flex;
      margin-left: 45px;
      .conditionText{
        // background-color: rosybrown;
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        p{
          font-size: 14px;
          font-weight: 700;
          color: grey;
        }
      }
      .conditionOption{
        // background-color: saddlebrown;
        width: 400px;
        height: 100%;
        margin-left: -5px;
        display: flex;
        .new{
          width: 150px;
          height: 100%;
          padding-top: 20px;
          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 18px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
            .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 50%;
          }
            .container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          .container input:checked ~ .checkmark {
            background-color: rgb(22, 209, 31);
            }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            }
          .container input:checked ~ .checkmark:after {
            display: block;
            }
          .container .checkmark:after {
              top: 9px;
              left: 9px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: white;
            }
          }
        .second{
          // background-color: maroon;
          width: 150px;
          height: 100%;
          padding-top: 20px;
          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 18px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
            .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 50%;
          }
            .container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          .container input:checked ~ .checkmark {
            background-color: rgb(22, 209, 31);
            }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            }
          .container input:checked ~ .checkmark:after {
            display: block;
            }
          .container .checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }
        }
      }
    }
    .additional{
      // background-color: burlywood;
      width: 100%;
      height: 390px;
      display: flex;
      .leftSide{
        // background-color: indianred;
        width: 20%;
        height: 100%;
        .up{
          // background-color: khaki;
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: grey;
            padding-left: 26px;
          }
        }
        .down{
          // background-color: lightcoral;
          width: 80%;
          height: 100px;
          display: flex;
          justify-content: center;
          margin-left: 43px;
          // align-items: center;
          p{
            color: grey;
          }
        }
      }
      .rightSide{
        // background-color: indigo;
        width: 80%;
        height: 90%;
        textarea{
          width: 600px;
          height: 300px;
        }
      }
    }
    .video{
      // background-color: chocolate;
      width: 100%;
      height: 100px;
      display: flex;
      padding-left: 38px;
      .videoAdd{
        // background-color: indianred;
        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .up{
          // background-color: lightcoral;
          width: 100%;
          height: 35%;
          p{
            font-size: 14px;
            font-weight: 700;
            color: grey;
            padding-left: 15px;
          }
        }
        .down{
          // background-color: lightgreen;
          width: 80%;
          height: 65%;
          // padding-left: 5px;
          p{
            color: grey;
          }
          span{
            color: rgb(23, 207, 23);
          }
        }
      }
      .videoInput{
        // background-color: khaki;
        width: 80%;
        height: 100%;
        margin-left: 28px;
        .buttonVideo{
          background-color: rgb(255, 255, 255);
          border: 1px solid rgba(82, 82, 82, 0.589);
          width: 200px;
          height: 45px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          p{
            color: grey;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .varianProduct{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 133px;
    margin: 30px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    .varianItem{
      // background-color: indianred;
      width: 92%;
      height: 70%;
      .up{
        // background-color: indigo;
        width: 100%;
        height: 40%;
        p{
          font-size: 14px;
          font-weight: 700;
          color: grey;
        }
      }
      .down{
        // background-color: khaki;
        width: 100%;
        height: 60%;
        display: flex;
        .left{
          // background-color: lawngreen;
          width: 70%;
          height: 100%;
          p{
            color: grey;
          }
        }
        .right{
          background-color: rgb(253, 253, 253);
          border: 1px solid rgba(0, 0, 0, 0.199);
          width: 23%;
          height: 40%;
          position: absolute;
          right: 30px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          p{
            font-size: 14px;
            font-weight: 600;
            color: rgba(128, 128, 128, 0.582);
          }
        }
      }
    }
  }
  .priceProduct{
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    width: 100%;
    height: 376px;
    margin: 30px 0;
    border-radius: 5px;
    .price{
      // background-color: rgb(66, 181, 73);
      width: 100%;
      height: 25%;
      p{
        font-size: 14px;
        font-weight: 700;
        color: rgba(37, 36, 36, 0.753);
        padding-left: 45px;
        padding-top: 30px;
      }
    }
    .minimum{
      // background-color: rgba(0, 0, 0, 0.095);
      width: 100%;
      height: 28%;
      display: flex;
      .left{
        // background-color: sandybrown;
        width: 20%;
        height: 100%;
        .up{
          // background-color: sienna;
          width: 100%;
          height: 40px;
          p{
          font-size: 14px;
          font-weight: 700;
          color: grey;
          padding-left: 40px;
        }
        }
        .down{
          // background-color: silver;
          width: 100%;
          height: 60px;
          p{
            font-size: 12px;
            padding-left: 40px;
            color: grey;
          }
        }
      }
      .right{
        // background-color: seagreen;
        width: 80%;
        height: 100%;
        input{
          margin-left: 20px;
          width: 400px;
          height: 38px;
          padding-left: 10px;
          border-radius: 5px;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(128, 128, 128, 0.527);
          color: grey;
        }
      }
    }
    .eachPrice{
      // background-color: rosybrown;
      width: 100%;
      height: 20%;
      display: flex;
      border-radius: 5px;
      .left{
        // background-color: slateblue;
        width: 20%;
        height: 100%;
        p{
          font-size: 14px;
          font-weight: 700;
          color: grey;
          padding-left: 40px;
        }
      }
      .right{
        // background-color: rgb(48, 92, 136);
        width: 80%;
        height: 100%;
        display: flex;
        .first{
          // background-color: hotpink;
          width: 60px;
          height: 50px;
          display: flex;
          align-items: center;
          p{
            font-size: 16px;
            font-weight: 600;
            color: grey;
          }
        }
        .second{
          // background-color: indigo;
          width: 360px;
          height: 50px;
          input{
            // margin-left: 20px;
            width: 360px;
            height: 38px;
            padding-left: 10px;
            border-radius: 5px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgba(128, 128, 128, 0.527);
            color: grey;
          }
        }
      }
    }
    .distributor{
      // background-color: sandybrown;
      width: 100%;
      height: 27%;
      display: flex;
      border-radius: 5px;
      .left{
        // background-color: rgb(216, 117, 117);
        width: 20%;
        height: 100%;
        .up{
          // background-color: teal;
          width: 100%;
          height: 40px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: grey;
            padding-left: 40px;
          }
        }
        .down{
          // background-color: thistle;
          width: 100%;
          height: 50px;
          p{
            font-size: 12px;
            padding-left: 40px;
            color: grey;
          }
        }
      }
      .right{
        // background-color: rgb(58, 92, 119);
        width: 80%;
        height: 100%;
        cursor: pointer;
        p{
          color: rgb(66, 181, 73);
          font-size: 13px;
          font-weight: 700;
          padding-top: 10px;
          padding-left: 10px;
        }
      }
    }
  }
  .management{
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    width: 100%;
    height: 361px;
    border-radius: 5px;
    .managementProduct{
      // background-color: tomato;
      width: 100%;
      height: 20%;
      p{
        font-size: 14px;
        font-weight: 700;
        color: rgba(2, 2, 2, 0.671);
        padding-left: 40px;
        padding-top: 30px;
      }
    }
    .status{
      // background-color: turquoise;
      width: 100%;
      height: 27%;
      display: flex;
      .left{
        // background-color: yellowgreen;
        width: 20%;
        height: 100%;
        .up{
          // background-color: chocolate;
          width: 100%;
          height: 40px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: rgba(2, 2, 2, 0.671);
            padding-left: 40px;
            padding-top: 20px;
          }
        }
        .down{
          // background-color: coral;
          width: 100%;
          height: 50px;
          p{
            font-size: 12px;
            padding-left: 40px;
            padding-bottom: 20px;
            color: grey;
          }
        }
      }
      .right{
        // background-color: brown;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          margin-top: 30px;
          margin-left: 25px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: rgb(37, 172, 71);
        }

        input:focus + .slider {
          box-shadow: 0 0 1px rgb(42, 153, 27);
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      }
      p{
        font-size: 14px;
        font-weight: 700;
        color: grey;
        padding-left: 100px;
        // position: absolute;
        // margin-left: 50px;
      }
    }
    .stock{
      // background-color: violet;
      width: 100%;
      height: 25%;
      display: flex;
      .left{
        // background-color: #999;
        width: 20%;
        height: 100%;
        p{
          font-size: 14px;
          font-weight: 700;
          color: rgba(2, 2, 2, 0.671);
          padding-left: 40px;
          padding-top: 30px;
        }
      }
      .right{
        // background-color: burlywood;
        width: 80%;
        height: 100%;
        padding-top: 20px;
        padding-left: 10px;
        input{
          margin-left: 20px;
          width: 400px;
          height: 38px;
          padding-left: 10px;
          border-radius: 5px;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(128, 128, 128, 0.527);
          color: grey;
        }
      }
    }
    .SKU{
      // background-color: yellowgreen;
      width: 100%;
      height: 27%;
      display: flex;
      .left{
        // background-color: blueviolet;
        width: 20%;
        height: 100%;
        .up{
          // background-color: chocolate;
          width: 100%;
          height: 40px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: rgba(2, 2, 2, 0.671);
            padding-left: 40px;
            padding-top: 30px;
          }
        }
        .down{
          // background-color: coral;
          width: 100%;
          height: 50px;
          p{
            font-size: 12px;
            // font-weight: 700;
            color: grey;
            padding-left: 40px;
            padding-top: 10px;
          }
        }
      }
      .right{
        // background-color: cadetblue;
        width: 80%;
        height: 100%;
        padding-top: 25px;
        padding-left: 10px;
        input{
          margin-left: 20px;
          width: 400px;
          height: 38px;
          padding-left: 10px;
          border-radius: 5px;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(128, 128, 128, 0.527);
          color: grey;
        }
      }
    }
  }
  .weight{
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.095);
    width: 100%;
    height: 370px;
    margin: 30px 0;
    .weightShipment{
      // background-color: indianred;
      width: 100%;
      height: 20%;
      p{
        font-size: 14px;
        font-weight: 700;
        color: rgba(2, 2, 2, 0.671);
        padding-left: 40px;
        padding-top: 30px;
      }
    }
    .weightTotal{
      // background-color: indigo;
      width: 100%;
      height: 30%;
      display: flex;
      .left{
        // background-color: lightcoral;
        width: 20%;
        height: 100%;
        .up{
          // background-color: chocolate;
          width: 100%;
          height: 40px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: rgba(2, 2, 2, 0.671);
            padding-left: 40px;
            padding-top: 30px;
          }
        }
        .down{
          // background-color: coral;
          width: 100%;
          height: 50px;
          p{
            font-size: 11px;
            // font-weight: 700;
            color: grey;
            padding-left: 40px;
            padding-top: 10px;
          }
          span{
            color: rgb(39, 189, 89);
          }
        }
      }
      .right{
        // background-color: lightgreen;
        width: 80%;
        height: 100%;
        padding-top: 20px;
        padding-left: 30px;
        select{
          padding-left: 5px;
          width: 130px;
          height: 38px;
          background-color: white;
          outline: none;
          border: 1px solid rgba(128, 128, 128, 0.432);
          border-radius: 5px;
        }
        select::active{
          color: rgb(39, 189, 89);
        }
        input{
          margin-left: 20px;
          width: 200px;
          height: 38px;
          padding-left: 10px;
          border-radius: 5px;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(128, 128, 128, 0.521);
          color: grey;
        }
        input::hover{
          color: rgb(39, 189, 89);
        }
      }
    }
    .insurance{
      // background-color: khaki;
      width: 100%;
      height: 30%;
      display: flex;
      .left{
        // background-color: lightsalmon;
        width: 20%;
        height: 100%;
        .up{
          // background-color: chocolate;
          width: 100%;
          height: 40px;
          p{
            font-size: 14px;
            font-weight: 700;
            color: rgba(2, 2, 2, 0.671);
            padding-left: 40px;
            padding-top: 30px;
          }
        }
        .down{
          // background-color: coral;
          width: 100%;
          height: 50px;
          p{
            font-size: 11px;
            // font-weight: 700;
            color: grey;
            padding-left: 40px;
            padding-top: 10px;
          }
        }
      }
      .right{
        // background-color: lightseagreen;
        width: 80%;
        height: 100%;
        display: flex;
        padding-left: 30px;
        padding-top: 20px;
        .new{
          width: 150px;
          height: 100%;
          padding-top: 20px;
          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 18px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
            .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 50%;
          }
            .container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          .container input:checked ~ .checkmark {
            background-color:  rgb(66, 181, 73);
            }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            }
          .container input:checked ~ .checkmark:after {
            display: block;
            }
          .container .checkmark:after {
              top: 9px;
              left: 9px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: white;
            }
          }
        .second{
          // background-color: maroon;
          width: 150px;
          height: 100%;
          padding-top: 20px;
          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 18px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
            .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 50%;
          }
            .container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          .container input:checked ~ .checkmark {
            background-color: rgb(22, 209, 31);
            }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            }
          .container input:checked ~ .checkmark:after {
            display: block;
            }
          .container .checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }
        }
      }
    }
    .preorder{
      // background-color: lawngreen;
      width: 100%;
      height: 20%;
      display: flex;
      .left{
        // background-color: lightcoral;
        width: 20%;
        height: 100%;
        p{
          font-size: 14px;
          font-weight: 700;
          color: rgba(2, 2, 2, 0.671);
          padding-left: 40px;
          padding-top: 30px;
        }
      }
      .right{
        background-color: lightgreen;
        width: 80%;
        height: 100%;
      }
    }
  }
  .buttonSelect{
    // background-color: maroon;
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    cursor: pointer;
    .btnCancel{
      border: 1px solid rgba(0, 0, 0, 0.095);
      width: 200px;
      height: 100%;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-size: 13px;
        font-weight: 700;
        color: grey;
      }
    }
    .btnSave-add{
      border: 1px solid rgba(0, 0, 0, 0.095);
      width: 200px;
      height: 100%;
      margin-left: 20px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-size: 13px;
        font-weight: 700;
        color: grey;
      }
    }
    .btnSave{
      border: 1px solid rgba(0, 0, 0, 0.095);
      width: 200px;
      height: 100%;
      margin-left: 20px;
      border-radius: 5px;
      background-color: rgb(66, 181, 73);
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-size: 13px;
        font-weight: 700;
        color: white;
      }
    }
  }
}

</style>
