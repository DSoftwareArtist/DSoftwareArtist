<template>

    <div class="flex w-screen h-screen justify-center items-center">
      <div class="absolute rounded-full bg-(--color-secondary-100) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 translate-y-0" />
      <div class="flex flex-col justify-center items-center rounded-2xl h-fit">
        <Scroll :direction="'left'"> <Tools v-on:mouseleave="mouseleave" v-on:mouseover="mouseover" :tools="frontend ?? []"/></Scroll>
        <Scroll :direction="'right'"> <Tools v-on:mouseleave="mouseleave" v-on:mouseover="mouseover" :tools="backend ?? []"/></Scroll>
        <Scroll :direction="'left'"> <Tools v-on:mouseleave="mouseleave" v-on:mouseover="mouseover" :tools="devops ?? []"/></Scroll>
      </div>
      <div class="flex absolute h-[500px] transition ease-in-out">
        <Card>
          <Transition 
            enter-active-class="transition-opacity duration-1500 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100">
            <UCarousel v-if="!page" arrows v-slot="{ item }" dots :items="users" class="w-[600px] mx-10">
              <div  class="flex items-center h-full p-5 z-0">
                <img :src="`/DSoftwareArtist/img/${item}`" class="w-60" alt="Reamon" />
                <div class="flex flex-col gap-2">
                  <h4 class=" text-[32px]">{{  home?.title }}</h4>
                  <p class=" text-justify font-light text-[16px]" v-html="home?.description"/>
                </div>
              </div>
            </UCarousel>
          </Transition>
          
          <Transition 
            enter-active-class="transition-opacity duration-1500 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100">
            <ContentRenderer v-show="page" :value="page ?? []" class="w-[600px] mx-10"/>
          </Transition>
        </Card>
      </div>
      <Bg class="z-0"></Bg>
    </div>
</template>
<script setup lang="ts">
// SEO
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })
let page = ref(null)
// Queries
const { data: frontend } = await useAsyncData('tools-frontend', () => {
  return queryCollection('tools')
    .where('category', 'LIKE', '%frontend%')
    .all()
})

console.log(frontend)

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

const mouseover = (a:any) => {
  page.value = a
}

const mouseleave = (a:any) => {
  page.value = null
}
const users = [
  'user1.png',
  'user2.png',
  'user3.png',
  'user4.png',
  'user5.png',
  'user6.png'
]
</script>