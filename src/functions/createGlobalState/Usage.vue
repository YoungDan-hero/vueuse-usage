<script setup>
import { useGlobalState } from "./createGlobalState.js";
const { increment } = useGlobalState();
</script>
<template>
  <button @click="increment">点击</button>
</template>
