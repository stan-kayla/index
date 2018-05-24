<template>
  <div id="encyclop-savecontent">
    <div class="container">
      <el-row>
        <el-col :span="12" v-for="item in newLists" :key="item" class="borderBottom">
          <h4 class="item-title">
            {{item.title}}
            <span class="redTitle">{{item.span}}</span>
            <span class="English">{{item.English}}</span>
          </h4>
          <p class="item-content">{{item.text}}</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="borderRight">
          <el-row>
            <el-col :span="20"><h4 class="item-title">援救<span class="redTitle">贴士</span></h4></el-col>
            <el-col :span="4"><a class="more" href="javascript:;">更多>></a></el-col>
          </el-row>
          <ul class="list">
            <li v-for="item in newslists" class="item" :key="item">
              <el-col :span="20" class="lists-title"><a :href="item.link_to" target="_blank">{{item.title}}</a></el-col>
              <el-col :span="4" class="item-date">{{item.created.substring(5,7)}}/{{item.created.substring(8, 10)}}</el-col>
            </li>
          </ul>
        </el-col>
        <el-col :span="12" class="borderRight">
          <el-row>
            <el-col :span="20"><h4 class="item-title">援救<span class="redTitle">新闻</span></h4></el-col>
            <el-col :span="4"><a class="more" href="/article-encyclop-1.html">更多>></a></el-col>
          </el-row>
          
          <ul class="list">
            <li v-for="item in lists" class="item" :key="item">
              <el-col :span="20" class="lists-title"><a :href="item.link_to" target="_blank">{{item.title}}</a></el-col>
              <el-col :span="4" class="item-date">{{item.created.substring(5,7)}}/{{item.created.substring(8, 10)}}</el-col>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row class="content-img">
        <!-- <el-col :span="2" v-for="i in 8" :key="i"><img :src="require('./images/qiye-small-img00'+i+'.png')" class="img-responsive"></el-col> -->
        <el-col :span="12" v-for="i in 4" :key="i"><img :src="require('../images/en-save-content-img00'+i+'.png')" class="img-responsive"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-savecontent',
    data: function () {
      return {
        lists:'',
        newslists: '',
        newLists:[
          {
            title:'中消',
            span:'救援',
            English:'ZhongXiao Resuce',
            text:'以服务社会、服务大众为宗旨，联结全国多支专业紧急救援队，涵盖生命救援、人道救助、灾害预防、应急反应、灾后恢复和减灾等各个领域。收集并反映有关紧急救援信息和情况，配合有关重大紧急救援事项的处置以及国内国际紧急救援事业的合作与交流。通过协调救援资源，研究救援产业，促进中国紧急救援体系及相关产业的建设。依靠整合国内外救援技术、资讯及服务，促进中国紧急救援事业产业化、市场化、国际化。'
          },
          {
            title:'紧急',
            span:'求助',
            English:'Emergency Seek Help',
            text:'无论是台风、地震、海啸、雪崩、洪水、泥石流等自然灾害，是山林火灾、大型意外事故或其他户外安全事故，都属于紧急救援应对范围内。 其目的是在出现求救信息时，能够及时派出相应人员前往救助，减少乃至避免遇险人员的生命财产损失。 主要任务为SAR搜救、救援、赈灾，包括陆地上和近海搜救、警务救援、海岸线救援、高山救援，以及在自然灾害、恐怖袭击后人员的医疗疏散、人道主义救援和运送。'
          }
        ],
        moduleList: [
          {
            name: '海上救援',
            icon: require('../images/water-save.jpg'),
            text: '海上救援是指针对海上事故发起的搜寻、救援工作，通常由经过专业培训的人员进行操作实施。' +
            '除了船类交通工具外，最常被使用到的工具有绳索和机械设备，用以帮助施救人员在水中营救时克服水流带来的阻力。' +
            '救援人员会根据水域不同、落水人员情况采取不同的营救手段，因此相比于陆地救援有更多的不可预测性，难度也更大。'
          },
          {
            name: '陆地救援',
            icon: require('../images/save.jpg'),
            text: '陆地救援是最原始、也是最常用到的一种搜救方式。' +
            '它可以用在各种灾害救险行动中，包括地震、台风、龙卷风、洪水、溃坝、人为事故、恐怖活动和有害物质释放等。陆地搜救通常由训练有素的消防队员组成。' +
            '救援内容包括因自然灾害、矿山坑道坍塌而被困的遇难者的搜寻和初步医疗救治。' +
            '一次正确的救援行动就是在最短的时间内解救出最多的人，同时尽量减少救援人员的风险。'

          },
          {
            name: '空中救援',
            icon: require('../images/air-save.jpg'),
            text: '在突发的天灾人祸面前，空中救援具有快速高效、灵便多用，受地理空间限制少等优势，是组织救援抢险所采用的最及时有效的手段。' +
            '在西方发达国家，空中救援运行了半个多世纪，已经建立了完备的救援体系和救援网络，形成了巨大的空中救援产业链，拉动了通用航空市场，成为规模巨大的服务性产业。'
          },
          {
            name: '机器人救援',
            icon: require('../images/robot-save.jpg'),
            text: '救援机器人专指被设计用来解救人类的机器人，最常被使用于矿难、人质解救、拆除炸弹，以及在大规模城市灾害时寻找受难者和幸存者。' +
            '使用机器人救援的益处在于减少人员需求，且不会因长时间的持续搜救产生疲劳，并能够到达其他方式无法到达的区域。' +
            '人们正在开发救援机器人更多的能力，如侦察制图，移除或夯实废墟、运送物资、急救医疗和人员疏散等。'
          }]
      }
    },
    mounted () {
      this.get_data()
    },
    methods: {
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 5, taxonomyid: 22}, (r) => {
          this.lists = r.data.list
          //console.log(this.lists)
        })
         this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 5, taxonomyid: 46}, (r) => {
          this.newslists = r.data.list
        })
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-savecontent {
    .overflowA{overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: top;}
    ul li{list-style: none;}
    .more{color: #c41335;}
    &>.container{background-color: #f7f6f5;margin: 30px auto 50px auto;
      .redTitle{color: #c41335;margin-left: -8px;
      }
      .borderRight{padding: 30px 60px 50px 60px;line-height: 30px;margin-bottom: 20px;
        &:first-child{border-right: 5px solid #c41335;}
        .item-title{font-size: 20px;border-bottom: 2px solid #c41335;width: 85px;line-height: 35px;margin-bottom: 20px;
          .redTitle{margin-left: 0;}
          
        }
        .lists-title{display: inline-block; width: 80%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: top;
          a{font-size:14px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: top;}
        }
      }
      .item-content{text-indent: 2em;font-size:14px;}
      .borderBottom{border-bottom: 5px solid #c41335;padding: 30px 60px 50px 60px;line-height: 24px;font-size: 14px;
        .item-title{font-size: 24px;
          .English{font-size: 12px;}
        }
        &:first-child{border-right:5px solid #c41335;}
      }
    }
    .item{
      position: relative;font-size: 14px;
      padding: 0 10px;
      .item-title{
        position: relative;
        /*border-bottom: 1px solid #6c6c6c;*/
        margin: 20px 0;
        width: 66%;
        .item-name {
          color: #fe2626;
          padding-bottom: 5px;
          top: 1px;
          border-bottom: 1px solid #ff5454;
          display: inline-block;
          font-size:21px;
          position: relative;
          font-weight: 600;
        }
      }
      .item-text{
        font-size: 14px;
        margin: 7px 0;
        padding: 7px 0;
        line-height: 21px;
      }
      .tip{
        padding: 0;
        margin:0 0 20px 0;
      }
      .area{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      a:hover {
        color: $hot-dark;
      }
      .about{
        width: 33%;
      }
      .item-date{text-align: right;}
    }
    .item-save{
      padding: 0 7px;
    }
    .save{
      padding: 20px 0;
    }
    .content-img div{margin-bottom: 12px;}

  }
</style>
