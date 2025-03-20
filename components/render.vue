<template>
    <div>
        <SvgAdobeillustrator v-if="props.name=='adobeillustrator'"></SvgAdobeillustrator>
        <SvgAdobephotoshop v-if="props.name=='adobephotoshop'"></SvgAdobephotoshop>
        <SvgAndroid v-if="props.name == 'android'"></SvgAndroid>
        <SvgAndroidstudio v-if="props.name == 'androidstudio'"></SvgAndroidstudio>
        <SvgAngularjs v-if="props.name == 'angularjs'"></SvgAngularjs>
        <SvgAws v-if="props.name == 'aws'"></SvgAws>
        <!-- <SvgAwslightsail v-if="props.name=='awslightsail'"></SvgAwslightsail> -->
        <SvgAwss3 v-if="props.name=='aws-s3'"></SvgAwss3>
        <SvgAwsses v-if="props.name=='aws-ses'"></SvgAwsses>
        <!-- SvgBeautifulsoup v-if="props.name==''"></SvgBeautifulsoup -->

        <SvgBitbucket v-if="props.name=='bitbucket'"></SvgBitbucket>
        <SvgBitcoincash v-if="props.name=='bitcoincash'"></SvgBitcoincash>
        <SvgBootstrap v-if="props.name=='bootstrap'"></SvgBootstrap>
        <SvgCapacitor v-if="props.name=='capacitor'"></SvgCapacitor>
        <!-- SvgCashtokens v-if="props.name==''"></SvgCashtokens -->

        <SvgCelery v-if="props.name=='celery'"></SvgCelery>
        <!-- SvgCicd v-if="props.name==''"></SvgCicd -->
        <SvgCss v-if="props.name=='css'"></SvgCss>
        <!-- SvgDjangochannels v-if="props.name==''"></SvgDjangochannels -->
        <SvgDjangorest v-if="props.name=='django-rest'"></SvgDjangorest>
        <!-- SvgDjangorq v-if="props.name==''"></Svgdjangorq -->
        <SvgDjango v-if="props.name=='django'"></SvgDjango>
        <SvgDocker v-if="props.name=='docker-compose'"></SvgDocker>
        <SvgDocker v-if="props.name=='docker'"></SvgDocker>
        <SvgElasticsearch v-if="props.name=='elasticsearch'"></SvgElasticsearch>
        <!-- <SvgFabric v-if="props.name=='fabric'"></SvgFabric> -->
        <SvgFirebase v-if="props.name=='firebase'"></SvgFirebase>
        
        <!-- SvgGeoapify v-if="props.name=='geoapify'"></SvgGeoapify -->
        <!-- SvgGeolocation v-if="props.name=='geolocation'"></SvgGeolocation -->
        
        <SvgGithubactions v-if="props.name=='github-actions'"></SvgGithubactions>
        <SvgGithub v-if="props.name=='github'"></SvgGithub>
        <SvgHeroku v-if="props.name=='heroku'"></SvgHeroku>
        <!-- SvgHighcharts v-if="props.name=='highcharts'"></SvgHighcharts -->
        <SvgHtml v-if="props.name=='html'"></SvgHtml>
        <SvgJava v-if="props.name=='java'"></SvgJava>
        <SvgJavascript v-if="props.name=='javascript'"></SvgJavascript>
        <SvgJquery v-if="props.name=='jquery'"></SvgJquery>
        <!-- SvgLeaflet v-if="props.name=='leaflet'"></SvgLeaflet -->
        <!-- SvgLocalstorage v-if="props.name=='localstorage'"></SvgLocalstorage -->
        <!-- SvgMapbox v-if="props.name=='mapbox'"></SvgMapbox -->
        <!-- SvgMjml v-if="props.name=='mjml'"></SvgMjml -->
        <SvgNginx v-if="props.name=='nginx'"></SvgNginx>
        <SvgNuxt v-if="props.name=='nuxt'"></SvgNuxt>
        <!-- SvgOpenai v-if="props.name=='openai'"></SvgOpenai -->
        <SvgPandas v-if="props.name=='pandas'"></SvgPandas>
        <!-- SvgPhantomjs v-if="props.name=='phantomjs'"></SvgPhantomjs -->
        <!-- SvgPillow v-if="props.name=='pillow'"></SvgPillow -->
        <SvgPostresql v-if="props.name=='postresql'"></SvgPostresql>
        <!-- SvgPyinvoke v-if="props.name=='pyinvoke'"></SvgPyinvoke -->
        <SvgPython v-if="props.name=='python'"></SvgPython>
        <SvgQuasar v-if="props.name=='quasar'"></SvgQuasar>
        <SvgReactjs v-if="props.name=='reactjs'"></SvgReactjs>
        <SvgRedis v-if="props.name=='redis'"></SvgRedis>
        <!-- SvgRequests v-if="props.name=='requests'"></SvgRequests -->
        <!-- SvgScrapy v-if="props.name=='scrapy'"></SvgScrapy -->
        <SvgSelenium v-if="props.name=='selenium'"></SvgSelenium>
        <!-- SvgSmartcontract v-if="props.name==''"></SvgSmartcontract -->
        <!-- SvgStore v-if="props.name=='store'"></SvgStore -->
        <!-- SvgSupervisord v-if="props.name=='supervisord'"></SvgSupervisord -->
        <SvgTailwindcss v-if="props.name=='tailwindcss'"></SvgTailwindcss>
        <!-- SvgTelegrambot v-if="props.name=='telegrambot'"></SvgTelegrambot -->
        <!-- SvgTranscrypt v-if="props.name=='transcrypt'"></SvgTranscrypt -->
        <!-- SvgTwillio v-if="props.name=='twillio'"></SvgTwillio -->
        <SvgVue v-if="props.name=='vue'"></SvgVue>
    </div>
</template>
<script setup>
const props = defineProps(['name'])
</script>