<template>
  <main>
    <div class="float">
      <div id="container_main_home">
        <div id="ctai_main_home">
          <!-- Điều hướng phim -->
          <div id="container_btn_pdc_psc">
            <div>
              <button @click.prevent="onNowPlaying" :class="classNowPlaying" data-electronic="btn_pdc">PHIM ĐANG CHIẾU</button>
            </div>
            <div>
              <button @click.prevent="onUpcomming" :class="classUpcomming" data-electronic="btn_psc">PHIM SẮP CHIẾU</button>
            </div>
          </div>

          <!-- Hiển thị phim -->
          <div>
            <div id="btn_pdc" class="container_menu_home btn_ative container-fuild">
              <div class="row" v-if="dataMovie">
                <div class="col-sm-6 col-12" v-for="movie in dataMovie.value" :key="movie.id_movie">
                  <div class="ctai_menu_float">
                    <div class="ctai_menu_background">
                      <div class="row">
                        <div class="col-6">
                          <!-- Ảnh phim -->
                          <div>
                            <img class="img_movie" :src="movie.poster_path">
                          </div>
                        </div>

                        <div class="col-6 container_infor_movie">
                          <!-- Tên phim -->
                          <div>
                            <p class="movie_name">{{ movie.title }}</p>
                          </div>
                          <!-- Mô tả ngắn phim -->
                          <div>
                            <p class="movie_description">
                              {{ movie.over_view }}
                            </p>
                          </div>
                          <div>
                            <hr class="hr">
                          </div>
                          <!-- Nút chi tiết và mua vé -->
                          <div class="container_btn_detail_book">
                            <div class="btn_book">
                              <router-link :to="{ name: 'MovieDetail', query: { data: JSON.stringify(movie)} }">Chi tiết và đặt vé</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              <div v-else class="row">
                <div class="col-sm-6 col-12" v-for="movie in getNowPlaying()" :key="movie.id_movie">
                  <div class="ctai_menu_float">
                    <div class="ctai_menu_background">
                      <div class="row">
                        <div class="col-6">
                          <!-- Ảnh phim -->
                          <div>
                            <img class="img_movie" :src="movie.poster_path">
                          </div>
                        </div>

                        <div class="col-6 container_infor_movie">
                          <!-- Tên phim -->
                          <div>
                            <p class="movie_name">{{ movie.title }}</p>
                          </div>
                          <!-- Mô tả ngắn phim -->
                          <div>
                            <p class="movie_description">
                              {{ movie.over_view }}
                            </p>
                          </div>
                          <div>
                            <hr class="hr">
                          </div>
                          <!-- Nút chi tiết và mua vé -->
                          <div class="container_btn_detail_book">
                            <div class="btn_book">
                              <router-link :to="{ name: 'MovieDetail', query: { data: JSON.stringify(movie)} }">Chi tiết và đặt vé</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
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

  <!-- Giới thiệu -->
  <div class="float">
    <!-- Tiêu đề -->
    <p class="p_title">TỔNG QUAN</p>
    <!-- Class này dùng để hiện khi dùng web trên lap, ẩn khi trên đt -->
    <div class="d-sm-flex d-none">
      <div>
        <!-- .ctai_introduce_float dùng để bọc ảnh -->
        <div class="ctai_introduce_float">
          <!-- ảnh tổng quan -->
          <img class="img_introduce" :src="require('@/assets/images/anhGioithieu.jpg')">
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
              Rạp phim Aura có tổng cộng 10 phòng chiếu, tất cả đều được trang bị ghế ngồi thoải mái, màn hình lớnvà âm thanh vòm Dolby Atmos. Rạp phim cũng có một loạt các tiện nghi cao cấp, bao gồm dịch vụ ăn uống
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

    <div class="container_btn_link_page">
      <div class="ctai_btn_link_page">
        <div>
          <router-link :to="{ name: 'Introduce'}" class="btn_link_page">Tìm hiểu thêm</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMovie } from '@/composables/useMovie';
import { computed, ref } from 'vue';
export default {
  setup() {
    const { getNowPlaying, getUpcoming } = useMovie();

    const dataMovie = ref(null);

    const classNowPlaying = ref('btn_home pdc btn_active');
    const classUpcomming = ref('btn_home psc');

    function onNowPlaying() {
      classNowPlaying.value = 'btn_home pdc btn_active';
      classUpcomming.value = 'btn_home psc';
      dataMovie.value = computed(() => getNowPlaying());
    }

    function onUpcomming() {
      classNowPlaying.value = 'btn_home pdc';
      classUpcomming.value = 'btn_home psc btn_active';
      dataMovie.value = computed(() => getUpcoming());
    }

    return {
      onNowPlaying,
      onUpcomming,
      getNowPlaying,
      dataMovie,
      classNowPlaying,
      classUpcomming
    }
  }
}
</script>

<style scoped>
#container_main_home{
  padding: 20px 0;
}
#ctai_main_home{
  display: flex;
  flex-direction: column;
}
#container_btn_pdc_psc{
  width: 100%;
  height: 88px;
  position: relative;
}
.btn_active{
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1)) !important;
  color: white !important;
}
.btn_home{
  position: absolute;
  display: inline-block;
  color: var(--color-text);
  text-align: center;
  font-family: var(--font);
  border: none;
  background: #cccdcf;
  padding: 10px 0;
  width: 20vw;
  min-width: 200px;
  transition: all 0.3s;
}
.btn_home.pdc{
  border-radius: 30px  30px  30px 0;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 40%;
  box-shadow: 10px 0px 10px 1px rgb(59, 63, 74);
}

.btn_home.psc{
  border-radius: 0  0  30px 0;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
.btn_home:hover{
  background: #B3B3B3;
  color: #404545;
}

.ctai_menu_float{
  margin: 20px 10px;
}
.ctai_menu_background{
  background: linear-gradient( to right, rgba(201, 64, 68, 0.5), rgba(78, 89, 118, 0.5));
  border-radius: 20px;
  border: none;
  padding: 20px;
}
.container_infor_movie{
  position: relative;
}
.img_movie{
  width: 100%;
  border: none;
  border-radius: 4px;
}
.movie_name{
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5vw;
  color: white;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movie_description{
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: white;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 6;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hr{
  color: rgba(225, 225, 225, 0.5);
  border-style: dashed;
}
.container_btn_detail_book{
  position: absolute;
  width: 90%;
  height: 50px;
  bottom: 0;
}

.btn_book{
  position: absolute;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  text-align: center;
  padding: 10px 0;
  width: 10vw;
  min-width: 80px;
  background-color: rgb(201, 61, 68);
  border-radius: 30px 0 30px 30px;
  z-index: 1;
  top: 50%;
  left: 71%;
  transform: translate(-50%, -50%);
}
.btn_book a{
  text-decoration: none;
  color: white;
}

/* introduce */
.img_introduce{
  width: 100%;
  border-radius: 30px;
}
.ctai_introduce_float{
  margin: 20px 10px;
}
.ctai_introduce{
  position: relative;
  width: 100%;
}
.ctai_introduce_float1{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.ctai_introduce_background{
  background: linear-gradient( to right, rgba(201, 64, 68, 0.5), rgba(78, 89, 118, 0.5));
  border-radius: 20px;
  border: none;
  padding: 20px;
  width: 100%;
  max-width: 616px;
}
.ctai_introduce_p{
  margin: 40px 20px;
}
.p_introduce{
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: white;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 6;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.container_btn_link_page{
  width: 100%;
  height: 88px;
  position: relative;
}
.ctai_btn_link_page{
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.btn_link_page{
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 30px;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  padding: 10px 0;
  width: 15vw;
  min-width: 200px;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
}
.btn_link_page:hover{
  transform: scale(1.1);
}
</style>