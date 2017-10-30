<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
</style>
