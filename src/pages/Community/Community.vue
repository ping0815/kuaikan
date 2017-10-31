<template>
  <div class="community">
    <header-yellow></header-yellow>
    <div class="community-header">
      <ul>
        <li class="actived">热门</li>
        <li>最新</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderYellow from '@/components/Header-yellow/Header-yellow'
export default {
  components: {
    HeaderYellow
  }
}
</script>

<style>
.community{
  width: 100%;
  height: 100%;
}
.community-header{
  width: 100%;
  height: 2rem;
  background-color: #fff;
  position: fixed;
  top: 4rem;
}
.community-header li{
  list-style: none;
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 2rem;
}
.actived{
  border-bottom: 2px solid #fde23d;
}
</style>
