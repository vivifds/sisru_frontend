<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect, { type SelectOption } from "@/components/BaseSelect.vue";
import ActionButton from "@/components/ActionButton.vue";
import type IRestaurante from "@/interfaces/IRestaurante";
import { RestauranteGetById, RestauranteUpdate } from "../services/restaurantes";

export default defineComponent({
  name: "UpdateRestaurante",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    PageHeader,
    BaseInput,
    BaseSelect,
    ActionButton,
  },
  mounted() {
    RestauranteGetById(this.id)
      .then((data) => {
        this.form = data;
      })
      .catch((error) => {
        console.error("Erro ao buscar restaurante:", error);
      });
  },
  data() {
    return {
      form: {} as IRestaurante,
      campusOptions: [
        { label: "Campus Jorge Amado" },
        { label: "Campus Paulo Freire" },
        { label: "Campus Sosígenes Costa" },
      ] as SelectOption[],
      isLoading: false,
    };
  },
  methods: {
    handleBack(): void {
      console.log("Voltar");
    },
    async handleSubmit() {
      this.isLoading = true;
      try {
        await RestauranteUpdate(this.id, this.form);
        console.log("Restaurante atualizado com sucesso");
      } catch (error) {
        console.error("Erro ao atualizar restaurante:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<template>
  <div class="card">
    <PageHeader title="Editar restaurante" @back="handleBack" />

    <form class="form-body" @submit.prevent="handleSubmit">
      <div class="form-grid">
        <BaseInput label="Nome" v-model="form.nome" placeholder="Digite o nome" />

        <BaseInput label="Endereço" v-model="form.endereco" placeholder="Digite o endereço" />

        <BaseInput
          label="Capacidade de Ocupação"
          type="number"
          v-model="form.capacidade"
          placeholder="0"
        />

        <BaseSelect label="Campus" :options="campusOptions" v-model="form.campus" />
      </div>

      <div class="form-actions">
        <ActionButton label="Salvar alterações" type="submit" :disabled="isLoading" />
      </div>
    </form>
  </div>
</template>

<style scoped>
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
