<template>
  <div class="detail-page">
    <!-- 返回关注 -->
    <div class="detail-header-back">
      <div class="detail-back" @click="goback()"></div>
      <div class="detail-guanzhu">
        <img src="./images/guanzhu.png" alt="">
      </div>
    </div>
    <!-- 封面 -->
    <div class="detail-header" v-bind:style="{backgroundColor: completeWorks.type_color}">
      <div class="detail-title">{{completeWorks.book_name}}</div>
      <div class="detail-type">{{completeWorks.book_type}}</div>
      <div class="detail-redu">总热度{{completeWorks.hot}}</div>
    </div>
    <!-- 导航 -->
    <div class="detail-nav">
      <ul>
        <li :class="{'active': particularsBol}" @click="changeParticularsBol()">详情</li>
        <li :class="{'active': selectionsBol}" @click="changeSelectionsBol()">选集</li>
      </ul>
    </div>
    <!-- 详情页 -->
    <div class="particulars" v-show="particularsBol">
      <!-- 简介 -->
      <div class="particulars_top">
        <div class="intro">作品简介：</div>
        <div class="content">{{completeWorks.book_detail}}</div>
        <div class="author">作者：{{completeWorks.book_editor}}</div>
        <div class="popular">
          <span class="popularityValues">人气值{{completeWorks.favorite}}</span>
          <span class="totalDisscuss">总评论{{completeWorks.discuss}}</span>
          <span class="followed">{{completeWorks.attention}}人已关注</span>
        </div>
      </div>
      <!-- 精彩点评 -->
      <div class="particulars_discuss">
        <div class="discuss_header">
          <div>精彩点评</div>
          <span></span>
        </div>
        <div class="discuss_content">
          <ul>
            <li v-for="(item, index) in completeWorks.particulars_discuss" :key="index">
              <div class="discuss_content_header">
                <img v-lazy="item.people_header" alt="">
                <div class="content_header-title">{{item.people_name}}</div>
                <span class="content_header_date">{{item.discuss_data}}</span>
                <span class="content_header_good">{{item.discuss_favorite}}</span>
              </div>
              <div class="discuss_content_content">{{item.discuss_content}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 选集页 -->
    <div class="selections" v-show="selectionsBol">
      <div class="selections_nav">
        <span>连载中（每日更新）</span>
        <span class="sort_no" v-show="sortNoBol" @click="changeSortNoBol()">倒序</span>
        <span class="sort_yes" v-show="sortYesBol" @click="changeSortYesBol()">正序</span>
      </div>
      <div class="selections_each">
        <ul>
          <li v-for="(item, index) in completeWorks.each" :key="index">
            <img v-lazy="item.imgs.big" alt="">
            <div class="each_title">{{item.each_title}}</div>
            <span class="each_time">{{item.each_date}}</span>
            <span class="each_favorite">{{item.favorite}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 开始阅读 -->
    <div class="reading">
      <div class="reading-left">你是我青春的独家记忆</div>
      <div class="reading-right">开始阅读</div>
    </div>
  </div>
</template>

<script>
function orderBy (arr, type, bol) {
  if (bol === undefined) {
    bol = true
  }
  function sortNumber (a, b) {
    if (bol) {
      if (type) {
        return Date.parse(a[type]) - Date.parse(b[type])
      } else {
        return a - b
      }
    } else {
      if (type) {
        return Date.parse(b[type]) - Date.parse(a[type])
      } else {
        return b - a
      }
    }
  }
  return arr.sort(sortNumber)
}
export default {
  data () {
    return {
      particularsBol: true,
      selectionsBol: false,
      sortNoBol: true,
      sortYesBol: false
    }
  },
  computed: {
    completeWorks () {
      if (this.sortNoBol) {
        orderBy(this.$store.state.completeWorks.each, 'each_date', false)
      } else {
        orderBy(this.$store.state.completeWorks.each, 'each_date', true)
      }
      return this.$store.state.completeWorks
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    changeParticularsBol () {
      this.particularsBol = true
      this.selectionsBol = false
    },
    changeSelectionsBol () {
      this.particularsBol = false
      this.selectionsBol = true
    },
    changeSortNoBol () {
      this.sortNoBol = false
      this.sortYesBol = true
    },
    changeSortYesBol () {
      this.sortNoBol = true
      this.sortYesBol = false
    }
  }
}
</script>

<style>
.detail-page{
  width: 100%;
  height: 100%;
  margin-bottom: 3.5rem;
}
.detail-header-back{
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 1rem;
  z-index: 7;
}
.detail-back{
  width: 1rem;
  height: 1.5rem;
  position: absolute;
  top: 8%;
  left: 5%;
  background: url(./images/back.png);
  background-size: 100% 100%;
}
.detail-guanzhu{
  width: 5.5rem;
  height: 2rem;
  position: absolute;
  top: 7%;
  right: 7%;
  background-color: #fde23d;
  border-radius: 20px;
}
.detail-guanzhu img{
  width: 3rem;
  height: 1.5rem;
  margin-top: 0.25rem;
  margin-left: 1.25rem;
}
.detail-header{
  width: 100%;
  height: 200px;
  position: relative;
  background-size: 100% 100%;
}
.detail-title{
  position: absolute;
  bottom: 20%;
  left: 5%;
  font-size: 1.2rem;
}
.detail-type{
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-size: 1rem;
}
.detail-redu{
  position: absolute;
  right: 5%;
  bottom: 5%;
  font-size: .8rem;
}
.detail-nav{
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  border-bottom: 0.05rem solid #eee;
}
.detail-nav li{
  list-style: none;
  float: left;
  width: 30%;
  height: 100%;
  line-height: 2.5rem;
  text-align: center;
  margin: 0 10%;
}
.active{
  border-bottom: 2px solid #fde23d;
}
/* 详情页 */
.particulars{
  width: 90%;
}
.particulars_top{
  width: 100%;
  padding: 1rem 1.1rem 1rem 1.2rem;
  border-bottom: .3rem solid #eee;
}
.intro{
  margin-bottom: 1rem;
}
.content{
  width: 100%;
  height: 150px;
  line-height: 1.9rem;
  overflow: hidden;
  text-indent: 2rem;
}
.author{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.popular{
  width: 100%;
}
.popular span{
  margin-right: .5rem;
  font-size: 0.8rem;
}
.popularityValues{
  background: url(./images/popular.png) no-repeat;
  padding-left: 1rem;
}
.totalDisscuss{
  background: url(./images/discuss.png) no-repeat;
  padding-left: 1.2rem;
}
.followed{
  margin-left: .5rem;
  background: url(./images/followed.png) no-repeat;
  padding-left: 1.6rem;
}
/* 点评 */
.particulars_discuss{
  width: 100%;
  padding: 1rem 1.1rem 0rem 1.2rem;
}
.discuss_header{
  width: 100%;
  height: 2.5rem;
  position: relative;
}
.discuss_header div{
  line-height: 2.5rem;
}
.discuss_header span{
  position: absolute;
  right: 0;
  top: .5rem;
  display: inline-block;
  width: 5rem;
  height: 2rem;
  background: url(./images/contribute.png);
  background-size: 100% 100%;
}
.discuss_content li{
  list-style: none;
  margin-top: 1rem;
}
.discuss_content_header{
  width: 100%;
  height: 3rem;
  position: relative;
  margin-bottom: 1rem;
}
.discuss_content_header img{
  border-radius: 50%;
}
.content_header-title{
  position: absolute;
  top: 0;
  left: 60px;
}
.content_header_date{
  position: absolute;
  bottom: 0;
  left: 60px;
}
.content_header_good{
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  background: url(./images/praise.png) no-repeat;
  background-size: 1rem 1rem;
  padding-left: 1.2rem;
}
.discuss_content_content{
  width: 100%;
  height: 150px;
  line-height: 1.9rem;
  overflow: hidden;
}
/* 选集 */
.selections{
  width: 90%;
  padding: 1rem 1.1rem 1rem 1.2rem;
  background-color: #fff;
}
.selections_nav{
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
}
.sort_no{
  position: absolute;
  right: 0rem;
  display: inline-block;
  width: 3rem;
  background: url(./images/sort_no.png) no-repeat;
  background-size: 1rem 1rem;
  background-position-x: 2.2rem; 
}
.sort_yes{
  position: absolute;
  right: 0rem;
  display: inline-block;
  width: 3rem;
  background: url(./images/sort_yes.png) no-repeat;
  background-size: 1rem 1rem;
  background-position-x: 2.2rem;
}
.selections_each li{
  list-style: none;
  margin-bottom: 1.5rem;
  position: relative;
}
.selections_each li:last-of-type{
  margin-bottom: 0;
}
.selections_each li img{
  width: 150px;
  height: 100px;
}
.each_title{
  position: absolute;
  top: .3rem;
  left: 10rem;
}
.each_time{
  position: absolute;
  bottom: .3rem;
  left: 10rem;
}
.each_favorite{
  position: absolute;
  bottom: .3rem;
  right: 0;
  display: inline-block;
  background: url(./images/praise.png) no-repeat;
  background-size: 1rem 1rem;
  padding-left: 1.2rem;
}
.reading{
  width: 100%;
  height: 3.5rem;
  background-color: #E0EEEE;
  position: fixed;
  bottom: 0;
}
.reading div{
  float: left;
  font-size: .8rem;
}
.reading-left{
  display: inline-block;
  width: 61%;
  height: 100%;
  line-height: 3.5rem;
  padding-left: 2rem;
}
.reading-right{
  display: inline-block;
  width: 30%;
  height: 100%;
  background-color: #fde23d;
  text-align: center;
  line-height: 3.5rem;
}
</style>

