<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ texto?: string }>()
</script>

<template>
  <div class="empty">
    {{ props.texto ?? 'Sem dados para exibir.' }}
  </div>
</template>
