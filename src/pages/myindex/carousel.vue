<template>
  <div id="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="atvImg" v-for="(item,index) in list" :key="index">
        <a :href="(item.link)?item.link:'javascript:void(0)'" class="slideImg"><img :src="item.img" alt=""></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button" slot="button-prev"><i class="fa fa-angle-left"></i></div>
      <div class="swiper-button-next swiper-button" slot="button-next"><i class="fa fa-angle-right"></i></div>
    </swiper>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    data: function () {
      return {
        list: [
          {
            img: require('./images/index-banner1.jpg'),
            link: ''
          },
          {
            img: require('./images/index-banner2.jpg'),
            link: '//www.zxzx119.com/20171110/1063.html'
          },
          {
            img: require('./images/index-banner3.jpg'),
            link: '//www.zxzx119.com/20171206/1135.html'
          },
          {
            img: require('./images/index-banner4.jpg'),
            link: '//android.myapp.com/myapp/detail.htm?apkName=com.zxzx119&amp;ADTAG=mobile'
          },
          {
            img: require('./images/index-banner5.jpg'),
            link: this.baseUrl + '/119'
          }],
        swiperOption: {
          loop: true, // 让Swiper看起来是循环的
          speed: 1000,
          grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          effect: 'slide',
          slidesPerView: 'auto',
          loopedSlides: 5,
          spaceBetween: 20,
          centeredSlides: true,
          observeParents: true,
          /* autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }, // 自动切换的时间间隔 */
          autoplay: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }, // 开启分页器，默认为圆点
          navigation: {
            nextEl: '.swiper-button-next', // 前进按钮的css选择器或HTML元素
            prevEl: '.swiper-button-prev'// 后退按钮的css选择器或HTML元素
          }
        }
      }
    },
    mounted: function () {}
  }
</script>

<style lang="scss">
  #carousel {
    $banner-height: 450px;
    $banner-width: 1200px;
    $vertical-gap: 15px;
    padding-top: 40px;
    .swiper-container {
      height: $banner-height+50px;
      .swiper-wrapper {
        margin: 0 auto;
      }
      .swiper-slide {
        width: $banner-width;
        height: $banner-height;
        display: block;
        .slideImg {
          width: 100%;
          height: 100%;
          img {
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(14, 21, 47, 0.25);
            width: $banner-width;
            height: $banner-height;
          }
        }
        &.swiper-slide-prev, &.swiper-slide-next {
          height: $banner-height - 2 * $vertical-gap;
          margin: $vertical-gap 0;
          overflow: hidden;
          position: relative;
        }
        &.swiper-slide-prev:after, &.swiper-slide-next:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.60);
        }
        &.swiper-slide-active {
          margin-top: 0;
          margin-bottom: 0;
          .slideImg {
            display: inline-block;
            height: $banner-height;
            width: $banner-width;
            transition: all 0.2s ease-out;
            box-shadow: 0 15px 35px 0 rgba(15, 37, 64, 0.15);
            &:hover {
              box-shadow: 0 10px 40px rgba(15, 37, 64, 0.12), 0 8px 15px rgba(15, 37, 64, 0.12);
            }
          }
        }
      }
      .swiper-button {
        position: absolute;
        top: ($banner-height - 48px) / 2;
        width: 48px;
        height: 48px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        opacity: 0;
        transition: all 0.3s ease 0s;
        margin-top: 0;
        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        &:active {
          background: rgba(0, 0, 0, 0.3);
        }
        &.swiper-button-prev {
          left: 50%;
          transform: translate(-0.6*$banner-width, 0);
        }
        &.swiper-button-next {
          right: 50%;
          transform: translate(0.6*$banner-width, 0);
        }
        i {
          font-size: 32px;
          line-height: 48px;
          top: 1px;
        }
      }
      &:hover .swiper-button {
        opacity: 1;
      }
      .swiper-pagination {
        bottom: 65px;
        display: inline-block;
        .swiper-pagination-bullet {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid transparent;
          width: 6px;
          height: 6px;
          box-sizing: border-box;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
          border: 1px solid #fff;
        }
      }
    }
  }
</style>


