import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import about from '../components/About.vue'
import service from '../views/Service.vue'
import Login from "../views/Login.vue";
import Forget from '../views/Forget.vue';
import register from "../views/Register.vue";
import profile from "../views/Profile.vue";
import Add from "../views/Addprofile.vue";
import Homecontrol from "../layout/Homecontrol.vue";
import Test from "../layout/Test.vue";
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
    {
      path: "/Add",
      name: "Add",
      component: Add,
    },

    {
      path: "/homecontrol",
      name: "homecontrol",
      component: Homecontrol,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    // {
    //   path: "/about",
    //   name: "about",

    //   component: () => import("../components/About.vue"),
    // },
  ],
});

export default router
