<template>
  <div id="education-program">
    <div class="container">
      <el-row>
        <el-col :span="5" v-for="(item,index) in lists" :key="index" class="programPart">
          <img v-bind:src="item.src">
          <a :href="item.link_to" class="item-title" target="_blank">
            <h4>{{item.title}}</h4>
            <span>{{item.intro}}</span>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'onlineEdu-program',
    data () {
      return {
        lists: [
          {
            src: require('./images/program-img001.png'),
            link_to:'http://app.zxzx119.com/',
            title:'社会消防科普',
            intro:'观看视频  试题练习'
          },
          {
            src: require('./images/program-img002.png'),
            link_to:'http://app.zxzx119.com/',
            title:'物业从业人员',
            intro:'观看视频  试题练习'
          },
          {
            src: require('./images/program-img003.png'),
            link_to:'http://app.zxzx119.com/',
            title:'家庭消防安全',
            intro:'观看视频  消防贴士'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #education-program {
    .container {
      padding-top: 45px;margin-bottom: 40px;
    }
    .programPart{position: relative;margin-right: 203px;
      a{position: absolute;text-align: center;top: 60px;left: 0;display: inline-block;width: 270px;color:#fff;
        h4{font-size: 26px;font-weight: 500;}
        span{font-size: 12px;}
      }
      a:hover{text-decoration: underline;}
    }
    .programPart:last-child{margin-right: 0;}
    
  }
</style>
