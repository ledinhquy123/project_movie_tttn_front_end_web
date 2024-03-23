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
    const client_id = route.query.client_id;
    const redirect_uri = route.query.redirect_uri;
    const router = useRouter();
    console.log(route.query);

    async function redirectToServer() {
      const response = await axios.get(`${DOMAIN_API}/auth/facebook/callback?client_id=${client_id}&redirect_uri=${redirect_uri}`);
      if(response.status == 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push({ name: "Home" });
      }
    }
    redirectToServer();
  }
}
</script>