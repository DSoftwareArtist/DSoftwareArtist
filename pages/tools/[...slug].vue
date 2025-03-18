<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('tools').path(route.path).first())
</script>
<template>
    <div>
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>