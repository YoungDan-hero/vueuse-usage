<script setup>
import { useGlobalState } from "./createGlobalState.js";
const { count, doubleCount } = useGlobalState();
</script>
<template>
  <ul>
    <li>count: {{ count }}</li>
    <li>double: {{ doubleCount }}</li>
  </ul>
</template>
