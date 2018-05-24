<template>
  <div id="encyclop-save">
    <my-header :selected="1"></my-header>
    <div class="container">
      <router-link to="/"><img src="../images/en-save-banner.png" class="img-responsive center-block banner top10"></router-link>
    </div>
    <encyclop-savecontent></encyclop-savecontent>
    <!-- <router-view/> -->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../../components/myHeader'
  import MyFooter from '../../../components/myFooter'
  import EncyclopSavecontent from './encyclopSavecontent'

  export default {
    components: {
      MyFooter,
      MyHeader,
      EncyclopSavecontent
    },
    name: 'encyclop-save'
  }
</script>

<style lang="scss">
  #encyclop-save{
    .top10{margin-top: 10px;border-radius: 3px;}
  }
</style>
