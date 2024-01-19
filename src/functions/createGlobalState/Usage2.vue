<script setup>
import { useGlobalState } from "./createGlobalState.js";
const { count, doubleCount } = useGlobalState();
</script>
<template>
  <ul class="own">
    <li>count: {{ count }}</li>
    <li>double: {{ doubleCount }}</li>
  </ul>
</template>
