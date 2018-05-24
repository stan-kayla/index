<template>
 <div id="slider">
   <ul class="container" :style="containerStyle"><!--  //注意这里的:style //这是图片列表，排成一排 -->
    <li><!--  //列表最前面的辅助图，它和图5一样，用于无限滚动 -->
     <img :src="sliders[sliders.length - 1].img" alt="">
    </li>
    <li v-for="(item, index) in sliders" :key="index"> <!-- //通过v-for渲染的需要展示的5张图 -->
     <img :src="item.img" alt="">
    </li>
    <li> <!-- //列表最后面的辅助图，它和图1一样，用于无限滚动 -->
     <img :src="sliders[0].img" alt="">
    </li>
   </ul>
   <ul class="direction"> <!-- //两侧的箭头 -->
    <li class="left"  @click="move(600, 1)"><</li>
    <li class="right" @click="move(600, -1)">></li>
   </ul>
  </div>
</template>
<script>
export default {
  name: 'slider',
  data () {
    return {
      sliders: [
        {
          img: './images/silder-img001.png'
        },
        {
          img: './images/silder-img001.png'
        },
        {
          img: './images/silder-img001.png'
        },
        {
          img: './images/silder-img001.png'
        },
        {
          img: './images/silder-img001.png'
        }
      ],
      currentIndex: 1,
      distance: -600
    }
  },
  computed: {
    containerStyle () { // 这里用了计算属性，用transform来移动整个图片列表
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      }
    }
  },
  methods: {
    move (offset, direction) {
      direction === -1 ? this.currentIndex++ : this.currentIndex--
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5

      const destination = this.distance + offset * direction
      this.animate(destination, direction)
    },
    animate (des, direc) {
      if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
        this.distance += 30 * direc
        window.setTimeout(() => {
          this.animate(des, direc)
        }, 20)
      } else {
        this.distance = des
        if (des < -3000) this.distance = -600
        if (des > -600) this.distance = -3000
      }
    }
  }
}
</script>
<style lang="scss">
  #slider {

  }
</style>