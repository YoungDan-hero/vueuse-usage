<script setup>
import route from "../router/index.js";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
const active = computed(() => useRoute().path);
const routes = route.getRoutes();
const router = useRouter();
</script>
<template>
  <el-menu :default-active="active">
    <el-menu-item
      @click="router.push(item.path)"
      :index="item.path"
      v-for="item in routes"
      :key="item.path"
    >
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
