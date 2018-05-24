<template>
  <div id="safe-training">
    <my-header :selected="6"></my-header>
    <div class="container">
      <img src="./images/banner.png" class="img-responsive center-block banner top10">
    </div>
    <education-program></education-program>
    <education-exam></education-exam>
    <!-- <slider></slider> -->
    <education-ready></education-ready>
    <video-player></video-player>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  import EducationProgram from './education-program'
  import EducationExam from './education-exam'
  // import SlideNew from './slide-new'
  import EducationReady from './education-ready'
  import VideoPlayer from './video-player'

  export default {
    components: {
      VideoPlayer,
      EducationReady,
      EducationExam,
      EducationProgram,
      MyFooter,
      MyHeader
    },
    name: 'safe-training'
  }
</script>

<style lang="scss">
  #safe-training {
    .top10{margin-top:10px;border-radius: 3px;}
    .el-button.zxzx {
      border-radius: 10px;
      line-height: 43px;
      padding: 0px;
      text-align: center;
      font-size: 12px;
      margin-top: 40px;
      width: 138px;
    }
    .education-title {
      padding-bottom: 32px;
      border-bottom: 1.5px solid #e3e3e3;
      .text-h1 {
        font-size: 30px;
        border-bottom: 5px solid $hot-dark;
        padding-bottom: 27px;
      }
    }
  }

</style>
