<template>
    <div class="flex max-w-2xl h-2xl justify-start overflow-auto no-scrollbar group">
        <div class="flex gap-4 group-hover:[animation-play-state:paused]" :class="direction === 'left' ? 'animate-left-scroll': 'animate-right-scroll'">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    direction: {
        type: String,
        default: 'left'
    }
})
</script>