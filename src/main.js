import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


// styles
import "@/assets/global.css";

// mouting point for the whole app

import App from "@/App.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue"
import AOS from 'aos'
import 'aos/dist/aos.css'

// routes

const routes = [
  {
    path: "/",
    component: Home,
  },
   {
    path: "/allprojects",
    component: Projects,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

AOS.init({
  duration: 800,       // Animation duration in ms
  once: true,          // Only animate once
  offset: 120,         // Offset from the trigger point
  easing: 'ease-in-out'
})

createApp(App).use(router).mount("#app");
