<script setup>
import Parent from "./parent.vue";
import { useProvideCounterStore } from "./createInjectionState.js";
const { increment, count } = useProvideCounterStore(1);
const add = () => {
  count.value++;
};
</script>
<template>
  <div>
    <div>
      <el-button @click="increment">点击</el-button>
      <el-button @click="add">+1</el-button>
    </div>

    <div>
      <Parent />
    </div>
  </div>
</template>
