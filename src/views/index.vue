<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <slider />
  <main-home />
</template>

<script>
import Slider from "@/components/Slider.vue"
import MainHome from "@/components/MainHome.vue";

export default {
  components: {
    Slider,
    MainHome,
  }
}
</script>