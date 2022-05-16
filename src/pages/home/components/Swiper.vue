<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" >
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true 
            },
            swiperList: [{
                id: '0001',
                imgUrl:'https://sites.google.com/site/gougouyaolaiyaoqu/_/rsrc/1429552621181/tu-pian/tai-wan-feng-jing-tu-pian/222913ein3c26667i6ni3t.jpg?height=200&width=640'
            },{
                id:'0002',
                imgUrl:'https://sites.google.com/site/gougouyaolaiyaoqu/_/rsrc/1429167104093/01tai-bei-jing-dian/xin-yi-qu/601_0cfd841f.jpg?height=200&width=640'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active 
        background-color #fff
    .wrapper 
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background-color #eee
        .swiper-image 
            height:130px
            width:100%
</style>