<template>
  <div class="header-white">
      <span class="sex"></span>
      <div class="selected">
        <div class="tuijian" :class="{'active2': selectedBol}">推荐</div>
        <div class="fenlei">分类</div>
      </div>
      <span class="search1"></span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectedBol: true
    }
  }
}
</script>

<style>
.header-white{
  width: 100%;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
}
.sex{
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  background: url(./images/girl.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 1.2rem;
  left: 2rem;
}
.selected{
  display: inline-block;
  width: 30%;
  height: 2rem;
  line-height: 2rem;
  position: absolute;
  left: 8rem;
  top: 1rem;
  background: #515151;
  color: #fff;
  border-radius: 15px;
}
.selected div{
  display: inline-block;
  width: 43%;
  height: 95%;
  float: left;
  text-align: center;
}
.tuijian{
  margin-left: .5rem;
}
.fenlei{
  margin-left: .5rem;
}
.active2{
  background: #fff;
  color: #fde23d;
  border-radius: 20px;
}
.search1{
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(./images/search.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 5.5rem;
  top: 1rem;
}
</style>