<template>
    <div class="flex w-screen h-screen">
      <div class="flex flex-col gap-5 justify-center items-start">
        <AnimatedScroll :direction="'left'"> <ToolCards :tools="frontend ?? []"/></AnimatedScroll>
        <AnimatedScroll :direction="'right'"> <ToolCards :tools="backend ?? []"/></AnimatedScroll>
        <AnimatedScroll :direction="'left'"> <ToolCards :tools="devops ?? []"/></AnimatedScroll>
      </div>
      <div class="flex justify-center items-center w-full">
        <div class="bg-primary-600 backdrop-blur-2xl w-full h-[610px] mr-20 border-1 border-secondary-200/20 rounded-tr-2xl rounded-br-2xl p-20 text-white">
          <div class="flex items-center h-full">
            <div class=" w-3/4"></div>
            <img src="/img/user5.png" class="w-60" alt="Discover Nuxt 3" />
          </div>
        </div>
      </div>
      <StarsBg class=" z-0"></StarsBg>
    </div>
</template>
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
<style>
@property --diameter {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --bg-size {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --size {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --spread {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

.radial-grid {
  --mx: 50%;
  --my: 50%;
  --diameter: 8;
  --spacing: 14;
  --size: 12;
  --spread: 40;
  --light-color: #fff7a3;
  --bg-color: #0a0a0a;
  --halftone: 0;
  background: var(--bg-color);
  background-image: 
    radial-gradient(
      circle at var(--mx) var(--my), 
      transparent calc(var(--size) * 1%), 
      var(--bg-color) calc((var(--size) + var(--spread)) * 1%)),
    radial-gradient(
      var(--light-color) calc(var(--diameter) * 0.1px) calc((var(--diameter) * 0.1px) + 0.1px),
      transparent calc((var(--diameter) * 0.1px) + 0.2px));
  background-size: 100% 100%, calc(var(--spacing) * 1px) calc(var(--spacing) * 1px);
  transition: --x 0.1s, --y 0.1s, all 0.1s;
  
  &::before {
    --brightness: brightness(calc(max(var(--halftone) * 0.8, 1)));
    --blur: blur(calc(var(--halftone) * 3px));
    --contrast: contrast(calc(max(var(--halftone) * 999, 1)));
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: var(--brightness) var(--blur) var(--contrast);
  }
}
</style>