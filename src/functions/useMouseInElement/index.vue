<script setup>
/*
useMouseInElement是一个Vue Composable，它来源于VueUse库，一个包含各种有用的Vue Composition API函数的库。这个特定的函数useMouseInElement用于跟踪鼠标在特定元素中的位置和状态。

这个函数返回一个对象，其中包含一系列有关鼠标位置和状态的响应式引用。这些信息可以用于各种交互式功能，例如创建自定义鼠标跟踪效果，或者更复杂的交互，如拖放或手势识别。

在给出的代码中，useMouseInElement函数用于跟踪鼠标在特定div元素（用ref标记为target）中的位置和状态。这些状态包括鼠标的x和y坐标、鼠标是否在元素外部、元素的高度、元素的x和y坐标、元素的位置（在页面中的x和y坐标）、元素的宽度，以及源类型。

对于源类型（sourceType），这是一个表示鼠标事件来源的字符串。可能的值包括mouse、touch和pointer，分别代表鼠标事件、触摸事件和指针事件。

此外，还有一个stop函数，可以用来停止监听鼠标事件。在给定的代码中，这个函数被注释掉了，所以监听会一直持续下去，除非在其他地方调用stop函数。

这个函数的使用可以帮助开发者更好地理解和控制鼠标在特定元素中的行为，从而创建更丰富、更直观的用户交互体验。
*/
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);
const {
  x,
  y,
  isOutside,
  elementHeight,
  elementX,
  elementY,
  elementPositionX,
  elementPositionY,
  elementWidth,
  sourceType,
  stop,
} = useMouseInElement(target);

// stop();
</script>
<template>
  <div class="wrap" ref="target">
    <ul>
      <li>x:{{ x }}</li>
      <li>y:{{ y }}</li>
      <li>isOutside:{{ isOutside }}</li>
      <li>elementHeight:{{ elementHeight }}</li>
      <li>elementX:{{ elementX }}</li>
      <li>elementY:{{ elementY }}</li>
      <li>elementPositionX:{{ elementPositionX }}</li>
      <li>elementPositionY:{{ elementPositionY }}</li>
      <li>elementWidth:{{ elementWidth }}</li>
      <li>sourceType:{{ sourceType }}</li>
    </ul>
  </div>
</template>
<style scoped>
.wrap {
  width: 300px;
  background-color: skyblue;
}
</style>
