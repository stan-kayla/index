<template>
  <div id="detect">
    <my-header :selected="4"></my-header>
    <div class="container">
      <div class="banner top10">
        <a class="banner-btn" href="http://e.zxzx119.com/account/loginForProduct" target="_blank"></a>
      </div>
      <!-- <div class="contrast"></div> -->
    </div>
    <div class="get marginTop80"></div>
    <div class="advantage marginTop80"></div>    
    
    <div class="cert" style="margin-top: 80px;" >
      <!-- <p class="cert-p">更多</p> -->
      <!-- <img src="./images/cert.png"/> -->
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyHeader from '../../components/myHeader.vue'
  import MyFooter from '../../components/myFooter.vue'
  export default {
    name: 'detect',
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
    computed: {
      subtitle () {
        return this.menuList[this.selectedIndex].zh
      }
    }
  }
</script>
<style lang="scss" scoped>
  #detect {
    .marginTop80{margin-top: 80px;}
    .top10{margin-top:10px;border-radius: 3px;}
    .banner{
      background-image: url(./images/banner.png);
      height: 299px;
    }
    .banner-btn{
      position: absolute;background-image: url(./images/btn.png);width: 93px;height: 30px;display: inline-block;
      margin-top: 210px;
      margin-left: 830px;
      cursor: pointer;
    }
    .contrast{
      height: 730px;background:url(./images/contrast.png) no-repeat center;}
    .advantage{
      height:931px;background: url(./images/advantage1.png) no-repeat center;
    }
    .get{height:371px;background: url(./images/get.png) no-repeat center;}
    .cert{height:542px;background: url(./images/cert.png) no-repeat center; }
      .icon1{
        width: 400px;
        position: absolute;
        margin-left: 422px;
        margin-top: 209px;
      }
      .icon1-img{
        float: right;
        margin-top: 46px;
        position: absolute;
        margin-left: -4px;
      }
      .icon1-p{
        float: left;
      }
      .icon2{
        width: 400px;
        position: absolute;
        margin-left: 379px;
        margin-top: 445px;
      }
      .icon2-img{
        float: right;
        margin-top: 46px;
        position: absolute;
        margin-left: -4px;
      }
      .icon2-p{
        float: left;
      }
      .icon3{
        width: 400px;
        position: absolute;
        margin-left: 1077px;
        margin-top: 209px;
      }
      .icon3-img{
        float: left;
        margin-top: 46px;
        position: absolute;
        margin-left: -12px;
      }
      .icon3-p{
        float: right;
      }
      .icon4{
        width: 400px;
        position: absolute;
        margin-left: 1139px;
        margin-top: 445px;
      }
      .icon4-img{
        float: left;
        margin-top: 42px;
        position: absolute;
        margin-left: -25px;
      }
      .icon4-p{
        float: right;
      }
      .icon5{
        width: 400px;
        position: absolute;
        margin-left: 914px;
        margin-top: 651px;
      }
      .icon5-img{
        float: left;
        margin-top: -28px;
        position: absolute;
        margin-left: -16px;
      }
      .icon5-p{
        float: right;
      }
    .cert-p{
      position: absolute;
      margin-top: 460px;
      margin-left: 612px;
      color: #9d9d9d;
      cursor: pointer;
      font-weight: 400;
    }
    .cert-p:hover{
      color: #c41335;
    }
  }
</style>

