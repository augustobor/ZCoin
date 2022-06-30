import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExchangeView from "../views/ExchangeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/exchange",
    name: "exchange",
    component: ExchangeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
