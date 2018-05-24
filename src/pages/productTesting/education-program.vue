<template>
  <div id="education-program">
    <div class="container">
      <div :span="24" class="testing-title text-center">
        <!-- <span class="text-h1">合作流程</span> -->
      </div>
      <div class="bg-left"></div>
      <div class="bg-right"></div>
      <el-row>
        <el-col>
          <img src="./images/testing-bg-img003.png">
        </el-col>
        <el-col>
          <img src="./images/testing-bg-img004.png">
        </el-col>
        <el-col>
          <a href="javascript:;" class="text-h1">立即参与</a>
        </el-col>

        <!-- <div class="education-row">
          <el-col :span="13" class="education-text">
            <span class="text-h2">建（构）筑物消防员</span>
            <p>
              职业等级：建（构）筑物消防员职业共设五个等级，分别为：初级建（构）筑物消防员（国家职业资格五级）、中级建（构）筑物消防员（国家职业资格四级）、高级建（构）筑物消防员（国家职业资格三级）、建（构）筑物消防技师（国家职业资格二级）、建（构）筑物消防高级技师（国家职业资格一级）。</p>
            <p>职业环境：室内、外，常温。</p>
            <p>职业能力特征：具有一定的表达、学习、分析判断能力；视觉、嗅觉、听觉正常，动作协调、反应迅捷。</p>
            <a href="http://baike.baidu.com/view/5392004.htm">
              <el-button type="primary" class="zxzx">百科详情</el-button>
            </a>
          </el-col>
          <el-col :span="11" class="education-text">
            <img src="./images/education-program.png" alt="" class="img-responsive">
          </el-col>
        </div> -->
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'onlineEdu-program'
  }
</script>

<style lang="scss">
  #education-program {
    height: 600px;
    .container {
      padding-top: 45px;position: relative;
      .bg-left{background: url(./images/testing-bg-img001.png) 0 0 no-repeat;position: absolute;top: 70px;left: -350px;width: 350px;height: 710px;}
      .bg-right{background: url(./images/testing-bg-img002.png) 0 0 no-repeat;position: absolute;top: 405px;right: -350px;width: 350px;height: 710px;}
    }
    .testing-title {
      margin-bottom: 30px;
      background: url(./images/testing-title1.png) 0 0 no-repeat;height: 90px;

    }
    .text-h1{background-color: #c41335;padding: 0 24px;line-height: 48px;border-radius: 5px;display: inline-block;font-size: 28px;color: #fff;}
    /*.education-row {
      padding-left: 20px;
      padding-right: 20px;
      .education-text {
        .text-h2 {
          margin-top: 0;
          font-size: 24px;
          line-height: 60px;
          border-left: 4px solid $hot-dark;
          padding-left: 10px;
        }
        p {
          padding: 0;
          margin: 0;
          padding-right: 35px;
          font-size: 13px;
        }
      }
      img {
        margin-left: 12px;
      }
    }*/
  }
</style>
