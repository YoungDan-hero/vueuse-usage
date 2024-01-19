<script setup>
/*
useElementVisibility 是一个Vue Composable，它的功能是检测一个HTML元素是否在视口（viewport）内可见。这个功能通常用于懒加载（lazy loading）图片、无限滚动列表、滚动监听等场景。

在提供的代码中，useElementVisibility 被用来监测名为 "target" 的 div 元素是否可见。当 "target" 元素的可见性发生改变时，会触发一个 watch 函数，该函数会弹出一个警告框显示当前的可见性状态（true 或 false）。

这个功能可以帮助你更好地控制和优化页面的渲染，例如，只在用户滚动到某个元素时才加载或显示，从而节省资源并提高页面加载速度。
* */
import { ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
watch(
  () => targetIsVisible.value,
  (value) => {
    alert(value);
  }
);
</script>

<template>
  <div style="flex: 1; width: 100%; height: 100vh; overflow-y: auto">
    <div class="wrap">
      <div ref="target">
        <h1>Hello world</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  height: 2000px;
}
</style>
