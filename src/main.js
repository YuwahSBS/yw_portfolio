import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
// styles
import "@/assets/global.css";
// mouting point for the whole app
import App from "@/App.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Test from '@/views/Test.vue';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

export default {
  mounted() {
    // Use jQuery here, e.g.,
    $('body').css('background-color', 'lightblue');
  }
}
// routes

const routes = [
  {
    path: "/",
    component: Home,
  },
   {
    path: "/allprojects",
    component: Projects,
  },
  {
    path: "/test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");


AOS.init({
  duration: 800,       // Animation duration in ms
  once: true,          // Only animate once
  offset: 120,        
})

