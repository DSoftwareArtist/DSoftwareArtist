<script setup>
import { ref } from 'vue'

const spotlight = ref({ x: 0, y: 0, opacity: 0 })

const handleMouseMove = (event) => {
  const { clientX, clientY, currentTarget } = event
  const { left, top, width, height } = currentTarget.getBoundingClientRect()
  spotlight.value = {
    x: ((clientX - left) / width) * 100,
    y: ((clientY - top) / height) * 100,
    opacity: 1
  }
}

const handleMouseLeave = () => {
  spotlight.value.opacity = 0
}
</script>

<template>
  <div
    class="relative group overflow-hidden rounded-xl border-1 border-secondary-100 bg-primary-900 p-6 shadow-sm transition-all duration-300 h hover:shadow-lg shadow-primary-100 min-h-[200px]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-transparent to-secondary-500/30 opacity-0 transition-opacity duration-300 z-0"
      :style="{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(59, 130, 246, 0.3), transparent)`,
        opacity: spotlight.opacity
      }"
    ></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
