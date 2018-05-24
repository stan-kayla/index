<template>
  <div id="encyclop">
    <my-header :selected="1"></my-header>
    <!-- <Encyclop-menu></Encyclop-menu> -->
    <!-- <Encyclop-waterfall></Encyclop-waterfall> -->
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  // import EncyclopWaterfall from './encyclop-waterfall'


  export default {
    components: {
      MyFooter,
      MyHeader
      // EncyclopWaterfall
      // EncyclopMenu
    },
    name: 'encyclop'
  }
</script>

<style lang="scss">
  #encyclop{
    .top10{margin-top:10px;border-radius: 3px;}
  }
</style>
