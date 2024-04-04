import './assets/main.css'
import { plugin as formKitPlugin, defaultConfig } from "@formkit/vue";
import { createMultiStepPlugin } from "@formkit/addons";
import "@formkit/themes/genesis";
import "@formkit/addons/css/multistep";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(VueSweetalert2)   .use(
    formKitPlugin,
    defaultConfig({
      plugins: [createMultiStepPlugin()]
    }));
app.use(router)

app.mount('#app')
