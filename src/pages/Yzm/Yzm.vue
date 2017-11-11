<template>
  <div class="yzm-page">
      <div class="yzm-page-back" @click="goback()"><</div>
      <div class="yzm-page-content">
          <span class="yzm-bg"></span>
          <div class="yzm-page-msg">
              <input type="text" id="yzm" placeholder="请输入验证码"/>
          </div>
          <button class="login-page-login" @click="tijiao()">下一步</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          
      }
  },
  methods: {
      goback () {
          this.$router.go(-1)
      },
      tijiao () {
          this.$router.push('./tijiao')
      }
  }
}
</script>

<style>
.yzm-page{
    width: 100%;
    height: 100%;
    background-color: #ffd704;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
.yzm-page-back{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
}
.yzm-page-content{
    width: 100%;
    height: 15rem;
    margin-top: 3rem;
    position: relative;
    padding-top: 0.1px;
}
.yzm-bg{
    display: block;
    width: 60%;
    height: 5rem;
    background: url(./images/bg.png) no-repeat;
    background-size: 100% 100%;
    margin: 1rem auto;
}
.yzm-page-msg{
    width: 75%;
    height: 3rem;
    border-radius: 15px;
    background-color: #fff;
    margin: 0 auto;
}
.yzm-page-msg input{
    width: 80%;
    height: 100%;
    border: none;
    padding-left: 1rem;
    margin-left: 1rem;
}
.yzm-page-msg input:focus{
    outline: none;
}
.yzm-page-login{
    width: 75%;
    height: 3rem;
    background-color: #323e48;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 15px;
    position: absolute;
    bottom: 0;
    left: 12.5%;
}
</style>