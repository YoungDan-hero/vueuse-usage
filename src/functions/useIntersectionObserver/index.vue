<script setup>
/*

useIntersectionObserver是一个Vue Composable，它使用Intersection Observer API来监测一个HTML元素是否在视口（viewport）内。当元素进入或离开视口时，Intersection Observer API会触发一个回调函数。

在提供的代码中，useIntersectionObserver被用来监测一个div元素（target）是否在视口内。当target进入或离开视口时，回调函数会被触发，同时更新targetIsVisible的值。

在模板中，targetIsVisible的值被用来显示target是否在视口内。当target在视口内时，会显示"inside the viewport"，否则会显示"outside the viewport"。

这个功能可以用于实现各种基于视口状态的交互效果，例如懒加载（当元素进入视口时加载内容）、无限滚动（当滚动到底部时加载更多内容）、动画触发（当元素进入视口时播放动画）等。
* */
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  }
);

// stop();
</script>
<template>
  <div>
    滚动 Element {{ targetIsVisible ? "inside" : "outside" }} the viewport
    <div class="scroll-box">
      <div class="main">
        <div class="display" ref="target">display</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scroll-box {
  width: 500px;
  height: 400px;
  border: 1px dashed #ccc;
  overflow: auto;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-color: #eee;
}

.display {
  padding: 20px;
  border: 1px dashed green;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
