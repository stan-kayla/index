<template>
  <div id="education-exam">
    <div class="container">
      <el-row>
        <el-col :span="24">
          <img src="./images/advantage.png" class="img-responsive center-block banner top25">
        </el-col>
      </el-row>
    </div>
    <div class="bg-content"></div>
    <el-row>
      <el-col :span="24">
        <img src="./images/video.png" class="img-responsive center-block banner top25">
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'onlineEdu-exam',
    data: function () {
      return {
        moduleList: [
          {
            name: '报名手续',
            icon: require('./images/enroll-icon.png'),
            text: '考生报名时须持本人身份证原件及复印件、毕业证书原件及复印件',
            isActive: true
          },
          {
            name: '拍照手续',
            icon: require('./images/photo-icon.png'),
            text: '须携带身份证和学历证书，毕业证书原件及复印件、参训学院照片统一到校拍摄'

          },
          {
            name: '填写手续',
            icon: require('./images/write-icon.png'),
            text: '须填写《学院报名信息表》和《培训期间承诺书》'
          },
          {
            name: '申报资料',
            icon: require('./images/declare-icon.png'),
            text: '初中以上学历复印件一份，' + '<br />' + '学历证书遗失的学员应有所在单位出具的从事不少于2年消防工作的证明'
          }]
      }
    }
  }
</script>

<style lang="scss">
  #education-exam {
    .bg-content{margin: 0 auto;height: 630px;background:url(./images/advantage-other.png) no-repeat center;}
  }
</style>
