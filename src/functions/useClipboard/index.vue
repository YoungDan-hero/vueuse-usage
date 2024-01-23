<script setup>
/*
useClipboard函数是一个自定义钩子（custom hook），它提供了一种方便的方式来交互和管理剪贴板内容。在Vue.js和其他一些现代JavaScript框架中，自定义钩子是一种封装和共享可重用逻辑的方式。

在提供的代码中，useClipboard函数接收一个配置对象，其中包括source和legacy两个属性。source是一个引用（ref），它指向要复制到剪贴板的内容，而legacy则是一个布尔值，如果设为true，当剪贴板API不可用时，会使用旧的execCommand方式来复制内容。

useClipboard返回一个对象，其中包含了一些有用的属性和方法：

text：当前复制到剪贴板的文本。
copy：一个函数，用于复制source引用的内容到剪贴板。
copied：一个布尔值，表示是否已经复制了内容到剪贴板。
isSupported：一个布尔值，表示当前浏览器是否支持剪贴板API。
在Vue模板中，可以使用这些属性和方法来创建一个用户界面，让用户可以复制文本到剪贴板，并显示复制的状态。
* */
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const source = ref("Hello");
const { text, copy, copied, isSupported } = useClipboard({
  source,
  legacy: true,
});
</script>

<template>
  <div v-if="isSupported">
    <el-button @click="copy(source)" style="margin-bottom: 20px">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </el-button>
    <el-input v-model="source" style="margin-bottom: 20px"></el-input>

    <p>
      Current copied: <code>{{ text || "none" }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>
