<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1> </h1>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    console.log("Logout");
    localStorage.removeItem('user');
    router.push({ name: "Home" })
  }
}
</script>