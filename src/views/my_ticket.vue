<template>
  <main>
    <div v-if="!isPending" id="container_main_my_ticket">
      <div id="ctai_main_home">
        <div v-if="dataMyTicket" id="btn_psx" class="ctai_main_my_ticket btn_active">
          <div v-for="ticket in dataMyTicket" :key="ticket.id" class="ctai_main_my_ticket_background">
            <!-- Vé -->
            <div class="ctai_main_my_ticket_float">
              <div class="ctai_main_my_ticket_img">
                <img id="image1" width="100%" :src="ticket.movie_poster_path" title="">
              </div>

              <div>
                <div class="ctai_main_my_ticket_info">
                  <div class="main_my_ticket_movie_name">
                    <p>{{ ticket.movie_name }}</p>
                  </div>
             
                  <div class="ctai_main_my_ticket_p">
                    <p class="main_my_ticket_p1">Thời gian:</p>
                    <span class="main_my_ticket_p2">{{ ticket.showdate }}</span>
                    <span class="main_my_ticket_p1">&#183;</span>
                    <span class="main_my_ticket_p1">{{ ticket.show_time }}</span>
                  </div>

                  <div class="ctai_main_my_ticket_p">
                    <p class="main_my_ticket_p1">Phòng:</p>
                    <span class="main_my_ticket_p2">{{ ticket.screen_name }}</span>
                  </div>

                  <div class="ctai_main_my_ticket_p">
                    <p class="main_my_ticket_p1">Ghế:</p>
                    <span class="main_my_ticket_p2">{{ ticket.seats_name }}</span>
                  </div>

                  <div class="ctai_main_my_ticket_p">
                    <p class="main_my_ticket_p1">Người đặt:</p>
                    <span class="main_my_ticket_p2">{{ ticket.user_name }}</span>
                  </div>

                </div>
              </div>

              <div class="d-sm-block ctai_price">
                <div>
                  <qrcode-vue :text="ticket.qr_path" size="200" :options="{ version: 25, errorCorrectionLevel: 'H' }"></qrcode-vue>
                </div>
              </div>
              
            </div>
          </div>

        </div>
        <div v-else id="btn_psx" class="ctai_main_my_ticket btn_active">
          <p class="text-center" style="color: #fff; font-weight: bold;">Bạn chưa có vé.</p>
        </div>
      </div>
      
    </div>

    <div v-else id="container_main_my_ticket">
      <loading />
    </div>

  </main>
</template>

<script>
import { useTransaction } from '@/composables/useTransaction'
import { useUser } from '@/composables/useUser'
import { ref } from 'vue';
import Loading from '@/components/Loading.vue'
import QrcodeVue  from 'qrcode.vue';

export default {
  components: {
    Loading,
    QrcodeVue  
  },
  setup() {
    const { getTicketByUser } = useTransaction();
    const { getUser } = useUser();
    const isPending = ref(false);
    const dataMyTicket = ref(null);
    
    async function fetchMyTicket() {
      isPending.value = true;
      dataMyTicket.value = await getTicketByUser(getUser().id);
      isPending.value = false;
    }
    fetchMyTicket();

    return {
      dataMyTicket,
      isPending
    }
  }
}
</script>

<style scoped>
#container_main_my_ticket{
  padding: 20px 0;
  margin: 20px auto;
  background: linear-gradient( to right, rgba(201, 64, 68, 0.6), rgb(75, 80, 95));
  border-radius: 20px;
  width: 90%;
}

#container_btn_psx_pdx{
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
  min-width: 160px;
  transition: all 0.3s;
}
.btn_home.psx{
  border-radius: 30px  30px  30px 0;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 40%;
  box-shadow: 10px 0px 10px 1px rgb(59, 63, 74);
}

.btn_home.pdx{
  border-radius: 0  0  30px 0;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
.btn_home:hover{
  background: #B3B3B3;
  color: #404545;
}

.ctai_main_my_ticket{
  display: none;
}
.ctai_main_my_ticket.btn_active{
  display: block;
  background: none !important;
}
.ctai_main_my_ticket_background{
  margin: 20px auto;
  background-color: #cccdcf;
  border-radius: 2px;
  border: 1px dashed #07080a7b;
  width: 90%;
}
.ctai_main_my_ticket_float{
  display: grid;
  grid-template-columns: 20% 45% 35%;
}
.ctai_main_my_ticket_info{
  width: 90%;
  margin: 0 auto;
  padding: 2vw 0;
}
.ctai_main_my_ticket_img{
  padding: 2vw;

}
.ctai_main_my_ticket_img img{
  border-radius: 20px;
}

.main_my_ticket_movie_name{
  font-family: var(--font);
  font-weight: 450;
  font-size: 18px;
  color: #3b3f4a;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctai_main_my_ticket_p{
  margin-bottom: 20px
}
.main_my_ticket_p1{
  font-family: var(--font);
  font-size: 16px;
  color: #3b3f4a;
  display: inline-block;
  margin: 0;
  font-weight: 550;
}

.main_my_ticket_p2{
  margin-left: 1vw;
  font-family: var(--font);
  font-size: 16px;
  color: #3b3f4a;
  font-weight: 550;
  display: inline-block;
}

.ctai_price{
  border: 1px dashed #07080a7b;
  border-bottom: none;
  border-right: none;
  border-top: none;
  position: relative;
}
.ctai_price div{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font);
  font-size: 17px;
  color: #3b3f4a;
  font-weight: 550;
}
.my_ticket_btn{
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: white;
  background: rgb(201, 64, 68);
  border: none;
  border-radius: 20px 0 20px 0;
  padding: 6px 12px;
  box-shadow: 0.5vw 0px 8px #333333;
  transition: all 0.3s;
}
.my_ticket_btn:hover{
  background: rgba(201, 64, 68, 0.7);
  color: rgba(59, 63, 74, 1);
}

.close-button {
  position: absolute;
  top: 0.5vw;
  right: 1.5vw;
  cursor: pointer;
  color: white;
  font-size: 30px;
  background: transparent;
  border: none;
}

.container_ticket_img{
  border-radius: 20px;
  background-color: rgb(238, 221, 190);
}

.ctai_ticket_img_movie_img img{
  border-radius: 20px 20px 0 0;
}

.ctai_ticket_img_info{
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  border: 2px dashed #07080a7b;
  border-bottom: none;
  border-right: none;
  border-left: none;
}

.ctai_ticket_img_info_p{
  margin-bottom: 1vw;
  margin-left: 0.5vw;
}
.ticket_img_info_p1{
  font-family: var(--font);
  font-size: 14px;
  color: #3b3f4a;
  display: inline-block;
  margin: 0;
  font-weight: 550;
}
.ticket_img_info_p2{
  margin-left: 0.5vw;
  font-family: var(--font);
  font-size: 14px;
  color: #3b3f4a;
  font-weight: 550;
  display: inline-block;
}
.ctai_ticket_img_info_img{
  width: 70%;
  margin: 0 auto;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .btn_home.psx{
    left: 25%;
    border-radius: 10px;
    box-shadow: none;
  }
  .btn_home.pdx{
    left: 75%;
    border-radius: 10px;
  }
  .ctai_main_my_ticket_float{
    grid-template-columns: 50% 50% 0;
    text-align: center;
  }
  .overlay-content{
    width: 80%;
  }
}
</style>