<script setup>
import { useGlobalState } from "./createGlobalState.js";
const { count, doubleCount } = useGlobalState();
</script>
<template>
  <div>count:{{ count }}</div>
  <div>doubleCount:{{ doubleCount }}</div>
</template>
