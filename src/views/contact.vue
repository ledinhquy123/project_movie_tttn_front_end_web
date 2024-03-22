<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="container_main_contact">
      <div class="ctai_main_contact">
        <div>
          <p class="ctai_main_contact_p1">LIÊN HỆ</p>
        </div>
        <div>
          <p class="ctai_main_contact_p2">
            Chúng tôi luôn nỗ lực mang đến cho bạn trải nghiệm xem phim tuyệt vời. Nếu bạn có bất kỳ phản hồi nào,
            vui lòng liên hệ với chúng tôi.
          </p>
        </div>
        <!-- div này sẽ ẩn khi xem trên trang đt, hiện khi xem trên lap -->
        <div class="d-sm-flex d-none">
          <img class="ctai_main_contact_img" :src="require('@/assets/images/anhGroupMovie.jpg')" title="">
        </div>
        <!-- div này sẽ ẩn khi xem trên trang lap, hiện khi xem trên đt -->
        <div class="d-sm-none d-flex ctai_main_contact_form">
          <!-- div bọc và cân chỉnh vị trí -->
          <div class="ctai_main_contact_form_float">
            
          </div>
        </div>
      </div>
      <!-- div dùng để bọc phần tử bên phải, sẽ ẩn khi xem trên trang đt, hiện khi xem trên lap -->
      <div class="d-sm-flex d-none ctai_main_contact_form">
        <!-- div bọc và cân chỉnh vị trí -->
        <div class="ctai_main_contact_form_float">
          <!-- Thêm method, action cho form  -->
          <form @submit.prevent="onSubmitContact">
            <table>
              <tr>
                <td class="table_label">
                  <label for="">Họ tên <span>*</span></label>
                </td>
              </tr>
              <tr>
                <td class="table_input">
                  <!-- Ô input -->
                  <input v-model="inpFullname" type="text" placeholder="Nguyễn Văn A" autofocus required>
                </td>
              </tr>
              <tr>
                <td class="table_label">
                  <label for="">Điện thoại <span>*</span></label>
                </td>
              </tr>
              <tr>
                <td class="table_input">
                  <!-- Ô input -->
                  <input v-model="inpPhone" type="text" placeholder="Nhập số điện thoại của bạn" autofocus required>
                </td>
              </tr>
              <tr>
                <td class="table_label">
                  <label for="">Email <span>*</span></label>
                </td>
              </tr>
              <tr>
                <td class="table_input">
                  <!-- Ô input -->
                  <input v-model="inpEmail" type="text" placeholder="Nhập email của bạn" autofocus required>
                </td>
              </tr>
              <tr>
                <td class="table_label">
                  <label for="">Nội dung <span>*</span></label>
                </td>
              </tr>
              <tr>
                <td>
                  <!-- Ô input -->
                  <textarea v-model="inpContent" rows="10" placeholder="Nhập nội dung" autofocus required></textarea>
                </td>
              </tr>
              <tr>
                <td v-if="!isPending" class="btn_send">
                  <!-- Ô submit -->
                  <button type="submit">Gửi</button>
                </td>

                <td v-else class="btn_send">
                  <!-- Ô submit -->
                  <button style="background-color: gray; cursor: not-allowed;" type="button">Loading...</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useSendEmail } from '@/composables/useSendEmail';

export default {
  setup() {
    const inpFullname = ref(null);
    const inpPhone = ref(null);
    const inpEmail = ref(null);
    const inpContent = ref(null);
    const { sendEmail } = useSendEmail();
    const isPending = ref(false);

    async function onSubmitContact() {
      isPending.value = true;
      await sendEmail('ledinhquy856@gmail.com', `Hỗ trợ người dùng: ${inpFullname.value} - SĐT: ${inpPhone.value} - Email: ${inpEmail.value}`, inpContent.value);
      inpFullname.value = '';
      inpPhone.value = '';
      inpEmail.value = '';
      inpContent.value = '';
      isPending.value = false;
    }

    return {
      isPending,
      inpFullname,
      inpPhone,
      inpEmail,
      inpContent,
      onSubmitContact
    }
  }
}
</script>

<style scoped>
.container_main_contact{
  display: grid;
  grid-template-columns: 40% 55%;
  column-gap: 5%;
  padding: 2vw 0;
  width: 90%;
  margin: 0 auto;
}
.ctai_main_contact_p1{
  text-align: center;
  font-family: var(--font);
  color: white;
  font-size: 22px;
}
.ctai_main_contact_p2{
  text-align: justify;
  font-family: var(--font);
  color: rgba(242, 242, 242, 0.8);
  font-size: 16px;
}
.ctai_main_contact_img{
  width: 100%;
  border-radius: 30px;
}

.ctai_main_contact_form{
  background: linear-gradient(to bottom, rgba(201, 64, 68, 0.8), rgba(59, 63, 74, 1));
  border-radius: 20px;
}
.ctai_main_contact_form_float{
  width: 85%;
  margin: 1vw auto;
}
.ctai_main_contact_form_float table{
  width: 100%;
}


.table_label{
  font-family: var(--font);
  color: #cccdcf;
  font-size: 16px;
  padding: 1vw 0;
}
.table_label span{
  color: red;
  font-family: var(--font);
  font-size: 16px;
}
.table_input input,
.ctai_main_contact_form_float textarea{
  width: 100%;
  font-family: var(--font);
  color: #cccdcf;
  font-size: 16px;
  background: transparent;
  border: 2px solid rgba(204, 205, 207, 0.4);
}
.table_input input:focus,
.ctai_main_contact_form_float textarea:focus{
  outline: none;
}
.table_input input{
  border-top: none;
  border-left: none;
  border-right: none;
}
.ctai_main_contact_form_float textarea{
  border-radius: 30px;
  resize: none;
  padding: 10px 15px;
}
.btn_send{
  text-align: center;
}
.btn_send button{
  width: 40%;
  font-family: var(--font);
  font-weight: 500;
  text-align: center;
  color: white;
  background: rgb(201, 64, 68);
  border: none;
  border-radius: 20px;
  padding: 0.3vw 0.8vw;
  transition: all 0.3s;
}
.btn_send button:hover{
  opacity: 0.9;
  box-shadow: 0 0 10px 5px rgba(201, 64, 68, 0.8);
}
.btn_send button:active{
  transform: scale(1.1);
  background: linear-gradient( to right, rgba(201, 64, 68, 0.7), rgb(59, 63, 74));
  color: white;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .container_main_contact{
    display: flex;
    flex-direction: column;
  }
}
</style>