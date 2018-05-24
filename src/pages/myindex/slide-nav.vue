<template>
  <div class="container">
    <ul id="slide-nav">
    <li>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3585108528&site=qq&menu=yes" title="400-1919-119"><!-- <i class="fa fa-headphones"></i> -->在线<br>客服</a>
    </li>
    <li>
      <a href="http://d.zxzx119.com/register"><!-- <i class="fa fa-user"></i> -->我要<br>入驻</a>
    </li>
    <li>
      <a class="open-video" @click.prevent="openPlayer"><!-- <i class="fa fa-play-circle-o"></i> -->宣传<br/>视频</a>
    </li>
    <li id="searchBar" v-bind:class="{ active : isActive}">
      <a class="scrollTop" @click="toTop(step)" v-bind:class="{ active : isActive}">
        <!-- <el-button icon="el-icon-arrow-up" size="large" style="height: 56px;"></el-button> -->
      </a>
    </li>
    <!--    <li>
          <a href=""><i class="fa fa-map"></i><br>网站导航</a>
        </li>-->
  </ul>
  </div>
  
</template>

<script>
  import { EventBus } from '../../util/eventBus'

  export default {
    name: 'slide-nav',
    props: {
      step: { 
        type : Number,
        default : 50  
      }
    },
    data:function(){
      return{
        isActive:false
      }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll);
    },
    methods: {
      openPlayer: function () {
        EventBus.$emit('openPlayer', true)
      },
      toTop (i) {
        document.body.scrollTop -= i
        document.documentElement.scrollTop -= i
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          var c = setTimeout(() => this.toTop(i), 16)
        } else {
          clearTimeout(c)
        }
      },
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#searchBar').offsetTop
        if (scrollTop > offsetTop) {
          this.isActive = false
        } else {
          this.isActive = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{position: absolute;height: 2000px; margin-left: -580px;left: 50%;}
  #slide-nav {

    list-style: none;
    position: fixed;
    margin-left: 1170px;
    top: 660px;
    font-size: 12px;
    padding: 10px;
    padding-bottom: 0;
    z-index: 999;
    li {
      /*margin-bottom: 10px;*/
      a {
        display: inline-block;
        text-align: center;
        color:$hot-dark;
        font-size: 14px;font-weight: bold;
        line-height: 18px;
        border: 1px solid $hot-dark;
        border-radius: 3px;
        text-decoration: none;
        margin-bottom: 2px;
        padding: 8px 13px;
        background-color: $white-max;
        box-shadow: 2px 2px 2px #666;
        &:hover {
          color: #fff;
          background-color: $hot-dark;
          border: 1px solid #fff;
        }
        i {
          font-size: 18px;
        }
      }
      .scrollTop{
          padding: 0;border-radius: 3px;border-style: solid;background-color: #c41335;
          background-image: url(./images/navbar-icon-aside.png);width: 56px;height: 56px;
        }
      .scrollTop:hover{border-style: none;border-radius: 3px;background-image: url(./images/navbar-icon-aside-hover.png);border: 1px solid #c41335;}
      .active{display: none;}
    }
  }
</style>