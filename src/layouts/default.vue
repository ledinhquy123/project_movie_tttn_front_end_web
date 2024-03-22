<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <navigation-header v-if="!isLogin"/>
  <navigation-header-user v-else/>
  <slot />
  <navigation-footer />
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue"
import NavigationFooter from "@/components/NavigationFooter.vue"
import NavigationHeaderUser from "@/components/NavigationHeaderUser.vue"
import { ref } from "vue";
import { useUser } from "@/composables/useUser";

export default {
  components: {
    NavigationHeader,
    NavigationFooter,
    NavigationHeaderUser
  },

  setup() {
    const isLogin = ref(false);
    const { getUser } = useUser();
    const user = getUser();
    
    if(user) isLogin.value = true;
    else isLogin.value = false;
    return { isLogin }
  }
}
</script>