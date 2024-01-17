<script setup>
import Navigation from "../src/pages/navigation/index.vue";
</script>
<template>
  <Navigation />
  <div
    style="flex: 1; display: flex; align-items: center; justify-content: center"
  >
    <RouterView />
  </div>
</template>
