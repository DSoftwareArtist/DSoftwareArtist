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

useAnimatedGrid()
</script>

<template>
  <div>
    <div id="canvas-wrapper" class="transparent block overflow-hidden absolute z-0 left-0 top-0 right-0 bottom-0">
      <canvas id="canvas-grid-cells" class=" block absolute"></canvas>
      <canvas id="canvas-grid-lines" class=" block absolute"></canvas>
    </div>
    <div class="flex w-screen h-screen bg-primary-900">
      
      <div class="flex flex-col gap-5 justify-center items-start">
        <AnimatedScroll :direction="'left'"> <ToolCards :tools="frontend ?? []"/></AnimatedScroll>
        <AnimatedScroll :direction="'right'"> <ToolCards :tools="backend ?? []"/></AnimatedScroll>
        <AnimatedScroll :direction="'left'"> <ToolCards :tools="devops ?? []"/></AnimatedScroll>
        </div>
        <div class="flex justify-center items-center w-full">
          <div class="bg-primary-600 backdrop-blur-2xl w-full h-[610px] mr-20 border-1 border-secondary-200/20 rounded-tr-2xl rounded-br-2xl p-20 text-white">
            <div class="flex items-center h-full">
              <div class=" w-3/4"></div>
              <NuxtImg class="w-60 opacity-60" src="/img/user5.png" loading="lazy"/>
            </div>
          </div>
        </div>
    </div>
  </div>

</template>