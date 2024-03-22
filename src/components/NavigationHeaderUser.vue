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
            <div id="profile-username">
              <img id="username-img" :src="user.avatar">
              <span style="color: #f2f2f2cd; font-size: 20px; margin: 0 2px;">|</span>
              
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ user.name }}
                </button>
                <ul class="dropdown-menu" id="username-list" aria-labelledby="dropdownMenuButton">
                  <router-link :to="{ name: 'Profile' }"> 
                    <li class="dropdown-item">
                      Thông tin cá nhân
                    </li>
                  </router-link>
                  <hr style="color: #a09d9d;">
                  <router-link :to="{ name: 'MyTicket' }"> 
                    <li class="dropdown-item">
                      Vé của tôi
                    </li>
                  </router-link>
                  <hr style="color: #a09d9d;">
                  <router-link :to="{ name: 'Logout' }"> 
                    <li class="dropdown-item">
                      Đăng xuất 
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const user = getUser();

    return { user }
  }
}
</script>

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
  z-index: 1;
}
#logo{
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 20px;
}
#navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navbar a,div{
  text-decoration: none;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  color: white;
  transition: all 0.3s;
}
#navbar a:hover{
  transform: scale(1.1);
}

#profile-username{
  display: flex;
  align-items: center;
  position: relative;
}
#username-img{
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: cover;
}
#username{
  transition: all 0.3s ease-in-out;
}
#username:hover{
  transform: scale(1.02);
}
.drop_down{
  width: 8px;
  margin: 0 1px;
  transition: all 0.3s;
}
#username-list{
  position: absolute;
  top: 22px;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.7); Màu nền của danh sách */
  background-color: #fff;
  list-style: none;
  padding: 10px;
}

#username-list li{
  padding: 0;
  transition: all 0.3s;
  color: #000;
  font-size: 16px;
}
#username-list li:hover{
  transform: scale(1.02);
  color: #000;
  cursor: pointer;
}
</style>