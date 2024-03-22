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
              <p>Nhập email của bạn để nhận mã xác nhập</p>
            </div>

            <div class="flex-column">
              <label>Nhập email của bạn</label>
            </div>
            <div class="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path
                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z">
                  </path>
                </g>
              </svg>
              <input v-model="email" type="email" class="input" placeholder="Nhập email của bạn" autofocus required>
            </div>
            <p v-if="err" style="color: red;">{{ err }}</p>

            <div v-if="!isPending" class="button-submit">
              <button class="btn-submit" type="submit"> Gửi mã </button>
            </div>

            <div v-else class="button-submit">
              <button class="btn-submit" type="submit" style="cursor: not-allowed; background-color: gray; color: #fff;"> Loading... </button>
            </div>

          </form>
        </div>
      </div>
    </section>
    <img class="bkgr_img" :src="require('@/assets/images/anhGroupMovie2.jpg')">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSendEmail } from '@/composables/useSendEmail'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref(null);
    const { sendEmail, verifyEmail } = useSendEmail();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const router = useRouter();
    const isPending = ref(false);
    const err = ref(null);

    async function onSubmit() {
      isPending.value = true;
      const checkVerifyEmail = await verifyEmail(email.value);
      
      if(checkVerifyEmail) {
        const response = await sendEmail(email.value, 'Mã xác nhận', randomNumber);
        if(response) {
          const data = {
            'email': email.value,
            'otp': randomNumber
          }
          router.push({ name: "EnterOtp", query: {data: JSON.stringify(data)} })
        }else {
          err.value = 'Gửi email không thành công.'
        }
      }else {
        err.value = 'Email không hợp lệ.'
      }
      isPending.value = false;
    }

    return {
      err,
      onSubmit, 
      email,
      isPending
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
  margin: 16px 0;
  color: rgba(59, 63, 74, 0.77);
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

.flex-column{
  margin: 8px 0;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
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

.bkgr_img{
  width: fit-content;
}
</style>