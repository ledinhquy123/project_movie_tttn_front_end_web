<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <!-- Đường kẻ ngăn cách -->
    <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">

    <div class="container_main_pay_banking">
      <div class="ctai_main_pay_banking_p">
        <p>THANH TOÁN</p>
      </div>

      <div class="ctai_main_pay_banking">
          <div class="pay_banking">

            <div class="ctai_info_seat">
              <div class="ctai_info_seat_grid">
                <div class="info_seat_img">
                  <img width="100%" :src="showtime.movie_poster">
                </div>

                <div class="info_seat_info">
                  <form @submit.prevent="onSubmit">
                    <div class="info_seat_info_p">
                      <p>{{ showtime.movie_name }}</p>
                    </div>
                    <hr>
                    <div>
                      <span class="info_seat_info_span">Chi tiết hóa đơn</span>
                      <table class="info_seat_info_table">
                        <tr>
                          <th>Suất chiếu:</th>
                          <td>{{ showtime.weekday_name }}-{{ showtime.start_time }}</td>
                        </tr>
                        <tr>
                          <th>Phòng chiếu:</th>
                          <td>{{ showtime.screen_name }}</td>
                        </tr>
                        <tr>
                          <th>Ghế:</th>
                          <td>{{ seatsName }}</td>
                        </tr>
                        <tr>
                          <th>Số lượng vé:</th>
                          <td>{{ seatQuantity }}</td>
                        </tr>
                        <tr>
                          <th>Người đặt:</th>
                          <td>{{ getUser().name }}</td>
                        </tr>
                      </table>
                    </div>
                    <hr>
                    <div>
                      <table class="info_seat_info_table">
                        <tr>
                          <th>Tổng tiền:</th>
                          <td>{{ seatQuantity * 60 }}.000</td>
                        </tr>
                      </table>
                    </div>
                    <hr>
                    <div>
                      <table class="info_seat_info_table">
                        <tr>
                          <th colspan="2">Phương thức thanh toán:</th>
                        </tr>
                        <tr>
                          <td class="choose_pay" colspan="2">
                            <button 
                              @click.prevent="selectedPayment('vnpay')"
                              :class="paymentName == 'vnpay' ? 'selected-payment' : '' "
                            >
                              <img width="50px" height="30px" :src="require('@/assets/images/vnpay.png')" />
                            </button>
                            <button 
                              @click.prevent="selectedPayment('momo')"
                              :class="paymentName == 'momo' ? 'selected-payment' : '' "
                            >
                              <img width="50px" height="30px" :src="require('@/assets/images/momo.png')" />
                            </button>
                            <button 
                              @click.prevent="selectedPayment('zalopay')" 
                              :class="paymentName == 'zalopay' ? 'selected-payment' : '' "
                            >
                              <img width="50px" height="30px" :src="require('@/assets/images/zalopay.png')" />
                            </button>
                          </td>
                        </tr>
                        <p v-if="err" style="color: red;">{{ err }}</p>
                      </table>
                    </div>
                    <hr>
                    <div class="info_seat_info_btn">
                      <button type="submit">Thanh toán</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTransaction } from '@/composables/useTransaction'
import { useUser } from '@/composables/useUser'
import { useMovie } from '@/composables/useMovie'

export default {
  setup() {
    const amount = ref('');
    const route = useRoute();
    const paymentName = ref('');
    const { paymentVnPay, getNameSeat, paymentMomo, reservations, createTicket } = useTransaction();
    const err = ref(null);
    const selectedSeat = JSON.parse(route.query.selectedSeat);
    const showtime = JSON.parse(route.query.showtime);
    const isPending = ref(false);
    const seatsName = ref('');
    const seatQuantity = ref(0);
    const { getUser } = useUser();
    const { fetchWeekday } = useMovie();
    let date;
    
    async function fetchDate() {
      let response = await fetchWeekday();
      date = response.filter(item => item.name == showtime.weekday_name)[0];
    }
    fetchDate();

    console.log(showtime);
    console.log(selectedSeat);
    async function fetchNameSeat(data) {
      isPending.value = true;
      const dataName = await getNameSeat(data);
      seatQuantity.value = dataName.length;
      for(let i = 0; i < dataName.length; i++) {
        seatsName.value += dataName[i];
        if(i != dataName.length - 1)  seatsName.value += ', ';
      }

      isPending.value = false;
    }
    fetchNameSeat(selectedSeat);

    function selectedPayment(payment) {
      paymentName.value = payment;
    }

    async function fetchReservations() {
      const data = {
        // Thực chất là showtime_id => do đặt tên nhầm =))
        'screen_id': showtime.id,
        'data': selectedSeat
      };
      const checkReservations = await reservations(data);
      console.log(checkReservations);
    }

    async function onSubmit() {
      const data = {
        'user_id': getUser().id,
        'screen_name': showtime.screen_name,
        'seats_name': seatsName.value,
        'movie_id': showtime.movie_id,
        'showdate': date.name,
        'show_time': showtime.start_time,
        'total_price': seatQuantity.value * 60,
        'transaction_type_id': 2
      };  

      if(paymentName.value == 'vnpay') {
        err.value = null;
        
        // Cập nhật status ghế
        await fetchReservations(showtime);
        // Thêm vé
        await createTicket(data);

        await paymentVnPay(JSON.stringify(seatQuantity.value * 60 * 1000));

      }else if(paymentName.value == 'momo') {
        err.value = null;
        
        // Cập nhật status ghế
        await fetchReservations(showtime);
        // Thêm vé
        await createTicket(data);

        await paymentMomo(JSON.stringify(seatQuantity.value * 60 * 1000));
      } 
      else {
        err.value = 'Phương thức đang bảo trì.';
      }
    }

    return { getUser, seatQuantity, seatsName, err, onSubmit, amount, paymentName, selectedPayment, showtime }
  }
}
</script>

<style coped>
.container_main_pay_banking{
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}
.ctai_main_pay_banking_p,
.ctai_main_pay_banking{
  margin: 20px 0;
  font-family: var(--font);
  width: 100%;
}
.ctai_main_pay_banking_p p{
  text-align: center;
  color: #B3B3B3;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.ctai_main_pay_banking{
  width: 100%;
}
.pay_banking{
  width: 700px;
  margin: 0 auto;
}

/* info book seat */
.ctai_info_seat{
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  border-radius: 20px;
  padding: 10px;
}
.ctai_info_seat_grid{
  display: grid;
  grid-template-columns: 50% 50%;
}
.info_seat_img{
  margin: 10px;
}
.info_seat_img img{
  border-radius: 4px;
}
.info_seat_info > form {
  width: 90%;
  margin: 10px auto;
}
.info_seat_info > form > hr {
  border: 1px solid #f2f2f2;
}
.info_seat_info_p p{
  font-family: var(--font);
  font-weight: 500;
  font-size: 22px;
  color: #f2f2f2;
  display: -webkit-box;
  -webkit-line-clamp: 2;  /*Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info_seat_info_span{
  font-family: var(--font);
  font-weight: 300;
  font-size: 20px;
  color: #f2f2f2;
}
.info_seat_info_table{
  width: 100%;
}
.info_seat_info_table th{
  font-weight: 450;
  color: #f2f2f2;
  font-size: 16px;
}
.info_seat_info_table td{
  font-weight: 300;
  color: #f2f2f2;
  font-size: 16px;
  text-align: end;
}
.choose_pay{
  display: flex;
  justify-content: space-between;
}
.choose_pay > button {
  border: none;
  outline: none;
}
.info_seat_info_btn{
  text-align: center;
}
.info_seat_info_btn > button{
  border-radius: 20px 0 20px 0;
  border: none;
  padding: 4px 10px;
  font-family: var(--font);
  color: white;
  background: rgba(201, 64, 68, 1);
  transition: all 0.3s;
}
.info_seat_info_btn > button:hover{
  transform: scale(1.1);
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .pay_banking{
    width: 100%;
  }
  .ctai_info_seat_grid{
    display: flex;
    flex-direction: column;
  }
} 
.selected-payment {
  border: 2px solid rgba(201, 64, 68, 1) !important;
}
</style>