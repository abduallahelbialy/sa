import './assets/main.css'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(VueSweetalert2);
app.use(router)

app.mount('#app')
