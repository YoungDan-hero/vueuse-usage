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
      <button @click="increment">点击</button>
      <button @click="add">+1</button>
    </div>

    <div>
      <Parent />
    </div>
  </div>
</template>
