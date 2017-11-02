<template>
  <div class="home-main">
    <!-- 头部 -->
    <header-yellow></header-yellow>
    <div class="home-content">
      <div class="nav-hidden">
      <div class="nav-day">
          <ul>
          <li v-for="(item, index) in weekday" :key="index" :class="{'active': activeNow===item.time_id}" @click="changeActiveIndex(item.time_id)">{{item.time_name}}</li>
        </ul>
      </div>
      </div>
      <div class="each-main">
        <div class="each-content" v-for="(item, index) in activeTimeBook" :key="index">
          <div class="each-header">
            <span class="type" v-bind:style="{backgroundColor: item.type_color}">{{item.book_type}}</span>
            <h2 class="name">{{item.book_name}}</h2>
            <span class="all" @click="showAll(item)"><router-link to="/detail-page">全集></router-link></span>
            <p>作者：{{item.book_editor}}</p>
          </div>
          <img v-lazy="item.each[item.each.length-1].imgs.small" alt="">
          <div class="img-bottom">
            <h3>{{item.each[item.each.length-1].each_title}}</h3>
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
import HeaderYellow from '@/components/Header-yellow/Header-yellow'
import DetailPage from '@/pages/Detail-page/Detail-page'
// 计算从今天开始之前的一周
let arr = [];
function Time () {
  var now = new Date();
  var time = now;
  var day, old;
  for (var i = 1; i <= 7; i++) {
    day = now.getTime() - i*24*60*60*1000;
    old = new Date(day);
    for (var j = old; j < now.getTime(); j += 24*60*60*1000) {
      arr.push(time.getDay())
      time = new Date(j);
    }
  }
}
function computationTime () {
  Time()
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === new Date().getDay()) {
      arr[i] = '今天';
    }
    if (arr[i] === new Date(new Date().getTime() - 24*60*60*1000).getDay()) {
      arr[i] = '昨天'
    }
    switch(arr[i]) {
      case 0:
        arr[i] = '周日';
        break;
      case 1:
        arr[i] = '周一';
        break;
      case 2:
        arr[i] = '周二';
        break;
      case 3:
        arr[i] = '周三';
        break;
      case 4:
        arr[i] = '周四';
        break;
      case 5:
        arr[i] = '周五';
        break;
      case 6:
        arr[i] = '周六';
        break;
    }
  }
  return arr;
}
export default {
  data () {
    return {
      activeNow: 1
    }
  },
  computed: {
    books () {
      return this.$store.state.books
    },
    weekday () {
      computationTime()
      let time = []
      for (let i = 0; i < arr.length; i++) {
        let obj = {
          "time_id": i,
          "time_name": arr[i]
        }
        if (time.length < 7) {
         time.push(obj) 
        }
      }
      return time
    },
    //当前激活的是哪天的分类数据
    activeTimeBook () {
      let book = []
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].time_id === this.activeNow) {
          book.push(this.books[i])
        }
      }
      return book
    }
  },
  components: {
    HeaderYellow,
    DetailPage
  },
  methods: {
    changeActiveIndex (id) {
      this.activeNow = id
    },
    showAll (item) {
      this.$store.dispatch('showAll', item)
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
.nav-hidden{
  position: fixed;
  top: 4rem;
  overflow: hidden;
  width: 100%;
  height: 3rem;
}
.nav-day{
  position: fixed;
  top: 4rem;
  width: 100%;
  height: 3rem;
  background: #fff;
  line-height: 3rem;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  text-align: center;
}
.nav-day ul{
  list-style: none;
  width: 437.5px;
  height: 100%;
}
.nav-day ul li{
  float: right;
  width: 62.5px;
  height: 100%;
}
.each-main{
  margin-top: 7rem;
  margin-bottom: 3.5rem;
}
.each-header{
  padding: .5rem 1rem;
}
.each-header .type{
  display: inline-block;
  width: 2.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 5px;
  color: #fff;
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
.each-content:last-of-type{
  border-bottom: none;
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
  overflow : hidden;
  white-space : nowrap;
  text-overflow :ellipsis;
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
.active{
  border-bottom: 2px solid #fde23d;
}
</style>
