<script setup>
/*
useDraggable 是一个Vue Composable，它允许一个HTML元素在页面上被拖动。它返回一个对象，该对象包含了元素的当前x和y坐标，以及一个用于设置元素位置的style对象。

在提供的代码中，useDraggable被用于使一个div元素变为可拖动。这个div元素的引用（通过ref函数创建）被传递给useDraggable函数，同时还设置了元素的初始位置。

useDraggable返回的x和y值被用于在页面上显示元素当前的位置。返回的style对象则被绑定到元素的style属性，用于实时更新元素的位置。

这个功能可以用于创建可拖动的界面元素，例如对话框、图片或者其他组件。这可以增强用户交互体验，让用户可以自由地调整界面的布局。
* */
import { useDraggable } from "@vueuse/core";
import { ref } from "vue";
const el = ref(null);
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 200, y: 100 },
});
</script>
<template>
  <div class="card" ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 100px;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
}
</style>
