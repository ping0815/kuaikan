<template>
<div class="tabbar">
  <router-link to="/" class="home"><span></span>漫画</router-link>
  <router-link to="/finder" class="finder"><span></span>发现</router-link>
  <router-link to="/community" class="community"><span></span>v社区</router-link>
  <router-link to="/mine" class="mine"><span></span>我的</router-link>
</div>
</template>

<style>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  z-index: 5;
  background-color: #fff;
  /* border-top: .1px solid #000; */
}
.tabbar a{
  float: left;
  width: 25%;
  text-align: center;
  padding-top: 1rem;
  text-decoration: none;
  color: #000;
}
.tabbar a span{
  display: block;
  width: 100%;
  height: 2rem;
  background-size: auto 2rem;
  background-position: center 0;
  margin-bottom: .5rem;
  background-repeat: no-repeat;
}
@keyframes navs{
  0%{
    background-size: auto .6rem;
  }
  20%{
    background-size: auto 2.2rem;
  }
  40%{
    background-size: auto 1.8rem;
  }
  60%{
    background-size: auto 2.06rem;
  }
  80%{
    background-size: auto 1.94rem;
  }
  100%{
    background-size: auto 2rem;
  }
}
.tabbar a.home span{
  background-image: url(./images/home.jpg);
}
.tabbar a.finder span{
  background-image: url(./images/finder.jpg);
}
.tabbar a.community span{
  background-image: url(./images/community.jpg);
}
.tabbar a.mine span{
  background-image: url(./images/mine.jpg);
}
.tabbar a.home.router-link-exact-active span{
  background-image: url(./images/home_2.jpg)
}
.tabbar a.home.router-link-exact-active{
  color: #ffba15;
}
.tabbar a.finder.router-link-exact-active span{
  background-image: url(./images/finder_2.jpg)
}
.tabbar a.finder.router-link-exact-active{
  color: #ffba15;
}
.tabbar a.community.router-link-exact-active span{
  background-image: url(./images/community_2.jpg)
}
.tabbar a.community.router-link-exact-active{
  color: #ffba15;
}
.tabbar a.mine.router-link-exact-active span{
  background-image: url(./images/mine_2.jpg)
}
.tabbar a.mine.router-link-exact-active{
  color: #ffba15;
}
.tabbar a.router-link-exact-active span{
  animation: navs 1s;
}
</style>
