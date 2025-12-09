<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Restaurant } from '../types/Restaurant'
import RestaurantRow from './RestaurantRow.vue'

const props = defineProps<{ restaurants: Restaurant[] }>()
const emit = defineEmits<{
  (e: 'edit', id: number): void
  (e: 'delete', id: number): void
}>()

function onEdit(id: number) {
  emit('edit', id)
}
function onDelete(id: number) {
  emit('delete', id)
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Capacidade de Ocupação</th>
        <th>Endereço</th>
        <th>Campus</th>
        <th>Edição</th>
      </tr>
    </thead>
    <tbody>
      <RestaurantRow
        v-for="r in props.restaurants"
        :key="r.id"
        :item="r"
        @edit="onEdit"
        @delete="onDelete"
      />
    </tbody>
  </table>
</template>
