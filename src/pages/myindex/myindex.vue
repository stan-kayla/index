<template>
  <div class="out">
    <div id="myIndex">
      <my-header :selected="0"></my-header>
      <slide-nav></slide-nav>
      <my-carousel :list="list" :height="450"></my-carousel>
      <module-introduction></module-introduction>
      <us-introduction></us-introduction>
      <company-introduction></company-introduction>
      <my-footer></my-footer>
      <video-player></video-player>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import CompanyIntroduction from './company-introduction'
  import UsIntroduction from './us-introduction'
  import ModuleIntroduction from './module-introduction'
  import MyFooter from '../../components/myFooter'
  import MyCarousel from '../../components/myCarousel'
  import SlideNav from './slide-nav'
  import VideoPlayer from './video-player'
  
  export default {
    name: 'index',
    components: {
      UsIntroduction,
      VideoPlayer,
      SlideNav,
      MyCarousel,
      MyFooter,
      ModuleIntroduction,
      CompanyIntroduction,
      MyHeader
    },
    data: function () {
      return {
        list: [
          {
            img: require('./images/index-banner1.jpg'),
            link: '/article-cloud-1.html'
          },
          {
            img: require('./images/index-banner2.jpg'),
            link: '/article-detect-1.html'
          },
          {
            img: require('./images/index-banner3.jpg'),
            link: '/article-examine-1.html'
          },
          {
            img: require('./images/index-banner4.jpg'),
            link: '/article-safeTraining-1.html'
          },
          {
            img: require('./images/index-banner5.jpg'),
            link: ''
          },
          {
            img: require('./images/index-banner6.jpg'),
            link: ''
          }
        ]
      }
    },
    mounted: function () {}
  }
</script>

<style lang="scss" scoped>
</style>
