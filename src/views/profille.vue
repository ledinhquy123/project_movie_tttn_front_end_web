<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>

  <div>
    <hr style="border: 2px solid rgba(225, 225, 225, 0.5);">
  </div>

  <div class="container_information_user">
    <div>
      <div>
        <div class="ctai_information_user_img">
          <img :src="user.avatar" title="">
        </div>
      </div>
    </div>
    
    <div>
      <div class="ctai_information_user_table">
        <form @submit.prevent="onSubmitProfile">
          <table>
            <tr>
              <th colspan="2">
                <p>
                  THÔNG TIN CÁ NHÂN
                </p>
              </th>
            </tr>
            <tr>
              <td colspan="2" class="table_label">
                <label for="fullname">Họ tên</label>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table_input">
                <input v-if="isEnable" id="fullname" v-model="inpFullname" type="text" />
                <input v-else id="fullname" v-model="inpFullname" type="text" disabled />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table_label">
                <label for="email">Email</label>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="table_input">
                <input v-if="isEnable" id="email" v-model="inpEmail" type="text" />
                <input v-else id="email" v-model="inpEmail" type="text" disabled/>
              </td>
            </tr>
            <tr>
              <td class="td">
                <button v-if="!isPending" type="submit" class="main_information_user_btn">Lưu</button>

                <button v-else type="button" style="background-color: gray; cursor: not-allowed;" class="main_information_user_btn">Loading...</button>
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
import { useUser } from "@/composables/useUser";
import { ref } from 'vue';

export default {
  setup() {
    const { getUser, updateUser } = useUser();
    const user = ref(getUser());
    const inpFullname = ref(user.value.name);
    const inpEmail = ref(user.value.email);
    const isPending = ref(false);
    const isEnable = ref(true);

    if(user.value.provider_id) {
      isEnable.value = false;
    }

    async function onSubmitProfile() {
      isPending.value = true;
      await updateUser(user.value.id, inpFullname.value, inpEmail.value);

      isPending.value = false;
    }

    return {
      onSubmitProfile,
      isEnable,
      user,
      inpFullname,
      inpEmail
    }
  }  
}
</script>

<style scoped>
.container_information_user{
  width: 70%;
  margin: 4vw auto;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient( to right, rgba(201, 64, 68, 0.472), rgba(59, 63, 74, 0.79));
}
.ctai_information_user_img{
  width: 50%;
  margin: 5vw auto;
  text-align: center;
}
.ctai_information_user_img img{
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
}
.btn_change_img{
  margin-top: 2px;
}
.btn_change_img button{
  background-color: transparent;
  border: none;
  font-family: var(--font);
  font-size: 14px;
  color: #cccdcf;
  transition: all 0.3s;
}
.btn_change_img button:hover{
  color: var(--color-text);
}

.ctai_information_user_table{
  width: 80%;
}
.ctai_information_user_table table{
  width: 100%;
}
.ctai_information_user_table th{
  text-align: center;
  font-family: var(--font);
  color: #b2b2b2;
  font-size: 20px;
  padding-top: 2vw;
}
.table_label{
  font-family: var(--font);
  color: #cccdcf;
  font-size: 16px;
  padding-top: 1vw;
}
.table_input input{
  text-align: center;
  font-family: var(--font);
  color: #cccdcf;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  border: 2px solid rgba(204, 205, 207, 0.4);
  border-top: none;
  border-left: none;
  border-right: none;
}
.table_input input:focus{
  outline: none;
}

.td{
  width: 50%;
  padding: 2vw 0;
  text-align: center;
}
.main_information_user_btn{
  width: 50%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: rgb(201, 64, 68);
  border-radius: 20px 0 20px 0;
  padding: 8px 12px;
  box-shadow: 0.5vw 0px 8px #333333;
  transition: all 0.3s;
}
.main_information_user_btn:hover{
  transform: scale(1.1);
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .container_information_user{
    width: 90%;
  }
  .main_information_user_btn{
    width: 90%;
  }
}
</style>