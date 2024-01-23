<script setup>
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const source = ref("Hello");
const { text, copy, copied, isSupported } = useClipboard({
  source,
  legacy: true,
});
</script>

<template>
  <div v-if="isSupported">
    <el-button @click="copy(source)" style="margin-bottom: 20px">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </el-button>
    <el-input v-model="source" style="margin-bottom: 20px"></el-input>

    <p>
      Current copied: <code>{{ text || "none" }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>
