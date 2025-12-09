<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TopBar from './components/TopBar.vue'
import RestaurantTable from './components/RestaurantTable.vue'
import EmptyState from './components/EmptyState.vue'
import RestaurantModal from './components/RestaurantModal.vue'
import { useRestaurants } from './stores/useRestaurants'

const store = useRestaurants()
const query = ref('')
const showModal = ref(false)
const editId = ref<number | null>(null)

onMounted(() => {
  store.fetchAll()
})

const filtered = computed(() => store.byQuery(query.value))

function openCreate() {
  editId.value = null
  showModal.value = true
}
function openEdit(id: number) {
  editId.value = id
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}

async function handleSave(payload: {
  nome: string
  capacidade: number
  endereco: string
  campus: string
}) {
  if (editId.value == null) {
    await store.create(payload)
  } else {
    await store.update(editId.value, payload)
  }
  closeModal()
}
</script>

<template>
  <div class="container">
    <h1 class="page-title">
      <span class="back" aria-hidden="true">
        <!-- seta para trás -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" stroke-width="2" />
        </svg>
      </span>
      Restaurantes Cadastrados
    </h1>

    <TopBar v-model:query="query" @create="openCreate" />

    <div class="card">
      <RestaurantTable
        v-if="filtered.length"
        :restaurants="filtered"
        @edit="openEdit"
        @delete="store.remove"
      />
      <EmptyState v-else texto="Nenhum restaurante encontrado." />
    </div>

    <RestaurantModal
      v-if="showModal"
      :editing-id="editId"
      :initial="editId ? store.list.find((r) => r.id === editId) : null"
      @close="closeModal"
      @save="handleSave"
    />
  </div>
</template>
