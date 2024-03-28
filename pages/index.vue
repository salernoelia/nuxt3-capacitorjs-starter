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
    <p>{{ data }}</p>

    <div class="table">
      <div class="table-row" v-for="user in data.users">
        <div class="table-cell">{{ user.firstName }}</div>
        <div class="table-cell">{{ user.lastName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const data: object = await $fetch<object>("api/users");

let range = ref<number>(0);

const rangeCount = useStorage("range", range);
</script>

<style lang="scss" scoped>
.table {
  display: table;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  padding: 10px;
  border-top: 1px solid #000;
}
</style>
