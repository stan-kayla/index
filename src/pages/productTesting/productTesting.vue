<template>
  <div id="productTesting">
    <my-header :selected="4"></my-header>
    <education-program></education-program>
    <education-exam></education-exam>
    <education-ready></education-ready>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  import EducationProgram from './education-program'
  import EducationExam from './education-exam'
  import EducationReady from './education-ready'

  export default {
    components: {
      EducationReady,
      EducationExam,
      EducationProgram,
      MyFooter,
      MyHeader
    },
    name: 'productTesting'
  }
</script>

<style lang="scss">
  #productTesting {
    /*.el-button.zxzx {
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
    }*/
  }

</style>
