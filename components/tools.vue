<template>
  <NuxtLink :to="`/tools/${tool.svg}`" :id="`tool-${tool.svg}`" class=" bg-transparent hover:bg-transparent p-5 cursor-pointer" v-for="tool in props.tools" @mouseleave="$emit('mouseleave', tool)" :class="`group/${tool?.svg}`">
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-[60px]">
        <Svg :tool="tool"></Svg>
      </div>
      <div class=" min-w-[100px]">
          <p v-if="tool.svg=='html'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/html:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='android'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/android:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='angularjs'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/angularjs:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='aws-lightsail'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/aws-lightsail:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='bootstrap'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/bootstrap:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='capacitor'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/capacitor:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='css'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/css:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='geoapify'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/geoapify:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='geolocation'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/geolocation:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='highcharts'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/highcharts:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='java'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/java:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='javascript'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/javascript:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='jquery'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/jquery:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='leaflet'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/leaflet:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='localstorage'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/localstorage:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='mapbox'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/mapbox:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='mjml'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/mjml:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='nuxt'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/nuxt:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='openai'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/openai:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='quasar'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/quasar:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='reactjs'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/reactjs:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='redis'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/redis:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='store'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/store:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='tailwindcss'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/tailwindcss:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='vue'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/vue:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='aws'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/aws:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='aws-s3'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/aws-s3:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='aws-ses'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/aws-ses:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='beautifulsoup'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/beautifulsoup:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='celery'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/celery:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='django'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/django:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='djangorest'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/djangorest:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='djangorq'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/djangorq:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='elasticsearch'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/elasticsearch:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='firebase'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/firebase:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='pandas'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/pandas:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='phantomjs'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/phantomjs:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='pillow'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/pillow:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='postgresql'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/postgresql:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='python'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/python:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='requests'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/requests:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='scrapy'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/scrapy:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='selenium'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/selenium:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='smart-contract'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/smart-contract:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='telegram-bot'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/telegram-bot:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='twillio'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/twillio:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='bitbucket'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/bitbucket:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='docker'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/docker:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='dockercompose'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/dockercompose:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='fabric'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/fabric:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='github'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/github:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='github-actions'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/github-actions:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='heroku'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/heroku:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='nginx'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/nginx:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='pyinvoke'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/pyinvoke:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='supervisord'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/supervisord:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
          <p v-if="tool.svg=='transcrypt'" class="transition-colors duration-600 ease-in-out text-[var(--color-primary-500)] group-hover/transcrypt:text-[#ffffff] text-center pt-2 text-sm">{{ tool.title }}</p>
      </div>
  </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({tools: { type: undefined }, test: {type: Function}})
const emit = defineEmits(['click', 'mouseleave'])

</script>