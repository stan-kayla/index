<template>
  <div id="call">
    <my-header :selected="8"></my-header>
    <img src="./images/banner-bg.jpg" class="img-responsive center-block banner top10">
    <call-content></call-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  import CallContent from './emergent-call-content'

  export default {
    components: {
      MyFooter,
      MyHeader,
      CallContent
    },
    name: 'call'
  }
</script>

<style lang="scss">
  #call{
    .top10{margin-top:10px;border-radius: 3px;}
  }
</style>
