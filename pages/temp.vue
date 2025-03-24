<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

const { data: tools } = await useAsyncData('tools', () => {
  return queryCollection('tools').where('tags', 'IN', ['javascript']).all()
})

// .where({ tags: { $contains: tag.name } })
//       .sortBy('createdAt', 'asc')
//       .fetch()
// console.log(tools)
const { data: works } = await useAsyncData('works', () => {
  return queryCollection('works').all()
})

    

// const { data: projects } = await useAsyncData('projects', () => {
//   return queryCollection('projects').all()
// })


useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div class="flex w-screen h-screen bg-primary-900 justify-center items-center">
    <div class="flex max-w-2xl h-2xl justify-start overflow-auto no-scrollbar group">
      <div class="flex gap-4 animate-left-scroll group-hover:[animation-play-state:paused]">
        <div class="bg-secondary-200/2 hover:bg-white/8 border-1 border-secondary-100 rounded-xl p-10 cursor-pointer" v-for="tool in tools">
          <div class="flex justify-center">
            <Render class="w-[100px]" :name="tool.meta.svg"/>
          </div>
          <div class="w-[200px] text-center text-secondary-200 pt-5 text-lg">{{  tool.title }}</div>
        </div>
      </div>
      
    </div>
  </div>
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <!-- <div v-else>Home not found</div> -->

  <!-- <div>
    <h1>Tools</h1>
    <ul>
      <li v-for="tool in tools" :key="tool.path">
        <div style="display:flex;">
          <Render style="width:30px;" :name="tool.meta.svg"/>
          <NuxtLink :to="tool.path">{{ tool.title }}</NuxtLink>
        </div>
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
  </div> -->

  <!-- <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.path">
        <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
      </li>
    </ul>
  </div> -->
  
  
</template>
