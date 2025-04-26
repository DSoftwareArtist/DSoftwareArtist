<template>
    <SvgAdobeillustrator :hoverable="hoverable" v-if="tool.svg=='adobeillustrator' || tool.code==='adobeillustrator'"></SvgAdobeillustrator>
    <SvgAdobephotoshop :hoverable="hoverable" v-if="tool.svg=='adobephotoshop' || tool.code==='adobephotoshop'"></SvgAdobephotoshop>
    <SvgAndroid :hoverable="hoverable" v-if="tool.svg=='android' || tool.code==='android'"></SvgAndroid>
    <SvgAndroidstudio :hoverable="hoverable" v-if="tool.svg=='androidstudio' || tool.code==='androidstudio'"></SvgAndroidstudio>
    <SvgAngularjs :hoverable="hoverable" v-if="tool.svg=='angularjs' || tool.code==='angularjs'"></SvgAngularjs>
    <SvgAws :hoverable="hoverable" v-if="tool.svg=='aws' || tool.code==='aws'"></SvgAws>
    <SvgAwss3 :hoverable="hoverable" v-if="tool.svg=='aws-s3' || tool.code==='aws-s3'"></SvgAwss3>
    <SvgAwsses :hoverable="hoverable" v-if="tool.svg=='aws-ses' || tool.code==='aws-ses'"></SvgAwsses>
    <SvgBitbucket :hoverable="hoverable" v-if="tool.svg=='bitbucket' || tool.code==='bitbucket'"></SvgBitbucket>
    <SvgBitcoincash :hoverable="hoverable" v-if="tool.svg=='bitcoincash' || tool.code==='bitcoincash'"></SvgBitcoincash>
    <SvgBootstrap :hoverable="hoverable" v-if="tool.svg=='bootstrap' || tool.code==='bootstrap'"></SvgBootstrap>
    <SvgCapacitor :hoverable="hoverable" v-if="tool.svg=='capacitor' || tool.code==='capacitor'"></SvgCapacitor>
    <SvgCelery :hoverable="hoverable" v-if="tool.svg=='celery' || tool.code==='celery'"></SvgCelery>
    <SvgCss :hoverable="hoverable" v-if="tool.svg=='css' || tool.code==='css'"></SvgCss>
    <SvgDjangorest :hoverable="hoverable" v-if="tool.svg=='djangorest' || tool.code==='djangorest'"></SvgDjangorest>
    <SvgDjango :hoverable="hoverable" v-if="tool.svg=='django' || tool.code==='django'"></SvgDjango>
    <SvgDockercompose :hoverable="hoverable" v-if="tool.svg=='dockercompose' || tool.code==='dockercompose'"></SvgDockercompose>
    <SvgDocker :hoverable="hoverable" v-if="tool.svg=='docker' || tool.code==='docker'"></SvgDocker> 
    <SvgElasticsearch :hoverable="hoverable" v-if="tool.svg=='elasticsearch' || tool.code==='elasticsearch'"></SvgElasticsearch>
    <SvgFirebase :hoverable="hoverable" v-if="tool.svg=='firebase' || tool.code==='firebase'"></SvgFirebase>
    <SvgGithubactions :hoverable="hoverable" v-if="tool.svg=='github-actions' || tool.code==='github-actions'"></SvgGithubactions>
    <SvgGithub :hoverable="hoverable" v-if="tool.svg=='github' || tool.code==='github'"></SvgGithub>
    <SvgHeroku :hoverable="hoverable" v-if="tool.svg=='heroku' || tool.code==='heroku'"></SvgHeroku>
    <SvgHtml :hoverable="hoverable" v-if="tool.svg=='html' || tool.code==='html'"></SvgHtml>
    <SvgJava :hoverable="hoverable" v-if="tool.svg=='java' || tool.code==='java'"></SvgJava>
    <SvgJavascript :hoverable="hoverable" v-if="tool.svg=='javascript' || tool.code==='javascript'"></SvgJavascript>
    <SvgTranscrypt :hoverable="hoverable" v-if="tool.svg=='transcrypt' || tool.code==='transcrypt'"></SvgTranscrypt>
    <SvgJquery :hoverable="hoverable" v-if="tool.svg=='jquery' || tool.code==='jquery'"></SvgJquery>
    <SvgLeaflet :hoverable="hoverable" v-if="tool.svg=='leaflet' || tool.code==='leaflet'"></SvgLeaflet>
    <SvgMapbox :hoverable="hoverable" v-if="tool.svg=='mapbox' || tool.code==='mapbox'"></SvgMapbox>
    <SvgMjml :hoverable="hoverable" v-if="tool.svg=='mjml' || tool.code==='mjml'"></SvgMjml>
    <SvgNginx :hoverable="hoverable" v-if="tool.svg=='nginx' || tool.code==='nginx'"></SvgNginx>
    <SvgNuxt :hoverable="hoverable" v-if="tool.svg=='nuxt' || tool.code==='nuxt'"></SvgNuxt>
    <SvgOpenai :hoverable="hoverable" v-if="tool.svg=='openai' || tool.code==='openai'"></SvgOpenai>
    <SvgPandas :hoverable="hoverable" v-if="tool.svg=='pandas' || tool.code==='pandas'"></SvgPandas>
    <SvgPostgresql :hoverable="hoverable" v-if="tool.svg=='postgresql' || tool.code==='postgresql'"></SvgPostgresql>
    <SvgPython :hoverable="hoverable" v-if="tool.svg=='python' || tool.code==='python'"></SvgPython>
    <SvgQuasar :hoverable="hoverable" v-if="tool.svg=='quasar' || tool.code==='quasar'"></SvgQuasar>
    <SvgReactjs :hoverable="hoverable" v-if="tool.svg=='reactjs' || tool.code==='reactjs'"></SvgReactjs>
    <SvgRedis :hoverable="hoverable" v-if="tool.svg=='redis' || tool.code==='redis'"></SvgRedis>
    <SvgSelenium :hoverable="hoverable" v-if="tool.svg=='selenium' || tool.code==='selenium'"></SvgSelenium>
    <SvgTailwindcss :hoverable="hoverable" v-if="tool.svg=='tailwindcss' || tool.code==='tailwindcss'"></SvgTailwindcss>
    <SvgTelegram :hoverable="hoverable" v-if="tool.svg=='telegrambot' || tool.code==='telegrambot'"></SvgTelegram>
    <SvgVue :hoverable="hoverable" v-if="tool.svg=='vue' || tool.code==='vue'"></SvgVue>
    <SvgBeautifulsoup :hoverable="hoverable" v-if="tool.svg=='beautifulsoup' || tool.code==='beautifulsoup'"></SvgBeautifulsoup>
    <SvgRequests :hoverable="hoverable" v-if="tool.svg=='requests' || tool.code==='requests'"></SvgRequests>
    <SvgFabric :hoverable="hoverable" v-if="tool.svg=='fabric' || tool.code==='fabric'"></SvgFabric>
    <SvgDjangorq :hoverable="hoverable" v-if="tool.svg=='djangorq' || tool.code==='djangorq'"></SvgDjangorq>
    <SvgAwslightsail :hoverable="hoverable" v-if="tool.svg=='aws-lightsail' || tool.code==='aws-lightsail'"></SvgAwslightsail>
    <SvgGeoapify :hoverable="hoverable" v-if="tool.svg=='geoapify' || tool.code==='geoapify'"></SvgGeoapify>
    <SvgHighcharts :hoverable="hoverable" v-if="tool.svg=='highcharts' || tool.code==='highcharts'"></SvgHighcharts>
    
    <SvgGeolocation :hoverable="hoverable" v-if="tool.svg=='geolocation' || tool.code==='geolocation'"></SvgGeolocation>
    <SvgLocalstorage :hoverable="hoverable" v-if="tool.svg=='localstorage' || tool.code==='localstorage'"></SvgLocalstorage>
    <SvgStore :hoverable="hoverable" v-if="tool.svg=='store' || tool.code==='store'"></SvgStore>


    <SvgPhantomjs :hoverable="hoverable" v-if="tool.svg=='phantomjs' || tool.code==='phantomjs'"></SvgPhantomjs>
    <SvgPillow :hoverable="hoverable" v-if="tool.svg=='pillow' || tool.code==='pillow'"></SvgPillow>
    <SvgPyinvoke :hoverable="hoverable" v-if="tool.svg=='pyinvoke' || tool.code==='pyinvoke'"></SvgPyinvoke>
    <SvgSupervisord :hoverable="hoverable" v-if="tool.svg=='supervisord' || tool.code==='supervisord'"></SvgSupervisord>
</template>
<script setup>
defineProps({
    tool: {type: Object},
    hoverable: {type: Boolean, default: true}
})
</script>