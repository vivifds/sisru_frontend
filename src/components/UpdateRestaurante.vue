<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect, { type SelectOption } from "@/components/BaseSelect.vue";
import ActionButton from "@/components/ActionButton.vue";

interface RestaurantForm {
  name: string;
  address: string;
  capacity: number;
  campus: string;
}

export default defineComponent({
  name: "UpdateRestaurante",
  components: {
    PageHeader,
    BaseInput,
    BaseSelect,
    ActionButton,
  },
  data() {
    return {
      form: {
        name: "Restaurante do Campus Jorge Amado",
        address: "Rodovia Ilhéus/Itabuna - KM 22, Ilhéus - BA",
        capacity: 800,
        campus: "campus_1",
      } as RestaurantForm,
      campusOptions: [
        { label: "Campus Jorge Amado", value: "campus_1" },
        { label: "Campus Paralela", value: "campus_2" },
      ] as SelectOption[],
      isLoading: false,
    };
  },
  methods: {
    handleBack(): void {
      console.log("Voltar");
    },
    async handleSubmit(): Promise<void> {
      this.isLoading = true;
      try {
        console.log("Saving...", this.form);
        // Simular chamada API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Salvo com sucesso!");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<template>
  <div class="page-container">
    <div class="card">
      <PageHeader title="Editar restaurante" @back="handleBack" />

      <form class="form-body" @submit.prevent="handleSubmit">
        <div class="form-grid">
          <BaseInput label="Nome" v-model="form.name" placeholder="Digite o nome" />

          <BaseInput label="Endereço" v-model="form.address" placeholder="Digite o endereço" />

          <BaseInput
            label="Capacidade de Ocupação"
            type="number"
            v-model="form.capacity"
            placeholder="0"
          />

          <BaseSelect label="Campus" :options="campusOptions" v-model="form.campus" />
        </div>

        <div class="form-actions">
          <ActionButton label="Salvar alterações" type="submit" :disabled="isLoading" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: var(--surface-background);
  min-height: 100vh;
}

.card {
  background-color: var(--surface-white);
  width: 100%;
  max-width: 900px;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.form-body {
  padding: 2.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
