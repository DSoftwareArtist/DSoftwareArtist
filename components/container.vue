<template>
    <div class="relative">
        <div class="flex w-screen h-screen justify-center md:items-center">
            <div class="absolute rounded-full bg-(--color-secondary-100) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 translate-y-0" />
            <div class="flex flex-col justify-center items-center rounded-2xl h-fit relative">
                <Scroll :direction="'left'"> <Tools :tools="frontend"/></Scroll>
                <Scroll :direction="'right'"> <Tools :tools="backend"/></Scroll>
                <Scroll :direction="'left'"> <Tools :tools="devops"/></Scroll>
            </div>

            <div class="flex absolute h-full transition ease-in-out">
                <slot></slot>
            </div>
        </div>
        <Bg class="z-0"></Bg>
    </div>
</template>

<script setup>
defineProps({
    frontend: { type: Array, default: [] },
    backend: { type: Array, default: [] },
    devops: { type: Array, default: [] }
})

</script>