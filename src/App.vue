<script setup>
import Layout from "../src/layout/index.vue";
</script>
<template>
  <div style="flex: 1; display: flex">
    <Layout />
    <div
      style="
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      "
    >
      <RouterView />
    </div>
  </div>
</template>
