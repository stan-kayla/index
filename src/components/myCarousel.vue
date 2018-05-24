<template>
  <div id="myCarousel" :style="{height:height+'px'}" @mouseenter="stop" @mouseleave="go">
    <el-carousel interval="3000" height="450px" name="component-fade" tag="ul" class="carousel-container" indicator-position="none">
      <el-carousel-item v-for="(item,index) in list" :key="index" v-show="index===currentIndex"
                        :style="{backgroundImage:'url('+item.img+')'}" class="carousel-item">
        <a :href="item.link" v-if="item.link">
        </a>
      </el-carousel-item>
    </el-carousel>
    <!-- <transition-group name="component-fade" tag="ul" class="carousel-container">
      <li v-for="(item,index) in list" :key="index" v-show="index===currentIndex"
          :style="{backgroundImage:'url('+item.img+')'}" class="carousel-item">
        <a :href="item.link" v-if="item.link">
        </a>
      </li>
    </transition-group>
    <div class="carousel-indicators">
      <div class="container">
        <span v-for="(item,index) in list.length" :class="{'active':index===currentIndex}"
              @click="change(index)"></span>
      </div>
    </div>
    <a class="left carousel-control" @click.prevent="prev"><span class="fa fa-angle-left"></span></a>
    <a class="right carousel-control" @click.prevent="next"><span class="fa fa-angle-right"></span></a>-->
  </div>
</template>

<script>
  export default {
    name: 'myCarousel',
    props: ['list', 'height'],
    data: function () {
      return {
        currentIndex: 0,
        timer: null
      }
    },
    methods: {
      change (index) {
        this.currentIndex = index
      },
      autoPlay () {
        this.currentIndex++
        // this.offsetLeft
        if (this.currentIndex > this.list.length - 1) {
          this.currentIndex = 0
        }
      },
      stop () {
        clearInterval(this.timer)
        this.timer = null
      },
      next () {
        (this.currentIndex < this.list.length - 1) ? this.currentIndex++ : this.currentIndex = 0
      },
      prev () {
        (this.currentIndex === 0) ? this.currentIndex = this.list.length - 1 : this.currentIndex--
      }
    }
  }
</script>

<style lang="scss">
  #myCarousel {
    .carousel-item{
      background-position: center;
    }
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity 1s ease-in-out;
    }
    .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
    }
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: #fff;
    /*.carousel-container {
      list-style: none;
      .carousel-item {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
    }
    // 轮播容器
    .carousel-indicators {
      position: absolute;
      z-index: 10;
      bottom: 30px;
      width: 100%;
      display: none;
      margin: 0 auto;
      text-align: center;
      span {
        display: inline-block;
        padding: 0;
        cursor: pointer;
        position: relative;
        zoom: 1;
        width: 42px;
        height: 11px;
        margin: 1px;
        overflow: hidden;
        background: $black-dark;
        filter: alpha(opacity=50);
        opacity: 0.5;
        border-radius: 0px;
        margin-right: 5px;
        transition: all 0.5s cubic-bezier(0.22, 0.81, 0.01, 0.99);
        z-index: 10;
        cursor: pointer;
      }
      .active {
        margin: 1px 5px 1px 1px;
        box-shadow: 0 0 0 2px $white-max;
        background-color: $hot-dark;
        position: relative;
        transition: box-shadow 0.3s ease;
        transition: background-color 0.3s ease;
      }
    }*/
    // 轮播点按钮
    .el-carousel__arrow {
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
      border: 0px transparent;
      top: 55%;
      margin-top: -30px;
      width: 50px;
      height: 50px;
      border-radius: 100px;
      z-index: 100;
      display: block;
      font-size: 30px;
      cursor: pointer;
      overflow: hidden;
      line-height: 50px;
      position: absolute;
      text-align: center;
      &:hover {
        color: #c41335;
      }
    }
    .el-carousel__arrow--left {
      left: 5%;
    }
    .el-carousel__arrow--right {
      right: 5%;
    }
    //轮播翻页按钮
    /*&:hover .carousel-control {
      opacity: 1;
    }*/
  }
</style>
