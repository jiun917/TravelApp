<template >
<div>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe637;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe631;</span>   
            輸入城市/景點/遊玩主題
        </div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe858;</span>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>


<style lang="stylus" scoped> 
@import  '~@/assets/styles/varibles.styl'
.header
    display: flex 
    line-height: .86rem
    height: .86rem 
    background-color: $bgColor
    color: #fff
    .header-left 
        width: .64rem 
        float: left 
        .back-icon 
            text-align: center 
            font-size: .4rem
    .header-input 
        flex: 1
        height:.64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background-color #fff
        border-radius: .1rem
        color: #ccc
    .header-right 
         width: 1.24rem
         float: right
         text-align: center
         .arrow-icon 
            font-size: .4rem 
            margin-left: -0.15rem
</style>
