<script setup>
/*
useWindowFocus是一个自定义钩子，用于检测当前浏览器窗口是否处于聚焦状态。如果用户正在查看当前的浏览器窗口（即窗口处于活动状态），则该钩子返回true，否则返回false。

在给出的代码中，useWindowFocus函数的返回值被存储在focused变量中。然后，在模板中，通过{{ focused }}将这个值显示出来。如果窗口处于聚焦状态，页面上将显示"Window is focused: true"，否则显示"Window is focused: false"。

这个钩子在需要根据窗口的聚焦状态来改变组件行为的场景中非常有用。例如，你可能希望在用户查看其他窗口时暂停视频播放，或者在用户回到你的应用窗口时刷新一些数据。
* */
import { useWindowFocus } from "@vueuse/core";
const focused = useWindowFocus();
</script>
<template>
  <div>
    <el-input></el-input>
    <h1>useWindowFocus</h1>
    <p>Window is focused: {{ focused }}</p>
  </div>
</template>
