<template>
  <div>
    <div class="title">熱銷推薦</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看詳情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data () {
      return {
          recommendList: [{
          id:'001',
          imgUrl:'https://img.poibank.com/BShvWdIPCIU9PokS37F_HR5tqX8=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy9wb3B1bGFyX2l0aW5lcmFyeS84ZGZmZWQ4YS1kYjRkLTRmMzQtYmJhMi1iYzc3MzA2NjkwY2EifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjI3MCJ9fV0=',
          title:'澎湖雙心石滬',
          desc:'好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩',

      },{
          id:'002',
          imgUrl:'https://img.poibank.com/BShvWdIPCIU9PokS37F_HR5tqX8=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy9wb3B1bGFyX2l0aW5lcmFyeS84ZGZmZWQ4YS1kYjRkLTRmMzQtYmJhMi1iYzc3MzA2NjkwY2EifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjI3MCJ9fV0=',
          title:'澎湖雙心石滬',
          desc:'好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩',

      },{
          id:'003',
          imgUrl:'https://img.poibank.com/BShvWdIPCIU9PokS37F_HR5tqX8=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy9wb3B1bGFyX2l0aW5lcmFyeS84ZGZmZWQ4YS1kYjRkLTRmMzQtYmJhMi1iYzc3MzA2NjkwY2EifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjI3MCJ9fV0=',
          title:'澎湖雙心石滬',
          desc:'好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩',

      }]
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title {
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
}

.item 
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img 
    height: 1.7rem
    width: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title 
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc 
      line-height: .4rem 
      color: #ccc
      ellipsis()
    .item-button 
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300 
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>