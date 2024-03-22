import { createRouter, createWebHistory, useRouter } from "vue-router"
import NotFound from '@/views/not_found.vue'
import { useUser } from "@/composables/useUser"

const { getUser } = useUser();

const access = (to, from, next) => {
  const user = getUser();
  if(user) next();
  else {
    alert('Bạn cần đăng nhập để thực hiện.')
    useRouter().push({ name: "Login" });
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
    },
    component: () => import("@/views/index.vue")
  },

  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth"
    },
    component: () => import("@/views/login.vue")
  },

  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "auth"
    },
    component: () => import("@/views/logout.vue")
  },
  
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth"
    },
    component: () => import("@/views/register.vue")
  },

  {
    path: "/introduce",
    name: "Introduce",
    meta: {
    },
    component: () => import("@/views/introduce.vue")
  },

  {
    path: "/forgot-password-enter-email",
    name: "ForgotPasswordEnterEmail",
    meta: {
      layout: 'auth'
    },
    component: () => import("@/views/password_forgot_enter_email.vue")
  },

  {
    path: "/enter-otp",
    name: "EnterOtp",
    meta: {
      layout: 'auth'
    },
    component: () => import("@/views/enter_otp.vue")
  },

  {
    path: "/password-change",
    name: "PasswordChange",
    meta: {
      layout: 'auth'
    },
    component: () => import("@/views/password_change.vue")
  },

  {
    path: "/movie-detail",
    name: "MovieDetail",
    params: true,
    beforeEnter: access,
    meta: {
    },
    component: () => import("@/views/movie_detail.vue")
  },

  {
    path: "/showtime",
    name: "Showtime",
    params: true,
    meta: {
    },
    component: () => import("@/views/showtime.vue")
  },
  {
    path: "/auth/google/callback",
    name: "AuthGooogleCallback",
    meta: {
      layout: "auth"
    },
    component: () => import("@/views/google_callback.vue")
  },

  {
    path: "/bill",
    name: "Bill",
    beforeEnter: access,
    meta: {
      // layout: "auth"
    },
    component: () => import("@/views/bill.vue")
  },

  {
    path: "/bill/callback",
    name: "BillCallback",
    beforeEnter: access,
    meta: {
    },
    component: () => import("@/views/bill_callback.vue")
  },

  {
    path: "/choose-seat",
    name: "ChooseSeat",
    beforeEnter: access,
    component: () => import("@/views/choose_seat.vue")
  },

  {
    path: "/my-ticket",
    name: "MyTicket",
    beforeEnter: access,
    component: () => import("@/views/my_ticket.vue")
  },

  {
    path: "/profile",
    name: "Profile",
    beforeEnter: access,
    component: () => import("@/views/profille.vue")
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/contact.vue")
  },

  {
    path: "/movie-page",
    name: "MoviePage",
    component: () => import("@/views/movie_page.vue")
  },

  { 
    path: '/:pathMatch(.*)*', 
    meta: {
      layout: 'auth'
    },
    component: NotFound 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;