<template>
  <!-- Main Trang chủ -->
  <main v-if="actors">
    <div class="float">
      <div id="container_main_home">
        <div id="ctai_main_home">

          <!-- Movies -->
          <div id="container_main_detailpage">
            <div class="ctai_main_detailpage_background">
              <div class="ctai_main_detailpage_float">
                <div>
                  <img id="image1" width="100%" :src="movie.poster_path" title="">
                </div>

                <div class="ctai_main_detailpage_info">
                  <div class="main_detailpage_movie_name">
                    <p>{{ movie.title }}</p>
                  </div>

                  <div class="ctai_main_detailpage_detail">
                    <div>
                      <table class="ctai_main_detailpage_p">
                        <tr>
                          <td>
                            <p class="main_detailpage_p1">Ngày phát hành:</p>
                          </td>
                          <td>
                            <span class="ARicon">{{ movie.release_date }}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="main_detailpage_p1">Thể loại:</p>
                          </td>
                          <td>
                            <span class="ARicon theloai">{{ movie.genres }}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="main_detailpage_p1">Quốc gia:</p>
                          </td>
                          <td>
                            <span class="ARicon theloai">{{ movie.country }}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="main_detailpage_p1">Thời lượng:</p>
                          </td>
                          <td>
                            <span class="ARicon">{{ movie.runtime }}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="main_detailpage_p1">Rated:</p>
                          </td>
                          <td>
                            <span class="ARicon">{{ movie.vote_average }}</span>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div>
                      <div>
                        <p class="main_detailpage_p2">{{ movie.over_view }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <a class="main_detailpage_btn_book" href="">Mua vé</a>
                  </div>
                </div>
              </div>

              <!-- Đường kẻ -->
              <div>
                <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
              </div>

              <!-- Ảnh đạo diễn và diễn viên -->
              <div class="ctai_main_detailpage_actor">

                <p class="p_title">Diễn viên</p>

                <div class="main_detailpage_actor">
                  <div v-for="(actor, index) in actors" :key="index">
                    <img class="img_actor" :src="actor.profile_path" title="">
                      <div style="text-align: center; margin-top: 8px; font-weight: bold; color: #fff;">
                        <div>{{ actor.name }}</div>
                        <div>{{ actor.character }}</div>
                      </div>
                  </div>
                </div>


              </div>

              <!-- Đường kẻ -->
              <div>
                <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
              </div>

              <!-- Trailer -->
              <div class="ctai_main_detailpage_trailer">

                <p class="p_title">Trailer</p>

                <div class="container">
                  <iframe class="trailer" :src="`https://www.youtube.com/embed/${idVideo}`"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>

              <!-- Đường kẻ -->
              <div>
                <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
              </div>  

              <!-- Lịch chiếu -->
              <div v-if="movie.status" class="ctai_main_detailpage_showtime">

                <p class="p_title">Lịch Chiếu</p>
                <!-- Lịch chiếu -->
                <div class="container container_main_detailpage_showtime">
                  <div class="ctai_main_detailpage_showtime_showtime">

                    <button @click="onWeekday(weekday.id, index)" type="button" :class="classShowtime[index]" v-for="(weekday, index) in weekdays" :key="weekday.id">
                      <div>
                        <p class="p_showtime1">{{ weekday.name }}</p>
                      </div>
                      <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
                      <div>
                        <p class="p_showtime2">{{ (new Date(weekday.date)).getDate() }}</p>
                      </div>
                    </button>

                  </div>
                </div>

                <!-- Khung giờ chiếu -->
                <div v-if="showtimes" class="container">
                  <div v-if="showtimes.length" class="ctai_main_showtimepage_showtime">
                    <div v-for="showtime in showtimes" :key="showtime.id">
                      <button @click.prevent="onChooseShowTime(showtime)" class="btn_showtime">{{ showtime.start_time }}</button>
                    </div>
                  </div>
                  <div v-else class="ctai_main_showtimepage_showtime">
                    <div style="width: 100%; height: 50px; position: relative; color: #fff; font-size: 20px;">
                      <p style="position: absolute; left: 50%; transform: translateX(-50%);">Chưa có lịch chiếu hôm nay</p>
                    </div>
                  </div>
                </div>

                <!-- Chưa chọn ngày thì lấy toàn bộ giờ chiếu -->
                <div v-else class="container">
                  <div class="ctai_main_showtimepage_showtime">
                    <div style="width: 100%; height: 50px; position: relative; color: #fff; font-size: 20px;">
                      <p style="position: absolute; left: 50%; transform: translateX(-50%);">Hãy chọn ngày bạn muốn xem</p>
                    </div>
                  </div>
                </div>
              </div>  

              <div v-else class="ctai_main_detailpage_showtime">
                <p class="text-center" style="color: #fff; font-weight: bold;">Hiện tại phim chưa có lịch chiếu.</p>
              </div>
            </div>

            <!-- Comment -->
            <div class="container_rate">
              <p class="p_title">
                Xếp hạng và đánh giá
              </p>
              <form v-if="isComment" @submit.prevent="onSubmitForm">
                <div class="ctai_rate d-flex">
                  <div class="col-10">
                    <textarea class="w-100 p-2" rows="2" v-model="dataComment" placeholder="Đánh giá của bạn"></textarea>
                  </div>
                  <div v-if="!isPendingComment" class="col-2">
                    <button class="w-100 h-100 p-2" type="submit"> Gửi </button>
                  </div>
                  <div v-else class="col-2">
                    <button class="w-100 h-100 p-2" style="background-color: grey; cursor: not-allowed;" type="submit"> Loading... </button>
                  </div>
                </div>
              </form>
              <div v-else>
                <p class="text-center" style="color: #fff; font-weight: bold;">Bạn phải mua vé để có thể đánh giá.</p>
              </div>

              <!-- Đường kẻ ngăn cách -->
              <div class="float">
                <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
              </div>

              <div v-if="dataCommentByMovie">
                <div v-if="dataCommentByMovie.length">
                  <div v-for="comment in dataCommentByMovie" :key="comment.id" class="container_comment">
                    <p style="color: #fff; font-weight: bold;">
                      <img :src="comment.user_avatar" width="50" height="50" style="border-radius: 100px; margin-right: 8px;">
                      <span>{{ comment.user_name }}</span>
                    </p>
                    <div class="d-flex align-content-center ctai_comment">
                      <div class="col-9 comment">
                        <p class="w-100 p-3">
                          {{ comment.content }}
                        </p>
                      </div>
                      <div class="col-3 comment_time">
                        <p class="w-100 p-3 text-center">{{ comment.created_at }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else>
                  <p class="text-center" style="color: #fff; font-weight: bold;">Chưa có đánh giá về phim.</p>
                </div>
              </div>

              <div v-else>
                <p style="color: #fff; font-weight: bold;">Tải đánh giá không thành công.</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <main v-else style="background-color: #fff;">
    <loading />
  </main>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { useActor } from "@/composables/useActor";
import { reactive, ref } from "vue";
import { useMovie } from "@/composables/useMovie";
import Loading from '@/components/Loading.vue'
import { useUser } from '@/composables/useUser'

export default {
  components: {
    Loading
  },
  setup() {
    const route = useRoute();
    const movie = JSON.parse(route.query.data);
    const actors = ref(null);
    const weekdays = ref(null);
    const showtimes = ref(null);
    const { extractYouTubeId, fetchWeekday, fetchShowTimeByWeekdayMovie } = useMovie();
    const idVideo = extractYouTubeId(movie.video_path);
    const classShowtime = reactive(
      Array(7).fill('showtime_item')
    );
    const router = useRouter();
    const { getCommentByMovie, checkComment, getUser, createComment } = useUser();
    const { fetchActorByMoive } = useActor();
    const dataCommentByMovie = ref(null);
    const dataComment = ref(null);
    const isComment = ref(true);
    const isPendingComment = ref(false);

    console.log(movie);

    async function fetchCommentByMovie() {
      dataCommentByMovie.value = await getCommentByMovie(movie.id_movie);
    }
    fetchCommentByMovie();

    async function fetchCheckComment() {
      isComment.value = await checkComment(getUser().id, movie.id_movie);
    }
    fetchCheckComment();


    async function fetchActor() {
      actors.value = await fetchActorByMoive(movie.id_movie);
    }
    
    fetchActor();
    async function fetchDataWeekday() {
      weekdays.value = await fetchWeekday();
    }
    fetchDataWeekday();

    async function onWeekday(idWeekday, index) {
      showtimes.value = await fetchShowTimeByWeekdayMovie(movie.id_movie, idWeekday);
      for(let i = 0; i < classShowtime.length; i++) {
        if(i != index) classShowtime[i] = 'showtime_item';
        else classShowtime[i] = 'showtime_item selected_weekday';
      }
    }

    function onChooseShowTime(showtime) {
      router.push({ name: "ChooseSeat", query: {data: JSON.stringify(showtime)} });
    }
    
    async function onSubmitForm() {
      isPendingComment.value = true;
      await createComment(getUser().id, movie.id_movie, dataComment.value);
      await fetchCommentByMovie();
      dataComment.value = '';

      isPendingComment.value = false;
    }

    return { 
      onSubmitForm,
      dataComment,
      classShowtime, 
      showtimes, 
      onWeekday, 
      movie, 
      actors, 
      weekdays, 
      idVideo, 
      onChooseShowTime, 
      dataCommentByMovie,
      isComment,
      isPendingComment
    }
  }
}
</script>

<style scoped>
#container_main_home{
  padding: 20px 0;
}
/***********************************************************************************************/

.ctai_main_detailpage_background{
  padding: 20px 0;
  margin: 20px 0;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  border-radius: 20px;
}
.ctai_main_detailpage_float{
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 67%;
  column-gap: 3%;
}
.ctai_main_detailpage_info{
  position: relative;
}
.main_detailpage_movie_name{
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
.ctai_main_detailpage_detail{
  display: grid;
  grid-template-columns: 40% 60%;
}
.ctai_main_detailpage_p tr, td{
  padding-bottom: 3vw;
}
.main_detailpage_p1{
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: white;
  display: inline-block;
  margin: 0;
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
.main_detailpage_actor{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.main_detailpage_actor > div {
  width: 220px;
  height: auto;
  margin-right: 4rem;
  margin-bottom: 5px;
}
.main_detailpage_actor::-webkit-scrollbar{
  height: 8px;
}
.main_detailpage_actor::-webkit-scrollbar-thumb{
  background: rgba(160, 147, 147, 0.261); /* Màu của nút trượt */
  border-radius: 10px; /* Bo tròn các góc */
}
.main_detailpage_actor::-webkit-scrollbar-track {
  background: transparent; /* Màu nền của thanh cuộn */
}

.main_detailpage_p2{
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
  margin-left: 2vw;
  background-color: #cccdcf;
  font-family: 'Poppins', sans-serif;
  font-size: 1vw;
  color: black;
  border-radius: 20px 0 20px 0;
  font-weight: 550;
}
.ctai_icon_star{
  margin-top: 1vw;
}
.ctai_icon_star span{
  margin: 0 0.2vw;
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
.main_detailpage_btn_book{
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  width: 60%;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: rgb(201, 64, 68);
  border-radius: 20px 0 20px 0;
  padding: 0.5vw 0;
  box-shadow: 0.5vw 0px 8px #333333;
  transition: all 0.3s;
}
.main_detailpage_btn_book:hover{
  transform: scale(1.02);
  background-color: rgba(201, 64, 68, 0.7);
  color: rgba(59, 63, 74, 1);
}

.ctai_main_detailpage_actor, .ctai_main_detailpage_trailer{
  width: 95%;
  margin: 0 auto;       
}
.img_actor{
  border-radius: 30px;
  width: 150px;
}
.trailer{
  width: 100%;
  height: 450px;
}

.ctai_main_detailpage_showtime_float{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 67%;
  column-gap: 3%;
}
.detailpage_showtime_img {
  width: 100%;
}
.ctai_main_detailpage_showtime_info{
  position: relative;
}
.main_detailpage_showtime_movie_name p{
  font-family: var(--font);
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctai_main_detailpage_showtime_detail{
  display: grid;
  grid-template-columns: 40% 60%;
}
.ctai_main_detailpage_showtime_p tr, td{
  padding-bottom: 3vw;
}
.main_detailpage_showtime_p1{
  font-family: var(--font);
  font-size: 1vw;
  color: white;
  display: inline-block;
  margin: 0;
}
.main_detailpage_showtime_p2{
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
  margin: 0;
}
.ctai_youtube{
  position: relative;
}
.ctai_youtube iframe{
  margin-top: 3vw;
}
.ctai_main_showtimepage_showtime{
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}
.ctai_main_showtimepage_showtime > div {
  width: 75px;
  margin-bottom: 20px;
}
.main_detailpage_showtime_btn_book{
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  width: 60%;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: rgb(201, 64, 68);
  border-radius: 20px 0 20px 0;
  padding: 0.5vw 0;
  box-shadow: 0.5vw 0px 8px #333333;
  transition: all 0.3s;
}
.main_detailpage_showtime_btn_book:hover{
  transform: scale(1.02);
}
.btn_showtime{
  display: inline-block;
  width: 100%;
  text-align: center;
  font-family: var(--font);
  font-weight: 550;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1px;
  padding: 8px 10px;
  background: #fff;
  transition: all 0.3s;
}
.btn_showtime:hover{
  text-decoration: none;
}
.ctai_main_detailpage_showtime{
  width: 95%;
  margin: 0 auto;       
}
.container_main_detailpage_showtime{
  margin-bottom: 3vw;
}
.ctai_main_detailpage_showtime_showtime{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-top: 20px;
}
.showtime_item{
  border: none;
  padding: 0;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(to bottom, rgba(215, 243, 246, 0.6), rgba(242, 242, 242, 1));
  width: 150px;
  margin-right: 35px;
  margin-bottom: 5px;
}
.showtime_item.active{
  background: rgb(201, 64, 68);
  transform: translateY(-10px);
  transition: all 0.5s;
  color: white;
}
.showtime_item.active > hr{
  border: 1px solid rgba(255, 255, 255, 1) !important;
}
.showtime_item > div {
  width: 150px;
}
.hr{
  border: 1px solid rgba(59, 63, 74, 0.42);
  margin: 0;
}
.p_showtime1{
  font-family: var(--font);
  color: var(--text-color);
  font-size: 16px;
  margin: 0;
  padding: 10px;
}
.p_showtime2{
  font-family: var(--font);
  color: var(--text-color);
  font-size: 22px;
  margin: 0;
  padding: 20px 10px;
}
.ctai_main_detailpage_showtime_showtime::-webkit-scrollbar{
  height: 8px;
}
.ctai_main_detailpage_showtime_showtime::-webkit-scrollbar-thumb{
  background: rgba(160, 147, 147, 0.261); /* Màu của nút trượt */
  border-radius: 10px; /* Bo tròn các góc */
}
.ctai_main_detailpage_showtime_showtime::-webkit-scrollbar-track {
  background: transparent; /* Màu nền của thanh cuộn */
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .ctai_main_detailpage_showtime_float{
    display: flex;
    flex-direction: column;

  }
  .ctai_main_detailpage_showtime_float > div {
    display: flex;
    flex-wrap: wrap;
  }
  .detailpage_showtime_img {
    width: 50%;
  }
  .ctai_main_detailpage_showtime_detail{
    display: flex;
    flex-direction: column;
  }
}

.selected_weekday {
  background: linear-gradient(360deg, #FED5B4, #C94044) !important;
  color: #fff !important;
}

/* Comment */
.container_rate{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;
}
.ctai_rate{
  width: 80%;
  margin: 0 auto;
  height: 56px;
}
.ctai_rate > div > textarea{
  font-family: var(--font);
  color: white;
  background: linear-gradient(to right, rgba(201, 64, 68, 0.26), rgba(59, 63, 74, 0.79));
  border-radius: 10px 0 0 10px;
  border: none;
  resize: none;
  overflow-y: auto;
  height: 100%;
}
.ctai_rate > div > textarea::-webkit-scrollbar{
  width: 8px;
}
.ctai_rate > div > textarea::-webkit-scrollbar-thumb{
  background: rgba(160, 147, 147, 0.261); /* Màu của nút trượt */
  border-radius: 10px; /* Bo tròn các góc */
}
.ctai_rate > div > textarea::-webkit-scrollbar-track {
  background: transparent; /* Màu nền của thanh cuộn */
}
.ctai_rate > div > textarea:focus{
  outline: none;
}
.ctai_rate > div > button{
  font-family: var(--font);
  color: white;
  background: rgb( 201, 64, 68);
  border-radius: 0 10px 10px 0;
  border: none;
  height: 100%;
}

.container_comment{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
}
.ctai_comment{
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: linear-gradient(to right, rgba(201, 64, 68, 0.26), rgba(59, 63, 74, 0.79));
  font-family: var(--font);
  font-size: 16px;
  color: white;
  height: 56px;
  margin-bottom: 20px;
}
.comment_time{
  border: 1px solid #f2f2f2;
  border-top: none;
  border-right: none;
  border-bottom: none;
}
.comment > p,
.comment_time > p{
  margin: 0;
}
.comment{
  overflow-y: auto;
}
.comment::-webkit-scrollbar{
  width: 8px;
}
.comment::-webkit-scrollbar-thumb{
  background: rgba(160, 147, 147, 0.261); /* Màu của nút trượt */
  border-radius: 10px; /* Bo tròn các góc */
}
.comment::-webkit-scrollbar-track {
  background: transparent; /* Màu nền của thanh cuộn */
}
.comment p{
  word-wrap: break-word;
  
}
</style>