<template>
  <div class="main-sidebar">
    <!-- existing menu items like Workflows, Executions, etc. -->

    <n8n-menu-item
      :item="{
        id: 'ai-assistant',
        label: 'AI Assistant',
        icon: 'robot',
        position: 'bottom',
      }"
      @click="$router.push('/ai-assistant')"
    />

    <!-- rest of sidebar -->
  </div>
</template>
