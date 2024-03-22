<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Main Trang chủ -->
  <main>
    <div class="float">
      <div id="container_main_home">
        <div id="ctai_main_home">
          <!-- Điều hướng phim -->
          <div id="container_btn_pdc_psc">
            <div>
              <button @click.prevent="onNowPlaying" :class="classNowPlaying" >PHIM ĐANG CHIẾU</button>
            </div>
            <div>
              <button @click.prevent="onUpcomming" :class="classUpcomming" >PHIM SẮP CHIẾU</button>
            </div>
          </div>
          
          <!-- Movies -->
          <div v-if="dataMovie" id="container_main_moviepage">
            <div v-for="movie in dataMovie.value" :key="movie.id_movie" class="ctai_main_moviepage_background">
              <div class="ctai_main_moviepage_float">
                <div>
                  <img id="image1" width="100%" :src="movie.poster_path">
                </div>

                <div>
                  <div class="ctai_main_moviepage_info">
                    <div class="main_moviepage_movie_name">
                      <p>{{ movie.title }}</p>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Xếp hạng: </p>
                      <div class="ctai_icon_star">
                        <span><img class="icon_star" :src="require('@/assets/images/star.svg')"></span>
                      </div>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Ngày phát hành:</p>
                      <span class="ARicon">{{ movie.release_date }}</span>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Thể loại:</p>
                      <span class="ARicon">{{ movie.genres}}</span>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Quốc gia:</p>
                      <span class="ARicon">{{ movie.country }}</span>
                    </div>
                    <div>
                      <p class="main_moviepage_p2">
                        {{ movie.over_view }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="ctai_youtube">
                  <iframe width="100%" height="200" :src="`https://www.youtube.com/embed/${extractYouTubeId(movie.video_path)}`"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                    <router-link class="main_moviepage_btn_book" :to="{ name: 'MovieDetail', query: { data: JSON.stringify(movie)} }">Mua vé</router-link>
                </div>
              </div>
            </div>

          </div>

          <div v-else id="container_main_moviepage">
            <div v-for="movie in getNowPlaying()" :key="movie.id_movie" class="ctai_main_moviepage_background">
              <div class="ctai_main_moviepage_float">
                <div>
                  <img id="image1" width="100%" :src="movie.poster_path">
                </div>

                <div>
                  <div class="ctai_main_moviepage_info">
                    <div class="main_moviepage_movie_name">
                      <p>{{ movie.title }}</p>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Xếp hạng: </p>
                      <div class="ctai_icon_star">
                        <span><img class="icon_star" :src="require('@/assets/images/star.svg')"></span>
                        <span style="color: #fff; font-weight: bold;">{{ movie.vote_average }}</span>
                      </div>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Ngày phát hành:</p>
                      <span class="ARicon">{{ movie.release_date }}</span>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Thể loại:</p>
                      <span class="ARicon theloai">{{ movie.genres}}</span>
                    </div>
                    <div class="ctai_main_movie_p">
                      <p class="main_moviepage_p1">Quốc gia:</p>
                      <span class="ARicon">{{ movie.country }}</span>
                    </div>
                    <div>
                      <p class="main_moviepage_p2">
                        {{ movie.over_view }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="ctai_youtube">
                  <iframe width="100%" height="200" :src="`https://www.youtube.com/embed/${extractYouTubeId(movie.video_path)}`"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                    <router-link class="main_moviepage_btn_book" :to="{ name: 'MovieDetail', query: { data: JSON.stringify(movie)} }">Mua vé</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import { useMovie } from '@/composables/useMovie';
import { computed, ref } from 'vue';

export default {
  setup() {
    const { getNowPlaying, getUpcoming, extractYouTubeId } = useMovie();

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
      extractYouTubeId,
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

#container_btn_pdc_psc{
  width: 100%;
  height: 88px;
  position: relative;
}

.ctai_main_moviepage_background{
  padding: 20px 0;
  margin: 20px 0;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  border-radius: 20px;
}
.ctai_main_moviepage_float{
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 45% 35%;
}
.ctai_main_moviepage_info{
  width: 90%;
  margin: 0 auto;
}
.main_moviepage_movie_name{
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5vw;
  color: white;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctai_main_movie_p{
  margin-bottom: 20px
}
.main_moviepage_p1{
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: white;
  display: inline-block;
  margin: 0;
}
.main_moviepage_p2{
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: white;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 6;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  margin: 0;
}
.ARicon{
  padding: 8px 20px;
  margin-left: 3vw;
  background-color: #cccdcf;
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: black;
  border-radius: 20px 0 20px 0;
  font-weight: 550;
}
.ctai_icon_star{
  margin-left: 3vw;
  display: inline;
}
.ctai_icon_star span{
  margin: 0.2vw;
}
.icon_star{
  width: 4%;
}

.ctai_youtube{
  position: relative;
}
.ctai_youtube iframe{
  margin-top: 3vw;
}
.main_moviepage_btn_book{
  margin-top: 3vw;
  display: inline-block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: rgb(201, 64, 68);
  border-radius: 20px 0 20px 0;
  padding: 8px 12px;
  box-shadow: 0.5vw 0px 8px #333333;
  transition: all 0.3s;
}
.main_moviepage_btn_book:hover{
  transform: scale(1.02);
  background-color: rgba(201, 64, 68, 0.7);
  color: rgba(59, 63, 74, 1);
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
.btn_active{
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1)) !important;
  color: white !important;
}

.theloai{
  max-width: 200px;
  max-height: 38.4px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}
.theloai::-webkit-scrollbar{
  height: 1px;
  width: 1px;
}
.theloai::-webkit-scrollbar-thumb{
  background: transparent /* Màu của nút trượt */
}
.theloai::-webkit-scrollbar-track {
  background: transparent; /* Màu nền của thanh cuộn */
}
</style>