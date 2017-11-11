<template>
  <div class="mine">
    <div class="mine-bg"></div>
    <div class="mine-main">
      <div class="login" @click="login()">
        <div class="login-header"></div>
        <p class="login-txt">{{userInfo.name}}</p>
      </div>
      <div class="list-all">
        <div class="list">
          <ul>
            <li>
              <span class="msg img"></span>
              <b class="title">我的消息</b>
              <span class="more">></span>
            </li>
            <li>
              <span class="money img"></span>
              <b class="title">我的钱包</b>
              <span class="more">></span>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>
              <span class="heart img"></span>
              <b class="title">我的关注</b>
              <span class="more">></span>
            </li>
            <li>
              <span class="star img"></span>
              <b class="title">我的收藏</b>
              <span class="more">></span>
            </li>
            <li>
              <span class="clock img"></span>
              <b class="title">浏览历史</b>
              <span class="more">></span>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>
              <span class="playgame img"></span>
              <b class="title">游戏中心</b>
              <span class="more">></span>
            </li>
            <li>
              <span class="market img"></span>
              <b class="title">快看商城</b>
              <span class="more">></span>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>
              <span class="time img"></span>
              <b class="title">今日更新</b>
              <span class="more">></span>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>
              <span class="setting img"></span>
              <b class="title">设置</b>
              <span class="more">></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      if (this.$store.state.userInfo.name !== '登录') {
        this.$router.push('./')
      } else {
        this.$router.push('./login')
      }
    }
  },
  computed:{
    userInfo () {
          console.log(this.$store.state.userInfo)
          return this.$store.state.userInfo
      }
  }
}
</script>

<style>
.mine{
  width: 100%;
  height: 100%;
  margin-bottom: 3.5rem;
  position: relative;
}
.mine-bg{
  width: 100%;
  height: 150px;
  background: url(./images/mine_bg.jpg);
  background-size: 100% 100%;
}
.mine-main{
  width: 100%;
  height: 650px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: absolute;
  top: 135px;
}
.login{
  width: 50px;
  height: 80px;
  position: absolute;
  top: -32px;
  left: 160px;
}
.login-header{
  width: 50px;
  height: 50px;
  background: url(./images/login.png);
  background-size: 100% 100%;
}
.login-txt{
  text-align: center;
  margin-top: 5px;
  font-weight: 400;
}

.list-all{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2.5rem;
}
.list{
  border-bottom: 3px solid #ddd; 
}
.list li{
  list-style: none;
  height: 65px;
  line-height: 65px;
  margin-left: 2.8rem;
  margin-right: 1.5rem;
  border-bottom: 0.05rem solid #eee;
  position: relative;
}
.title{
  font-weight: 400;
}
.more{
  position: absolute;
  right: .2rem;
  color: #aaa;
}
.list li .img{
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-size: 100% 100%;
  position: absolute;
  left: -2.3rem;
  top: 1.5rem;
}
.msg{
  background: url(./images/msg.png);
}
.money{
  background: url(./images/money.png);
}
.heart{
  background: url(./images/heart.png);
}
.star{
  background: url(./images/star.png);
}
.clock{
  background: url(./images/clock.png);
}
.playgame{
  background: url(./images/game.png);
}
.market{
  background: url(./images/market.png);
}
.time{
  background: url(./images/time.png);
}
.setting{
  background: url(./images/setting.png);
}
</style>
