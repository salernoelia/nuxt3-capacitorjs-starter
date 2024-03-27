<template>
  <div>
    <h1>{{ rangeCount }}</h1>
    <input
      type="range"
      name="range"
      id="range"
      v-model="range"
      min="0"
      max="100"
      step="1"
    />
    <h1>{{ data }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const data = await $fetch("api/users");

let range = ref<number>(0);

const rangeCount = useStorage("range", range);
</script>

<style lang="scss" scoped></style>
