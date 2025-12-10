<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect, { type SelectOption } from "@/components/BaseSelect.vue";
import ActionButton from "@/components/ActionButton.vue";
import type IRestaurante from "@/interfaces/IRestaurante";
import { RestauranteCreate } from "../services/restaurantes";

export default defineComponent({
  name: "CreateRestaurante",
  components: {
    PageHeader,
    BaseInput,
    BaseSelect,
    ActionButton,
  },
  data() {
    return {
      form: {} as IRestaurante,
      campusOptions: [
        { label: "Campus Jorge Amado" },
        { label: "Campus Paulo Freire" },
        { label: "Campus Sosígenes Costa" },
        { label: "Porto Seguro" },
        { label: "Itabuna" },
        { label: "Teixeira de Freitas" },
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
        await RestauranteCreate(this.form);
        console.log("Restaurante criado com sucesso");
        this.$emit("createdRestaurante", this.form);
      } catch (error) {
        console.error("Erro ao criar restaurante:", error);
        alert("Erro ao atualizar restaurante.");
      } finally {
        this.isLoading = false;
      }
    },
  },
  emits: ["createdRestaurante"],
});
</script>

<template>
  <div class="card">
    <PageHeader title="Cadastro de novo restaurante" @back="handleBack" />

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
        <ActionButton label="Cadastrar" type="submit" :disabled="isLoading" />
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
