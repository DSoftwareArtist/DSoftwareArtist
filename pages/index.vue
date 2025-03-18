<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

const { data: tools } = await useAsyncData('tools', () => {
  return queryCollection('tools').all()
})

const { data: works } = await useAsyncData('works', () => {
  return queryCollection('works').all()
})

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})


useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>

  <div>
    <h1>Tools</h1>
    <ul>
      <li v-for="tool in tools" :key="tool.path">
        <NuxtLink :to="tool.path">{{ tool.title }}</NuxtLink>
      </li>
    </ul>
  </div>

  <div>
    <h1>Works</h1>
    <ul>
      <li v-for="work in works" :key="work.path">
        <NuxtLink :to="work.path">{{ work.title }}</NuxtLink>
      </li>
    </ul>
  </div>

  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.path">
        <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
      </li>
    </ul>
  </div>
  
  
</template>
