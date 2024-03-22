<template>
  <div>
    <section>
      <div class="container_login">
        <div class="ctai_login">
          <form @submit.prevent="onSubmit" class="form">
            <div class="title">
              <p>Tạo mật khẩu mới</p>
            </div>
            
            <div class="flex-column">
              <label>Nhập mật khẩu mới</label>
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
              <input v-model="inpPassword" :type="typePassword" class="input" placeholder="Nhập mật khẩu mới" autofocus required>
              <button style="border: none; outline: none; height: 100%; background-color: transparent;" @click.prevent="tooglePassword">
                <img id="showPassword" :src="iconPassword">
              </button>
            </div>

            <div class="flex-column">
              <label>Nhập lại mật khẩu mới</label>
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
              <input v-model="inpPasswordAgain" :type="typePasswordAgain" class="input" placeholder="Nhập lại mật khẩu mới" required>
              <button style="border: none; outline: none; height: 100%; background-color: transparent;" @click.prevent="tooglePasswordAgain">
                <img id="showPasswordAgain" :src="iconPasswordAgain">
              </button>
            </div>
            <p v-if="err" style="color: red;">{{ err }}</p>

            <div v-if="!isPending" class="button-submit">
              <button type="submit" class="btn-submit">Hoàn tất</button>
            </div>

            <div v-else class="button-submit">
              <button type="button" class="btn-submit" style="background-color: grey; cursor: not-allowed;">Loading...</button>
            </div>

          </form>
        </div>
      </div>
    </section>
    <img class="bkgr_img" :src="require('@/assets/images/anhGroupMovie2.jpg')" title="">
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useUser } from '@/composables/useUser'
export default {
  setup() {
    const typePassword = ref("password");
    const iconPassword = ref(require('@/assets/images/eye.svg'));
    const route = useRoute();
    const router = useRouter();
    const email = route.query.data;
    const inpPassword = ref(null);
    const inpPasswordAgain = ref(null);
    const err = ref(null);
    const isPending = ref(false);
    const { changPass } = useUser();

    const typePasswordAgain = ref("password");
    const iconPasswordAgain = ref(require('@/assets/images/eye.svg'));

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

    async function onSubmit() {
      isPending.value = true;
      if(inpPassword.value !== inpPasswordAgain.value) {
        err.value = 'Mật khẩu không khớp.';
      }else {
        err.value = '';
        const checkChangePass = await changPass(email, inpPassword.value);
        if(checkChangePass) {
          alert('Đổi mật khẩu thành công.');
          router.push({ name: "Login" });
        }else {
          alert('Đổi mật khẩu thất bại.');
        }
      }
      isPending.value = false;
    }

    return {
      isPending,
      err,
      inpPassword,
      inpPasswordAgain,
      typePassword,
      iconPassword,
      typePasswordAgain,
      iconPasswordAgain,
      tooglePassword,
      tooglePasswordAgain,
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
  margin: 16px 0;
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