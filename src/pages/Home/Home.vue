<template>
  <div class="home-main">
    <!-- 头部 -->
    <div class="home-header">
      <span class="game"></span>
      <div class="select">
        <div class="guanzhu">关注</div>
        <div class="remen" :class="{'active': selectBol}">热门</div>
      </div>
      <span class="search"></span>
    </div>
    <div class="home-content">
      <div class="nav-day">
          <ul>
          <li>周一</li>
          <li>周二</li>
          <li>周三</li>
          <li>周四</li>
          <li>周五</li>
          <li>周六</li>
          <li>周日</li>
        </ul>
      </div>
      <div class="each-main">
        <div class="each-content" v-for="(item, index) in books" :key="index" v-if="index < 8">
          <div class="each-header">
            <span class="type">{{item.book_type}}</span>
            <h2 class="name">{{item.book_name}}</h2>
            <span class="all"><a href="">全集></a></span>
            <p>作者：{{item.book_editor}}</p>
          </div>
          <img :src=item.imgs.small alt="">
          <div class="img-bottom">
            <h3>{{item.book_name}}</h3>
            <span class="favorite"><span></span>{{item.favorite}}</span>
            <span class="discuss"><span></span>{{item.discuss}}</span>
          </div>
        </div>
        <a class="skip"><img src="./images/skip.jpg"/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectBol: true
    }
  },
  computed: {
    books () {
      return this.$store.state.books
    }
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
.home-main{
  width: 100%;
  height: 100%;
  position: relative;
}
.home-header{
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
.nav-day{
  position: fixed;
  top: 4rem;
  width: 100%;
  height: 3rem;
  background: #fff;
  line-height: 3rem;
  overflow: hidden;
  text-align: center;
}
.nav-day ul{
  list-style: none;
  width: 100%;
  height: 100%;
}
.nav-day ul li{
  float: left;
  width: 16.5%;
}
.each-main{
  margin-top: 7rem;
  margin-bottom: 5rem;
}
.each-header{
  padding: .5rem 1rem;
}
.each-header .type{
  display: inline-block;
}
.each-header .name{
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: .3rem;
  margin-left: .5rem;
}
.each-header .all{
  float: right;
}
.each-header .all a{
  color: #aaa;
  text-decoration: none;
}
.each-content img{
  width: 100%;
  height: 250px;
}
.each-content{
  margin-bottom: .5rem;
  border-bottom: .3rem solid #ccc;
}
.img-bottom{
  height: 3rem;
  margin-top: .5rem;
  padding-left: .5rem;
}
.img-bottom h3{
  font-size: 1rem;
  font-weight: 400;
  display: inline-block;
  margin-right: 3.5rem;
  width: 150px;
}
.favorite span{
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: url(./images/favorite.jpg) no-repeat;
  background-size: 100% 100%;
}
.discuss span{
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: url(./images/discuss.jpg) no-repeat;
  background-size: 100% 100%;
}
.skip{
  display: block;
  width: 100%;
  height: 7rem;
  background-color: #f7f9fa;
}
.skip img{
  width: 220px;
  height: 65px;
  margin-top: 1.5rem;
  margin-left: 80px;
}
</style>
