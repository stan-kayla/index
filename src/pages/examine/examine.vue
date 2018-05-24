<template>
  <div id="examine">
    <my-header :selected="5"></my-header>
      <div class="container">
        <div class="banner top10">
          <!-- <a class="banner-btn" href="http://e.zxzx119.com/account/login" target="_blank"></a> -->
        </div>
        <div class="process">
          <img class="pro-img" src="./images/process.png"/>
          <div id="btn" class="pro-btn" onclick="window.open('http://e.zxzx119.com/account/login','_blank')">
            <p id="p" class="pro-p">上传图纸</p>
          </div>
        </div>
        <div class="question">
          <div class="que-title">
            <h1 class="que-h1">市场需求痛点</h1>
            <p class="que-p">您是否遇到以下问题？</p>
          </div>
          <img class="que-img" src="./images/question.png"/>
        </div>
      </div>
      <div class="advantage">
        <div class="container">
          <div class="ad-p">
          <h1>审图云服务五大优势</h1>
          <p>消防政策法规独家解读，各省总队、国内外知名设计院战略合作；<br/>
          中消第三方平台权威监管，收费标准化；<br/>
          国内外顶尖消防技术团队在线嫁接，确保公平公正；<br/>
          互联网服务，足不出户尊享在线审图指导优化；<br/>
          消防报建全流程VIP通道服务，中消消防服务生态链支持。</p>
        </div>
        </div>
        
      </div>
      <div class="ad-img"></div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyHeader from '../../components/myHeader.vue'
  import MyFooter from '../../components/myFooter.vue'
  export default {
    name: 'search',
    components: {
      MyHeader,
      MyFooter
    },
    data () {
      return {
        menuList: [
          {
            zh: '中消大使',
            en: 'Ambassado'
          }
        ],
        selectedIndex: 0
      }
    },
    methods: {

    },
    computed: {
      subtitle () {
        return this.menuList[this.selectedIndex].zh
      }
    }
  }
</script>
<style lang="scss" scoped>
  #examine {
    .top10{margin-top:10px;border-radius: 3px;}
    .banner{
      background-image: url(./images/banner.png);
      height: 300px;
      margin-top: 10px;
    }
    .banner-btn{
      position: absolute;background-image: url(./images/btn.png);width: 93px;height: 30px;display: inline-block;
      margin-top: 210px;
      margin-left: 830px;
      cursor: pointer;
    }
    .question{
      height: 650px;margin-top: 60px;
    }
    .que-img{
      margin-top: 160px;
    }
    .que-title{
      text-align: center;
      margin: auto;
      position: absolute;
      width: 1160px;
      margin-top: 50px;
    }
    .que-h1{
      font-size:26px;
      margin: 0;
    }
    .que-p{
      font-size: 21px;
      padding: 0;
      color: #b4b4be;
    }
    .ad-p{
      padding-top: 110px;
    }
    .advantage{
      background: url(./images/advantage.png) no-repeat center;height: 475px;
    }
    .ad-img{
      background: url(./images/range.png) no-repeat center;height: 451px;margin-top: 110px;margin: 80px 0;
    }
    .range{
      height: 650px;
    }
    .ran-img{
      margin-top: 100px;
    }
    .process{
      height: 445px;
    }
    .pro-img{
      margin-top: 50px;
    }
    .pro-btn{
       -moz-box-shadow:10px 10px 20px #333333;
       -webkit-box-shadow:10px 10px 20px #333333;
       box-shadow:10px 10px 20px #333333;
       width: 145px;
       height: 53px;
       position: absolute;
       background-color: #C41335;
       margin-top: -172px;
       margin-left: 992px;
       cursor: pointer;
     }
    .pro-btn:active{
      -moz-box-shadow:0 0 0 0 white;
      -webkit-box-shadow:0 0 0 0 white;
      box-shadow:0 0 0 0 white;
    }
    .pro-p{
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    .pro-p:active{
      color: black;
    }
  }
</style>

