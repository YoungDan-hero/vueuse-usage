<script setup>
/*
useBrowserLocation是一个自定义钩子，用于读取和响应浏览器的位置信息。它提供了一个反应性的方式来访问window.location对象，包括URL、查询参数、哈希值等。

useBrowserLocation返回一个反应性的对象，该对象包含了window.location的所有属性，如href、protocol、host、hostname、port、pathname、search和hash等。当浏览器的URL变化时，这个对象会自动更新。

这个钩子在需要根据URL或其部分来改变组件行为的场景中非常有用。例如，你可能希望根据URL的查询参数来过滤列表，或者根据URL的哈希值来滚动到特定的页面部分。
*/
import { useBrowserLocation } from "@vueuse/core";
const location = useBrowserLocation();
</script>
<template>
  <div>
    <h1>useBrowserLocation</h1>
    <div>
      {{ location }}
    </div>
  </div>
</template>
<style scoped></style>
