<template>
  <div class="ai-chat-panel">
    <h2>AI Assistant</h2>

    <textarea
      v-model="message"
      placeholder="Ask AI..."
      class="ai-input"
    ></textarea>

    <button @click="sendMessage" class="ai-button">
      Send
    </button>

    <div class="ai-response">
      {{ response }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { askGemini } from './GeminiService';

const message = ref('');
const response = ref('');

async function sendMessage() {
  response.value = 'Thinking...';
  response.value = await askGemini(message.value);
}
</script>

<style scoped>
@import './mobile.css';
</style>
