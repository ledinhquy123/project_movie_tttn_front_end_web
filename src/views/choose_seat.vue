<template>
  <loading v-if="isPending" />
  <main v-else>
    <!-- .container_main_choose_seat dùng để chia bố cục -->
    <div class="container_main_choose_seat">
      <!-- div này dùng để bọc các phần tử bên trái -->
      <div class="ctai_main_choose_seat_movie">
        <div class="main_choose_seat_movie_img">
          <!-- Bỏ link ảnh -->
          <img :src="showtime.movie_poster">
        </div>
        <div class="main_choose_seat_movie_p">
          <!-- Bỏ tên phim -->
          <p>{{ showtime.movie_name }}</p>
        </div>
      </div>
      <!-- div này dùng để bọc các phần tử bên phải -->
      <div class="ctai_main_choose_seat_choose_seat">
        <!-- Cotainer ghế và thông tin đặt ghế, giá tiền -->
        <div class="ctai_choose_seat">
          <div class="ctai_choose_seat_float">
            <!-- Màn ảnh và ghế -->
            <div class="ctai_choose_seat_ctai">
              <div>
                <img width="100%" :src="require('@/assets/images/screen.png')" title="">
              </div>
              <!-- seat1 ghế trống, seat2 ghế chọn, seat3 ghế đã đặt -->
              <div class="choose_seat_img">
                <button @click.prevent="onChooseSeat(seat)" type="button" v-for="seat in dataSeats" :key="seat.id">
                  <img v-if="seat.status == 1" :src="require('@/assets/images/seat3.png')" />
                  <img v-else-if="selectedSeat[seat.id] == true" :src="require('@/assets/images/seat2.png')" />
                  <img v-else :src="require('@/assets/images/seat1.png')" />
                </button>
              </div>
            </div>
            <!-- Chú thích -->
            <div class="ctai_choose_seat_interpret">
              <div>
                <img :src="require('@/assets/images/dot1.svg')">
                <p>Ghế trống</p>
              </div>
              <div>
                <img :src="require('@/assets/images/dot3.svg')">
                <p>Đã đặt</p>
              </div>
              <div>
                <img :src="require('@/assets/images/dot2.svg')">
                <p>Đang chọn</p>
              </div>
            </div>
            <!-- Thông tin giá và ghế -->
            <div class="ctai_choose_seat_info_seatAndPrice">
              <!-- Thêm thông tin ghế chọn, giá tiền và ngày chọn -->
              <div>
                <div class="ctai_choose_seat_info_seatAndPrice_span">
                  <!-- <img src="../images/cart-shopping-solid.svg" title=""> -->
                  <span class="choose_seat_info_seatAndPrice_span m-4"> Suất chiếu: </span>
                  <span class="choose_seat_info_seatAndPrice_span">{{ showtime.weekday_name }}</span>
                  <span class="choose_seat_info_seatAndPrice_span1">&#183;</span>
                  <span class="choose_seat_info_seatAndPrice_span">{{ showtime.start_time }}</span>
                </div>
              </div>

              <div class="ctai_btn_continue">
                <!-- Bỏ Link liên kết đến trang bắp nước -->
                <button @click.prevent="onContinue" class="btn_continue">Tiếp tục</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useSeat } from '@/composables/useSeat';
import { reactive, ref } from 'vue';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading
  },
  setup() {
    const route = useRoute();
    const showtime = JSON.parse(route.query.data);
    const { getSeat } = useSeat();
    const dataSeats = ref(null);
    const isPending = ref(false);
    const selectedSeat = reactive(
      Array(50).fill(false)
    );
    const router = useRouter();
    
    async function fetchDataSeat(screenId, showtimeId) {
      isPending.value = true;
      dataSeats.value = await getSeat(screenId, showtimeId);
      isPending.value = false;
    }
    fetchDataSeat(showtime.screen_id, showtime.id);

    function onChooseSeat(seat) {
      if(seat.status == 0) {
        selectedSeat[seat.id] = !selectedSeat[seat.id];
      }
    }

    async function onContinue() {
      if(selectedSeat.includes(true)) {
        router.push({ name: 'Bill', query: { showtime: JSON.stringify(showtime), selectedSeat: JSON.stringify(selectedSeat) } })
      } else {
        alert('Bạn chưa chọn ghế.')
      }

    }
    return {
      onContinue,
      onChooseSeat,
      isPending,
      showtime,
      dataSeats,
      selectedSeat
    }
  }
}
</script>

<style scoped>
.container_main_choose_seat{
  width: 90%;
  margin: 2vw auto;
  display: grid;
  grid-template-columns: 30% 68%;
  column-gap: 2%;
}
.ctai_main_choose_seat_movie{
  display: flex;
  flex-direction: column;
}
.main_choose_seat_movie_img img{
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}
.main_choose_seat_movie_p p{
  font-family: var(--font);
  font-weight: 400;
  font-size: 18px;
  color: white;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1)) !important;
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.ctai_main_choose_seat_choose_seat{
  display: flex;
  flex-direction: column;
}
.ctai_calendar{
  margin-bottom: 2vw;
}
.ctai_calendar > div{
  position: relative;
  width: calc(100%/4.5);
  min-width: 205px;
}
#selected-date{
  width: 100%;
  border: none;
  border-radius: 25px 0 25px 0;
  background-color: #cccdcf;
  padding: 6px 10px;
}
.img_calendar{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.ctai_choose_seat{
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1)) !important;
  border-radius: 20px;
}
.ctai_choose_seat_float{
  margin: 2vw;
}
.ctai_choose_seat_ctai{
  background: var(--color-text);
  border-radius: 20px;
  padding: 8px 8px 32px;
}
.choose_seat_img{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.choose_seat_img button{
  width: calc(100%/10);
  text-align: center;
  padding: 1vw 0;
  cursor: pointer;
  background: transparent;
  border: none;
}

.ctai_choose_seat_interpret{
  display: flex;
  justify-content: space-around;
  margin: 1vw;
}
.ctai_choose_seat_interpret > div > p{
  display: inline-block;
  font-family: var(--font);
  font-weight: 300;
  font-size: 16px;
  color: white;
  margin: 0 0 0 2vw;
}

.ctai_choose_seat_info_seatAndPrice{
  display: grid;
  grid-template-columns: 65% 35%;
  
}
.ctai_choose_seat_info_seatAndPrice_span{
  margin-bottom: 1vw;
  margin-left: 0.5vw;
}
.ctai_choose_seat_info_seatAndPrice_span img{
  width: 5%;
  margin-right: 2vw;
}
.choose_seat_info_seatAndPrice_span{
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #f2f2f2;
  font-weight: 500;
  display: inline-block;
}
.choose_seat_info_seatAndPrice_span1{
  font-weight: 900;
  color: white;
}

.ctai_btn_continue{
  position: relative;
  width: 100%;
}
.btn_continue{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.6vw 0.8vw;
  background: rgb(201, 64, 68);
  border-radius: 30px 0 30px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
}
.btn_continue:hover{
  opacity: 0.7;
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
/* Reponsive */
@media only screen and (max-width: 576px) {
  .container_main_choose_seat{
    display: flex;
    flex-direction: column;
  }
  .container_wrapper{
    width: 90%;
  }
  .main_choose_seat_movie_p p{
    margin-bottom: 10px;
  }
}
</style>