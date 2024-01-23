<script setup>
import { useBrowserLocation } from "@vueuse/core";
const location = useBrowserLocation();
</script>
<template>
  <div>
    <h1>useBrowserLocation</h1>
    <div>
      {{ location }}
    </div>
  </div>
</template>
<style scoped></style>
