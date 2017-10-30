<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  created () {
    //获取数据
    this.$store.dispatch('setBooks')
  },
  components: {
    TabBar
  }
}
</script>

<style>
</style>
