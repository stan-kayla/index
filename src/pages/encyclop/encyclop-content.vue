<template>
  <div id="encyclop-content">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <router-link :to="navlist.ruleurl">
            <img src="./images/rule1.jpg" class="img-responsive center-block"></router-link>
        </el-col>
        <el-col :span="12" class="content">
          <router-link :to="navlist.ruleurl" class="text-more">更多>></router-link>
          <ul class="list" v-if="lists">
            <li v-for="item in lists" class="item">
              <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0, 11)}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="content">
          <router-link :to="navlist.newsurl" class="text-more">更多>></router-link>
          <ul class="list" v-if="newslists">
            <li v-for="item in newslists" class="item">
              <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0, 11)}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="12">
          <router-link :to="navlist.newsurl"><img src="./images/news.jpg" class="img-responsive center-block"></router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <router-link :to="navlist.encyurl"><img src="./images/ency.jpg" class="img-responsive center-block"></router-link>
        </el-col>
        <el-col :span="12" class="content">
          <router-link :to="navlist.encyurl" class="text-more">更多>></router-link>
          <ul class="list" v-if="encylists">
            <li v-for="item in encylists" class="item">
              <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0, 11)}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="content">
          <h2>
            <router-link :to="navlist.helpurl">中消救援</router-link>
          </h2>
          <div class="list">
            <p>
              中消救援以服务社会、服务大众为宗旨，联结全国多支专业紧急救援队，涵盖生命救援、人道救助、灾害预防、应急反应、灾后恢复和减灾等各个领域。收集并反映有关紧急救援信息和情况，配合有关重大紧急救援事项的处置以及国内国际紧急救援事业的合作与交流等。通过协调救援资源，研究救援产业，促进中国紧急救援体系及相关产业的建设。依靠整合国内外救援技术、资讯及相关服务，促进中国紧急救援事业产业化、市场化、国际化。
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <router-link :to="navlist.helpurl"><img src="./images/help.jpg" class="img-responsive center-block">
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-content',
    data: function () {
      return {
        lists: '',
        newslists: '',
        encylists: '',
        navlist: {
          ruleurl: '/rule',
          newsurl: '/waterfall/5',
          encyurl: '/waterfall/14',
          helpurl: '/save'
        }
      }
    },
    mounted () {
      this.get_data()
    },
    methods: {
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 11}, (r) => {
          this.lists = r.data.list
          //console.log(this.lists)
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 5}, (r) => {
          this.newslists = r.data.list
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 14}, (r) => {
          this.encylists = r.data.list
        })
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-content {
    .navList-ul li{width: 75px;float: left;text-align: center;cursor: pointer;}
    .moreMuch{color: #cc0033;}
    li.listLeft{border-bottom: 2px solid #aaaaaa;height: 180px;
      img{display: block;margin-top: 40px;}
      .img-responsive{border:1px solid #120a0c;padding: 5px;border-radius: 3px; display: table-cell;
        vertical-align: middle;
      }
      .newContent{font-size: 14px;line-height: 20px;height: 100px;overflow: hidden;margin: 0;padding: 0;}
      .item-title{font-size: 20px;line-height: 50px;}
      .item-title:hover{color: #cc0033;text-decoration: underline;}
      .keyWord,.item-date{color: #cc0033;}
    }
    img {
      height: 318px;
    }
    a:hover span {
      text-decoration: underline;
    }
    .content {
      position: relative;
      padding: 45px;
      height: 318px;
      background-color: #f7f6f5;
      a:hover {
        text-decoration: underline;
        color: $hot-dark;
      }
      .text-more {
        position: absolute;
        top: 8px;
        right: 10px;
      }
      ul.list {
        & > li.item {
          &:not(:last-child) {
            margin-bottom: 12px;
          }
          .item-title {
            display: inline-block;
            width: 70%;
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
  }
</style>
