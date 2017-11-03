<template>
  <header class="header-more">
      <span v-if="back=='true'" class="backBtn" @click="goback()"></span>
      <div class="header-content">
          {{headerTitle}}
          <slot></slot>
      </div>
  </header>
</template>

<script>
export default {
  props: ['headerTitle', 'back'],
  methods: {
      goback () {
          this.$store.state.moreData = []
          this.$router.go(-1)
      }
  }
}
</script>

<style>
.header-more{
    width: 100%;
    height: 3rem;
    background-color: #eee;
    line-height: 3rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 6;
}
.backBtn{
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: url(./images/back.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 1.5rem;
    top: .75rem;
}
</style>

