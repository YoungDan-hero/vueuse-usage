<script setup>
/*
useActiveElement是一个Vue Composable，它用于跟踪当前活动（或者说“聚焦”）的HTML元素。"活动"元素是用户当前正在与之交互的元素，例如，正在输入文本的输入框或者刚刚被点击的按钮。

在提供的代码中，useActiveElement被用来监控当前活动的元素。当活动元素发生变化时，会触发一个watch函数，这个函数会在控制台打印出新的活动元素的详细信息。

在模板中，还使用了activeElement.id来显示当前活动元素的ID。这样可以在页面上直观地看到当前哪个元素是活动的。

这个功能可以用于跟踪用户的交互行为，例如，可以通过监控活动元素来了解在表单中的填写顺序，或者在离开一个输入框时自动保存数据等。
* */
import { useActiveElement } from "@vueuse/core";
import { watch } from "vue";
const activeElement = useActiveElement();

watch(activeElement, (el) => {
  console.dir(el);
});
</script>
<template>
  <div>
    <div>{{ activeElement.id }}</div>
    <ul class="own">
      <li><el-input id="input1" placeholder="input1"></el-input></li>
      <li><el-input id="input2" placeholder="input2"></el-input></li>
      <li><el-input id="input3" placeholder="input3"></el-input></li>
    </ul>
  </div>
</template>
