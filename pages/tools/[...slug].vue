
<script lang="ts" setup>
let tool = useState()
const {path} = useRoute()
await callOnce(async () => {
    const { data } = await useAsyncData(() => queryCollection(`tools`).path(path).first())
    tool.value = data
})

</script>
<template>
    <template v-if="tool">
        <Container>
            <Card class="absolute w-sceen h-full top-0 left-0">
                <div class="flex p-14 items-center text-justify w-[730px]">
                    <div class="flex flex-col w-full">
                        <div @click="$router.go(-1)" class="flex gap-2 group/left hover:text-secondary-300 z-20 hover:cursor-pointer">
                            <SvgLeft class="w-5 group-hover/left:-translate-x-2 transition-all ease-in-out"></SvgLeft>
                            <span>Check out more</span>
                        </div>
                        <img :src="`/DSoftwareArtist/img/user.png`" class="hidden md:block w-60 float-left z-10 -translate-x-4 -translate-y-8 " alt="Reamon" />
                    </div>
                    <div class="flex flex-col w-full h-full self-start gap-2">
                        <div class="flex gap-2 w-full text-2xl capitalize font-extrabold justify-between">
                            <div class="flex gap-2">
                                <div class="w-7">
                                    <Svg :tool="tool" :hoverable="false"></Svg>
                                </div>
                                {{ tool.title }}
                            </div>
                        </div>
                        <ContentRenderer :value="tool" class="text-[14px] font-light"></ContentRenderer>
                    </div>

                </div>
            </Card>
        </Container>
    </template>
    <template v-else>
        <Container class="flex items-center justify-center">
            <div class="w-screen h-full flex flex-col justify-center items-center gap-5">
                <div class="text-[32px] font-extrabold">
                    This page is in the works
                </div>
                <div @click="$router.go(-1)" class="flex gap-2 group/left hover:text-secondary-300 z-20 hover:cursor-pointer">
                    <SvgLeft class="w-5 group-hover/left:-translate-x-2 transition-all ease-in-out"></SvgLeft>
                    <span>Check out more</span>
                </div>
            </div>
        </Container>
    </template>
</template>