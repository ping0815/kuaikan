<template>
  <div id="app">
    <tab-bar v-show="tabBarShow"></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  created () {
    //获取数据
    this.$store.dispatch('setBooks')
    this.$store.dispatch('setClassify')
  },
  components: {
    TabBar
  },
  computed: {
    tabBarShow () {
      return this.$store.state.tabBarShow
    }
  }
}
</script>

<style>
img[lazy=loading]{
  background: url(./pages/loading/loading.gif);
  background-size: 100% 100%;
}
</style>
