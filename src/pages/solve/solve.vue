<template>
  <div id="app">
    <my-header :selected="1"></my-header>
    <div class="container solve">
      <h3>解决方案</h3>
      <h4>Expert technology</h4>
      <i class="title-line"></i>
      <ul class="transblocks">
        <li>
          <div class="flip-container">
            <div class="flipper" @mouseout="fadeimg()">
              <div class="front">
                <img src="./images/solve-1.jpg" alt="solve-1">
              </div>
              <div class="back" @click="showImg(1)">
                <img src="./images/solve-1.jpg" alt="solve-1">
                <div class="shade">点击查看更多</div>
              </div>
            </div>
          </div>
          <span>专家团队技术服务</span>
        </li>
        <li>
          <div class="flip-container">
            <div class="flipper" @mouseout="fadeimg()">
              <div class="front">
                <img src="./images/solve-2.jpg" alt="solve-2">
              </div>
              <div class="back" @click="showImg(2)">
                <img src="./images/solve-2.jpg" alt="solve-2">
                <div class="shade">点击查看更多</div>
              </div>
            </div>
          </div>
          <span>消防安全管家式服务</span>
        </li>
        <li>
          <div class="flip-container">
            <div class="flipper" @mouseout="fadeimg()">
              <div class="front">
                <img src="./images/solve-3.jpg" alt="solve-3">
              </div>
              <div class="back" @click="showImg(3)">
                <img src="./images/solve-3.jpg" alt="solve-3">
                <div class="shade">点击查看更多</div>
              </div>
            </div>
          </div>
          <span>媒体宣传服务</span>
        </li>
      </ul>
      <section class="circle-info">
        <div class="circle"></div>
        <div class="tech-info">
          <div>
            <h5>专家团队技术服务</h5>
            <ul class="tech-list">
              <li><i></i><span>项目优化</span></li>
              <li><i></i><span>跟踪管理</span></li>
              <li><i></i><span>整改优化</span></li>
              <li><i></i><span>验收指导</span></li>
            </ul>
          </div>
        </div>
        <div class="keeper-info">
          <h5>消防安全管家式服务</h5>
          <ul class="keeper-list">
            <li><i></i><span>技术支持</span></li>
            <li><i></i><span>消防培训</span></li>
            <li><i></i><span>物业指导</span></li>
            <li><i></i><span>消防设施技术服务</span></li>
          </ul>
        </div>
        <div class="media-info">
          <div>
            <h5>媒体宣传服务</h5>
            <ul class="media-list">
              <li><i></i><span>独家论坛活动参与</span></li>
              <li><i></i><span>独家真人秀参与</span></li>
            </ul>
          </div>
        </div>
        <div class="shadeimg" :style="{'top':imgTop}">
          <img :src="imgUrl" alt="">
        </div>
      </section>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */  // 取消特定类型的eslint报错
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'

  export default {
    components: {
      MyFooter,
      MyHeader
    },
    name: 'solve',
    data () {
      return {
        imgTop: '-500px',
        imgUrl: require('./images/detail-1.jpg')
      }
    },
    methods: {
      showImg (val) {
        this.imgUrl = require(`./images/detail-${val}.jpg`)
        if (this.imgTop === '-500px') {
          this.imgTop = '0'
        } else {
          this.imgTop = '-500px'
        }
      },
      fadeimg () {
        this.imgTop = '-500px'
      }
    }
  }
</script>
<style lang="scss" scoped>
  li {
    list-style: none;
  }

  .solve {
    background-color: #ebebeb;
    margin: 0 auto;
  }

  h3 {
    padding-left: 16px;
    color: #c41335;
    font-size: 24px;
    height: 60px;
    padding-top: 30px;
  }

  h4 {
    padding-left: 16px;
    font-weight: normal;
    color: #a3a3a3;
    font-size: 20px;
    height: 28px;
    line-height: 28px;
  }

  .title-line {
    display: block;
    height: 2px;
    width: 68px;
    border: 1px solid #f3040b;
    background-color: #c41335;
    margin: 0 0 13px 16px;
  }

  .transblocks {
    overflow: hidden;
    padding-top: 10px;
  }

  .transblocks li {
    float: left;
    width: 266px;
  }

  .transblocks li:first-child {
    margin-left: 90px;
  }

  .transblocks li {
    margin-right: 90px;
  }

  .transblocks li > div {
    position: relative;
    width: 266px;
    height: 200px;
    /* box-shadow: 5px 5px 10px #666; */
  }

  .transblocks li > span {
    display: inline-block;
    width: 100%;
    margin: 30px 0;
    color: #c41335;
    font-size: 20px;
    text-align: center;
  }

  .transblocks .shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 276px;
    height: 210px;
    line-height: 210px;
    text-align: center;
    font-size: 18px;
    color: #fffefe;
    background-color: rgba(0, 0, 0, .62)
  }

  /* 翻转 */
  .flip-container {
    perspective: 1000;
  }

  // .flip-container:hover .flipper{
  //     transform: rotateX(180deg) !important;
  // }
  .flip-container:hover  .back {
    z-index: 3;
  }

  .flip-container:hover .front > img {
    border:none;
  }

  .flip-container, .front, .back {
    width: 266px;
    height: 200px;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    transform-origin: 100% 100px; /* 高的一半 */
    height: 200px;
  }

  .front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 5px 5px 10px #666;
  }

  .front {
    img {
      border: 5px solid $hot-dark;
    }

    z-index: 2;
  }

  .back {
    cursor: pointer;
    img{
      height: 210px;
      width: 276px;
    }
    //transform: rotateX(-180deg);
  }

  /*  */
  .circle-info {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  .circle-info > div {
    position: absolute;
    overflow: hidden;
  }

  /* 点击出现的图片容器 */
  .circle-info .shadeimg {
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .circle-info .shadeimg > img {
    height: 100%;
  }

  .shadeimg {
    //top: -500px;
    transition: top 1.5s;
  }

  /* 圆 */
  .circle-info .circle {
    left: 430px;
    top: 10px;
    width: 300px;
    height: 300px;
    background: url('./images/circle.png');
  }

  /* list-style */
  .tech-list {
    padding-left: 60px;
  }

  .keeper-list {
    overflow: hidden;
    width: 280px;
  }

  /* keeper-list li浮动 */
  .keeper-list li {
    float: left;
  }

  .keeper-list li:nth-child(odd) {
    margin-right: 50px;
  }

  .media-list {
    padding-left: 24px;
  }

  .tech-list i, .keeper-list i, .media-list i {
    display: inline-block;
    border-radius: 50%;
    background-color: #000;
    height: 10px;
    width: 10px;
  }

  .tech-list li, .keeper-list li, .media-list li {
    height: 30px;
    line-height: 30px;
  }

  .tech-list span, .keeper-list span, .media-list span {
    margin-left: 6px;
    white-space: nowrap;
  }

  /* 防止条目换行 */
  .media-list li {
    width: 200px;
  }

  /* 专家团队技术服务 */
  .circle-info .tech-info {
    left: 140px;
    top: 100px;
  }

  .tech-info h5 {
    width: 234px;
    height: 40px;
    line-height: 40px;
    color: #851b24;
    font-size: 24px;
    border-bottom: 4px dashed #851b24;
    margin-bottom: 10px;
  }

  /* 消防安全管家式服务 */
  .circle-info .keeper-info {
    left: 472px;
    top: 360px;
    border-left: 2px dashed #a5a5a5;
    padding-left: 12px;
  }

  .keeper-info h5 {
    width: 234px;
    height: 40px;
    color: #a5a5a5;
    font-size: 24px;
  }

  /* 媒体宣传服务 */
  .circle-info .media-info {
    left: 770px;
    top: 70px;
    width: 234px;
  }

  .media-info h5 {
    width: 234px;
    height: 40px;
    line-height: 40px;
    color: #ed7d31;
    font-size: 24px;
    border-bottom: 4px dashed #ed7d31;
    margin-bottom: 10px;
    text-align: right;
  }

  /* 开始动画 */
  .tech-info > div {
    animation: tech-ani 3s;
  }

  .keeper-info {
    animation: keeper-ani 3s;
  }

  .media-info > div {
    animation: media-ani 3s;
  }

  .circle {
    animation: circle-ani 5s ease-in-out;
  }

  @keyframes tech-ani {
    from {
      margin-left: -234px;
    }
    to {
      margin-left: 0;
    }
  }

  @keyframes keeper-ani {
    0% {
      animation-timing-function: ease-out;
      margin-top: -100px;
      height: 0;
    }
    15%, 47%, 73%, 89%, 100% {
      animation-timing-function: ease-out;
      margin-top: 0;
    }

    30%, 32% {
      animation-timing-function: ease-in;
      margin-top: -42px;
    }

    60% {
      animation-timing-function: ease-in;
      margin-top: -24px;
      height: 100px;
    }

    82% {
      animation-timing-function: ease-in;
      margin-top: -12px;
    }

    94% {
      animation-timing-function: ease-in;
      margin-top: -3px;
    }
  }

  @keyframes media-ani {
    from {
      margin-left: 234px;
    }
    to {
      margin-left: 0;
    }
  }

  @keyframes circle-ani {
    0% {
      transform: rotate(0)
    }
    20% {
      transform: rotate(500deg)
    }
    40% {
      transform: rotate(315deg)
    }
    60% {
      transform: rotate(380deg)
    }
    80% {
      transform: rotate(354deg)
    }
    90% {
      transform: rotate(362deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>

