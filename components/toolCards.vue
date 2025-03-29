<template>
  <div class="p-5 cursor-pointer" :class="`group/${tool.svg}`" v-for="tool in props.tools">
    <div class="flex flex-col items-center justify-center">
        <Render class="w-[60px]" :name="tool.svg"/>
        <div class="w-[200px] text-center pt-5 text-lg text-primary-400" :class="`group-hover/html:text-white`">{{  tool.title }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({tools: { type: Array }})
console.log(props.tools)
</script>