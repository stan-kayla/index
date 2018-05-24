<template>
  <div id="video-player" v-show="isShow">
    <div class="header">
      <a class="close-player" @click.prevent="closePanel"><i class="fa fa-remove"></i></a>
    </div>
    <video preload controls class="img-responsive" id="video" @click.prevent="isBig=true">
      <source :src="videoUrl" type="video/mp4">
      <!--  <source src="http://cdn.zxzx119.com/0912-720p.ogv" type="video/ogg"> --> 您的浏览器不支持Video标签。
    </video>
  </div>
</template>

<script>
  import { EventBus } from '../../util/eventBus'

  export default {
    name: 'video-player',
    data: function () {
      return {
        isShow: false,
        // isBig: false,
        videoUrl: 'http://cdn.zxzx119.com/20171113.mp4'
      }
    },
    mounted: function () {
      EventBus.$on('openPlayer', val => {
        this.isShow = val
        let video = document.getElementById('video')
        video.play()
        // this.isBig = false
      })
    },
    methods: {
      closePanel: function () {
        this.isShow = false
        let video = document.getElementById('video')
        video.pause()
      }
    }
  }
</script>

<style lang="scss">
  #video-player {
    width: 800px;
    height: 450px;
    position: fixed;
    margin-right: -400px;
    margin-bottom: -225px;
    right: 50%;
    bottom: 50%;
    z-index: 99;
    .header {
      background-color: $hot-dark;
      padding: 5px;
      text-align: right;
      .close-player {
        color: $white-max;
      }
    }
/*    &.player-resize-big {
      animation: to-big 5s forwards;
      -webkit-animation: player-to-big 1s forwards;
      !* Safari and Chrome *!
    }
    @keyframes player-to-big {
      from {
        width: 400px;
        height: 300px;
        margin-right: 0px;
        margin-bottom: 0px;
        right: 0;
        bottom: 0;
      }
      to {
        width: 800px;
        height: 450px;
        margin-right: -400px;
        margin-bottom: -225px;
        right: 50%;
        bottom: 50%;
      }
    }*/
  }
</style>
