<template>
  <div class="header">
    城市選擇
    <router-link to="/">
      <div class="iconfont header-back">&#xe637;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header {
  position: relative;
  overflow: hidden;
  height: $headerHight
  line-height: $headerHight
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff
  }
}
</style>