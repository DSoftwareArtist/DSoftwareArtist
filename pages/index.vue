
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
<style>
.home-container {
  @media (max-width: 1279px) {
    width: 100vw;
    padding: 20px;
  }
}
</style>
<template>
  <Container :frontend="frontend ?? []" :backend="backend ?? []" :devops="devops ?? []">
    <div class="flex flex-col xl:w-7xl xl:flex-row home-container">
      <div class=" basis-2/5 mb-2 md:mb-0">
        <div class="flex items-center justify-center w-full h-full">

          <div class="w-full h-full xl:h-[450px] backdrop-opacity-5 text-white flex flex-col gap-2">
            <div class="w-fit text-3xl font-extrabold ">Reamon Sumapig</div>
            <div class="w-fit text-lg font-medium ">Full-Stack Developer <span class=" text-md font-normal">( DSoftwareArtist )</span></div>
            <div class=" w-full text-white/90 text-[16px] text-justify font-thin backdrop-opacity-5 bg-primary-900/20 backdrop-blur-[500px]">
              <p>I'm a developer who’s all about building clean, accessible interfaces that look great and work even better. I really enjoy working at the sweet spot between design and code—bringing ideas to life in a way that feels good to use and performs smoothly.</p>
              <p>Right now, I'm a Software Developer at <a target="_blank" href="https://scibizinformatics.com/#/about" class="highlighted hover:cursor-pointer hover:text-secondary-400">Scibiz Informatics</a>, working on the PurelyPeer mobile app. I help build and maintain the UI components, making sure everything looks good, works well, and stays accessible for everyone.</p>
              <div class="flex items-center gap-5 font-medium">Here are a few highlights from my recent work <SvgRight class="w-10 hidden xl:block"></SvgRight></div>
            </div>
    
            <div class="flex h-full w-fit items-end">
              <div class="w-fit mb-5 flex gap-5">
                <NuxtLink target="_blank" to="https://github.com/DSoftwareArtist">
                  <SvgGithubLight class="w-5 xl:w-10 group/github-light hover:cursor-pointer"></SvgGithubLight>
                </NuxtLink>

                <NuxtLink target="_blank" to="https://www.linkedin.com/in/reamon-sumapig-a34200310/">
                  <SvgLinkedin class="w-5 xl:w-10 group/linkedin hover:cursor-pointer"></SvgLinkedin>
                </NuxtLink>

                <NuxtLink target="_blank" to="https://stackoverflow.com/users/5531941/reamon-s">
                  <SvgStackoverflow class="w-5 xl:w-10 group/stackoverflow hover:cursor-pointer"></SvgStackoverflow>
                </NuxtLink>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-3/5 flex items-center justify-center">
        <ClientOnly>
          <Transition appear
            enter-active-class="transition-opacity duration-600"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100">
          
            <Card class="mb-5 w-full xl:w-2xl h-2xl">
              <UCarousel arrows v-slot="{ item, index }" dots :items="projects" class="mx-18 sm:mx-15 md:mx-20 md:mb-20">
                  <div  class="flex flex-col justify-center w-full h-full gap-2">
                    <div class="flex flex-col">
                      
                      <NuxtLink class="flex flex-col sm:flex-row group/project mt-18" target="_blank" :to="item?.meta?.link">
                        <div class=" basis-1/2 flex justify-center mb-2 sm:mb-0 sm:p-5">
                          <div class="
                            bg-primary-700/80
                            rounded-2xl
                            w-[200px]
                            h-[160px]
                            bg-cover
                            bg-center
                            group-hover/project:scale-105
                            transition-all
                            ease-in-out
                            duration-300
                            delay-100"
                            :style="`background-image: url('/DSoftwareArtist/img/${item?.meta?.icon}.png')`">
                            <div class="
                              bg-secondary-800/50
                              backdrop-hue-rotate-10
                              group-hover/project:backdrop-hue-rotate-0
                              group-hover/project:bg-secondary-800/0
                              w-full h-full
                              rounded-2xl"></div>
                          </div>
                        </div>
    
                        <div class=" basis-1/2 flex flex-col text-wrap">
                          <div class="flex flex-col gap-2">
                            <div class="flex gap-2 h-[30px] items-center" :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''">
                              <div>{{  item?.title }}</div>
                              <div class="flex gap-1 items-center justify-end w-full" v-if="item?.meta?.docs || item?.meta?.api || item?.meta?.download">
                                <NuxtLink v-if="item?.meta?.docs" target="_blank" :to="item?.meta?.docs">
                                  <SvgBook class="w-7 group/book hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgBook>
                                </NuxtLink>
                                <NuxtLink v-if="item?.meta?.api" target="_blank" :to="item?.meta?.api">
                                  <SvgApi class="mt-2 w-9 -translate-y-1 group/api hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgApi>
                                </NuxtLink>
                                <NuxtLink v-if="item?.meta?.download" target="_blank" :to="`/download/${item?.meta?.download}`">
                                  <SvgDownload class="mt-2 w-7 -translate-y-1 group/download hover:-translate-y-2 transition-all ease-in-out duration-300 delay-100"></SvgDownload>
                                </NuxtLink>
                              </div>
                              <div v-else></div>
                            </div>
                            <div class=" flex overflow-auto">
                              <ContentRenderer class=" text-wrap text-justify font-thin text-[12px] md:text-[14px] transition-colors ease-in-out" :class="item?.meta?.link ? `group-hover/project:text-secondary-200` : ''" :value="item" v-if="item"></ContentRenderer>
                            </div>
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
    
                    <div class="flex gap-2 flex-wrap items-start justify-between sm:justify-center -bottom-10 text-xs h-fit sm:mb-5 md:mb-0">
                      <a :href="`/DSoftwareArtist/tools/${tool.code}`" class=" w-full sm:w-auto capitalize bg-secondary-300/9 px-5 py-1 border-1 font-thin text-secondary-200 border-secondary-300/20 rounded-4xl hover:bg-secondary-100/8 hover:cursor-pointer" v-for="tool in item.meta.tools">{{  tool.name }}</a>
                    </div>
                  </div>
                </UCarousel>
            </Card>
          </Transition>
        </ClientOnly>
      </div>
    </div>
  </Container>
</template>