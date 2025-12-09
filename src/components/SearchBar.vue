<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="search-wrapper">
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" stroke-width="2"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"></line>
    </svg>
    <input
      class="search-input"
      :placeholder="props.placeholder ?? 'Pesquisar...'"
      :value="props.modelValue"
      @input="onInput"
    />
  </div>
</template>
