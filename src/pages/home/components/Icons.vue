<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "https://cdn-icons-png.flaticon.com/512/1090/1090663.png",
          desc: "景點門票",
        },
        {
          id: "0002",
          imgUrl:
            "https://cdn-icons-png.flaticon.com/512/3163/3163752.png",
          desc: "滑雪季節",
        },
        {
          id: "0003",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/5513/5513347.png",
          desc: "泡溫泉",
        },
        {
          id: "0004",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/5190/5190782.png",
          desc: "動植物園",
        },
        {
          id: "0005",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/1034/1034795.png",
          desc: "一日遊",
        },
        {
          id: "0006",
          imgUrl:
            "https://cdn-icons-png.flaticon.com/512/3069/3069318.png",
          desc: "必遊榜單",
        },
        {
          id: "0007",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3175/3175239.png",
          desc: "自然風光",
        },
        {
          id: "0008",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/3524/3524939.png",
          desc: "全部",
        },
        {
          id: "0009",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/1034/1034795.png",
          desc: "一日遊",
        }],
    }
  },
  computed: {
      pages () {
          const pages = []
          this.iconList.forEach((item,index) =>{
              const page = Math.floor(index/8)
              if(!pages[page]) {
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container 
  height: 0;
  padding-bottom: 50%;

.icons 
  margin-top: .1rem 
  .icon 
    position: relative;
    overflow: hidden;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;

    .icon-img 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content 
        display: block;
        margin: 0 auto;
        height: 100%;
      
    

    .icon-desc 
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: #333;
      ellipsis()
    
  
</style>