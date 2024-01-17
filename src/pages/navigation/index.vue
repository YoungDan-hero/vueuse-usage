<script setup>
import route from "../../router/index.js";
import { useRouter } from "vue-router";
const routes = route.getRoutes();
const router = useRouter();
</script>
<template>
  <div style="display: flex; flex-wrap: wrap; padding: 10px">
    <a
      @click="router.push(item.path)"
      v-for="item in routes"
      :key="item.path"
      style="cursor: pointer; margin-right: 5px; border: 1px dashed"
      >{{ item.name }}</a
    >
  </div>
</template>
