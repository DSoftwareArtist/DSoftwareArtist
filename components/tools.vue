<template>
  <div class="p-5 cursor-pointer" v-for="tool in props.tools">
    <div class="flex flex-col items-center justify-center" :class="`group/${tool?.svg}`">
      <div class="flex w-[60px]">
        <SvgAdobeillustrator v-if="tool.svg=='adobeillustrator'"></SvgAdobeillustrator>
        <SvgAdobephotoshop v-if="tool.svg=='adobephotoshop'"></SvgAdobephotoshop>
        <SvgAndroid v-if="tool.svg=='android'"></SvgAndroid>
        <SvgAndroidstudio v-if="tool.svg=='androidstudio'"></SvgAndroidstudio>
        <SvgAngularjs v-if="tool.svg=='angularjs'"></SvgAngularjs>
        <SvgAws v-if="tool.svg=='aws'"></SvgAws>
        <SvgAwss3 v-if="tool.svg=='aws-s3'"></SvgAwss3>
        <SvgAwsses v-if="tool.svg=='aws-ses'"></SvgAwsses>
        <SvgBitbucket v-if="tool.svg=='bitbucket'"></SvgBitbucket>
        <SvgBitcoincash v-if="tool.svg=='bitcoincash'"></SvgBitcoincash>
        <SvgBootstrap v-if="tool.svg=='bootstrap'"></SvgBootstrap>
        <SvgCapacitor v-if="tool.svg=='capacitor'"></SvgCapacitor>
        <SvgCelery v-if="tool.svg=='celery'"></SvgCelery>
        <SvgCss v-if="tool.svg=='css'"></SvgCss>
        <SvgDjangorest v-if="tool.svg=='djangorest'"></SvgDjangorest>
        <SvgDjango v-if="tool.svg=='django'"></SvgDjango>
        <SvgDockercompose v-if="tool.svg=='dockercompose'"></SvgDockercompose>
        <SvgDocker v-if="tool.svg=='docker'"></SvgDocker> 
        <SvgElasticsearch v-if="tool.svg=='elasticsearch'"></SvgElasticsearch>
        <SvgFirebase v-if="tool.svg=='firebase'"></SvgFirebase>
        <SvgGithubactions v-if="tool.svg=='github-actions'"></SvgGithubactions>
        <SvgGithub v-if="tool.svg=='github'"></SvgGithub>
        <SvgHeroku v-if="tool.svg=='heroku'"></SvgHeroku>
        <SvgHtml v-if="tool.svg=='html'"></SvgHtml>
        <SvgJava v-if="tool.svg=='java'"></SvgJava>
        <SvgJavascript v-if="tool.svg=='javascript'"></SvgJavascript>
        <SvgTranscrypt v-if="tool.svg=='transcrypt'"></SvgTranscrypt>
        <SvgJquery v-if="tool.svg=='jquery'"></SvgJquery>
        <SvgLeaflet v-if="tool.svg=='leaflet'"></SvgLeaflet>
        <SvgMapbox v-if="tool.svg=='mapbox'"></SvgMapbox>
        <SvgMjml v-if="tool.svg=='mjml'"></SvgMjml>
        <SvgNginx v-if="tool.svg=='nginx'"></SvgNginx>
        <SvgNuxt v-if="tool.svg=='nuxt'"></SvgNuxt>
        <SvgOpenai v-if="tool.svg=='openai'"></SvgOpenai>
        <SvgPandas v-if="tool.svg=='pandas'"></SvgPandas>
        <SvgPostresql v-if="tool.svg=='postresql'"></SvgPostresql>
        <SvgPython v-if="tool.svg=='python'"></SvgPython>
        <SvgQuasar v-if="tool.svg=='quasar'"></SvgQuasar>
        <SvgReactjs v-if="tool.svg=='reactjs'"></SvgReactjs>
        <SvgRedis v-if="tool.svg=='redis'"></SvgRedis>
        <SvgSelenium v-if="tool.svg=='selenium'"></SvgSelenium>
        <SvgTailwindcss v-if="tool.svg=='tailwindcss'"></SvgTailwindcss>
        <SvgTelegram v-if="tool.svg=='telegrambot'"></SvgTelegram>
        <SvgVue v-if="tool.svg=='vue'"></SvgVue>
        <SvgBeautifulsoup v-if="tool.svg=='beautifulsoup'"></SvgBeautifulsoup>
        <SvgRequests v-if="tool.svg=='requests'"></SvgRequests>
        <SvgFabric v-if="tool.svg=='fabric'"></SvgFabric>
        <SvgDjangorq v-if="tool.svg=='djangorq'"></SvgDjangorq>
        <SvgAwslightsail v-if="tool.svg=='aws-lightsail'"></SvgAwslightsail>
        <SvgGeoapify v-if="tool.svg=='geoapify'"></SvgGeoapify>
        <SvgHighcharts v-if="tool.svg=='highcharts'"></SvgHighcharts>
        <SvgGeolocation v-if="tool.svg=='geolocation'"></SvgGeolocation>
        <SvgLocalstorage v-if="tool.svg=='localstorage'"></SvgLocalstorage>
        <SvgStore v-if="tool.svg=='store'"></SvgStore>
        <SvgPhantomjs v-if="tool.svg=='phantomjs'"></SvgPhantomjs>
        <SvgPillow v-if="tool.svg=='pillow'"></SvgPillow>
        <SvgPyinvoke v-if="tool.svg=='pyinvoke'"></SvgPyinvoke>
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
  </div>
</template>

<script setup>
const props = defineProps({tools: { type: Array }})
</script>