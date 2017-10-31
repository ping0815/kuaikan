<template>
  <div class="header-yellow">
      <span class="game"></span>
      <div class="select">
        <div class="guanzhu">关注</div>
        <div class="remen" :class="{'active': selectBol}">热门</div>
      </div>
      <span class="search"></span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectBol: true
    }
  }
}
</script>

<style>
.header-yellow{
  width: 100%;
  height: 2rem;
  background: #fde23d;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
}
.game{
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background: url(./images/game.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 1.2rem;
  left: 2rem;
}
.select{
  display: inline-block;
  width: 30%;
  height: 2rem;
  line-height: 2rem;
  position: absolute;
  left: 8rem;
  top: 1rem;
  background: #000;
  color: #fde23d;
  border-radius: 15px;
}
.select div{
  display: inline-block;
  width: 43%;
  height: 95%;
  float: left;
  text-align: center;
}
.guanzhu{
  margin-left: .5rem;
}
.remen{
  margin-left: .5rem;
}
.active{
  background: #fde23d;
  color: #000;
  border-radius: 20px;
}
.search{
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background: url(./images/search.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 5.5rem;
  top: 1.2rem;
}
</style>

