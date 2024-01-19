<script setup>
import { useDraggable } from "@vueuse/core";
import { ref } from "vue";
const el = ref(null);
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 200, y: 100 },
});
</script>
<template>
  <div class="card" ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 100px;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
}
</style>
