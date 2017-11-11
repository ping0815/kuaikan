<template>
  <div class="zhuce-page">
      <div class="zhuce-page-back" @click="goback()"><</div>
      <div class="zhuce-page-content">
          <span class="zhuce-bg"></span>
          <div class="zhuce-page-msg">
              <input type="text" id="phone" placeholder="请输入您的手机号" v-model="phone"/>
          </div>
          <button class="login-page-login" @click="yzm()">获取验证码</button>
      </div>
      <p class="xieyi">注册即视为同意<a href="">《用户协议》</a><a href="">《隐私协议》</a><a href="">《未成年人保护协议》</a></p>
  </div>
</template>

<script>
export default {
  data () {
      return {
          phone: ''
      }
  },
  methods: {
      goback () {
          this.$router.go(-1)
      },
      yzm () {
          this.$store.dispatch('getPhone', this.phone)
          this.$router.push('./yzm')
      }
  }
}
</script>

<style>
.zhuce-page{
    width: 100%;
    height: 100%;
    background-color: #ffd704;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
.zhuce-page-back{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
}
.zhuce-page-content{
    width: 100%;
    height: 15rem;
    margin-top: 3rem;
    position: relative;
    padding-top: 0.1px;
}
.zhuce-bg{
    display: block;
    width: 60%;
    height: 5rem;
    background: url(./images/bg.png) no-repeat;
    background-size: 100% 100%;
    margin: 1rem auto;
}
.zhuce-page-msg{
    width: 75%;
    height: 3rem;
    border-radius: 15px;
    background-color: #fff;
    margin: 0 auto;
}
.zhuce-page-msg input{
    width: 80%;
    height: 100%;
    border: none;
    padding-left: 2rem;
    margin-left: 1rem;
}
.zhuce-page-msg input:focus{
    outline: none;
}
#phone{
    margin-top: 1%;
    background: url(./images/phone.png) no-repeat;
    background-position: 0px 7px; 
}
.zhuce-page-login{
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
.xieyi{
    width: 100%;
    text-align: center;
    font-size: .5rem;
    margin-top: 1rem;
    color: #6d6b61;
}
.xieyi a{
    text-decoration: none;
    color: #5da4bd;
}
</style>

