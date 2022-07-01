import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExchangeView from "../views/ExchangeView.vue";
import FomoView from "../views/FomoView.vue";

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
  {
    path: "/indexes",
    name: "indexes",
    component: FomoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
