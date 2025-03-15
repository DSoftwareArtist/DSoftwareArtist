<template>
    <h1 class="text-4xl text-[--pp-purple-300] font-bold pb-5" :id="id">
      <a
        v-if="generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h1>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h1)
  </script>