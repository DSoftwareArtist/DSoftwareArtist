<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({animate: { type:Boolean, default: true}})
const spotlight = ref({ x: 50, y: 50, intensity: 0.3 })

const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(circle at ${spotlight.value.x}% ${spotlight.value.y}%, rgba(59, 130, 246, ${spotlight.value.intensity}), transparent)`
  }
})

const handleMouseMove = (event:any) => {
  if (props.animate) {
    const { clientX, clientY, currentTarget } = event
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    spotlight.value = {
      x: ((clientX - left) / width) * 100,
      y: 50,
      intensity: 0.3
    }
  }
}

const handleMouseLeave = () => {
  if (props.animate) {
    spotlight.value.intensity = 0.3
  }
}
</script>

<template>
  <div
    class="relative group overflow-hidden rounded-xl border border-primary-800 bg-primary-600/20 p-6 shadow-sm transition-all duration-300 min-h-[200px] backdrop-blur-[4px]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute inset-0 transition-opacity duration-300 z-0 card-border"
      :style="spotlightStyle"
    ></div>
    <div class="text-white">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.card-border {
  border: 39px solid transparent;
  border-image-source: url("/DSoftwareArtist/img/border.png");
  border-image-slice: 36 !important;
  border-inline-start-width: 0px;
  border-inline-end-width: 0px;
}
</style>