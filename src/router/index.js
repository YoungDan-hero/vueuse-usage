import { createRouter, createWebHashHistory } from "vue-router";
import CreateGlobalState from "../functions/createGlobalState/index.vue";
import CreateInjectionState from "../functions/createInjectionState/index.vue";

const routes = [
  {
    path: "/createGlobalState",
    name: "CreateGlobalState",
    component: CreateGlobalState,
  },
  {
    path: "/createInjectionState",
    name: "CreateInjectionState",
    component: CreateInjectionState,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
