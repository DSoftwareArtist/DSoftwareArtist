
<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");

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

let projects = useState()
await callOnce(async () => {
  const { data } = await useAsyncData('projects-all', () => {
    return queryCollection('projects').all()
  })
  projects.value = data
})


</script>
<template>
  <Container :frontend="frontend ?? []" :backend="backend ?? []" :devops="devops ?? []">
    <Card class="absolute w-fit h-screen md:h-full md:top-0 md:left-0 px-2 pb-0 mb-0">
        <UCarousel arrows v-slot="{ item, index }" dots :items="projects" class="w-screen mx-10 md:w-[600px] md:mx-20">
          <div  class="flex flex-col justify-center md:items-start h-screen md:h-full p-5 z-0">
            <div class="flex items-center mb-[10px]" :class="`group/project`">
              <img :src="`/DSoftwareArtist/img/user${item?.meta?.icon}.png`" class="hidden md:block w-40" alt="Reamon" />
              <div class="flex flex-col gap-2">
                <div class="flex justify-between transition-colors ease-in-out">
                  <NuxtLink target="_blank" :to="item?.meta?.link">
                    <span class=" text-[32px] font-extrabold" :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''">{{  item?.title }}</span>
                  </NuxtLink>
                  <div class="flex" v-if="item?.meta?.docs || item?.meta?.api">
                    <NuxtLink v-if="item?.meta?.docs" target="_blank" :to="item?.meta?.docs">
                      <SvgBook class="w-10 group/book hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgBook>
                    </NuxtLink>
                    <NuxtLink v-if="item?.meta?.api" target="_blank" :to="item?.meta?.api">
                      <SvgApi class=" -translate-y-1 w-12 group/api hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgApi>
                    </NuxtLink>
                  </div>
                  <div v-else></div>
                </div>
                <a :href="`${item?.meta?.link}`" target="_blank" class=" text-justify font-light text-[16px] transition-colors ease-in-out">
                  <ContentRenderer :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''" :value="item" v-if="item"></ContentRenderer>
                </a>
              </div>
            </div>
            <div class="flex gap-2 flex-wrap items-start justify-center -bottom-10 text-xs">
              <a :href="`/DSoftwareArtist/tools/${tool.code}`" class=" capitalize bg-secondary-300/9 px-5 py-1 border-1 font-thin text-secondary-200 border-secondary-300/20 rounded-4xl hover:bg-secondary-100/8 hover:cursor-pointer" v-for="tool in item.meta.tools">{{  tool.name }}</a>
            </div>
          </div>
        </UCarousel>
    </Card>
  </Container>
</template>