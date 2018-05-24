<template>
  <div id="cloud">
    <my-header :selected="2"></my-header>
      <div class="container">
        <img style="border-radius:3px;margin-top: 10px;" src="./images/banner.png"/>
        <div class="about-trends">
          <div class="about">
            <img src="./images/about.png"/>
            <p class="about-p">率先定制消防行业物联网标准，汇集行业大数据、云计算、人工智能、物联网等技术构建“<font style="color: #C41335">智慧消防</font>”系统，收集消防设施、设备运行数据，量身定制智慧消防建设方案，实现科学集中管理，引领消防行业跨入信息化及智能化时代！</p>
          </div>
          <div class="trends">
            <a class="more" href="/article-encyclop-1.html" target="_blank">更多>></a>
            <!-- <img class="more" src="./images/more.png"/> -->
            <img src="./images/trends.png"/><br>
            <a href="http://cdn.zxzx119.com/attachment/file/technical_standard.pdf" class="notice" target="_blank">【公告】中消云消防物联网系统技术标准发布</a>
            <ul class="about-p about-list" v-if="lists">
              <!-- <iframe src="./images/new.pdf">pdf</iframe> -->
              <li v-for="item in lists" class="item listLeft">
                <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
              </li>
            </ul>
            <!-- <p class="about-p">柴俊：互联网+时代消防产业未来新趋势<br/>
              观点 | 用智慧，定义消防的未来<br/>
              中国消防未来发展方向浅谈<br/>
              未来已来 消防力量必将焕发更加璀璨的荣光！<br/>
              建好智慧消防云平台！开发区公布2017消防重点工作</p> -->
          </div>
        </div>
      </div>
      <div class="service">
        <div class="ser-title">
          <p class="ser-p1">物联网+云服务</p>
          <p class="ser-p2">Internet of things+Cloud service</p>
          <img style="margin-top: 35px;" src="./images/line.png"/>
        </div>
        <div class="ser-bg">
          <div class="col-3">
            <img src="./images/icon1.png"/>
            <ul class="ul1">
              <li>高新技术评测认定</li>
              <li>高速实现产品对接</li>
              <li>高标实时质量监控</li>
              <li>高效并发数据处理</li>
            </ul>
            <div class="line"></div>
            <!--<img class="ser-line" src="./images/line-or.png"/>-->
            <p class="ser-p">高标准</p>
          </div>
          <div class="col-3">
            <img src="./images/icon2.png"/>
            <ul class="ul2">
              <li style="margin-top: 19px;">PC端可视化一键获得</li>
              <li>APP随时随地查看</li>
              <li>自动语音、短信信息推送</li>
            </ul>
            <div class="line"></div>
            <!--<img class="ser-line" src="./images/line-or.png"/>-->
            <p class="ser-p">多途径</p>
          </div>
          <div class="col-3">
            <img src="./images/icon3.png"/>
            <ul class="ul3">
              <li style="margin-top: 17px;">云存储</li>
              <li>云计算</li>
              <li>人工智能技术</li>
            </ul>
            <div class="line"></div>
            <!--<img class="ser-line" src="./images/line-or.png"/>-->
            <p class="ser-p">智能化</p>
          </div>
        </div>
      </div>
      <div class="service status"></div>
      <div class="service introduction"></div>
      <div class="service value"></div>
      <div class="solve-bg">
        <div class="solve-title">
          <p class="title-p">Solve  Programme</p>
          <h1 class="title-h1">解决方案</h1>
        </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyHeader from '../../components/myHeader.vue'
  import MyFooter from '../../components/myFooter.vue'
  export default {
    name: 'cloud',
    components: {
      MyHeader,
      MyFooter
    },
    data () {
      return {
        menuList: [
          {
            zh: '中消大使',
            en: 'Ambassado'
          }
        ],
        lists: '',
        selectedIndex: 0
      }
    },
    mounted () {
      this.get_data()
    },
     methods: {
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 4, taxonomyid: 47}, (r) => {
         this.lists = r.data.list
         console.log(this.lists)
        })
      }
    },
    computed: {
      subtitle () {
        return this.menuList[this.selectedIndex].zh
      }
    }
  }
</script>
<style lang="scss" scoped>
  #cloud {
  .notice{
  position: absolute;
  color: #C41335;
  margin-left: 190px;
  margin-top: -120px;
  width: 330px;
  font-size: 14px;font-weight: bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
}
    p{
      margin: 0;
      padding: 0;
    }
    .about-trends{
      margin-top: 10px;
      height: 312px;
      background-color: #f2f2f2;
      width: 100%;
      padding-top: 70px;
      background-image: url(./images/about-bg.png);
    }
    .about{
      float: left;
    }
    .about-p{
      position: absolute;
      margin-left: 200px;
      width: 327px;
      font-size: 14px;
      margin-top: -118px;line-height: 24px;
    }
    .about-list{margin-top: -95px;}
    .about-p li{list-style: none;}
    .about-p li a{line-height: 24px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: top;width: 90%;display: inline-block;}
    .about-p li a:hover{color: #c41335;text-decoration: underline;}
    .trends{
      float: right;
    }
    .more{
      position: absolute;color:#c41335;
      margin-left: 465px;
      margin-top: 12px;
      font-size: 14px;
      width: 60px;
    }
/*  .more:hover{color:#c41335;}*/
    .service{
      background-image: url(./images/servicer-bg.png);
      background-position: center;
      width: 100%;
      height: 650px;
      background-position: center;
    }
    .status{background-image: url(./images/status-bg.png);height: 610px;}
    .introduction{background-image: url(./images/introduction-bg.png);height: 699px;}
    .value{background-image: url(./images/value-bg.png);height: 654px;}
    .ser-title{
      width: 340px;
      text-align: center;
      margin: auto;
    }
    .ser-p1{
      color: white;
      font-size: 26px;
      padding-top: 47px;
    }
    .ser-p2{
      color: white;
      font-size: 18px;
      margin-top: 15px;
    }
    .ser-bg{
      background-color: white;
      margin: auto;
      width: 1170px;
      height: 420px;
      margin-top: 20px;
    }
    .col-3{
      width: 33.33%;
      text-align: center;
      height: 100%;
      float: left;
      padding-top: 70px;
    }
    ul{
      line-height: 35px;
      margin-top: 10px;
      text-align: left;
      height: 140px;
    }
    .line{
      width: 50px;
      height: 1px;
      margin: auto;
      margin-top: 35px;
      background-color: #eaa132;
    }
    .ul1{
      margin-left: 125px;
    }
    .ul2{
      margin-left: 115px;
    }
    .ul3{
      margin-left: 147px;
    }
    .ser-line{
      margin-top: 35px;
    }
    .ser-p{
      margin-top: 10px;
      color: #eaa132;
      font-weight: 700;
    }
    .solve-bg{
      background-image: url(./images/solve-bg.png);
      width: 100%;
      height: 795px;
      background-position: center;
    }
    .solve-title{
        width: 100%;
        text-align: center;
        padding-top: 600px;
      }
    .title-h1{
      font-size: 55px;
      margin: 0;
    }
    .title-p{
      color: #C41335;
      font-size: 25px;
    }
  }
</style>
