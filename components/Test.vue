<script setup lang="ts">
const page = ref(5)
</script>

<template>
  <UPagination v-model:page="page" :total="100" />
</template>
