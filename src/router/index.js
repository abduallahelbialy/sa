import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import about from '../components/About.vue'
import service from '../views/Service.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/service",
      name: "service",
      component: service,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    // {
    //   path: "/about",
    //   name: "about",

    //   component: () => import("../components/About.vue"),
    // },
  ],
});

export default router
