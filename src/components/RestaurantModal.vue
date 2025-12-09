<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue'
import type { Restaurant } from '../types/Restaurant'

const props = defineProps<{
  editingId: number | null
  initial: Restaurant | null
}>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save', payload: { nome: string; capacidade: number; endereco: string; campus: string }): void
}>()

const form = reactive({
  nome: props.initial?.nome ?? '',
  capacidade: props.initial?.capacidade ?? 0,
  endereco: props.initial?.endereco ?? '',
  campus: props.initial?.campus ?? '',
})

function save() {
  // Validações simples
  if (!form.nome.trim()) return
  if (!form.campus.trim()) return
  emit('save', {
    nome: form.nome.trim(),
    capacidade: Number(form.capacidade),
    endereco: form.endereco.trim(),
    campus: form.campus.trim(),
  })
}
function close() {
  emit('close')
}
</script>

<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <div class="modal-header">
        {{ editingId == null ? 'Cadastrar novo restaurante' : 'Editar restaurante' }}
      </div>
      <div class="modal-body">
        <input class="input" v-model="form.nome" placeholder="Nome" />
        <input
          class="input"
          v-model.number="form.capacidade"
          type="number"
          min="0"
          placeholder="Capacidade de Ocupação"
        />
        <input class="input" v-model="form.endereco" placeholder="Endereço" />
        <input class="input" v-model="form.campus" placeholder="Campus" />
      </div>
      <div class="modal-actions">
        <button class="icon-btn" @click="close" title="Fechar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" stroke-width="2" />
          </svg>
        </button>
        <button class="btn" @click="save">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5" stroke-width="2" />
          </svg>
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>
