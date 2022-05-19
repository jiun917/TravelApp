<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
          <div class="title border-topbottom">當前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">熱門城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                 <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
              <div class="item border-bottom">阿拉爾</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .border-topbottom 
        &:before
            border-color: #ccc 
        &:after 
            border-color: #ccc 
    .border-bottom 
        &:before
            border-color: #ccc 
    .list 
        overflow: hidden
        position: absolute 
        top: 1.68rem
        left: 0
        right: 0
        bottom: 0
        .title 
            line-height: .54rem 
            background-color: #eee
            padding-left: .2rem
            font-size: .26rem
            color: #666
        .button-list 
            padding: .1rem .6rem .1rem .1rem
            overflow: hidden 
            .button-wrapper 
                width: 33.33% 
                float: left 
                .button 
                    margin: .1rem 
                    padding: .1rem
                    text-align: center 
                    border: .02rem solid #666
                    border-radius: .06rem

        .item-list 
            .item 
                line-height: .76rem 
                padding-left : .2rem

</style>