<template>
  <div class="tijiao-page">
      <div class="tijiao-page-back" @click="goback()"><</div>
      <div class="tijiao-page-content">
          <span class="tijiao-bg"></span>
          <div class="tijiao-page-msg">
              <input type="text" id="name" placeholder="请输入昵称,最少3位字符" v-model="name"/><br/>
              <input type="password" placeholder="输入您的密码" id="szpsd" v-model="psd"/>
          </div>
          <p v-show="showBol">这个昵称已经有人用过咯~ヽ(^ω^)ﾉ  </p>
          <button class="login-page-login" @click="tijiao()">提交</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          name: '',
          psd: ''
      }
  },
  computed: {
      showBol () {
          return this.$store.state.showBol
      }
  },
  methods: {
      goback () {
          this.$router.go(-1)
      },
      tijiao () {
          this.$store.dispatch('tijiao', {name: this.name,psd:this.psd})
      }
  }
}
</script>

<style>
.tijiao-page{
    width: 100%;
    height: 100%;
    background-color: #ffd704;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
.tijiao-page-back{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
}
.tijiao-page-content{
    width: 100%;
    height: 18rem;
    margin-top: 3rem;
    position: relative;
    padding-top: 0.1px;
}
.tijiao-page-content p{
    width: 55%;
    font-size: .5rem;
    color: #f00;
    margin: .5rem auto;
}
.tijiao-bg{
    display: block;
    width: 60%;
    height: 5rem;
    background: url(./images/bg.png) no-repeat;
    background-size: 100% 100%;
    margin: 1rem auto;
}
.tijiao-page-msg{
    width: 75%;
    height: 6rem;
    border-radius: 15px;
    background-color: #fff;
    margin: 0 auto;
}
.tijiao-page-msg input{
    width: 80%;
    height: 48%;
    border: none;
    padding-left: 2rem;
    margin-left: 1rem;
}
.tijiao-page-msg input:focus{
    outline: none;
}
#name{
    margin-top: 1%;
    border-bottom: 1px solid #ddd;
    background: url(./images/user.png) no-repeat;
    background-position: 0px 7px; 
}
#szpsd{
    background: url(./images/lock.png) no-repeat;
    background-position: 0px 7px;
}
.tijiao-page-login{
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