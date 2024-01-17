import { createRouter, createWebHashHistory } from "vue-router";
import CreateGlobalState from "../functions/createGlobalState/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/createGlobalState",
  },
  {
    path: "/createGlobalState",
    component: CreateGlobalState,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
