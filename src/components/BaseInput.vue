<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
});
</script>

<template>
  <div class="input-wrapper">
    <label class="input-label">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input-field"
    />
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.input-label {
  font-size: 0.875rem;
  color: var(--type-dark);
  margin-left: 2px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
}

.input-field {
  width: 100%;
  height: 46px;
  padding: 0 1rem;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-background);
  border-radius: 6px;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: var(--type-dark);
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
}

.input-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(44, 62, 107, 0.1);
}
</style>
