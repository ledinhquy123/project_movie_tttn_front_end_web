<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Đường kẻ ngăn cách -->
  <div class="float">
    <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
  </div>

  <!-- Giới thiệu -->
  <main>
    <!-- .float dùng để đẩy -->
    <div class="float">
      <!-- Tiêu đề -->
      <p class="p_title">TỔNG QUAN</p>
      <!-- Class này dùng để hiện khi dùng web trên lap, ẩn khi trên đt -->
      <div class="d-sm-flex d-none">
        <div>
          <!-- .ctai_introduce_float dùng để bọc ảnh -->
          <div class="ctai_introduce_float">
            <!-- ảnh tổng quan -->
            <img class="img_introduce" :src="require('@/assets/images/anhGioithieu.jpg')" title="">
          </div>
        </div>

        <div class="ctai_introduce">
          <!-- .ctai_introduce_float1 dùng để bọc và căn chỉnh -->
          <div class="ctai_introduce_float1">
            <div class="ctai_introduce_background">
              <div class="ctai_introduce_p">
                <p class="p_introduce">
                  Rạp phim Aura là một rạp chiếu phim cao cấp nằm ở trung tâm thành phố Hồ Chí Minh. Rạp phim được khai
                  trương vào năm 2023 và nhanh chóng trở thành một trong những địa điểm giải trí phổ biến nhất trong
                  thành phố.
                </p>

                <p class="p_introduce">
                  Rạp phim Aura có tổng cộng 10 phòng chiếu, tất cả đều được trang bị ghế ngồi thoải mái, màn hình lớn
                  và âm thanh vòm Dolby Atmos. Rạp phim cũng có một loạt các tiện nghi cao cấp, bao gồm dịch vụ ăn uống
                  tại chỗ, ghế da, và ghế hạng thương gia.
                </p>

                <p class="p_introduce">
                  Một trong những điểm nổi bật của rạp phim Aura là hệ thống âm thanh vòm Dolby Atmos. Hệ thống âm thanh
                  này mang đến trải nghiệm âm thanh sống động và chân thực, khiến người xem cảm thấy như đang ở trong
                  chính bộ phim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Class này dùng để hiện khi dùng web trên đt, ẩn khi trên lap -->
      <div class="d-sm-none ">
        <div class="ctai_introduce_reponsive">
          <!-- .ctai_introduce_float1 dùng để bọc và căn chỉnh -->
          <div class="ctai_introduce_background">
            <div class="ctai_introduce_p">
              <p class="p_introduce">
                Rạp phim Aura là một rạp chiếu phim cao cấp nằm ở trung tâm thành phố Hồ Chí Minh. Rạp phim được khai
                trương vào năm 2023 và nhanh chóng trở thành một trong những địa điểm giải trí phổ biến nhất trong
                thành phố.
              </p>

              <p class="p_introduce">
                Rạp phim Aura có tổng cộng 10 phòng chiếu, tất cả đều được trang bị ghế ngồi thoải mái, màn hình lớn
                và âm thanh vòm Dolby Atmos. Rạp phim cũng có một loạt các tiện nghi cao cấp, bao gồm dịch vụ ăn uống
                tại chỗ, ghế da, và ghế hạng thương gia.
              </p>

              <p class="p_introduce">
                Một trong những điểm nổi bật của rạp phim Aura là hệ thống âm thanh vòm Dolby Atmos. Hệ thống âm thanh
                này mang đến trải nghiệm âm thanh sống động và chân thực, khiến người xem cảm thấy như đang ở trong
                chính bộ phim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Đường kẻ ngăn cách -->
  <div class="float">
    <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
  </div>

  <!-- Công nghệ phần chiếu -->
  <main>
    <div class="float">
      <div>
        <!-- Tiêu đề -->
        <p class="p_title">CÔNG NGHỆ PHẦN CHIẾU</p>
        <!-- Mô tả -->
        <p class="p_title1">
          Cine Aura đã phát triển các công nghệ khác nhau, khi áp dụng cho các bộ phim, sẽ mang lại
          những trải nghiệm xem phim độc đáo và ấn tượng
        </p>

      </div>
    </div>
    <!-- Div bọc -->
    <div id="container_technology">
      <div class="ctai_technology">
        <div class="img_technology1">
          <!-- Bỏ link ảnh -->
          <img :src="require('@/assets/images/anhCNRP1.jpg')" title="">
        </div>
        <div class="p_technology1">
          <div class="ctai_technology_background">
            <div class="ctai_technology_p">
              <p class="p_introduce">
                Công nghệ 3D được sử dụng tại Cine Aura là công nghệ RealD 3D, được đánh giá là một trong những công
                nghệ 3D tốt nhất hiện nay. Công nghệ này sử dụng kính 3D RealD, có màn lọc phân cực tuyến tính, giúp
                hình ảnh 3D rõ nét, sắc nét và sống động hơn.
              </p>

              <p class="p_introduce">
                Để mang đến cho khán giả trải nghiệm 3D tuyệt vời nhất, Cine Aura cũng trang bị hệ thống máy chiếu 4K,
                có độ phân giải cao gấp 4 lần so với máy chiếu Full HD. Hệ thống âm thanh Dolby Atmos cũng mang đến cho
                khán giả trải nghiệm âm thanh sống động, chân thực, như đang ở trong chính bộ phim.
              </p>
            </div>
          </div>
        </div>
        <div class="p_technology2">
          <div class="ctai_technology_background">
            <div class="ctai_technology_p">
              <p class="p_introduce">
                Rạp phim Aura là một rạp chiếu phim cao cấp với hệ thống phòng rạp rộng hiện đại, đáp ứng nhu cầu của
                khán giả yêu thích điện ảnh. Các phòng rạp rộng của rạp phim Aura có sức chứa từ 200 đến 300 khách, được
                trang bị màn hình lớn, âm thanh vòm và ghế ngồi thoải mái.
              </p>

              <p class="p_introduce">
                Màn hình của các phòng rạp rộng tại rạp phim Aura có kích thước lên đến 150 inch, mang đến cho khán giả
                những trải nghiệm hình ảnh chân thực và sống động. Âm thanh vòm của các phòng rạp này cũng được đầu tư
                kỹ lưỡng, mang đến cho khán giả cảm giác như đang hòa mình vào những thước phim.
              </p>
            </div>
          </div>
        </div>
        <div class="img_technology2">
          <!-- Bỏ link ảnh -->
          <img :src="require('@/assets/images/anhCNRP2.jpg')" title="">
        </div>
        <div class="img_technology3">
          <!-- Bỏ link ảnh -->
          <img :src="require('@/assets/images/anhCNRP3.jpg')" title="">
        </div>
        <div class="p_technology3">
          <div class="ctai_technology_background">
            <div class="ctai_technology_p">
              <p class="p_introduce">
                Dolby Atmos là hệ thống âm thanh vòm tiên tiến nhất hiện nay, sử dụng hàng trăm loa được bố trí xung
                quanh khán giả, tạo ra hiệu ứng âm thanh đa chiều, sống động. Với Dolby Atmos, khán giả có thể cảm nhận
                được âm thanh từ mọi hướng, như đang ở trong chính bộ phim.
              </p>

              <p class="p_introduce">
                Cine Aura trang bị hệ thống âm thanh Dolby Atmos với 128 loa, được bố trí xung quanh khán phòng, bao gồm
                loa trần, loa tường, loa sàn và loa siêu trầm. Hệ thống âm thanh này được thiết kế và lắp đặt bởi các
                chuyên gia âm thanh hàng đầu, đảm bảo mang đến cho khán giả trải nghiệm âm thanh đỉnh cao.
              </p>
            </div>
          </div>
        </div>
        <div class="p_technology4">
          <div class="ctai_technology_background">
            <div class="ctai_technology_p">
              <p class="p_introduce">
                Máy chiếu Christie được sử dụng tại rạp Cine Aura là dòng máy chiếu 4K Laser, có độ phân giải gốc 4096 x
                2160, gấp 4 lần so với máy chiếu Full HD. Máy chiếu sử dụng công nghệ 3-Chip DLP, giúp tái tạo màu sắc
                chính xác, sống động và chân thực hơn.
              </p>

              <p class="p_introduce">
                Với độ phân giải 4K, hình ảnh của các bộ phim được chiếu tại rạp Cine Aura vô cùng sắc nét, chi tiết đến
                từng góc cạnh. Màu sắc của hình ảnh được tái tạo một cách chân thực, sống động, mang đến cho khán giả
                cảm giác như được hòa mình vào thế giới của bộ phim.
              </p>
            </div>
          </div>
        </div>
        <div class="img_technology4">
          <!-- Bỏ link ảnh -->
          <img :src="require('@/assets/images/anhCNRP4.jpg')" title="">
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
.img_introduce{
  width: 100%;
  border-radius: 30px;
}
.ctai_introduce_float{
  margin: 20px 10px;
}
.d-sm-flex > div {
  width: 100%;
}
.ctai_introduce{
  position: relative;
}
.ctai_introduce_float1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.ctai_introduce_background{
  background: linear-gradient( to right, rgba(201, 64, 68, 0.5), rgba(78, 89, 118, 0.5));
  border-radius: 20px;
  border: none;
  padding: 20px;
  width: 100%;
  max-width: 616px;
  margin: 0 auto;
}
.ctai_introduce_p{
  margin: 3vw 2vw;
}
.p_introduce{
  font-family: var(--font);
  font-size: 1vw;
  color: white;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 6;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
}
/******************************************************************************/
.p_title1{
  width: 50%;
  font-family: var(--font);
  font-size: 1vw;
  color: white;
}
.ctai_technology_background{
  background: linear-gradient( to top, rgba(201, 64, 68, 0.5), rgba(78, 89, 118, 0.5));
  border: none;
  padding: 6vw;
  width: 100%;
  height: 100%;
}
/******************************************/
.ctai_technology{
  display: flex;
  flex-wrap: wrap;
}
.ctai_technology > div {
  width: calc(100%/2);
}
.img_technology1 img,
.img_technology2 img,
.img_technology3 img,
.img_technology4 img{
  width: 100%;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .ctai_technology{
    display: flex;
    flex-direction: column;
  }
  .ctai_technology > div {
    width: 100%;
  }
  .img_technology1{
    order: 1;
  }
  .img_technology2{
    order: 3;
  }
  .img_technology3{
    order: 5;
  }
  .img_technology4{
    order: 7;
  }
  .p_technology1{
    order: 2;
  }
  .p_technology2{
    order: 4;
  }
  .p_technology3{
    order: 6;
  }
  .p_technology4{
    order: 8;
  }
  .p_title1{
    font-size: 12px;
    width: 100%;
    text-align: justify;
  }
  .p_introduce{
    font-size: 12px;
    color: white;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 6;  /*Số dòng muốn hiển thị */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
  }
  .ctai_introduce_reponsive{
    background-image: url('~@/assets/images/anhGioithieu.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
  }
}
</style>