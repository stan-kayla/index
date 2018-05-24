<template>
  <section id="us-introduction" class="container">
    <el-row class="vip-list"><!-- 中消在线会员服务 -->
      <el-col :span="24" class="introduction-text v-outter-table title-h4">
        <img src="./images/us-introduction-vip-img001.png" alt="中消在线会员服务">
      </el-col>
      <el-row>
        <el-col :span="3" class="marginLeft"></el-col>
        <el-col :span="6" v-for="(item,index) in vipLists" :key="index" class="usIntro">
          <img v-bind:src="item.src">
          <h4>{{item.name}}</h4>
          <p>{{item.intro}}</p>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="ourValue"><!-- 我们的价值 -->
        <el-col :span="24">
            <h3 class="title-h3">我们的<span>价值</span></h3>
        </el-col>
        <el-row>
            <el-col :span="4" class="marginLeft"></el-col>
            <el-col :span="6" v-for="(item,index) in valueLists" :key="index">
              <img v-bind:src="item.src">
              <!-- <h4>{{item.name}}</h4>
              <p>{{item.intro}}</p> -->
            </el-col>
        </el-row>
        
    </el-row>
    <el-row class="cCourse"><!-- 公司历程 -->
        <el-col :span="8" v-for="(item,index) in lists" :key="index">
            <img v-bind:src="item.src"/>
            <h4>{{item.name}}</h4>
            <div v-html="item.intro">
                <p>{{item.intro}}</p>
            </div>
        </el-col>
    </el-row>
    <el-row class="us-partner border-top"><!-- 合作伙伴 -->
      <el-col :span="5" class="title-h3">
        <h3>合作伙伴</h3>
      </el-col>
      <el-col>
          <img src="./images/us-introduction-img004.png" alt="合作伙伴">
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: 'us-introduction',
    data () {
      return {
        lists: [
          {
            src: require('./images/us-introduction-img001.png'),
            years:'2016年',
            name: '2016年',
            intro:'<span>中消在线</span>总部正式于上海成立，致力于打造中国首家以"互联网+"思维模式打造的消防资源整合性综合服务平台。'
          },
          {
            src: require('./images/us-introduction-img002.png'),
            years:'2017年',
            name: '2017年',
            intro:'<span>中消在线</span>技术研发中心成立，着力于中消平台、APP以及智慧消防等高新科技开发及研究。'
          },
          {
            src: require('./images/us-introduction-img003.png'),
            years:'2018年',
            name: '2018年',
            intro:'致力于解决行业难题，<span>中消在线</span>陆续推出产品检测、专业审图、安全培训、中消云等产品服务，并获得行业广泛认可。'
          }
        ],
        vipLists:[
            {
            src: require('./images/us-introduction-vip-img002.png'),
            name: '产品检测',
            intro:'联合国内外权威认证检测机构，竭力为您提供专业检测服务。'
          },
          {
            src: require('./images/us-introduction-vip-img003.png'),
            name: '专业审图',
            intro:'建筑领域的设计审图问题，我们为您一键解决。'
          },
          {
            src: require('./images/us-introduction-vip-img004.png'),
            name: '安全培训',
            intro:'线上线下交互学习方式，让您轻松掌握消防专业技能。'
          },
          {
            src: require('./images/us-introduction-vip-img005.png'),
            name: '中消云',
            intro:'通过量身定制智慧消防建设方案，为您全面解决消防领域风险管控问题。'
          }
        ],
        valueLists:[
            {
            src: require('./images/us-introduction-img005.png')
          },
          {
            src: require('./images/us-introduction-img006.png')
          },
          {
            src: require('./images/us-introduction-img007.png')
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
    ul li{list-style: none;}
  #us-introduction {
    font-size: 14px;
    .title-h3{font-size: 30px;text-align: center;line-height: 65px;}
    .vip-list{width: 100%;background: url(./images/us-introduction-bg001.png) no-repeat;color: #fff;height: 492px;
        .marginLeft{width: 150px;height: 225px;}
        .usIntro{width: 220px;
          p{margin-top: 0;}
        }
        .title-h4{margin: 80px 0;}
        img{display:block;margin: auto;}
        h4{
            color: #fff;text-align: center;line-height: 55px;font-size: 16px;
        }
        p{padding: 0 30px;cursor: pointer;font-size: 14px;}
    }
    .ourValue{width: 100%;height: 417px;background-image:url(./images/us-introduction-bg002.png);
        .marginLeft{height: 215px;}
        .title-h3{line-height: 150px;margin-bottom: -25px;
            span{color: #cc0033;}
        }
    }
    .cCourse{
        img{display:block;margin: auto;}
        h4{
            color: #cc0033;text-align: center;line-height: 55px;font-size: 18px;
        }
        div{
            padding: 0 35px;font-size: 14px;
            span{color: #cc0033;}
        }
    }
    .border-top{border-top: 3px solid #cc0033;}
    .us-partner{
        .title-h3{background-color: #fff;margin: -40px auto 25px auto;float: none;
            h3{font-weight: 500;font-size: 30px!important;color: #000;}
        }
    }
    .detail-list li{
        a{font-size: 14px;color: #cc0033;float: left;margin-left: 15px;}
    }
    .us-partner{margin: 100px 0 80px 0;}
  }
</style>
