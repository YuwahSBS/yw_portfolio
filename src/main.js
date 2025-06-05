import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles
import "@/assets/global.css";

// mouting point for the whole app

import App from "@/App.vue";
import Home from "@/views/Home.vue";

// routes

const routes = [
  {
    path: "/",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
