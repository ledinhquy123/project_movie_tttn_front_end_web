<template>
  <header>
    <div class="float">
      <div id="nav">
        <div>
          <p id="logo">
            CINE AURA
          </p>
        </div>
        <div>
          <nav id="navbar">
            <router-link :to="{ name: 'Home' }">Trang chủ</router-link>
            <router-link :to="{ name: 'MoviePage' }">Phim</router-link>
            <router-link :to="{ name: 'Showtime' }">Lịch chiếu</router-link>
            <router-link :to="{ name: 'Introduce' }">Giới thiệu</router-link>
            <router-link :to="{ name: 'Contact' }">Liên hệ</router-link>
            <router-link id="login" :to="{ name: 'Login' }">Đăng nhập</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  #nav{
    display: grid;
    grid-template-columns: 50% 50%;
    color: white;
    background-color: #07080A;
    align-items: center;
    position: sticky;
    top: 0;
    height: 60px;
  }
  #logo{
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 20px;
    margin: 0;
  }
  #navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #navbar a{
    text-decoration: none;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    color: white;
    transition: all 0.3s;
    min-width: 66px;
    text-align: center;
  }
  #navbar a:hover{
    transform: scale(1.1);
  }

  #login:link, #login:visited{
    display: inline-block;
    background: linear-gradient(to bottom, #C94044, #3B3F4A);
    padding: 10px;
    border: none;
    border-radius: 20px;
    min-width: 85px;
  }

</style>