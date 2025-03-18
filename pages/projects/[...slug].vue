<script setup>
let prev, next
const pageContent = async () => {
    [prev, next] = await queryContent()
    .only(['_path', 'title'])
    .findSurround(innerPath._value)
}

await pageContent()


</script>
<template>
<div>{{  prev }}</div>
</template>