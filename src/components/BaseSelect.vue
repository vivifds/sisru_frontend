<script lang="ts">
import { defineComponent, type PropType } from "vue";

export interface SelectOption {
  label: string;
  value: string | number;
}

export default defineComponent({
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: "",
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
});
</script>

<template>
  <div class="select-wrapper">
    <label class="input-label">{{ label }}</label>
    <div class="select-container">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="select-field"
      >
        <option value="" disabled selected>Selecione</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>

      <!-- Custom Chevron Icon -->
      <div class="select-arrow">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-wrapper {
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

.select-container {
  position: relative;
  width: 100%;
}

.select-field {
  width: 100%;
  height: 46px;
  padding: 0.8rem 1rem;
  padding-right: 2.5rem;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-background);
  border-radius: 6px;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: var(--type-dark);
  outline: none;
  appearance: none;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.select-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(44, 62, 107, 0.1);
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--type-dark);
  display: flex;
  align-items: center;
}
</style>
