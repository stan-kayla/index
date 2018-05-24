<template>
  <div>
    <my-header></my-header>
    <div class="container" id="expert">
      <div class="img-bg">
        <h3>专家团队</h3>
        <h4>Team of Experts</h4>
        <i class="title-line"></i>
        <div class="introduction">
          <p>
            由中国工程院院士范维澄担任主任专家，现任中国消防协会副会长朱力平担任总顾问，火灾科学国家重点 实验室主任张和平担任副主任等，现平台已汇集50多位权威技术专家。结合线上高速信息流，全程信息实时共享，高效协同。
          </p>
          <img src="./images/expert-thumbnail.png" alt="" class="img-responsive">
        </div>
        <img src="./images/expert-group.png" alt="" class="expert-group img-responsive">
      </div>
    </div>
    <div class="container" id="duty">
      <h1>我们的使命</h1>
      <p>
        中消在线拥有权威消防专家团队，用专业知识,充分服务于全社会的消防工程建设。结合线上高速信息流，全程信息实时共享，高效协同，满足客户技术支持。
      </p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'

  export default {
    components: {
      MyFooter,
      MyHeader
    },
    name: 'expert'
  }
</script>

<style lang="scss">
  #expert {
    background-color: #ebebeb;
    .img-bg {
      height: 1500px;
      background-image: url("./images/expert-bg.png");
      background-repeat: no-repeat;
    }
    h3 {
      padding-left: 16px;
      color: #c41335;
      font-size: 24px;
      height: 60px;
      padding-top: 30px;
    }
    h4 {
      padding-left: 16px;
      font-weight: normal;
      color: #a3a3a3;
      font-size: 20px;
      height: 28px;
      line-height: 28px;
    }
    .title-line {
      display: block;
      height: 2px;
      width: 68px;
      border: 1px solid #f3040b;
      background-color: #c41335;
      margin: 0 0 13px 16px;
    }
    .introduction {
      padding: 0 16px;
      p {
        display: inline-block;
        width: 700px;
      }
      img {
        width: 300px;
        margin-top: -70px;
        display: inline-block;
        float: right;
      }
    }
    .expert-group {
      margin-top: 150px;
      margin-bottom: 50px;
    }
  }

  #duty {
    margin: 75px auto;
    background-image: url("./images/duty-bg.png");
    padding: 30px 0;
    height: 400px;
    h1 {
      text-align: center;
      font-size: 64px;
      font-weight: bold;
      color: #a1071d;
    }
    p {
      font-size: 22px;
      line-height: 35px;
      margin-left: 200px;
      margin-right: 400px;
    }
  }
</style>
