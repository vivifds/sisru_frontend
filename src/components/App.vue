<script lang="ts">
import UpdateRestaurante from "./UpdateRestaurante.vue";
type Pagina = "VisualizarRestaurantes" | "CreateRestaurante" | "UpdateRestaurante";

export default {
  data() {
    return {
      paginaAtual: "UpdateRestaurante" as Pagina,
    };
  },
  components: { UpdateRestaurante },
  methods: {
    navegar(pagina: Pagina) {
      this.paginaAtual = pagina;
    },
  },
};
</script>

<template>
  <div class="page-container">
    <UpdateRestaurante v-if="paginaAtual === 'UpdateRestaurante'" />
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
