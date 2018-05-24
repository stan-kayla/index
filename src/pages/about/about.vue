<template>
  <div id="about">
    <my-header></my-header>
    <div class="about-container">
      <header class="title">
        <h1 class="title-zh">关于我们</h1>
        <h2 class="title-en">About us</h2>
      </header>
      <section class="main">
        <aside class="menu">
          <ul>
            <li v-for="(item, index) in menuList" :class="{selected:selectedIndex==index}" :key="index">
              <a href="javascript:;" @click="selectedIndex=index">
                <p>{{item.zh}}</p>
                <p>{{item.en}}</p>
              </a>
            </li>
          </ul>
        </aside>
        <article class="header-content">
          <header class="subtitle">
            <h3>{{subtitle}}</h3>
            <i class="line"></i>
            <h4 v-if="selectedIndex==0">中消在线</h4>
            <div class="placeholder" v-else></div>
          </header>
          <div class="content">
            <section class="company-intro" v-if="selectedIndex==0">
              <p>
                <img src="./images/company-intro.jpg" alt="公司介绍">
                2016年，中消在线总部正式于上海成立，是中国首家以“互联网+”思维模式打造的消防资源整合性综合服务平台。2017年，中消在线技术部于杭州成立，着力于中消平台、APP以及智慧消防等高新科技开发及研究。
                <br><i class="indent"></i>中消在线通过热点新闻、消防百科、政策法规、监督举报、企业名录、前沿技术、教育培训及中消救援这8大版块，着力实现行业信息化，传播消防文化，为企业提供便捷高效的一站式消防服务：技术咨询、解决方案及培训课程。中消在线与宝龙、明园、华发、旭辉等百强地产及各省消防总队达成了战略合作协议，拍摄了《紧急呼叫119》真人秀，开发了中消在线APP客户端并成为国内唯一被世界消防协会认证的企业，如您所见，中消在线正一步一个脚印，踏踏实实的前进着。
                <br><i class="indent"></i>未来，中消在线将以提高全民消防安全意识为己任，努力开拓社会消防公益产业服务领域，凝聚高新技术人才将人工智能技术融入中消APP应用及网络平台，竭力实现消防行业的信息化、科技化及智能化，引领消防进入大数据时代！
              </p>
            </section>
            <section class="company-culture" v-else-if="selectedIndex==1">
              <img src="./images/company-culture.jpg" alt="公司文化">
              <div>
                <h6>企业精神</h6>
                <p>
                  始终保持着工作的激情和快乐，不断实现自我完善和提升，忠于中国消防事业，建立企业共同情感与追求。我们把握时代节奏，跟随市场动态，紧趋天下大势，引领市场先河。
                </p>
              </div>
              <div>
                <h6>企业使命</h6>
                <p class="text-center">引领消防事业 推动财富增长 促进社会安定 见证未来时代</p>
                <p>伴随着企业的快速发展，将始终坚持为社会创造更美好的企业价值这一目标，努力地促进企业发展，履行社会责任，加强国内外同行的沟通交流。不断紧跟时代节奏，时刻接受市场最新资讯。</p>
              </div>
              <div>
                <h6>服务宗旨</h6>
                <p class="text-center">客观公正 专业高效 客户为先 信誉至上</p>
                <p>作为一家专业的消防相关事业机构，聘有经过严格培训并具备一级资质的工作团队，以最主动快捷的效率、最优秀的技术水平、最周到热忱的工作态度为客户提供专业化的服务。</p>
              </div>
              <div>
                <h6>经营理念</h6>
                <p class="text-center">以人为本 诚信为基 创新成长 共享共赢</p>
                <p>“诚”是企业聚心之魂，“信”乃企业立足之本，诚信不仅是企业重要的无形资产，更是企业提升核心竞争力的重要支撑。诚信更是客户与企业之间相互信任的纽带，因此，“以诚待人，以信接物”是每一位中消人共有的行为准则。</p>
              </div>
            </section>
            <section class="company-ambassador" v-else-if="selectedIndex==2">
              <p>
                <img src="./images/company-ambassador.jpg" alt="中消大使">
                世界著名乒乓球运动员、乒乓球大满贯得主孔令辉与中国传奇足球运动员孙继海相继受邀成为中国消防在线.com消防大使，呼吁全社会进一步关注、支持、参与消防工作，努力形成“全民消防”的良好社会风尚。
                <br><i class="indent"></i>“消防安全重于山，全民支持助平安”。很多人总是觉得火灾离自己很遥远，然而当脆弱的生命面对突如其来的火灾时，掌握必要的逃生技能尤为重要。中消在线将满足群众在线消防教育和培训的需求，竭力提高百姓安全防范意识。
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyHeader from '../../components/myHeader.vue'
  import MyFooter from '../../components/myFooter.vue'
  export default {
    name: 'about',
    components: {
      MyHeader,
      MyFooter
    },
    data () {
      return {
        menuList: [
          {
            zh: '公司介绍',
            en: 'Company introduction'
          },
          {
            zh: '中消文化',
            en: 'Corporate culture'
          },
          {
            zh: '中消大使',
            en: 'Ambassado'
          }
        ],
        selectedIndex: 0
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
  #about{
    p{ // 段落缩进工具类
      .indent{
        display: inline-block;
        width: 2em;
      }
    }
    .about-container{
      *{
        margin: 0;
        padding: 0;
      }
      li{
        list-style: none;
      }
      width: 1160px;
      min-height: 900px;
      margin: 0 auto;
      padding-bottom: 50px;
      .title{
        margin: 135px 0 20px;
        padding-left: 26px;
        color: #c41335;
        .title-zh{
          height: 56px;
          line-height: 56px;
          font-size: 30px;
        }
        .title-en{
          height: 40px;
          line-height: 40px;
          font-size: 24px;
        }
      }
      .main{
        overflow: hidden;
        .menu{
          float: left;
          width: 270px;
          li{
            a{
              display: block;
              overflow: hidden;
              padding-left: 24px;
              height: 84px;
              border-top: 2px solid #d0d0d0;
              transition: all .5s;
              p{
                height: 24px;
                line-height: 24px;
                color: #707070;
                &:first-child{
                  margin-top: 16px;
                  font-size: 18px;
                }
                &:last-child{
                  margin-top: 2px;
                  font-size: 14px;
                }
              }
            }
            &:last-child{
              a{
                height: 86px;
                line-height: 86px;
                border-bottom: 2px solid #d0d0d0;
              }
            }
            &:hover{
              p{
                color: #333;
              }
            }
            &.selected{
              a{
                background-color: #c41335;
                border-color: #c41335;
                p{
                  color: #fff;
                }
              }
            }
            &.selected+li{
              a{
                border-top-color: #c41335;
              }
            }
          }
        }
        .header-content{
          float: right;
          width: 874px;
          .subtitle{
            h3{
              width: 116px;
              height: 44px;
              line-height: 30px;
              font-size: 20px;
              color: #c41335;
              border-bottom: 4px solid #c41335;
            }
            .line{
              display: block;
              border: 1px solid #a0a0a0;
            }
            h4{
              margin-top: 14px;
              height: 26px;
              line-height: 26px;
              font-size: 20px;
            }
            .placeholder{
              height: 40px;
            }
          }
          .content{
            p{
              text-indent: 2em;
              line-height: 26px;
              text-align: justify;
              color: #707070;
              font-size: 14px;
            }
            .company-intro, .company-ambassador{
              img{
                float: right;
                margin-left: 12px;
              }
            }
            .company-culture{
              &>div{
                padding-top: 30px;
              }
              h6{
                text-align: center;
                font-size: 14px;
              }
              .text-center{
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>

