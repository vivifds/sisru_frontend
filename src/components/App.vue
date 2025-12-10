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
  <UpdateRestaurante v-if="paginaAtual === 'UpdateRestaurante'" />
</template>

<style scoped></style>
