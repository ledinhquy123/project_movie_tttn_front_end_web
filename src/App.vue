<template>
  <div style="height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(90deg, #C94044, #fff);" v-if="isPending">
    <img :src="require('@/assets/images/logo.png')" alt="">
  </div>

  <component v-else :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from "vue-router"
import { PUBLIC_LAYOUT } from './constants';
import { useMovie } from './composables/useMovie';

export default {
  setup() {
    const route = useRoute();
    const { fetchNowPlaying, fetchUpcoming, fetchPopular } = useMovie();
    const isPending = ref(false);

    async function fetchData() {
      isPending.value = true;
      const checkNowPlaying = await fetchNowPlaying();
      const checkUpcomming = await fetchUpcoming();
      const checkPopular = await fetchPopular();

      if(checkNowPlaying && checkUpcomming && checkPopular) {
        isPending.value = false;
      }
    }
    fetchData();

    return {
      isPending,
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
    }
  }
}
</script>