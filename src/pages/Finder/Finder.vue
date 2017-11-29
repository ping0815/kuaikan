<template>
  <div class="finder">
    <div class="finder-header">
      <header-white></header-white>
    </div>
    <div v-show="selectedBol">
      <div class="lunbotu">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="http://dummyimage.com/400x250/f279b2&text=使每老本非" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="http://dummyimage.com/400x250/f2ea79&text=看做就化每类" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="http://dummyimage.com/400x250/7994f2&text=离如青查无处" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="lunbotu-style"></div>
      <div class="finder-main">
        <div class="little-nav">
          <ul>
            <li>
              <span class="ranking"></span>
              <b>排行榜</b>
            </li>
            <li>
              <span class="new"></span>
              <b>新作榜</b>
            </li>
            <li>
              <span class="ending"></span>
              <b>完结榜</b>
            </li>
            <li @click="goClassify()">
              <span class="classify"></span>
              <b>分类</b>
            </li>
          </ul>
        </div>
        <!-- 每个模块分类 -->
        <div class="module" v-for="(item, index) in classify" :key="index">
          <div class="module-header">
            <h3>{{item.classify_title}}</h3>
            <span @click="showMore(item.classify_id)">更多 ></span>
          </div>
          <div class="module-content">
            <ul>
              <li v-for="(item, index) in arr.splice(index*6, 6)" :key="index" @click="showAll(item)">
                <img v-lazy="item.imgs.small" alt="">
                <h3>{{item.book_name}}</h3>
                <p>{{item.book_type}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!selectedBol">
      <div class="selected-content">
        <div class="selected-content-lists">
          <ul>
            <li>全部</li>
            <li v-for="(item, index) in classify" :key="item.id">{{item.classify_title}}</li>
          </ul>
        </div>
        <div class="selected-content-li">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderWhite from '@/components/Header-white/Header-white'
import DetailPage from '@/pages/Detail-page/Detail-page'
import More from '@/pages/More/More'
export default {
  components: {
    HeaderWhite,
    DetailPage,
    More
  },
  computed: {
    books () {
      return this.$store.state.books
    },
    classify () {
      return this.$store.state.classify
    },
    //根据分类筛选数据
    arr () {
      let arr = []
      for (let i = 0; i < this.classify.length; i++) {
        let k = 0
        for (let j = 0; j < this.books.length; j++) {
          if (this.classify[i].classify_id === this.books[j].classify_id) {
            k++
            arr.push(this.books[j])
            if (k === 6) {
              break
            }
          }
        }
      }
      // console.log(arr)
      return arr
    },
    selectedBol () {
      return this.$store.state.selectedBol
    }
  },
  methods: {
    showAll (item) {
      this.$store.dispatch('showAll', item)
      this.$router.push('/detail-page')
    },
    showMore (item) {
      this.$store.dispatch('showMore', item)
      this.$router.push('/more')
    },
    goClassify () {
      this.$store.state.selectedBol = false
      this.$store.state.selectedFenBol = true
    }
  }
}
</script>

<style>
.finder{
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 3.5rem;
}
.finder-header{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
/* 推荐页 */
.lunbotu{
  width: 100%;
  height: 250px;
}
.lunbotu-style{
  width: 100%;
  height: 35px;
  background-color: #fff;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  top: 220px;
}
.finder-main{
  width: 100%;
  padding-top: 5px;
}
.little-nav{
  width: 100%;
  height: 81px;
}
.little-nav li{
  list-style: none;
  float: left;
  width: 25%;
  text-align: center;
}
.little-nav li span{
  display: block;
  width: 50px;
  height: 50px;
  background-size: 100% 100%;
  margin-left: 20px;
  margin-bottom: 10px;
}
.ranking{
  background: url(./images/ranking.jpg) no-repeat;
}
.new{
  background: url(./images/new.jpg) no-repeat;
}
.ending{
  background: url(./images/ending.jpg) no-repeat;
}
.classify{
  background: url(./images/classify.jpg) no-repeat;
}
.module{
  width: 100%;
  height: 455px;
  margin-top: 15px;
}
.module-header{
  width: 100%;
  height: 3rem;
  position: relative;
}
.module-header h3{
  margin-left: 45%;
  font-weight: 400;
}
.module-header span{
  position: absolute;
  right: 5px;
  top: 3px;
  color: #aaa;
  /* text-decoration: none; */
}
.module-content{
  padding-left: 5px;
}
.module-content li{
  list-style: none;
  float: left;
  width: 33.3%;
}
.module-content li h3{
  font-weight: 400;
  width: 100%;
  overflow : hidden;
  white-space : nowrap;
  text-overflow :ellipsis;
}
.module-content li img{
  width: 120px;
  height: 150px;
}
/* 分类页 */
.selected-content{
  width: 100%;
  height: 600px;
  margin-top: 4rem;
}
.selected-content-lists{
  width: 100%;
  height: 5rem;
}
.selected-content-lists li{
  list-style: none;
  float: left;
  width: 14%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
}
.selected-content-li{
  width: 100%;
  height: 600px;
  background-color:pink;
}
</style>
