<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <button class="btn-primary" :disabled="disabled" :class="{ 'btn-disabled': disabled }">
    {{ label }}
  </button>
</template>

<style scoped>
.btn-primary {
  background-color: var(--primary);
  color: var(--surface-white);
  border: none;
  padding: 0rem 2rem;
  height: 42px;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--primary-shades-shade-2);
}

.btn-primary:disabled {
  background-color: var(--type-disable);
  cursor: not-allowed;
  box-shadow: none;
}
</style>
