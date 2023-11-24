import Home from "../views/Home.vue";
import Payment from "../views/Payment.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/payresult", component: Payment },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
