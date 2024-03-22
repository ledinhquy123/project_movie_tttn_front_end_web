<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Main Trang chủ -->
  <main>
    <div class="float">
      <div id="container_main_home">
        <div id="ctai_main_home">
          
          <!-- Lịch chiếu -->
          <div class="ctai_main_detailpage_showtime">

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

            <!-- Movies -->
            <div v-if="dataAllShowtime" id="btn_pdc" class="container_main_showtimepage btn_active">
              <div class="ctai_main_showtimepage_background" v-for="(showtimes, index) in dataAllShowtime" :key="index">
                <div v-if="index !== 'null'" class="ctai_main_showtimepage_float">
                  <div>
                    <img width="90%" :src="showtimes[0].movie_poster" title="">
                  </div>
                  
                  <div>
                    <div>
                      <p class="p_title">
                        {{ showtimes[0].movie_name }}
                      </p>
                    </div>

                    <div class="ctai_main_showtimepage_showtime">
                      <div v-for="showtime in showtimes" :key="showtime.movie_id" >
                        <button @click.prevent="onChooseShowTime(showtime)" class="btn_showtime">
                          {{ showtime.start_time }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="text-align: center; color: #fff;" v-else> Hiện chưa có lịch chiếu hôm nay</div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import { reactive, ref } from 'vue';
import { useMovie } from '@/composables/useMovie';
import { useRouter } from 'vue-router'

export default {
  setup() {
    const dataAllShowtime = ref(null);
    const weekdays = ref(null);
    const router = useRouter();

    const { fetchWeekday, fetchAllShowtime } = useMovie();

    const classShowtime = reactive(
      Array(7).fill('showtime_item')
    );

    async function fetchDataWeekday() {
      weekdays.value = await fetchWeekday();
      dataAllShowtime.value = await fetchAllShowtime(0);
    }
    fetchDataWeekday();

    async function onWeekday(idWeekday, index) {
      dataAllShowtime.value = await fetchAllShowtime(idWeekday);
      console.log(dataAllShowtime.value);

      for(let i = 0; i < classShowtime.length; i++) {
        if(i != index) classShowtime[i] = 'showtime_item';
        else classShowtime[i] = 'showtime_item selected_weekday';
      }
      console.log(idWeekday, index);
    }

    function onChooseShowTime(showtime) {
      router.push({ name: "ChooseSeat", query: {data: JSON.stringify(showtime)} });
    }

    return { onWeekday, dataAllShowtime, weekdays, classShowtime, onChooseShowTime }
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
.ctai_calendar{
  position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
}
#selected-date{
  border: none;
  border-radius: 25px 0 25px 0;
  background-color: #cccdcf;
  padding: 6px 10px;
}
.img_calendar{
  position: absolute;
  top: 50%;
  left: 84%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.container_main_showtimepage{
  display: none;
}
.container_main_showtimepage{
  display: block;
  background: none !important;
}
.ctai_main_showtimepage_background{
  padding: 20px 0;
  margin: 20px 0;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  border-radius: 20px;
}
.ctai_main_showtimepage_float{
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 75%;
  column-gap: 5%;
}
.ctai_main_showtimepage_showtime{
  display: flex;
  flex-direction: row;
}

.p_showtimepage{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: white;
  font-size: 1vw;
}
.ctai_main_showtimepage_showtime{
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  row-gap: 1vw;
  margin-bottom: 1vw;
}
.btn_showtime{
  font-family: 'Poppins', sans-serif;
  font-weight: 550;
  color: #000;
  font-size: 1vw;
  text-decoration: none;
  border-radius: 1px;
  display: inline-block;
  padding: 1vw 0.8vw;
  background-color: #cccdcf;
  transition: all 0.3s;
}
.btn_showtime:hover{
  text-decoration: none;
  transform: scale(1.1);
}

/*****************************/
.wrapper{
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
.container_wrapper{
  position: absolute;
  width: 70%;
  min-width: 450px;
  background: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  z-index: 100;
  border-radius: 20px;
}
.container_wrapper .ctai_wrapper{
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: center;
}
.ctai_wrapper .current-date{
  font-size: 1.45rem;
  font-weight: 500;
  margin: 0 20px;
}
.icons img{
  margin-bottom: 10px;
}
.ctai_wrapper .icons{
  height: 38px;
  width: 38px;
  color: #878787;
  font-size: 1.9rem;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  border-radius: 50%;
}
.ctai_wrapper .icons:hover{
  background: #f2f2f2;
}
.ctai_wrapper .icons span:last-child{
  margin-right: -10px;
}
.calendar {
  padding: 20px;
}
.calendar ul{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
}
.calendar .days{
  margin-bottom: 20px;
}
.calendar .weeks li{
  font-weight: 500;
}
.calendar ul li{
  position: relative;
  width: calc(100% / 7);
}
.calendar .days li{
  z-index: 1;
  cursor: pointer;
  margin-top: 30px;
}
.days li.inactive{
  color: #aaa;
}
.days li.active{
  color: #fff;
}
.calendar .days li::before{
  position: absolute;
  content: "";
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.days li:hover::before{
  background: #f2f2f2;
}
.days li.active::before{
  background: rgb(201, 64, 68);
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
.selected_weekday {
  background: linear-gradient(360deg, #FED5B4, #C94044) !important;
  color: #fff !important;
}
</style>