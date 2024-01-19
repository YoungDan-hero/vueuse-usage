<script setup>
import { useActiveElement } from "@vueuse/core";
import { watch } from "vue";
const activeElement = useActiveElement();

watch(activeElement, (el) => {
  console.dir(el);
});
</script>
<template>
  <div>
    <div>{{ activeElement.id }}</div>
    <ul class="own">
      <li><el-input id="input1" placeholder="input1"></el-input></li>
      <li><el-input id="input2" placeholder="input2"></el-input></li>
      <li><el-input id="input3" placeholder="input3"></el-input></li>
    </ul>
  </div>
</template>
