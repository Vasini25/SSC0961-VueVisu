import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/app",
    name: "app",
    component: App,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
