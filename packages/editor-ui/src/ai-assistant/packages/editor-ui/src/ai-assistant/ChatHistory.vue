<template>
  <div>
    <h2>Chat History</h2>
    <ul>
      <li v-for="chat in chats" :key="chat">{{ chat }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const chats = ['Hello AI', 'Create workflow'];
</script>
