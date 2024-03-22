<template>
  <main>
    <div class="float">
      <div class="container_main_pay_success">
        <p>THANH TOÁN THÀNH CÔNG</p>
        <img :src="require('@/assets/images/anhSendSuccess.png')" title="">
        <div class="ctai_main_pay_success_btn">
          <router-link :to="{ name: 'MyTicket' }">Vé của tôi</router-link>
          <router-link :to="{ name: 'Home' }">Trang chủ</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container_main_pay_success{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2vw auto;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 1), rgba(59, 63, 74, 1));
  border-radius: 20px;
}

.container_main_pay_success p,
.container_main_pay_success img,
.container_main_pay_success div{
  margin: 10px 0;
}
.container_main_pay_success p,
.container_main_pay_success div{
  font-family: var(--font);
  font-weight: 500;
}
.container_main_pay_success p{
  font-size: 22px;
  color: #D9D9D9;
}
.container_main_pay_success img{
  width: 10%;
}

.ctai_main_pay_success_btn{
  display: flex;
  width: 40%;
  justify-content: space-around;
}
.ctai_main_pay_success_btn a{
  display: inline-block;
  padding: 0.6vw 2vw;
  border-radius: 20px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  background: rgba(201, 64, 68, 1);
  transition: all 0.3s;
}
.ctai_main_pay_success_btn a:hover{
  transform: scale(1.1);
  text-decoration: none;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .container_main_pay_success{
    width: 100%;
  }
  .container_main_pay_success img{
    width: 20%;
  }
  .ctai_main_pay_success_btn{
    width: 80%;
  }
}
</style>