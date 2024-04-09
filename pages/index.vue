<template>
  <div>
    <h1>{{ range }}</h1>
    <p>{{ fetchedUser }}</p>
    <input
      type="range"
      name="range"
      id="range"
      v-model="range"
      min="0"
      max="20"
      step="1"
    />
    <p>{{ allUsers }}</p>

    <div class="table">
      <div
        class="table-row"
        v-if="allUsers"
        v-for="user in allUsers.users"
        :key="user.id"
      >
        <div class="table-cell">{{ user.firstName }}</div>
        <div class="table-cell">{{ user.lastName }}</div>
      </div>
    </div>

    <div class="insert">
      <input type="text" v-model="newUser.firstName" />
      <input type="text" v-model="newUser.lastName" />
      <p>{{ newUser.firstName }}, {{ newUser.lastName }}</p>
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  // Add more properties if needed
}
interface NewUser {
  firstName: string;
  lastName: string;
  // Add more properties if needed
}

interface UserData {
  users: User[]; // Array of User objects
}

const { data: allUsers, error } = useFetch<UserData>("api/users");

if (error.value) {
  console.error("Error fetching data:", error.value);
}

let range = ref<number>(0);
let fetchedUser = ref<UserData | null>(null);

watch(range, async (value) => {
  const data = $fetch("api/users/" + value);
  fetchedUser.value = await data;
});

const newUser = ref<NewUser>({
  firstName: "",
  lastName: "",
});

const addUser = async () => {
  try {
    await useFetch("api/users", {
      method: "POST",
      body: newUser,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("User added successfully", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};
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
