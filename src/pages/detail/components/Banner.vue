<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg">
            <div class="banner-info">
                <div class="banner-title">
                    大連海洋世界
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon ">&#xe640;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs:['https://img.poibank.com/m9dGF9zIG5OSySP5Qxd0qGLkBUY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvNTEwNDYvY292ZXIvMmE5ZjI2OWMtZmM5NS00OWMyLTg2ZTUtNjg1MjE4NjNmYjFmIn0seyJyZXNpemUiOnsid2lkdGgiOiI1Nzc4In19XQ==','https://img.poibank.com/m9dGF9zIG5OSySP5Qxd0qGLkBUY=/W3siZm9ybWF0Ijoid2VicCJ9LHsia2V5Ijoiam91cm5hbHMvNTEwNDYvY292ZXIvMmE5ZjI2OWMtZmM5NS00OWMyLTg2ZTUtNjg1MjE4NjNmYjFmIn0seyJyZXNpemUiOnsid2lkdGgiOiI1Nzc4In19XQ==']
        }
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true
        },
        handleGallaryClose() {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner 
        position: relative
        overflow: hidden 
        height: 0
        padding-bottom: 55%
        .banner-img 
            width: 100%
            height: 4.5rem
        .banner-info 
            display: flex
            position: absolute
            left: 0
            right: 0 
            bottom: 0
            line-height: .6rem
            color: #fff
            background-color: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title 
                flex: 1
                font-size: .32rem 
                padding: 0 .2rem
            .banner-number 
                margin-top: .14rem
                padding: 0 .4rem 
                line-height: .32rem 
                height: .4rem
                border-radius: .2rem 
                background: rgba(0,0,0,.8)
                font-size: .24rem
                .banner-icon 
                    font-size: .24rem 
                
</style>
