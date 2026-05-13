import AIChatPanel from './ai-assistant/ChatPanel.vue';

// ... existing imports ...

const routes: RouteRecordRaw[] = [
  // ... existing routes ...

  {
    path: '/ai-assistant',
    name: 'AIAssistant',
    component: AIChatPanel,
    meta: { telemetry: { pageCategory: 'ai-assistant' } },
  },

  // ... rest of routes ...
];
