<template>
  <div style="width: 100vw; height: 100vh; background-color: #fff;"></div>
</template>

<script>
import { DOMAIN_API } from '@/constants';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router'
export default {
  setup() {
    const route = useRoute();
    const code = route.query.code;
    const scope = route.query.scope;
    const router = useRouter();
    console.log(route.query.code);
    console.log(route.query.scope);

    async function redirectToServer() {
      const response = await axios.get(`${DOMAIN_API}/auth/google/callback?code=${code}&scope=${scope}`);
      if(response.status == 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push({ name: "Home" });
      }
    }
    redirectToServer();
  }
}
</script>