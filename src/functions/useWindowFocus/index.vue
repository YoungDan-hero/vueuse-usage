<script setup>
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
