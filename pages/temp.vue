<script setup lang="ts">
// SEO
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })

// Queries
const { data: frontend } = await useAsyncData('tools-frontend', () => {
  return queryCollection('tools')
    .where('category', 'LIKE', '%frontend%')
    .all()
})

const { data: backend } = await useAsyncData('tools-backend', () => {
  return queryCollection('tools')
    .where('category', 'LIKE', '%backend%')
    .all()
})

const { data: devops } = await useAsyncData('tools-devops', () => {
  return queryCollection('tools')
    .where('category', 'LIKE', '%devops%')
    .all()
})

</script>

<template>
  <div class="flex w-screen h-screen bg-primary-900">
    <div class="flex flex-col gap-5 justify-center items-start">
      <AnimatedScroll :direction="'left'"> <ToolCards :tools="frontend ?? []"/></AnimatedScroll>
      <AnimatedScroll :direction="'right'"> <ToolCards :tools="backend ?? []"/></AnimatedScroll>
      <AnimatedScroll :direction="'left'"> <ToolCards :tools="devops ?? []"/></AnimatedScroll>
    </div>
    <div class="flex justify-center items-center w-full">
      <div class="bg-secondary-300/8 w-full h-[500px] m-20 border-2 border-primary-400 rounded-2xl p-20 text-white">
        Soon...
      </div>
    </div>
  </div>

</template>
