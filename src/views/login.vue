<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <!-- Div này chứa ảnh nền -->
    <div class="container_login">
      <!-- Div này dùng để làm mờ ảnh nền -->
      <div>
        <!-- Div này dùng để canh giữa màn hình -->
        <div class="ctai_login">
          <!-- Form Đăng nhập -->
          <form @submit.prevent="onSubmit" class="form">
            <div class="title">
              <p>ĐĂNG NHẬP</p>
            </div>
            <p class="p">
              Bạn chưa có tài khoản? 
              <!-- Bỏ link sang trang đăng ký -->
              <button style="border: none; outline: none; background-color: transparent;" class="span" @click.prevent="redirectToRegister">
                <strong>Đăng ký ngay</strong>
              </button>
            </p>
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
              <!-- Ô nhập email -->
              <input v-model="email" type="email" class="input" placeholder="Nhập Email" autofocus required>
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
              <!-- Ô nhập mật khẩu -->
              <input v-model="password" :type="typePassword" id="password" class="input" placeholder="Nhập mật khẩu" required>
              <button style="border: none; outline: none; height: 100%; background-color: transparent;" @click.prevent="tooglePassword">
                <img id="showPassword" :src="iconPassword">
              </button>
            </div>

            <div class="flex-row">
              <div>
                <!-- Ô checkbox -->
                <input id="rememberPassword" type="checkbox">
                <label>Nhớ mật khẩu</label>
              </div>
              <!-- Bỏ link để sang trang Quên mật khẩu -->
              <a class="span" href="#">
                <button style="border: none; outline: none; background-color: transparent;" @click.prevent="redirectToEnterEmail">
                  <strong>
                    Quên mật khẩu?
                  </strong>
                </button>
              </a>
            </div>
            <div class="button-submit">
              <!-- Ô submit -->
              <button v-if="!isPending" class="btn-submit" type="submit">Đăng nhập</button>
              <button v-else style="cursor: not-allowed; background-color: gray;" class="btn-submit" type="button">Loading...</button>
            </div>

            <div class="separator">
              <hr>
              <span>Hoặc</span>
              <hr>
            </div>

            <div class="flex_row">
              <!-- Bỏ link Google -->
              <button @click="onLoginWithGoogle" type="button" class="btnn google">
                <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                  C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
                          <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
                          <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
                          <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                  C318.115,0,375.068,22.126,419.404,58.936z"></path>

                </svg>
                Tiếp tục với Google
              </button>
              <!-- Bỏ link Facebook -->
              <a href="#" class="btnn facebook">
                <img width="20" :src="require('@/assets/images/facebook.svg')" title="">
                Tiếp tục với Facebook
              </a>
              <!-- Bỏ link Apple -->
              <a href="#" class="btnn apple">
                <svg version="1.1" height="20" width="20" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.773 22.773"
                  style="enable-background:new 0 0 22.773 22.773;" xml:space="preserve">
                  <g>
                    <g>
                      <path
                        d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z">
                      </path>
                      <path
                        d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z">
                      </path>
                    </g>
                  </g>
                </svg>
                Tiếp tục với Apple
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { useUser } from "@/composables/useUser"
import axios from 'axios';

export default {
  setup() {
    const typePassword = ref("password");
    const iconPassword = ref(require('@/assets/images/eye.svg'));
    const router = useRouter();

    const isPending = ref(false);
    const email = ref("");
    const password = ref("");
    const { loginUser } = useUser()

    function tooglePassword() {
      typePassword.value = typePassword.value === "password" 
        ? "text" 
        : "password";

      iconPassword.value = typePassword.value === "password" 
        ?  require('@/assets/images/eye.svg') 
        : require('@/assets/images/eye-slash.svg')
    }

    function redirectToRegister() {
      router.push({ name: "Register" })
    }

    function redirectToEnterEmail() {
      router.push({ name: "ForgotPasswordEnterEmail" })
    }

    async function onSubmit() {
      isPending.value = true;
      const checkLogin = await loginUser(email.value, password.value);
      if(checkLogin) {
        router.push({ name: "Home" });
      }
      isPending.value = false;
    }

    async function onLoginWithGoogle() {
      const response = await axios.get('http://localhost:8000/api/auth/google');
      if(response.status == 200) {
        window.location.href = response.data.url;
      }
    }

    return {
      onLoginWithGoogle,
      isPending,
      email,
      password,
      onSubmit,
      typePassword,
      iconPassword,
      tooglePassword,
      redirectToRegister,
      redirectToEnterEmail
    }
  }
}
</script>

<style scoped>
.container_login{
  width: 100%;
  background-image: url('~@/assets/images/anhGroupMovie2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: fit-content;
}
.container_login > div {
  position: relative;
  height: 100vh;
  background: rgba(56, 61, 77, 0.6);
}
.ctai_login{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
}
.title p{
  font-family: var(--font);
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  color: var(--color-text);
}
/*********************************************/
.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #ffffff;
  padding: 3vw;
  width: 100%;
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
}
.flex_row > div > label {
  font-size: 16px;
  color: var(--color-text);
  font-weight: 400;
  font-family: var(--font);
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
  margin: 0.8vw 0;
  text-align: center;
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

.p {
  color: #a19898;
  font-size: 12px;
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
/* Reponsive */
@media only screen and (max-width: 576px) {
  .ctai_login{
    width: 90%;
  }
}
</style>