<template>
  <div>
    <section>
      <div class="container_login">
        <div class="ctai_login">
          <form @submit.prevent="onSubmit" class="form">
            <div class="title">
              <p>Quên mật khẩu</p>
            </div>
            <div class="title1">
              <p>Mã xác nhận đã được gửi về</p>
            </div>
            <div class="title1">
              <p>{{ email }}</p>
            </div>

            <div class="ctai_password_forgot">
              <input
                v-for="(digit, index) in otpDigits"
                :key="index"
                class="input-field"
                v-model="otpDigits[index]"
                type="text"
                maxlength="1"
              >
            </div>
            <p v-if="err" style="color: red;">{{ err }}</p>
            

            <div class="title3">
              <p>Gửi lại mã xác nhập sau
                <strong>55</strong>
                 giây</p>
            </div>


            <div class="button-submit">
              <button class="btn-submit" type="submit">Xác nhận</button>
            </div>

          </form>
        </div>
      </div>
    </section>
    <img class="bkgr_img" :src="require('@/assets/images/anhGroupMovie2.jpg')" title="">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
export default {
  setup() {
    const otpDigits = ref(Array(4).fill(''));
    const router = useRouter();
    const route = useRoute();
    const querys = JSON.parse(route.query.data);
    const email = querys['email'];
    const otp = querys['otp'];
    const err = ref(null);

    function onSubmit() {
      let inpOpt = '';
      for(let i = 0; i < 4; i++) {
        inpOpt += otpDigits.value[i];
      }

      if(inpOpt == otp) {
        router.push({ name: "PasswordChange", query: { data: email} });
      }else {
        err.value = 'Mã xác thực không chính xác.'
      }

    }

    return {
      email,
      otp,
      err,
      onSubmit,
      otpDigits
    }
  }
}
</script>

<style scoped>
.container_login{
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(56, 61, 77, 0.6);
  z-index: 10;
}
.ctai_login{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title p{
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  color: #151717;
}
.title1 p{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  color: rgba(59, 63, 74, 0.77);
  text-align: center;
}

.title3 p{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: rgba(59, 63, 74, 0.77);
  text-align: center;
}
.ctai_password_forgot{
  display: grid;
  grid-template-columns: 60px 60px 60px 60px;
  width: 100%;
  justify-content: space-between;
  margin: 16px 0;
}
.input-field{
  border: 1px solid #151717;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #151717;
  padding: 0.4vw 0.8vw;
  text-align: center;
}
/*********************************************/
.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.flex_row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
}

.button-submit{
  width: 100%;
  margin: 0.8vw 0;
  text-align: center;
}
.btn-submit {
  background: linear-gradient(to right, rgba(59, 63, 74, 1), rgba(116, 120, 127, 1));
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 20px;
  width: 50%;
  cursor: pointer;
  height: 40px;
  transition: all 0.3s;
}

.btn-submit:hover {
  box-shadow: 0 0 8px rgba(59, 63, 74, 1);
  opacity: 0.8;
}

.btnn {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 5px;
  border: none;
  color: var(--color-text);
  background-color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;
}

.btnn:hover {
  box-shadow: 0px 0px 4px #2d79f3;
  border: none;
}

.separator{
  display: grid;
  grid-template-columns: 40% 10% 40%;
  column-gap: 5%;
  align-items: center;
}
.bkgr_img{
  width: fit-content;
}
</style>