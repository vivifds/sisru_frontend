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
