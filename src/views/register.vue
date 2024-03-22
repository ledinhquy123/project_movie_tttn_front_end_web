<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
      <div class="container_login">
        <div class="ctai_login">
          <form @submit.prevent="onSubmit" class="form">
            <div class="title">
              <p>ĐĂNG KÝ</p>
            </div>
            <p class="p">
              Bạn đã có tài khoản? <a class="span" href="">
                <strong>
                  <button style="border: none; outline: none; background-color: transparent;" class="span" @click.prevent="redirectToLogin">
                  <strong>Đăng nhập ngay</strong>
                </button>
                </strong>
              </a>
            </p>
            <div class="flex-column">
              <label>Họ tên </label>
            </div>
            <div class="inputForm">
              <img height="20" viewBox="0 0 32 32" width="20" :src="require('@/assets/images/username.svg')" title="">
              <input v-model="fullName" type="text" class="input" placeholder="Nhập họ và tên" autofocus required>
            </div>

            <div class="flex-column">
              <label>Email </label>
            </div>
            <div class="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path
                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z">
                  </path>
                </g>
              </svg>
              <input v-model="email" type="email" class="input" placeholder="Nhập Email" required>
            </div>

            <div class="flex-column">
              <label>Mật khẩu </label>
            </div>
            <div class="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0">
                </path>
                <path
                  d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0">
                </path>
              </svg>
              <input v-model="password" :type="typePassword" class="input" placeholder="Nhập mật khẩu" required>
              <button style="border: none; outline: none; height: 100%; background-color: transparent;" @click.prevent="tooglePassword">
                <img id="showPassword" :src="iconPassword">
              </button>
            </div>
            <p>Ít nhất có 8 ký tự: bao gồm chữ cái, chữ số và kí tự đặc biệt</p>
            <p v-if="errPassword" style="color: red;">{{ errPassword }}</p>

            <div class="flex-column">
              <label>Nhập lại mật khẩu</label>
            </div>
            <div class="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0">
                </path>
                <path
                  d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0">
                </path>
              </svg>
              <input v-model="passwordAgain" :type="typePasswordAgain" class="input" placeholder="Nhập lại mật khẩu" required>
              
              <button style="border: none; outline: none; height: 100%; background-color: transparent;" @click.prevent="tooglePasswordAgain">
                <img id="showPasswordAgain" :src="iconPasswordAgain">
              </button>
            </div>

            <div v-if="!isPending" class="button-submit">
              <button class="btn-submit" type="submit">Đăng ký</button>
            </div>

            <div v-else class="button-submit">
              <button style="cursor: not-allowed; background-color: gray;" class="btn-submit" type="button">Loading...</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <img class="bkgr_img" :src="require('@/assets/images/anhGroupMovie2.jpg')" title="">
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/composables/useUser';

export default {
  setup() {
    const typePassword = ref("password");
    const iconPassword = ref(require('@/assets/images/eye.svg'));

    const typePasswordAgain = ref("password");
    const iconPasswordAgain = ref(require('@/assets/images/eye.svg'));
    const router = useRouter();

    // Variables register
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const passwordAgain = ref("");
    const errPassword = ref("");
    const isPending = ref(false);

    const { registerUser } = useUser();

    function tooglePassword() {
      typePassword.value = typePassword.value === "password" 
        ? "text" 
        : "password";

      iconPassword.value = typePassword.value === "password" 
        ?  require('@/assets/images/eye.svg') 
        : require('@/assets/images/eye-slash.svg')
    }

    function tooglePasswordAgain() {
      typePasswordAgain.value = typePasswordAgain.value === "password" 
        ? "text" 
        : "password";

      iconPasswordAgain.value = typePasswordAgain.value === "password" 
        ?  require('@/assets/images/eye.svg') 
        : require('@/assets/images/eye-slash.svg')
    }

    function redirectToLogin() {
      router.push({ name: "Login" })
    }

    // onSubmit
    async function onSubmit() {
      isPending.value = true;
      const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)/;
      if(password.value.length >= 8 && regex.test(password.value)) {
        if(password.value !== passwordAgain.value) {
          errPassword.value = 'Mật khẩu không khớp.'
        }else {
          errPassword.value = "";
          console.log('ok');
          await registerUser(fullName.value, email.value, password.value);
        }
      }else {
        errPassword.value = 'Mật khẩu không hợp lệ.';
      }
      isPending.value = false;
    }

    return {
      isPending,
      fullName,
      email,
      password,
      passwordAgain,
      errPassword,
      typePassword,
      iconPassword,
      typePasswordAgain,
      iconPasswordAgain,
      tooglePassword,
      tooglePasswordAgain,
      redirectToLogin,
      onSubmit
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

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
  font-family: var(--font);
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

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
}
.flex_row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 16px;
  color: var(--color-text);
  font-weight: 400;
  font-family: var(--font);
  margin: 8px 0;
}

.span {
  font-size: 14px;
  margin-left: 0.1vw;
  color: #151717;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}

.button-submit{
  width: 100%;
  text-align: center;
  margin: 32px 0;
}
.btn-submit {
  background-color: rgb(201, 64, 68);
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
  background-color: rgb(165, 52, 55);
}

.p{
  color: #a19898;
  font-size: 12px;
  margin: 0;
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