<template>

    <div class="flex w-screen h-screen justify-center items-center">
      <div class="absolute rounded-full bg-(--color-secondary-100) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 translate-y-0" />
      <div class="flex flex-col gap-2 justify-center items-center rounded-2xl h-fit">
        <Scroll :direction="'left'"> <Tools :tools="frontend ?? []"/></Scroll>
        <Scroll :direction="'right'"> <Tools :tools="backend ?? []"/></Scroll>
        <Scroll :direction="'left'"> <Tools :tools="devops ?? []"/></Scroll>
      </div>
      <div class="flex absolute h-[500px] transition ease-in-out">
        <Card class="">
          <UCarousel arrows v-slot="{ item }" dots :items="users" class="w-[600px] mx-10">
            <div class="flex items-center h-full p-5 z-0">
              <img :src="`/DSoftwareArtist/img/${item}`" class="w-60" alt="Reamon" />
              <div class="flex flex-col gap-2">
                <h4 class=" text-[32px]">{{  home?.title }}</h4>
                <p class=" text-justify font-light text-[16px]" v-html="home?.description"/>
              </div>
            </div>
          </UCarousel>
        </Card>
      </div>
      <Bg class=" z-0"></Bg>
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
  
const users = [
  'user1.png',
  'user2.png',
  'user3.png',
  'user4.png',
  'user5.png',
  'user6.png'
]
</script>