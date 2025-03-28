<template>
    <div class="bg-secondary-200/2 hover:bg-secondary-100 border-1 border-primary-400 backdrop-brightness-90 rounded-xl p-10 cursor-pointer" v-for="tool in props.tools">
      <div class="flex justify-center">
          <Render class="w-[60px]" :name="tool.svg"/>
        </div>
        <div class="w-[200px] text-center text-primary-400 pt-5 text-lg">{{  tool.title }}</div>
    </div>
</template>

<script setup>
const props = defineProps({tools: { type: Array }})
</script>