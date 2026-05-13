<template>
  <div>
    <h2>AI Memory</h2>
    <ul>
      <li v-for="item in memory" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const memory = ['Previous workflow', 'Last AI response'];
</script>
