import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import about from '../components/About.vue'
import service from '../views/Service.vue'
import Login from "../views/Login.vue";
import Forget from '../views/Forget.vue';
import register from "../views/Register.vue";
import profile from "../views/Profile.vue";
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
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Forget",
      name: "Forget",
      component: Forget,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
    // {
    //   path: "/about",
    //   name: "about",

    //   component: () => import("../components/About.vue"),
    // },
  ],
});

export default router
