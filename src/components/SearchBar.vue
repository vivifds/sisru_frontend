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
    <input
      class="search-input"
      :placeholder="props.placeholder ?? 'Pesquisar...'"
      :value="props.modelValue"
      @input="onInput"
    />
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" stroke-width="2"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"></line>
    </svg>
  </div>
</template>

<style scoped>
/* Search */
.search-wrapper {
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}
.search-input {
  width: 100%;
  height: 44px;
  padding: 10px 44px 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--surface-border);
  background: var(--surface-white);
  font-size: 0.95rem;
  color: var(--type-dark);
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
}

.search-input::placeholder {
  color: var(--type-light);
}
.search-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--type-light);
  pointer-events: none;
}
</style>
