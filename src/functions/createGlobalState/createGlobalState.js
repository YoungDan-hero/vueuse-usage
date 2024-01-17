import { computed, ref } from "vue";
import { createGlobalState } from "@vueuse/core";
// 创建一个可维护的全局状态
export const useGlobalState = createGlobalState(() => {
  // state
  const count = ref(0);
  // getters
  const doubleCount = computed(() => count.value * 2);
  // actions
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});
