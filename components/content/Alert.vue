<template>
    <div role="alert" :class="'my-5 alert alert-' + type  + ' content-alert-'+ type ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="var(--pp-blue-200)" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span><ContentSlot :use="$slots.default" unwrap="p" /></span>
    </div>
</template>
<script setup>
    const props = defineProps({
        type: String,
        default: 'info'
    })
    const type = computed(() => props?.type ? props?.type : 'info')
</script>