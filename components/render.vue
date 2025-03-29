<template>
    <div>
        <SvgAdobeillustrator :name="name" v-if="name=='adobeillustrator'"></SvgAdobeillustrator>
        <SvgAdobephotoshop :name="name" v-if="name=='adobephotoshop'"></SvgAdobephotoshop>
        <SvgAndroid :name="name" v-if="name == 'android'"></SvgAndroid>
        <SvgAndroidstudio :name="name" v-if="name == 'androidstudio'"></SvgAndroidstudio>
        <SvgAngularjs :name="name" v-if="name == 'angularjs'"></SvgAngularjs>
        <SvgAws :name="name" v-if="name == 'aws'"></SvgAws>
        <SvgAwss3 :name="name" v-if="name=='aws-s3'"></SvgAwss3>
        <SvgAwsses :name="name" v-if="name=='aws-ses'"></SvgAwsses>
        <SvgBitbucket :name="name" v-if="name=='bitbucket'"></SvgBitbucket>
        <SvgBitcoincash :name="name" v-if="name=='bitcoincash'"></SvgBitcoincash>
        <SvgBootstrap :name="name" v-if="name=='bootstrap'"></SvgBootstrap>
        <SvgCapacitor :name="name" v-if="name=='capacitor'"></SvgCapacitor>
        <SvgCelery :name="name" v-if="name=='celery'"></SvgCelery>
        <SvgCss :name="name" v-if="name=='css'"></SvgCss>
        <SvgDjangorest :name="name" v-if="name=='django-rest'"></SvgDjangorest>
        <SvgDjango :name="name" v-if="name=='django'"></SvgDjango>
        <SvgDocker :name="name" v-if="name=='docker-compose'"></SvgDocker>
        <SvgDocker :name="name" v-if="name=='docker'"></SvgDocker> 
        <SvgElasticsearch :name="name" v-if="name=='elasticsearch'"></SvgElasticsearch>
        <SvgFirebase :name="name" v-if="name=='firebase'"></SvgFirebase>
        <SvgGithubactions :name="name" v-if="name=='github-actions'"></SvgGithubactions>
        <SvgGithub :name="name" v-if="name=='github'"></SvgGithub>
        <SvgHeroku :name="name" v-if="name=='heroku'"></SvgHeroku>
        <SvgHtml :name="name" v-if="name=='html'"></SvgHtml>
        <SvgJava :name="name" v-if="name=='java'"></SvgJava>
        <SvgJavascript :name="name" v-if="name=='javascript'"></SvgJavascript>
        <SvgJavascript :name="name" v-if="name=='geolocation'"></SvgJavascript>
        <SvgJavascript :name="name" v-if="name=='store'"></SvgJavascript>
        <SvgJavascript :name="name" v-if="name=='transcrypt'"></SvgJavascript>
        <SvgJquery :name="name" v-if="name=='jquery'"></SvgJquery>
        <SvgLeaflet :name="name" v-if="name=='leaflet'"></SvgLeaflet>
        <SvgMapbox :name="name" v-if="name=='mapbox'"></SvgMapbox>
        <SvgMjml :name="name" v-if="name=='mjml'"></SvgMjml>
        <SvgNginx :name="name" v-if="name=='nginx'"></SvgNginx>
        <SvgNuxt :name="name" v-if="name=='nuxt'"></SvgNuxt>
        <SvgOpenai :name="name" v-if="name=='openai'"></SvgOpenai>
        <SvgPandas :name="name" v-if="name=='pandas'"></SvgPandas>
        <SvgPostresql :name="name" v-if="name=='postresql'"></SvgPostresql>
        <SvgPython :name="name" v-if="name=='python'"></SvgPython>
        <SvgQuasar :name="name" v-if="name=='quasar'"></SvgQuasar>
        <SvgReactjs :name="name" v-if="name=='reactjs'"></SvgReactjs>
        <SvgRedis :name="name" v-if="name=='redis'"></SvgRedis>
        <SvgSelenium :name="name" v-if="name=='selenium'"></SvgSelenium>
        <SvgTailwindcss :name="name" v-if="name=='tailwindcss'"></SvgTailwindcss>
        <SvgTelegram :name="name" v-if="name=='telegrambot'"></SvgTelegram>
        <SvgVue :name="name" v-if="name=='vue'"></SvgVue>
        <SvgPyscript :name="name" v-if="name=='beautifulsoup'"></SvgPyscript>
        <SvgPyscript :name="name" v-if="name=='requests'"></SvgPyscript>
        <SvgPyscript :name="name" v-if="name=='fabric'"></SvgPyscript>
        <SvgPyscript :name="name" v-if="name=='django-rq'"></SvgPyscript>
        
    </div>
</template>
<script setup>
defineProps(['name'])
</script>