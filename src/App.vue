<script lang="ts">
import CreateRestaurante from "./components/CreateRestaurante.vue";
import UpdateRestaurante from "./components/UpdateRestaurante.vue";
type Pagina = "VisualizarRestaurantes" | "CreateRestaurante" | "UpdateRestaurante";

export default {
  data() {
    return {
      paginaAtual: "CreateRestaurante" as Pagina,
    };
  },
  components: { UpdateRestaurante, CreateRestaurante },
  methods: {
    navegar(pagina: Pagina) {
      this.paginaAtual = pagina;
    },
  },
};
</script>

<template>
  <div class="page-container">
    <UpdateRestaurante
      v-if="paginaAtual === 'UpdateRestaurante'"
      :id="2"
      @updatedRestaurante="navegar('VisualizarRestaurantes')"
    />
    <CreateRestaurante
      v-if="paginaAtual === 'CreateRestaurante'"
      @createdRestaurante="navegar('VisualizarRestaurantes')"
    />
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
</style>
