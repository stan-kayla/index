<template>
  <div id="public-bidding">
    <my-header :selected="7"></my-header>
    <router-view/>
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
    name: 'public-bidding'
  }
</script>

<style lang="scss">
  #public-bidding{
    .top10{margin-top:10px;border-radius: 3px;}
  }
</style>
