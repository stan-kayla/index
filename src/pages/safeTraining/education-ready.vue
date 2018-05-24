<template>
  <div id="education-ready">
    <div class="container">
      <div :span="24" class="education-title text-center">
        <el-row class="slider">
          <el-col :span="5" v-for="(item,index) in lists" :key="index" class="programPart">
            <!--<a class="item-title" target="_blank" >
                poster="item.posterSrc" :href="item.sourceSrc"
              <video controls :src="item.sourceSrc" :poster="item.posterSrc" width="270" height="150">
                 Your browser does not support the video tag.
              </video>
            </a>-->
            <a class="item-title" @click.prevent="openPlayer">
              <video :poster="item.posterSrc" width="270" height="150">
                Your browser does not support the video tag.
              </video>
            </a>
          </el-col>
        </el-row>
        <div class="bg-content top100">
          <img class="img1" src="./images/class1.png" onclick="window.open('http://cdn.zxzx119.com/attachment/file/baokao.pdf','_blank')"/>
          <img class="img2" src="./images/class2.png" onclick="window.open('http://cdn.zxzx119.com/attachment/file/shenbao.pdf','_blank')"/>
          <img class="img3" src="./images/class3.png" onclick="window.open('http://zscx.osta.org.cn/','_blank')"/>
          <img class="img4" src="./images/class4.png" onclick="window.open('http://cdn.zxzx119.com/attachment/file/kaoshi.pdf','_blank')"/>
          <img style="margin-top: 110px;" src="./images/other-part.png"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
   import { EventBus } from '../../util/eventBus'
export default {
     name: 'education-ready',
     data () {
       return {
         isShow: false,
         lists: [
           {
             posterSrc: require('./images/slider-img001.png'),
             sourceSrc: 'http://video.zxzx119.com/6767cfa6e78c4768bba820236a4ddcd8/1ed40d31c75540f090640c25bae223c9-0a6f75c98024abc25e29cea6dec34528.mp4',
             link_to: 'http://app.zxzx119.com/'
           },
           {
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
           }
         ]
       }
     },
     methods: {
       openPlayer: function () {
         EventBus.$emit('openPlayer', true)
       }
     }
}
</script>

<style lang="scss">
  #education-ready {
    .top100{margin-top: 100px;}
    /*.slider{background: url(./images/slider-bg.png) 0 0 no-repeat;}*/
    .programPart{margin-right: 32px;
      a{display: inline-block;width: 270px;box-shadow: 5px 5px 2px #666;height: 150px;
      }
      a:hover{text-decoration: underline;box-shadow: 5px 5px 2px #666;}
    }
    .programPart:first-child{margin-left: 35px;}
    .programPart:last-child{margin-right: 0;}
    .img1{
      position: absolute;
      margin-left: 189px;
      margin-top: 3px;
      cursor: pointer;
    }
    .img2{
      position: absolute;
      margin-left: 425px;
      margin-top: 3px;
      cursor: pointer;
    }
    .img3{
      position: absolute;
      margin-left: 662px;
      margin-top: 3px;
      cursor: pointer;
    }
    .img4{
      position: absolute;
      margin-left: 898px;
      margin-top: 3px;
      cursor: pointer;
    }
  }
</style>
