import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/styles/global.css"

import { registerGlobalComponents } from "@/ultis/import"
import router from "@/router"

const app = createApp(App);
app.use(router);
registerGlobalComponents(app)
app.mount('#app')