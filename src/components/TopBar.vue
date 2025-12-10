<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import SearchBar from './SearchBar.vue'
import PrimaryButton from './PrimaryButton.vue'

const props = defineProps<{ query: string }>()
const emit = defineEmits<{
  (e: 'update:query', v: string): void
  (e: 'create'): void
}>()

function updateQuery(val: string) {
  emit('update:query', val)
}
function onCreate() {
  emit('create')
}
</script>

<template>
  <div class="topbar">
    <SearchBar
      :model-value="props.query"
      placeholder="Procure por restaurante..."
      @update:modelValue="updateQuery"
    />
    <PrimaryButton label="Cadastrar novo restaurante" icon="plus" @click="onCreate" />
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  background-color: var(--white);
  border-bottom: 1px solid var(--border);
}
</style>
