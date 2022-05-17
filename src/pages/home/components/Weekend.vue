<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "https://img.poibank.com/ApLXVOSGfdVy3Pc71vwN5uOcT9Q=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy90b3BpYy9maXJzdC90b3BpY19tb3VudGFpbi5qcGcifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjY5MCJ9fV0=",
          title: "澎湖雙心石滬",
          desc: "好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩",
        },
        {
          id: "002",
          imgUrl:
            "https://img.poibank.com/ApLXVOSGfdVy3Pc71vwN5uOcT9Q=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy90b3BpYy9maXJzdC90b3BpY19tb3VudGFpbi5qcGcifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjY5MCJ9fV0=",
          title: "澎湖雙心石滬",
          desc: "好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩",
        },
        {
          id: "003",
          imgUrl:
            "https://img.poibank.com/ApLXVOSGfdVy3Pc71vwN5uOcT9Q=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJkaXNjb3Zlci90dy90b3BpYy9maXJzdC90b3BpY19tb3VudGFpbi5qcGcifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjY5MCJ9fV0=",
          title: "澎湖雙心石滬",
          desc: "好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩好玩好玩好好玩",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title 
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;


.item-img-wrapper 
    overflow: hidden 
    height: 0
    padding-bottom: 33.9%
    .item-img 
        width: 100%;
.item-info 
    padding: 0.1rem;
    min-width: 0;
    .item-title 
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    .item-desc 
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();


</style>