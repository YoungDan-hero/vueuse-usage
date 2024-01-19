<script setup>
/*
useStorage 函数的作用是创建一个响应式的 storage 值。它接受三个参数：

键名（key）：一个字符串，用于在 Web Storage 中存储数据的键名。
默认值（defaultValue）：如果在 Web Storage 中没有找到指定的键，将使用此默认值。
存储器（storage）：指定使用的 Web Storage 类型，可以是 localStorage 或 sessionStorage。
在代码中，useStorage 用于创建两个响应式的 storage 值 sStorage 和 lStorage，它们分别对应于 localStorage 和 sessionStorage 中的 "test" 键。当 test ref 的值发生变化时，sStorage 和 lStorage 的值也会相应地变化，并且这些变化会被存储到相应的 Web Storage 中。

使用 watch 函数来监视 sStorage 和 lStorage 的变化。当它们的值发生变化时，会执行一个回调函数，打印出它们的当前值。
* */

/*
以下是一些具体的使用场景：

用户偏好设置：例如，你可能希望记住用户的主题选择（例如，明亮或暗黑模式），语言选择，或者其他界面布局设置。当用户下次访问你的应用时，你可以从 storage 中读取这些设置，以便恢复用户的偏好。

表单数据的暂存：如果你的应用包含一个复杂的表单，用户可能需要花费一些时间来填写。在用户填写表单的过程中，你可以使用 storage 来暂存表单数据。这样，即使用户不小心关闭了浏览器窗口，他们也能在下次访问时恢复他们的输入。

购物车数据：在电商应用中，你可能希望在用户的浏览器中存储购物车的内容。这样，即使用户在没有登录的情况下关闭了浏览器窗口，他们也能在下次访问时看到他们的购物车仍然包含他们之前添加的商品。

缓存数据：如果你的应用需要频繁地从服务器获取某些数据，你可以考虑使用 storage 来缓存这些数据。这样，你可以减少服务器的请求次数，提高应用的性能。

在所有这些场景中，useStorage 函数都可以让你很方便地创建一个响应式的 storage 值，这个值会自动与 Vue.js 组件的状态同步，并且会在用户的浏览器中持久化存储。
* */
import { useStorage } from "@vueuse/core";
import { ref, watch } from "vue";
const test = ref(0);
const sStorage = useStorage("test", test, localStorage);
const lStorage = useStorage("test", test, sessionStorage);

watch(
  () => [sStorage, lStorage],
  (value) => {
    console.log(value[0].value, value[1].value);
  },
  {
    deep: true,
  }
);
</script>
<template>
  <div>
    <el-button @click="test++">+1</el-button>
    <ul class="own">
      <li>sStorage：{{ sStorage }}</li>
      <li>lStorage：{{ lStorage }}</li>
    </ul>
  </div>
</template>
