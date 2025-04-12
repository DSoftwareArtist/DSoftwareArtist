
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
    <div class="flex flex-col mx-5 md:mx-0 w-fit lg:flex-row relative">
      <div class="flex flex-col justify-center items-center lg:items-end w-full mt-5 md:mt-none">
        <div class="w-fit h-fit md:h-[500px] backdrop-opacity-5 text-white flex flex-col gap-2">
          <div class="w-fit text-4xl font-extrabold ">Reamon Sumapig</div>
          <div class="w-fit text-lg font-bold ">Full-Stack Developer</div>
          <div class=" hidden md:block w-fit text-white/90 text-[12px] md:text-[16px] md:max-w-[500px] text-justify font-thin backdrop-opacity-5 bg-primary-900/20 backdrop-blur-[500px]">
            <div>I'm a developer who’s all about building clean, accessible interfaces that look great and work even better. I really enjoy working at the sweet spot between design and code—bringing ideas to life in a way that feels good to use and performs smoothly.</div>
            <div>Right now, I'm a Software Developer at Scibiz Informatics, working on the PurelyPeer mobile app. I help build and maintain the UI components, making sure everything looks good, works well, and stays accessible for everyone.</div>
            <div class=" font-medium">Here are a few highlights from my recent work</div>
          </div>
  
          <div class="flex h-full w-fit items-end">
            <div class="w-fit mb-5 flex gap-5">
              <SvgGithubLight class="w-10"></SvgGithubLight>
              <SvgLinkedin class="w-10"></SvgLinkedin>
              <SvgCodepen class="w-10"></SvgCodepen>
              
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-2xl md:w-4xl md:ml-5  h-full md:px-5 flex-col justify-center  basis-1 md:basis-1/2 lg:basis-2/3">
        <Card class="absolute md:w-fit h-screen md:h-[500px] md:top-0 md:left-0 pb-0 mb-0">
            <UCarousel arrows v-slot="{ item, index }" dots :items="projects" class="w-screen mx-10 md:w-[600px] md:mx-20">
              <div  class="flex flex-col justify-center md:items-start h-screen md:h-full p-5 z-0">
                <div class="flex items-center mt-[20px] mb-[10px]" :class="`group/project`">
                  <div class="flex flex-col gap-2">
                    <div class="relative flex transition-colors ease-in-out">
                      <NuxtLink class="flex" target="_blank" :to="item?.meta?.link">
                        <div class="basis-1/4">
                          <img :src="`/DSoftwareArtist/img/user${item?.meta?.icon}.png`" class="hidden md:block w-40" alt="Reamon" />
                        </div>
                        <div class="basis-3/4">
                          <span class=" text-[24px] font-light" :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''">{{  item?.title }}</span>
                          <ContentRenderer class="text-justify font-thin text-[16px] transition-colors ease-in-out mt-5" :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''" :value="item" v-if="item"></ContentRenderer>
                        </div>
                      </NuxtLink>
  
                      <div class="absolute flex right-0" v-if="item?.meta?.docs || item?.meta?.api || item?.meta?.apk">
                        <NuxtLink v-if="item?.meta?.docs" target="_blank" :to="item?.meta?.docs">
                          <SvgBook class="w-10 group/book hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgBook>
                        </NuxtLink>
                        <NuxtLink v-if="item?.meta?.api" target="_blank" :to="item?.meta?.api">
                          <SvgApi class=" -translate-y-1 w-12 group/api hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgApi>
                        </NuxtLink>
                        <NuxtLink v-if="item?.meta?.apk" :to="`/apk/${item?.meta?.apk}`">
                          <SvgDownload class=" w-10 group/download hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgDownload>
                        </NuxtLink>
                      </div>
                      <div v-else></div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 flex-wrap items-start justify-center -bottom-10 text-xs">
                  <a :href="`/DSoftwareArtist/tools/${tool.code}`" class=" capitalize bg-secondary-300/9 px-5 py-1 border-1 font-thin text-secondary-200 border-secondary-300/20 rounded-4xl hover:bg-secondary-100/8 hover:cursor-pointer" v-for="tool in item.meta.tools">{{  tool.name }}</a>
                </div>
              </div>
            </UCarousel>
        </Card>
      </div>
    </div>
  </Container>
</template>