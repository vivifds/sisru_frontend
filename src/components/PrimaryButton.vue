<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  icon?: 'plus' | 'save' | 'close'
}>()
</script>

<template>
  <button class="btn">
    <span v-if="icon === 'plus'">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="12" y1="5" x2="12" y2="19" stroke-width="2"></line>
        <line x1="5" y1="12" x2="19" y2="12" stroke-width="2"></line>
      </svg>
    </span>
    {{ label }}
  </button>
</template>

<style scoped>
/* Primary Button */
.btn {
  height: 44px;
  padding: 0 20px;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: var(--surface-white);
  transition: all 0.2s;
  white-space: nowrap;
}

.btn:hover {
  background: var(--surface-background-2);
  border-color: var(--primary);
}
</style>
