<template>
    <div>
        <SvgAws v-if="props.name == 'aws'"></SvgAws>
        <SvgHtml v-if="props.name=='html'"></SvgHtml>
        <SvgAndroid v-if="props.name == 'android'"></SvgAndroid>
        <SvgAngularjs v-if="props.name == 'angularjs'"></SvgAngularjs>

        <!-- <SvgAwslightsail v-if="props.name=='awslightsail'"></SvgAwslightsail> -->
        
        <!-- <Svgaws-s3 v-if="props.name=='"></Svgaws-s3>
        <Svgaws-ses v-if="props.name=='"></Svgaws-ses>



        <Svgbeautiful-soup v-if="props.name=='"></Svgbeautiful-soup>


        <Svgbitbucket v-if="props.name=='"></Svgbitbucket>


        <Svgbitcoincash v-if="props.name=='"></Svgbitcoincash>


        <Svgbootstrap v-if="props.name=='"></Svgbootstrap>


        <Svgcapacitor v-if="props.name=='"></Svgcapacitor>


        <Svgcashtokens v-if="props.name=='"></Svgcashtokens>


        <Svgcelery v-if="props.name=='"></Svgcelery>


        <Svgcicd v-if="props.name=='"></Svgcicd>


        <Svgcss>

        <Svgdjango-channels v-if="props.name=='"></Svgdjango-channels>


        <Svgdjango-rest v-if="props.name=='"></Svgdjango-rest>


        <Svgdjango-rq v-if="props.name=='"></Svgdjango-rq>


        <Svgdjango v-if="props.name=='"></Svgdjango>


        <Svgdocker-compose v-if="props.name=='"></Svgdocker-compose>


        <Svgdocker v-if="props.name=='"></Svgdocker>


        <Svgelasticsearch v-if="props.name=='"></Svgelasticsearch>


        <Svgfabric v-if="props.name=='"></Svgfabric>


        <Svgfirebase v-if="props.name=='"></Svgfirebase>


        <Svggeoapify v-if="props.name=='"></Svggeoapify>


        <SvgGeolocation v-if="props.name=='"></SvgGeolocation>


        <Svggithub-actions v-if="props.name=='"></Svggithub-actions>


        <Svggithub v-if="props.name=='"></Svggithub>


        <Svgheroku v-if="props.name=='"></Svgheroku>


        <Svghighcharts v-if="props.name=='"></Svghighcharts>


        <Svgjava v-if="props.name=='"></Svgjava>


        <Svgjavascript v-if="props.name=='"></Svgjavascript>


        <Svgjquery v-if="props.name=='"></Svgjquery>


        <Svgleaflet v-if="props.name=='"></Svgleaflet>


        <Svglocalstorage v-if="props.name=='"></Svglocalstorage>


        <Svgmapbox v-if="props.name=='"></Svgmapbox>


        <Svgmjml v-if="props.name=='"></Svgmjml>


        <Svgnginx v-if="props.name=='"></Svgnginx>


        <Svgnuxt v-if="props.name=='"></Svgnuxt>


        <Svgopenai v-if="props.name=='"></Svgopenai>


        <Svgpandas v-if="props.name=='"></Svgpandas>


        <Svgphantomjs v-if="props.name=='"></Svgphantomjs>


        <Svgpillow v-if="props.name=='"></Svgpillow>


        <Svgpostresql v-if="props.name=='"></Svgpostresql>


        <Svgpyinvoke v-if="props.name=='"></Svgpyinvoke>


        <Svgpython v-if="props.name=='"></Svgpython>


        <Svgquasar v-if="props.name=='"></Svgquasar>


        <Svgreactjs v-if="props.name=='"></Svgreactjs>


        <Svgredis v-if="props.name=='"></Svgredis>


        <Svgrequests v-if="props.name=='"></Svgrequests>


        <Svgscrapy v-if="props.name=='"></Svgscrapy>


        <Svgselenium v-if="props.name=='"></Svgselenium>


        <Svgsmart-contract v-if="props.name=='"></Svgsmart-contract>


        <Svgstore v-if="props.name=='"></Svgstore>


        <Svgsupervisord v-if="props.name=='"></Svgsupervisord>


        <Svgtailwindcss v-if="props.name=='"></Svgtailwindcss>


        <Svgtelegram-bot v-if="props.name=='"></Svgtelegram-bot>


        <Svgtranscrypt v-if="props.name=='"></Svgtranscrypt>


        <Svgtwillio v-if="props.name=='"></Svgtwillio>


        <Svgvue v-if="props.name=='"></Svgvu v-if="props.name=='"e>/ -->

    </div>
</template>
<script setup>
const props = defineProps(['name'])
</script>