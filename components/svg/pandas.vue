<template>
    <svg viewBox="0 0 128 128">
        <path color="#000" :fill="active ? '#130754' : 'var(--color-primary-500)'" d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z"/>
        <path color="#000" :fill="active ? '#ffca00' : 'var(--color-primary-600)'" d="M48.697 48.037h12.25v12.001h-12.25z"/>
        <path color="#000" :fill="active ? '#130754' : 'var(--color-primary-700)'" d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z"/>
        <path color="#000" :fill="active ? '#e70488' : 'var(--color-primary-800)'" d="M67.97 68.983h12.25v12.001H67.97z"/>
        <path color="#000" :fill="active ? '#130754' : 'var(--color-primary-700)'" d="M87.238 8.55h12.25v84.552h-12.25z"/>
    </svg>
</template>
<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>
