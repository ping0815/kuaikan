<template>
  <div>
    <header-more header-title="gengduo" back="true"></header-more>
    <div class="dataList">
      <ul>
        <li v-for="(item, index) in moreData" :key="index">
          <img v-lazy="item.imgs.small" alt="">
          <div class="data_title">{{item.book_name}}</div>
          <div class="data_type">{{item.book_type}}</div>
          <div class="data_other">
              <span class="data_fav">{{item.favorite}}</span>
              <span class="data_dis">{{item.discuss}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderMore from '@/components/Header-more/Header-more'
export default {
  components: {
      HeaderMore
  },
  computed: {
      moreData () {
          return this.$store.state.moreData
      }
  }
}
</script>

<style>
.dataList{
  width: 100%;
  margin-top: 3rem;
}
.dataList li{
  list-style: none;
  width: 100%;
  position: relative;
  border-top: 2px solid #ccc;
}
.dataList li img{
  width: 150px;
  height: 120px;
}
.data_title{
  position: absolute;
  top: 1rem;
  left: 170px;
}
.data_type{
  position: absolute;
  top: 2.4rem;
  left: 170px;
}
.data_other{
  position: absolute;
  bottom: .5rem;
  left: 170px;
}
</style>
