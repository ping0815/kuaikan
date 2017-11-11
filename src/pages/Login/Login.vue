<template>
  <div class="login-page">
      <div class="login-page-header">
          <span class="back" @click="goBack()"><</span>
          <span class="forget">忘记密码</span>
      </div>
      <div class="login-page-content">
          <span class="login-bg"></span>
          <div class="login-page-msg">
              <input type="text" id="phone" placeholder="支持中国大陆" v-model="phone"/><br/>
              <input type="password" placeholder="8-30位数字或英文" id="password" v-model="psd"/>
          </div>
          <p v-show="phoneErrBol">手机号或者验证码不正确φ(>ω<*) </p>
          <button class="login-page-login" @click="login()">登录</button>
      </div>
      <div class="login-page-zhuce" @click="zhuce()">立即注册</div>
      <div class="login-other">其他方式登录</div>
      <div class="login-page-other">
          <ul>
              <li>
                  <span class="qq"></span>
                  <p>QQ</p>
              </li>
              <li>
                  <span class="weibo"></span>
                  <p>微博</p>
              </li>
              <li>
                  <span class="weixin"></span>
                  <p>微信</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data () {
      return {
          phone: '',
          psd: ''
      }
  },
  computed: {
      phoneErrBol () {
          return this.$store.state.phoneErrBol
      }
  },
  methods: {
      goBack () {
          this.$router.go(-1)
      },
      zhuce () {
          this.$router.push('./zhuce')
      },
      login () {
        let phone = this.phone
        let psd = this.psd
        this.$store.dispatch('login', {phone: phone, psd: psd})
        // if (!(/^1[3578]\d{9}$/.test(phone))) {
        //     this.$store.state.phoneErrBol = true
        // } else {
        //     this.$store.dispatch('login', {phone: phone, psd: psd})
        // }
      }
  }
}
</script>

<style>
.login-page{
    width: 100%;
    height: 100%;
    background-color: #ffd704;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
.login-page-header{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
}
.back{
    margin-left: 1rem;
}
.forget{
    float: right;
    margin-right: 1rem;
    font-size: .8rem;
}
.login-page-content{
    width: 100%;
    height: 21rem;
    margin-top: 2rem;
    position: relative;
    padding-top: 0.1px;
}
.login-page-content p{
    width: 50%;
    font-size: .5rem;
    color: #f00;
    margin: .5rem auto;
}
.login-bg{
    display: block;
    width: 60%;
    height: 10rem;
    background: url(./images/login_bg.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}
.login-page-msg{
    width: 75%;
    height: 6rem;
    border-radius: 15px;
    background-color: #fff;
    margin: 0 auto;
}
.login-page-msg input{
    width: 80%;
    height: 48%;
    border: none;
    padding-left: 2rem;
    margin-left: 1rem;
}
.login-page-msg input:focus{
    outline: none;
}
#phone{
    margin-top: 1%;
    border-bottom: 1px solid #ddd;
    background: url(./images/phone.png) no-repeat;
    background-position: 0px 7px; 
}
#password{
    background: url(./images/lock.png) no-repeat;
    background-position: 0px 7px;
}
.login-page-login{
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
.login-page-zhuce{
    margin: 1rem 41%;
    color: #783a00;
}
.login-other{
    font-size: .8rem;
    color: #d0ab2a;
    margin: 1rem 30%;
}
.login-other::before{
    content: "—— "
}
.login-other::after{
    content: " ——"
}
.login-page-other{
    width: 100%;
    height: 3rem;
    margin-top: 3rem;
}
.login-page-other li{
    float: left;
    width: 33.3%;
    list-style: none;
    text-align: center;
}
.login-page-other li span{
    display: inline-block;
    background-size: 100% 100%;
    width: 2rem;
    height: 2rem;
}
.qq{
    background: url(./images/qq.png) no-repeat;
}
.weibo{
    background: url(./images/weibo.png) no-repeat;
}
.weixin{
    background: url(./images/weixin.png) no-repeat;
}
</style>

