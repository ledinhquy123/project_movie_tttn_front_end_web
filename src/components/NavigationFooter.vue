<template>
  <!-- Đường kẻ ngăn cách -->
  <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
  
  <footer>
    <!-- .footer là layout -->
    <div class="footer">
      <!-- #footer_left là container 1 -->
      <div id="footer_left">
        <!-- div để bọc các item -->
        <div>
          <!-- p class="cine_aura" là tên rạp phim -->
          <p class="cine_aura">CINE AURA</p>
          <!-- p class="p" là mô tả -->
          <p class="p">Công ty cổ phần phát hành phim - Rạp chiếu phim Cine Aura</p>
          <!-- p class="p" là mô tả -->
          <p class="p">Địa chỉ: 18A Cộng Hòa, Quận Tân Bình, TP Hồ Chí Minh</p>
        </div>
        <!-- #APIGeo là map của rạp phim -->
        <div id="APIGeo">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.147324857172!2d106.65184127458927!3d10.800026358758894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292976c117ad%3A0x5b3f38b21051f84!2zSOG7jWMgdmnhu4duIEjDoG5nIGtow7RuZyBWaeG7h3QgTmFtIC0gQ1My!5e0!3m2!1svi!2s!4v1704253740715!5m2!1svi!2s"
            width="600" height="450" style='border:0;' loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- #footer_left là container 2 -->
      <div id="footer_right">
        <!-- #info_1 dùng để bọc item -->
        <div id="info_1">
          <!-- Tiêu đề -->
          <div>
            <p class="info_link">LIÊN KẾT</p>
          </div>
          <!-- #info_icon dùng để bọc các link liên kết -->
          <div id="info_icon">
              <!-- Link zalo -->
              <a href="#"><img class="info_img" :src="require('@/assets/images/zalo.jpg')" title="Zalo"></a>
              <!-- Link facebook -->
              <a href="#"><img class="info_img" :src="require('@/assets/images/facebook.jpg')" title="Facebook"></a>
              <!-- Link instagram -->
              <a href="#"><img class="info_img" :src="require('@/assets/images/instagram.jpg')" title="Instagram"></a>
          </div>
          <!-- div dùng để bọc các link liên kết -->
          <div>
            <!-- Link đăng ký -->
            <a class="info_link l" href="#">Đăng ký</a>
          </div>
          <!-- #info_icon dùng để bọc các link liên kết -->
          <div>
            <!-- Link đăng nhập -->
            <a class="info_link l" href="#">Đăng nhập</a>
          </div>
        </div>
        <!-- .info_2 dùng để bọc các item -->
        <div class="info_2">
          <!-- Tiêu đề -->
          <div>
            <p class="info_link">CINE AURA</p>
          </div>
          <!-- .tb_link dùng để chứa các link trong trang -->
          <table class="tb_link">
            <tr>
              <td>
                <!-- Link đến trang phim đang chiếu -->
                <a href="#">Phim đang chiếu</a>
              </td>
            </tr>
            <tr>
              <td>
                <!-- Link đến trang phim sắp chiếu -->
                <a href="#">Phim sắp chiếu</a>
              </td>
            </tr>
            <tr>
              <td>
                <!-- Link phim (đến trang home) -->
                <a href="#">Phim</a>
              </td>
            </tr>
            <tr>
              <td>
                <!-- Link đến trang lịch chiếu -->
                <a href="#">Lịch chiếu</a>
              </td>
            </tr>
          </table>
        </div>
        <!-- .info_2 dùng để bọc các item -->
        <div class="info_2">
          <!-- Tiêu đề -->
          <div>
            <p class="info_link">THÔNG TIN</p>
          </div>
          <!-- .tb_link dùng để chứa các link trong trang -->
          <table class="tb_link">
            <tr>
              <td>
                <!-- Link đến trang Giới thiệu -->
                <a href="#">Giới thiệu</a>
              </td>
            </tr>
            <tr>
              <td>
                <!-- Link đến trang Liên hệ -->
                <a href="#">Liên hệ</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  padding: 30px 0;
}


#footer_left{
  text-align: center;
}
.p{
  text-decoration: none;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  color: white;
  margin: 10px 0;
}
.cine_aura{
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 50px;
  color: white;
}
#APIGeo iframe{
  width: 100%;
  max-height: 200px;
  border-radius: 2px;
}

#footer_right{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
#info_1{
  display: flex;
  flex-direction: column;
  text-align: right;
}
#info_1 div{
  margin-bottom: 20px;
  margin-top: 5px;
}
.info_2{
  display: flex;
  flex-direction: column;
  text-align: right;
}
.info_2 div{
  margin-bottom: 20px;
  margin-top: 5px;
}
.tb_link{
  border-radius: 20px;
  background: linear-gradient(to right, rgb(185, 70, 74), rgba(79, 87, 109, 0.79));
  width: 60%;
  margin-left: auto;
  text-align: center;
}
.tb_link td{
  padding: 8px 0;
  transition: all 0.3s;
}
.tb_link td:hover{
  transform: scale(1.1);
}
.tb_link a{
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s;
}
.tb_link a:hover{
  transform: scale(1.1);
  text-decoration: none;
}

.info_link{
  color: white;
  display: inline-block;
  text-align: center;
  padding: 10px;
  width: 60%;
  background: linear-gradient(to bottom, #C94044, #3B3F4A);
  border: none;
  border-radius: 20px;
  font-size: 12px;
  font-family: var(--font);
}
.info_link.l{
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
}
.info_link.l:hover{
  transform: scale(1.2);
}

#info_icon{
  width: 60%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}
.info_img{
  border-radius: 20px;
  width: 30px;
  transition: all 0.3s;
}
.info_img:hover{
  transform: scale(1.1);
}

.info_link:hover{
  text-decoration: none;
  color: white;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .footer{
    display: flex;
    flex-direction: column;
    padding: 30px 0 10px;
  }
  .p{
    margin: 0 0 1vw;
  }
  #info_1,
  .info_2{
    text-align: center;
    margin-top: 1vw;
  }
  .info_2 .tb_link{
    margin: 0 auto;
    width: 80%;
  }
  #info_icon{
    width: 80%;
    margin: 0 auto;
  }
  .info_link{
    width: 80%;
  }
}
</style>