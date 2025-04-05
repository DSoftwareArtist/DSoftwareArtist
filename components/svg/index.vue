<template>
    <SvgAdobeillustrator :hoverable="hoverable" v-if="tool.svg=='adobeillustrator'"></SvgAdobeillustrator>
    <SvgAdobephotoshop :hoverable="hoverable" v-if="tool.svg=='adobephotoshop'"></SvgAdobephotoshop>
    <SvgAndroid :hoverable="hoverable" v-if="tool.svg=='android'"></SvgAndroid>
    <SvgAndroidstudio :hoverable="hoverable" v-if="tool.svg=='androidstudio'"></SvgAndroidstudio>
    <SvgAngularjs :hoverable="hoverable" v-if="tool.svg=='angularjs'"></SvgAngularjs>
    <SvgAws :hoverable="hoverable" v-if="tool.svg=='aws'"></SvgAws>
    <SvgAwss3 :hoverable="hoverable" v-if="tool.svg=='aws-s3'"></SvgAwss3>
    <SvgAwsses :hoverable="hoverable" v-if="tool.svg=='aws-ses'"></SvgAwsses>
    <SvgBitbucket :hoverable="hoverable" v-if="tool.svg=='bitbucket'"></SvgBitbucket>
    <SvgBitcoincash :hoverable="hoverable" v-if="tool.svg=='bitcoincash'"></SvgBitcoincash>
    <SvgBootstrap :hoverable="hoverable" v-if="tool.svg=='bootstrap'"></SvgBootstrap>
    <SvgCapacitor :hoverable="hoverable" v-if="tool.svg=='capacitor'"></SvgCapacitor>
    <SvgCelery :hoverable="hoverable" v-if="tool.svg=='celery'"></SvgCelery>
    <SvgCss :hoverable="hoverable" v-if="tool.svg=='css'"></SvgCss>
    <SvgDjangorest :hoverable="hoverable" v-if="tool.svg=='djangorest'"></SvgDjangorest>
    <SvgDjango :hoverable="hoverable" v-if="tool.svg=='django'"></SvgDjango>
    <SvgDockercompose :hoverable="hoverable" v-if="tool.svg=='dockercompose'"></SvgDockercompose>
    <SvgDocker :hoverable="hoverable" v-if="tool.svg=='docker'"></SvgDocker> 
    <SvgElasticsearch :hoverable="hoverable" v-if="tool.svg=='elasticsearch'"></SvgElasticsearch>
    <SvgFirebase :hoverable="hoverable" v-if="tool.svg=='firebase'"></SvgFirebase>
    <SvgGithubactions :hoverable="hoverable" v-if="tool.svg=='github-actions'"></SvgGithubactions>
    <SvgGithub :hoverable="hoverable" v-if="tool.svg=='github'"></SvgGithub>
    <SvgHeroku :hoverable="hoverable" v-if="tool.svg=='heroku'"></SvgHeroku>
    <SvgHtml :hoverable="hoverable" v-if="tool.svg=='html'"></SvgHtml>
    <SvgJava :hoverable="hoverable" v-if="tool.svg=='java'"></SvgJava>
    <SvgJavascript :hoverable="hoverable" v-if="tool.svg=='javascript'"></SvgJavascript>
    <SvgTranscrypt :hoverable="hoverable" v-if="tool.svg=='transcrypt'"></SvgTranscrypt>
    <SvgJquery :hoverable="hoverable" v-if="tool.svg=='jquery'"></SvgJquery>
    <SvgLeaflet :hoverable="hoverable" v-if="tool.svg=='leaflet'"></SvgLeaflet>
    <SvgMapbox :hoverable="hoverable" v-if="tool.svg=='mapbox'"></SvgMapbox>
    <SvgMjml :hoverable="hoverable" v-if="tool.svg=='mjml'"></SvgMjml>
    <SvgNginx :hoverable="hoverable" v-if="tool.svg=='nginx'"></SvgNginx>
    <SvgNuxt :hoverable="hoverable" v-if="tool.svg=='nuxt'"></SvgNuxt>
    <SvgOpenai :hoverable="hoverable" v-if="tool.svg=='openai'"></SvgOpenai>
    <SvgPandas :hoverable="hoverable" v-if="tool.svg=='pandas'"></SvgPandas>
    <SvgPostresql :hoverable="hoverable" v-if="tool.svg=='postresql'"></SvgPostresql>
    <SvgPython :hoverable="hoverable" v-if="tool.svg=='python'"></SvgPython>
    <SvgQuasar :hoverable="hoverable" v-if="tool.svg=='quasar'"></SvgQuasar>
    <SvgReactjs :hoverable="hoverable" v-if="tool.svg=='reactjs'"></SvgReactjs>
    <SvgRedis :hoverable="hoverable" v-if="tool.svg=='redis'"></SvgRedis>
    <SvgSelenium :hoverable="hoverable" v-if="tool.svg=='selenium'"></SvgSelenium>
    <SvgTailwindcss :hoverable="hoverable" v-if="tool.svg=='tailwindcss'"></SvgTailwindcss>
    <SvgTelegram :hoverable="hoverable" v-if="tool.svg=='telegrambot'"></SvgTelegram>
    <SvgVue :hoverable="hoverable" v-if="tool.svg=='vue'"></SvgVue>
    <SvgBeautifulsoup :hoverable="hoverable" v-if="tool.svg=='beautifulsoup'"></SvgBeautifulsoup>
    <SvgRequests :hoverable="hoverable" v-if="tool.svg=='requests'"></SvgRequests>
    <SvgFabric :hoverable="hoverable" v-if="tool.svg=='fabric'"></SvgFabric>
    <SvgDjangorq :hoverable="hoverable" v-if="tool.svg=='djangorq'"></SvgDjangorq>
    <SvgAwslightsail :hoverable="hoverable" v-if="tool.svg=='aws-lightsail'"></SvgAwslightsail>
    <SvgGeoapify :hoverable="hoverable" v-if="tool.svg=='geoapify'"></SvgGeoapify>
    <SvgHighcharts :hoverable="hoverable" v-if="tool.svg=='highcharts'"></SvgHighcharts>
    <SvgGeolocation :hoverable="hoverable" v-if="tool.svg=='geolocation'"></SvgGeolocation>
    <SvgLocalstorage :hoverable="hoverable" v-if="tool.svg=='localstorage'"></SvgLocalstorage>
    <SvgStore :hoverable="hoverable" v-if="tool.svg=='store'"></SvgStore>
    <SvgPhantomjs :hoverable="hoverable" v-if="tool.svg=='phantomjs'"></SvgPhantomjs>
    <SvgPillow :hoverable="hoverable" v-if="tool.svg=='pillow'"></SvgPillow>
    <SvgPyinvoke :hoverable="hoverable" v-if="tool.svg=='pyinvoke'"></SvgPyinvoke>
    <SvgSupervisord :hoverable="hoverable" v-if="tool.svg=='supervisord'"></SvgSupervisord>
</template>
<script setup>
defineProps({
    tool: {type: Object},
    hoverable: {type: Boolean, default: true}
})
</script>