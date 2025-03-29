<script setup>
import { ref, computed } from 'vue'

const spotlight = ref({ x: 50, y: 100, intensity: 0.3 })

const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(circle at ${spotlight.value.x}% ${spotlight.value.y}%, rgba(59, 130, 246, ${spotlight.value.intensity}), transparent)`
  }
})

const handleMouseMove = (event) => {
  const { clientX, clientY, currentTarget } = event
  const { left, top, width, height } = currentTarget.getBoundingClientRect()
  spotlight.value = {
    x: ((clientX - left) / width) * 100,
    y: ((clientY - top) / height) * 100,
    intensity: 0.2
  }
}

const handleMouseLeave = () => {
  spotlight.value.intensity = 0.2
}
</script>

<template>
  <div
    class="relative group overflow-hidden rounded-xl border border-secondary-100 bg-primary-900 p-6 shadow-sm transition-all duration-300 min-h-[200px]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute inset-0 transition-opacity duration-300 z-0"
      :style="spotlightStyle"
    ></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>