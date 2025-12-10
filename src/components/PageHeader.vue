<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["back"],
});
</script>

<template>
  <header class="header-container">
    <button class="header-back-button" @click="$emit('back')" type="button" aria-label="Voltar">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
    <h1 class="header-title">{{ title }}</h1>
  </header>
</template>

<style scoped>
.header-container {
  background-color: var(--primary);
  color: var(--surface-white);
  padding: 1.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-title {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Lato", sans-serif;
}

.header-back-button {
  position: absolute;
  left: 1.5rem;
  background: transparent;
  border: none;
  color: var(--surface-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: opacity 0.2s;
}

.header-back-button:hover {
  opacity: 0.8;
}

@media only screen and (max-width: 767px) {
  .header-title {
    font-size: 1.5em;
  }
}
</style>
