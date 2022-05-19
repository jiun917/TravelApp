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
      <router-link to="/city">
        <div class="header-right">
          {{ this.city }}
          <span class="iconfont arrow-icon">&#xe858;</span>
      </div>
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String,
  },
};
</script>


<style lang="stylus" scoped>@import '~@/assets/styles/varibles.styl';
@import '@/assets/styles/varibles.styl'
.header {
  display: flex;
  line-height: $headerHight
  height: $headerHight
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff
    .arrow-icon {
      font-size: 0.4rem;
      margin-left: -0.15rem;
    }
  }
}
</style>
