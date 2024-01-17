import { computed, ref } from "vue";
import { createGlobalState } from "@vueuse/core";

/**
createGlobalState 是一个函数，它创建并返回一个全局状态对象。这个全局状态对象包含一个响应式的 count 变量，
一个计算属性 doubleCount（它的值是 count 的两倍），以及一个 increment 方法，用于增加 count 的值。这个
全局状态可以在 Vue 组件中被使用和共享。这个全局状态对象的主要用途是在不同的 Vue 组件中共享和管理状态。在
代码中，创建了两个组件 UsageCreateGlobalState 和 Usage2CreateGlobalState，这两个组件都使用了
useGlobalState。在 UsageCreateGlobalState 组件中，使用了 increment 方法，这个方法会在用户点击按钮时调用，
从而增加 count 的值。在 Usage2CreateGlobalState 组件中，使用了 count 和 doubleCount，在模板中展示了这两个值。
总的来说，createGlobalState 实现了一个全局状态管理的功能，使得状态可以在多个组件之间共享和同步。
这是一种常见的在 Vue 应用中管理状态的方式，特别是当状态需要在多个组件之间共享时。
 **/

/**
 全局状态管理在许多应用场景中都是非常有用的。以下是一些可能的应用场景：

 1. **用户状态管理**：在一个应用中，你可能需要在多个组件中访问和修改用户的状态，如用户的登录状态、用户的个人信息等。这时，你可以把用户的状态放在全局状态中，这样在任何组件中都可以访问和修改用户的状态。

 2. **主题设置**：如果你的应用支持多种主题，你可能需要在全局状态中保存用户的主题设置。然后你可以在任何组件中访问这个主题设置，从而根据用户的选择改变应用的外观。

 3. **购物车**：在一个电商应用中，用户可能在多个页面中添加商品到购物车。这时，你可以把购物车的状态放在全局状态中，这样在任何页面中都可以访问和修改购物车的状态。

 4. **数据缓存**：如果你的应用需要从服务器获取数据，而这些数据可能在多个组件中使用，你可以把这些数据放在全局状态中，这样就可以避免在每个组件中都重新获取数据。

 5. **通知或警告**：全局状态可以用来存储应用级别的通知或警告，如错误消息、成功消息等。这样可以在应用的任何地方显示或隐藏这些消息。

 这些只是全局状态管理可能的应用场景，实际上，全局状态管理可以用在任何需要在多个组件中共享和同步状态的场景中。
 **/
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
