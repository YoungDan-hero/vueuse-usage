import { createRouter, createWebHashHistory } from "vue-router";
import CreateGlobalState from "../functions/createGlobalState/index.vue";
import CreateInjectionState from "../functions/createInjectionState/index.vue";
import UseStorage from "../functions/useStorage/index.vue";
import UseActiveElement from "../functions/useActiveElement/index.vue";
import UseDraggable from "../functions/useDraggable/index.vue";
import UseElementVisibility from "../functions/useElementVisibility/index.vue";
import UseIntersectionObserver from "../functions/useIntersectionObserver/index.vue";
import UseMouseInElement from "../functions/useMouseInElement/index.vue";
import UseWindowFocus from "../functions/useWindowFocus/index.vue";
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
  {
    path: "/useStorage",
    name: "UseStorage",
    component: UseStorage,
  },
  {
    path: "/useActiveElement",
    name: "UseActiveElement",
    component: UseActiveElement,
  },
  {
    path: "/useDraggable",
    name: "UseDraggable",
    component: UseDraggable,
  },
  {
    path: "/useElementVisibility",
    name: "UseElementVisibility",
    component: UseElementVisibility,
  },
  {
    path: "/useIntersectionObserver",
    name: "UseIntersectionObserver",
    component: UseIntersectionObserver,
  },
  {
    path: "/useMouseInElement",
    name: "UseMouseInElement",
    component: UseMouseInElement,
  },
  {
    path: "/useWindowFocus",
    name: "UseWindowFocus",
    component: UseWindowFocus,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
