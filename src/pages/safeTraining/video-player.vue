<template>
  <div id="video-player" v-show="isShow">
    <div class="header">
      <a class="close-player" @click.prevent="closePanel"><i class="fa fa-remove"></i></a>
    </div>
    <div :key="index" v-for="(item,index) in lists">
      <video preload controls class="img-responsive" id="video" @click.prevent="isBig=true">
        <source :src="item.sourceSrc" type="video/mp4">
        您的浏览器不支持Video标签。
      </video>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '../../util/eventBus'

  export default {
    name: 'video-player',
    data () {
      return {
        isShow: false,
        lists: [
          {
            posterSrc: require('./images/slider-img001.png'),
            sourceSrc: 'http://video.zxzx119.com/6767cfa6e78c4768bba820236a4ddcd8/1ed40d31c75540f090640c25bae223c9-0a6f75c98024abc25e29cea6dec34528.mp4',
            link_to: 'http://app.zxzx119.com/'
          }
          /* {
            posterSrc: require('./images/slider-img002.png'),
            sourceSrc: 'http://video.zxzx119.com/b065bec910004ea394e7920b4088635c/5a30bb3fe6ba4183a3aa0e1be7319055-0a6f75c98024abc25e29cea6dec34528.mp4',
            link_to: 'http://app.zxzx119.com/'
          },
          {
            posterSrc: require('./images/slider-img003.png'),
            sourceSrc: 'http://video.zxzx119.com/ec11b55be77e425c96d594fc38be592d/4aaa709346204182a5f4a5ef6a558e8e-0a6f75c98024abc25e29cea6dec34528.mp4',
            link_to: 'http://app.zxzx119.com/'
          },
          {
            posterSrc: require('./images/slider-img004.png'),
            sourceSrc: 'http://video.zxzx119.com/b4fa1e8ece2f4df7862e3f73afe51bab/c561800fe32a4eefb09a23044599b1a5-0a6f75c98024abc25e29cea6dec34528.mp4',
            link_to: 'http://app.zxzx119.com/'
          } */
        ]
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
  }
</style>
