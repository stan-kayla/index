<template>
  <div id="public-bidding-content">

    <div class="container addContainer">
      <el-col :span="9" class="marginBottom50" :class="{'positionFixed':isActive,'positionBottom':hasActive}" @scroll.native="scrollEvent">
          <el-row class="content">
            <router-link :to="navlist.newsurl" class="text-more">中标<i>公示</i></router-link>
            <ul class="list" v-if="bidLists">
              <li v-for="(item,index) in bidLists" class="item" :class="{hasClass:index <=2}">
                <a :href="item.link_to" class="item-title" target="_blank"><!-- {{index+1}}&nbsp;&nbsp; -->{{item.title}}</a>
                <!-- <span class="item-date">{{item.created.substring(0, 11)}}</span> -->
                <span class="item-date">{{item.item_date.substring(5,7)}}/{{item.item_date.substring(8, 10)}}</span>
              </li>
            </ul>
          </el-row>
          <el-row>
            <ul class="logoList">
              <li v-for="item in logoList" :key="item" class="bigImg">
                <div v-bind:style="{ 'background-image': 'url(' + item.ad_file + ')'}" class="bgImg"></div>
                <!-- <img :src="item.ad_file" class="img-responsive"> -->
                <span>{{item.ad_name}}</span>
              </li>
            </ul>
            <!-- <img src="./images/en-information-1.png" alt="资讯"> -->
          </el-row>
        </el-col>
    </div>
    <div class="container">
      <router-link to="/"><img src="./images/en-banner.png" class="img-responsive center-block banner top10"></router-link>
    </div>
    <div class="container">
      <el-row>
        <el-col :span="14" class="marginRight45">
          <el-row>
            <el-col :span="16">
              <ul class="navList-ul">
                <li v-for="item in navLists" class="col" @click="selected(item)" :class="{'selected': activeName == item}">{{item}}</li>
              </ul>
            </el-col>
            <el-col :span="3">
              <!-- v-model="selecte" @change="configData(selecte)" -->
              <select class="areaList">
                <option v-for="item in areaLists" :key="item" :value="item">{{item}}</option>
              </select>
            </el-col>
            <el-col :span="3">
               <!-- v-model="searchData" -->
               <div class="col col-input v-outter-table">
                  <form method="GET" :action="baseUrl+'/s'" class="v-table-cell changeWidth">
                    <input type="hidden" value="article" name="m">
                    <el-input id="js-input-search" placeholder="搜索" name="k" style="height: 20px;" onfocus="this.setAttribute('placeholder', ''); getFocus(this);" onblur="if (this.value == '') this.setAttribute('placeholder', '搜索');getBlur(this);">
                      <el-button id="js-btn-search" slot="append" icon="el-icon-search" native-type="submit">
                      </el-button>
                    </el-input>
                  </form>
                </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <ul class="list" v-if="tenderLists">
                <li v-for="(item,index) in tenderLists" class="item listLeft" :class="{hasClass:index <=2}">
                  <el-row>
                    <el-col :span="4" class="location">{{item.location}}</el-col>
                    <el-col :span="1" class="shortLine"></el-col>
                    <el-col :span="16">
                      <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
                    </el-col>
                    <el-col :span="3" style="text-align: right;"><span class="item-date">{{item.item_date.substring(5, 7)}}/{{item.item_date.substring(8, 10)}}</span></el-col>
                  </el-row>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
  export default {
    name: 'public-bidding-content',
    data: function () {
      return {
        tenderLists: [
          {
            location: '广东',
            title: '台山工业新城水步污水处理系统首期工程勘察设计施工总承包（第二次）勘察设计施工总承包',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25186148.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '广东',
            title: '航城学校多媒体网络电脑室(含考试系统)设备采购（重新招标）',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25186540.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '江苏',
            title: '江苏理工学院沈家弄安置区消防管道修复工程项目竞争性谈判公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25186633.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '福建',
            title: '晋江市公安消防大队村级志愿消防（微型消防站）消防器材采购货物类采购项目招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25186327.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '海南',
            title: '乐东黎族自治县佛罗镇长青幼儿园建设项目施工招标',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25186065.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '辽宁',
            title: '辽宁丰田金杯技师学院智能制造实训基地项目变压器改造设计',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25178224.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '辽宁',
            title: '苏家屯区桂花市场升级改造工程三标段',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25178216.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '重庆',
            title: '重庆水利电力职业技术学院新校区二期工程风雨操场及附属用房建设项目施工招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25177759.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '广东',
            title: '长沙黄花国际机场供油（改）扩建工程黄花机场油库迁建项目施工',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168415.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '四川',
            title: '岳池县(某单位)应急联动指挥中心系统设备采购项目',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25177232.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '广东',
            title: '新塘镇垃圾中转站点改造工程',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168827.html',
            id: '111',
            item_date: '2018-05-21'
          },
          {
            location: '广东',
            title: '广东省佛山市消防器材装备采购',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168709.html',
            id: '111',
            item_date: '2018-05-21'
          },
          {
            location: '山东',
            title: '威尼斯东区建设项目室外管网工程施工招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25150608.html',
            id: '111',
            item_date: '2018-05-21'
          },
          {
            location: '辽宁',
            title: '古生物博物馆监控改造与消防维修工程招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168415.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '山东',
            title: '国检董家口临时通关中心实验室改造工程项目招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168209.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '吉林',
            title: '乌鲁木齐经济技术开发区（头屯河区）2018年度第31期询价采购公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25168094.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '北京',
            title: '开发区消防大队青岛经济技术开发区消防大队消防车辆、器材装备购置项目公开招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25167953.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '广西',
            title: ' 北流市新荣镇教学楼工程施工招标公告,项目编号：BLZC2018-G2-0086',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25167448.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '广西',
            title: '中鼎誉润工程咨询有限公司横县公安消防大队城西消防站及综合应急救援基地项目岩土工程勘察项目邀请招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25167392.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '江苏',
            title: '防火毯紧急物资采购项目公开招标',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25167045.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '山西',
            title: '晋城市大数据平台建设项目公开招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25165983.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '山东',
            title: '国检董家口临时通关中心实验室改造工程项目招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25165434.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '浙江',
            title: '2018-2020年度全地区消防检测服务项目的采购公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25165196.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '广西',
            title: '工程总承包招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25163969.html',
            id: '111',
            item_date: '2018-05-19'
          },
          {
            location: '江苏',
            title: '[采购公告]淮安国家基准气候站消防设备采购及安装项目公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25151052.html',
            id: '111',
            item_date: '2018-05-17'
          },
          {
            location: '南京',
            title: '第二炼钢厂电梯维保项目公开招标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25151013.html',
            id: '111',
            item_date: '2018-05-17'
          },
          {
            location: '重庆',
            title: '大足职业教育中心实训基地精工楼建设工程监理',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25150608.html',
            id: '111',
            item_date: '2018-05-17'
          },
          {
            location: '陕西',
            title: '西安市热力总公司太华供热站新建天然气锅炉房项目施工招标',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25150117.html',
            id: '111',
            item_date: '2018-05-17'
          },
          {
            location: '辽宁',
            title: '提标改造工程项目(二次公告)',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25149673.html',
            id: '111',
            item_date: '2018-05-17'
          },
          {
            location: '河南',
            title: '富力建业凯悦广场工程监理',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25144392.html',
            id: '111',
            item_date: '2018-05-16'
          },
          {
            location: '吉林',
            title: '草原站草原防火扑火装备采购项目',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25143966.html',
            id: '111',
            item_date: '2018-05-16'
          },
          {
            location: '浙江',
            title: '[市属]宁波城市职业技术学院智能模拟灭火实训教学系统',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25143760.html',
            id: '111',
            item_date: '2018-05-16'
          },
          {
            location: '广东',
            title: '矿泉山庄改造利用项目施工专业承包',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25143584.html',
            id: '111',
            item_date: '2018-05-16'
          },
          {
            location: '天津',
            title: '周恩来邓颖超纪念馆 七氟丙烷灭火系统消防改造项目 (项目编号:TQZC-20180510)竞争性磋商公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25143187.html',
            id: '111',
            item_date: '2018-05-16'
          },
          {
            location: '上海',
            title: '校安工程（抗震加固）',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25127249.html',
            id: '111',
            item_date: '2018-05-14'
          },
          {
            location: '上海',
            title: '虹口区就业促进中心修缮工程',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25127240.html',
            id: '111',
            item_date: '2018-05-14'
          },
          {
            location: '黑龙江',
            title: '留学生及外国专家宿舍项目七氟丙烷预制灭火装置采购',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25127021.html',
            id: '111',
            item_date: '2018-05-14'
          },
          {
            location: '陕西',
            title: '西安国际港务区新合街道第二幼儿园保教楼建设后续配套项目施工',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25126959.html',
            id: '111',
            item_date: '2018-05-14'
          },
          {
            location: '江苏',
            title: '[采购公告]淮安市公安消防支队洪泽区大队监控采购安装项目公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-13-25126697.html',
            id: '111',
            item_date: '2018-05-14'
          }
        ],
        bidLists: [
          {
            'location': '浙江',
            title: '(编号：JSA18058)人和家园小区消防系统应急维修项目预中标公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25186525.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '北京',
            title: '国网蒙东电力2018年第二批物资类招标采购中标候选人公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25186371.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '宁夏',
            title: '宁夏回族自治区人民防空办公室人防进学校进社区宣传教育项目废标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25185481.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '云南',
            title: '云南香料烟有限责任公司2018年检测服务项目二标段(建筑物消防设施年度检测服务)成交公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25184632.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            location: '湖北',
            title: '宜昌港主城港区白洋作业区一期工程起重设备IV标制作安装监理（第三次）招标评标结果公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25184428.html',
            id: '111',
            item_date: '2018-05-23'
          },
          {
            'location': '辽宁',
            title: '兴城市望海中心敬老院消防设施改造工程',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25178081.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '安徽',
            title: '安庆市公安消防支队战勤保障分队装备采购(第二包二次）中标公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25177900.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '北京',
            title: '国网(某单位)2018年第三批工程及服务招标采购项目中标结果公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25177704.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '江西',
            title: '轨道交通3号线专用线缆及配套设备采购（GXZC2018-G1-15443-GSZB） 中标公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25177262.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            location: '浙江',
            title: '镇海消防大队改扩建工程-篮球场改造项目的采购结果公告',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25176825.html',
            id: '111',
            item_date: '2018-05-22'
          },
          {
            'location': '山东',
            title: '高区消防中队改造工程项目中标公示',
            link_to: 'http://www.xfbid.com/bid/detail/xfbid-14-25169370.html',
            id: '111',
            item_date: '2018-05-21'
          }
        ],
        areaLists: ['全部地区', '北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '内蒙古', '广西', '西藏', '宁夏', '新疆'],
        change: '全部地区',
        newslists: '',
        encylists: '',
        logoList: '',
        navlist: {
          ruleurl: '/rule',
          newsurl: '/waterfall/5',
          encyurl: '/waterfall/14',
          helpurl: '/save'
        },
        navLists: ['最新', '最近1天', '最近3天', '最近7天', '最近1月', '最近3月'],
        activeName: '最新',
        isActive: false,
        scroll: '',
        landImgBig: '',
        hasActive: false,
        bodyHeight: ''
      }
    },
    methods: {
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 5}, (r) => {
          this.newslists = r.data.list
          // console.log(this.newslists)
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 14}, (r) => {
          this.encylists = r.data.list
        })
        this.$api.get('http://d.zxzx119.com/advertisement/pindex', {page: 1, hot: 1}, (r) => {
          this.logoList = r.data.rows
          console.log(this.logoList)
        })
      },
      selected: function (item) {
        this.activeName = item
      },
      imgError: function () {
        item.thumbnail = require('./images/module-introduction-img002.png')
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
       // console.log(scrollTop)
        if (scrollTop > 400) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      },
      scrollEvent () {
        this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.bodyHeight = document.body.scrollHeight
      // console.log(this.scroll)
      // console.log(this.bodyHeight)
        if (this.scroll > 430) {
          this.isActive = true
        } else {
          this.isActive = false
        }
        if (this.scroll - (this.bodyHeight - 1550) > 350) {
          this.hasActive = true
        } else {
          this.hasActive = false
        }
      }
    },
    mounted () {
      this.get_data()
      window.addEventListener('scroll', this.scrollEvent)
    }
  }
</script>

<style lang="scss">
  #public-bidding-content {font-size: 14px;
    .marginBottom50{margin-bottom: 50px;width: 435px;margin-top: 265px;}
    .logoList{background:url(./images/en-information-1.png) no-repeat; width: 435px;height: 500px;padding-top: 55px;}
    .bigImg{margin-right: 13px;width: 132px;height: 130px;overflow: hidden;background-color: #fff;position: relative;border: 1px solid #000;float: left;margin-bottom: 20px;
        span{padding: 0 15px;color: #000;line-height: 15px;font-size: 12px;display: inline-block;text-align: center;position: absolute;top:96px;width: 100%;}
        .bgImg{width: 105px;height: 95px;background-position: center;background-repeat: no-repeat;background-size: 95%;position: absolute;left: 50%;
            margin-left: -51px;}
        }
    .addContainer{position: absolute;width: 435px;height: 1830px;z-index: 50000;left: 50%;
      margin-left: 140px;}
    /*@media screen and (min-width: 1650px) {
      .addContainer {
        margin-left: 145px;
      }
    }
    @media screen and (min-width: 1260px) and (max-width: 1650px) {
      .addContainer {
        margin-left: 135px;
      }
    }
    @media screen and (min-width: 1260px) and (max-width: 1420px) {
      .addContainer {
        margin-left: 145px;
      }
    }*/
      @media screen and (max-width: 1260px) {
        .addContainer {
          margin-left: 260px;
        }
    }
    .el-input .el-input__inner {
      /*border-radius: 20px 0 0 20px;*/
      border-color: #5a5a5a;
      height: 22px;
      line-height: 23px;
    }
    .el-input .el-input-group__append {
      /*border-radius: 0 20px 20px 0;*/
       border-color: #5a5a5a;
       width: 24px;
       height: 20px;
       background-color: #fff;
    }
    .el-input .el-button{color: #5a5a5a;}
    .col-input {
      height: 20px;
      position: absolute;
      right: 0;
      top: 32px;
      .el-input-group {
        display: table; /*//inline-table使元素产生5个额外空白像素*/
        button {
          margin: -13px -15px -13px -30px; /*// 解决IE中icon不居中问题*/
          width: 24px!important;
        }
      }
      form {
        height: 20px;
      }
      /*margin: {
        left: 65px;
        right: 8px;
      }
    ;*/
      width: 120px;
    }
    .searchBtn{width: 20px;height: 20px;background-image: url(./images/search-icon.png);}
    .selected{color: #c41335;border-bottom: 2px solid #c41335;}
    .marginRight45{margin-right: 45px;margin-bottom: 45px;min-height: 1000px;
      .areaList{width: 100px;margin-top: 33px;}
    }
    ul li{list-style: none;}
    .list{margin-top: 20px;}
    .navList-ul{margin: 35px 0;
      li{width: 75px;float: left;text-align: center;cursor: pointer;line-height: 22px;}
    }
    li.listLeft{border-bottom: 1px solid #aaaaaa;
      .location{text-align: center;line-height: 45px;}
      .shortLine{width: 1px;height: 14px;background-color: #818181;margin: 15px 27px 0 0;}
      .item-title {
            display: inline-block;
            width: 85%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: top;
          }
      img{display: block;margin-top: 40px;}
      .img-responsive{border:1px solid #120a0c;padding: 5px;border-radius: 3px; display: table-cell;
        vertical-align: middle;
      }
      .newContent{line-height: 20px;overflow: hidden;margin: 0 0 50px 0;padding: 0;text-overflow: ellipsis;
        display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
      .item-title{line-height: 45px;}
      .item-title:hover{color: #cc0033;text-decoration: underline;}
      .item-date{color: #818181;line-height: 45px;text-align: center;}
    }
    a:hover span {
      text-decoration: underline;
    }
    .content {
      position: relative;
      padding: 35px 35px 15px 35px;
      margin: 35px 0 15px 0;
      background-color: #f7f6f5;
      a:hover {
        text-decoration: underline;
        color: $hot-dark;
      }
      .text-more {
        font-size: 16px;
        position: absolute;
        top: 16px;
        left: 35px;
        border-bottom: 2px solid #cc0033;
        line-height: 22px;
        i{
          font-style: normal;color: #c41335;
        }
      }
      ul.list {
        & > li.hasClass{color: #c41335;
          a{color: #c41335;}
        }
        & > li.item {
          list-style: none;
          &:not(:last-child) {
            margin-bottom: 12px;
          }
          .item-title {
            display: inline-block;
            width: 85%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: top;
          }
          .item-date {
            display: inline-block;
            overflow: hidden;
            float: right;
          }
        }
      }
    }
    .positionFixed{position: fixed;margin-top: -185px;}
    .positionBottom{bottom: 395px;}
    li.hasClass{color: #c41335;
      div.shortLine{background-color: #c41335;}
      a{color: #c41335;}
      .item-date{color: #c41335;}
    }
  }
</style>
