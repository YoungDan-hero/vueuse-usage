<script setup>
import { useCounterStore } from "./createInjectionState.js";
const { count, double } = useCounterStore();
</script>
<template>
  <ul class="own">
    <li>count: {{ count }}</li>
    <li>double: {{ double }}</li>
  </ul>
</template>
