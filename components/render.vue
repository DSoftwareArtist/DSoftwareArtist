<template>
    <div>
        <SvgAdobeillustrator v-if="props.name=='adobeillustrator'"></SvgAdobeillustrator>
        <SvgAdobephotoshop v-if="props.name=='adobephotoshop'"></SvgAdobephotoshop>
        <SvgAndroid v-if="props.name == 'android'"></SvgAndroid>
        <SvgAndroidstudio v-if="props.name == 'androidstudio'"></SvgAndroidstudio>
        <SvgAngularjs v-if="props.name == 'angularjs'"></SvgAngularjs>
        <SvgAws v-if="props.name == 'aws'"></SvgAws>
        <SvgAwss3 v-if="props.name=='aws-s3'"></SvgAwss3>
        <SvgAwsses v-if="props.name=='aws-ses'"></SvgAwsses>
        <SvgBitbucket v-if="props.name=='bitbucket'"></SvgBitbucket>
        <SvgBitcoincash v-if="props.name=='bitcoincash'"></SvgBitcoincash>
        <SvgBootstrap v-if="props.name=='bootstrap'"></SvgBootstrap>
        <SvgCapacitor v-if="props.name=='capacitor'"></SvgCapacitor>
        <SvgCelery v-if="props.name=='celery'"></SvgCelery>
        <SvgCss v-if="props.name=='css'"></SvgCss>
        <SvgDjangorest v-if="props.name=='django-rest'"></SvgDjangorest>
        <SvgDjango v-if="props.name=='django'"></SvgDjango>
        <SvgDocker v-if="props.name=='docker-compose'"></SvgDocker>
        <SvgDocker v-if="props.name=='docker'"></SvgDocker>
        <SvgElasticsearch v-if="props.name=='elasticsearch'"></SvgElasticsearch>
        <SvgFirebase v-if="props.name=='firebase'"></SvgFirebase>
        <SvgGithubactions v-if="props.name=='github-actions'"></SvgGithubactions>
        <SvgGithub v-if="props.name=='github'"></SvgGithub>
        <SvgHeroku v-if="props.name=='heroku'"></SvgHeroku>
        <SvgHtml v-if="props.name=='html'"></SvgHtml>
        <SvgJava v-if="props.name=='java'"></SvgJava>
        <SvgJavascript v-if="props.name=='javascript'"></SvgJavascript>
        <SvgJavascript v-if="props.name=='geolocation'"></SvgJavascript>
        <SvgJavascript v-if="props.name=='store'"></SvgJavascript>
        <SvgJavascript v-if="props.name=='transcrypt'"></SvgJavascript>
        <SvgJquery v-if="props.name=='jquery'"></SvgJquery>
        <SvgLeaflet v-if="props.name=='leaflet'"></SvgLeaflet>
        <SvgMapbox v-if="props.name=='mapbox'"></SvgMapbox>
        <SvgMjml v-if="props.name=='mjml'"></SvgMjml>
        <SvgNginx v-if="props.name=='nginx'"></SvgNginx>
        <SvgNuxt v-if="props.name=='nuxt'"></SvgNuxt>
        <SvgOpenai v-if="props.name=='openai'"></SvgOpenai>
        <SvgPandas v-if="props.name=='pandas'"></SvgPandas>
        <SvgPostresql v-if="props.name=='postresql'"></SvgPostresql>
        <SvgPython v-if="props.name=='python'"></SvgPython>
        <SvgQuasar v-if="props.name=='quasar'"></SvgQuasar>
        <SvgReactjs v-if="props.name=='reactjs'"></SvgReactjs>
        <SvgRedis v-if="props.name=='redis'"></SvgRedis>
        <SvgSelenium v-if="props.name=='selenium'"></SvgSelenium>
        <SvgTailwindcss v-if="props.name=='tailwindcss'"></SvgTailwindcss>
        <SvgTelegram v-if="props.name=='telegrambot'"></SvgTelegram>
        <SvgVue v-if="props.name=='vue'"></SvgVue>
        <SvgPyscript v-if="props.name=='beautiful-soup'"></SvgPyscript>
        <SvgPyscript v-if="props.name=='requests'"></SvgPyscript>
        <SvgPyscript v-if="props.name=='fabric'"></SvgPyscript>
        <SvgPyscript v-if="props.name=='django-rq'"></SvgPyscript>
        
    </div>
</template>
<script setup>
const props = defineProps(['name'])
</script>