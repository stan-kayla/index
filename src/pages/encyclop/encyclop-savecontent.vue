<template>
  <div id="encyclop-savecontent">
    <div class="container">
      <el-row>
        <div v-for="(item,index) in moduleList">
        <el-col :span="6" class="item">
          <div class="item-title">
            <div class="item-name"> {{item.name}}</div>
          </div>
            <img :src="item.icon" class="img-responsive">
          <p class="item-text">{{item.text}}</p>
        </el-col>
        </div>
      </el-row>
      <el-row>
        <div class="item">
          <div class="item-title area">
            <div class="item-name"> 水域救援贴士</div>
          </div>
          <a :href="baseUrl+'/20171009/990.html'">
            <p class="item-text tip">
              水域救援是指人员在水域中生命受到严重威胁或重要场所、建筑物受到水流破坏，不可抗力造成的意外灾害等，如不及时施救将会造成人员伤亡或重大财产损失所采取的救援行动。
              消防人员执行抢救水域灾害时，必须先行熟悉了解各种水域情形，依据水域特性、水流状况、待救者受溺受困情形、现场救援能量及运用携带必要的装备、器材，在安全快速且有效率的考量下，尽速进行救援工作。水域救援人员平时应扎实训练，培养好的体能以及各式救援技能，平时落实器材整备，任何救援行动切勿单独行动，并应先评估现场环境后拟定救援策略，才能有效快速完成救援任务。
              相比于陆地救援有更多的不可预测性，水域救援难度也更大。
            </p>
          </a>
        </div>
      </el-row>
      <el-row class="save">
          <el-col :span="12" class="item item-save">
            <div class="item-title about">
              <div class="item-name"> 关于我们</div>
            </div>
            <p class="item-text">
              中消救援以服务社会、服务大众为宗旨，联结全国多支专业紧急救援队，涵盖生命救援、人道救助、灾害预防、应急反应、灾后恢复和减灾等各个领域。
              收集并反映有关紧急救援信息和情况，配合有关重大紧急救援事项的处置以及国内国际紧急救援事业的合作与交流等。
              通过协调救援资源，研究救援产业，促进中国紧急救援体系及相关产业的建设。依
              靠整合国内外救援技术、资讯及相关服务，促进中国紧急救援事业产业化、市场化、国际化。
            </p>
          </el-col>
        <el-col :span="12" class="item item-save">
          <div class="item-title about">
            <div class="item-name"> 紧急求助</div>
          </div>
          <p class="item-text">
            无论是台风、地震、雪崩、洪水、泥石流等自然灾害，还是山林火灾、大型意外事故或其他户外安全事故，都属于紧急救援应对范围内。
            其目的是在出现求救信息时，能够及时派出相应人员前往救助，减少乃至避免遇险人员的生命财产损失。
            主要任务为SAR搜救、救援、赈灾，包括陆地上和近海搜救、警务救援、海岸线救援、高山救援，以及在自然灾害、恐怖袭击后人员的医疗疏散、人道主义救援和运送。
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-savecontent',
    data: function () {
      return {
        moduleList: [
          {
            name: '海上救援',
            icon: require('./images/water-save.jpg'),
            text: '海上救援是指针对海上事故发起的搜寻、救援工作，通常由经过专业培训的人员进行操作实施。' +
            '除了船类交通工具外，最常被使用到的工具有绳索和机械设备，用以帮助施救人员在水中营救时克服水流带来的阻力。' +
            '救援人员会根据水域不同、落水人员情况采取不同的营救手段，因此相比于陆地救援有更多的不可预测性，难度也更大。'
          },
          {
            name: '陆地救援',
            icon: require('./images/save.jpg'),
            text: '陆地救援是最原始、也是最常用到的一种搜救方式。' +
            '它可以用在各种灾害救险行动中，包括地震、台风、龙卷风、洪水、溃坝、人为事故、恐怖活动和有害物质释放等。陆地搜救通常由训练有素的消防队员组成。' +
            '救援内容包括因自然灾害、矿山坑道坍塌而被困的遇难者的搜寻和初步医疗救治。' +
            '一次正确的救援行动就是在最短的时间内解救出最多的人，同时尽量减少救援人员的风险。'

          },
          {
            name: '空中救援',
            icon: require('./images/air-save.jpg'),
            text: '在突发的天灾人祸面前，空中救援具有快速高效、灵便多用，受地理空间限制少等优势，是组织救援抢险所采用的最及时有效的手段。' +
            '在西方发达国家，空中救援运行了半个多世纪，已经建立了完备的救援体系和救援网络，形成了巨大的空中救援产业链，拉动了通用航空市场，成为规模巨大的服务性产业。'
          },
          {
            name: '机器人救援',
            icon: require('./images/robot-save.jpg'),
            text: '救援机器人专指被设计用来解救人类的机器人，最常被使用于矿难、人质解救、拆除炸弹，以及在大规模城市灾害时寻找受难者和幸存者。' +
            '使用机器人救援的益处在于减少人员需求，且不会因长时间的持续搜救产生疲劳，并能够到达其他方式无法到达的区域。' +
            '人们正在开发救援机器人更多的能力，如侦察制图，移除或夯实废墟、运送物资、急救医疗和人员疏散等。'
          }]
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-savecontent {
    &>.container{
      background-color: #f7f6f5;
    }
    .item{
      position: relative;
      padding: 0 10px;
      .item-title{
        position: relative;
        border-bottom: 1px solid #6c6c6c;
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
    }
    .item-save{
      padding: 0 7px;
    }
    .save{
      padding: 20px 0;
    }
  }
</style>
