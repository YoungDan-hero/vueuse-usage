<script setup>
import { useGlobalState } from "./createGlobalState.js";
const { increment } = useGlobalState();
</script>
<template>
  <el-button @click="increment">点击</el-button>
</template>
