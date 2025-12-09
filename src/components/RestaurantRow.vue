<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Restaurant } from '../types/Restaurant'

const props = defineProps<{ item: Restaurant }>()
const emit = defineEmits<{
  (e: 'edit', id: number): void
  (e: 'delete', id: number): void
}>()

function handleEdit() {
  emit('edit', props.item.id)
}
function handleDelete() {
  emit('delete', props.item.id)
}
</script>

<template>
  <tr>
    <td data-label="Nome">{{ item.nome }}</td>
    <td data-label="Capacidade de Ocupação">{{ item.capacidade }}</td>
    <td data-label="Endereço">{{ item.endereco }}</td>
    <td data-label="Campus">{{ item.campus }}</td>
    <td data-label="Edição">
      <div class="row-actions">
        <button class="icon-btn edit" @click="handleEdit" title="Editar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 20h9" stroke-width="2"></path>
            <path
              d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
              stroke-width="2"
            ></path>
          </svg>
        </button>
        <button class="icon-btn delete" @click="handleDelete" title="Excluir">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18" stroke-width="2"></path>
            <path d="M8 6V4h8v2" stroke-width="2"></path>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke-width="2"></path>
            <path d="M10 11v6M14 11v6" stroke-width="2"></path>
          </svg>
        </button>
      </div>
    </td>
  </tr>
</template>
