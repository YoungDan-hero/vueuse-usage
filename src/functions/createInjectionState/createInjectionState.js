// useCounterStore.ts
import { computed, ref } from "vue";
import { createInjectionState } from "@vueuse/shared";
/*
createInjectionState是一个创建全局状态并通过依赖注入提供给子组件的函数。该函数返回两个函数，一个是useProvideCounterStore，另一个是useCounterStore。
useProvideCounterStore函数在父组件中创建并提供全局状态。该函数接受一个初始值作为参数，并返回一个包含状态、计算属性和方法的对象。在给出的示例中，这个对象
包含count（状态）、double（计算属性）和increment（方法）。
useCounterStore函数在子组件中注入全局状态。该函数不接受任何参数，并返回在父组件中创建的全局状态对象。在给出的示例中，这个对象同样包含count和double。
总结来说，createInjectionState的功能是创建一个全局状态，并通过依赖注入的方式提供给子组件。这样，父组件和子组件就能共享同一个状态，无需通过props或事件
来传递状态。这种方式在处理复杂的组件关系或大型应用时，能大大简化状态管理。
* */

const [useProvideCounterStore, useCounterStore] = createInjectionState(
  (initialValue) => {
    // state
    const count = ref(initialValue);

    // getters
    const double = computed(() => count.value * 2);

    // actions
    function increment() {
      count.value++;
    }

    return { count, double, increment };
  }
);

export { useProvideCounterStore };
// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useCounterStore };
