<template>
  <div id="encyclop-content-new">
    <div class="container1 addContainer">
      <el-col class="marginBottom50" :span="9"  :class="{'positionFixed':isActive,'positionBottom':hasActive}" @scroll.native="scrollEvent">
        <el-row class="content">
          <router-link :to="navlist.newsurl" class="text-more">热门<i>资讯</i></router-link>
          <ul class="list" v-if="newslists">
            <li v-for="(item,index) in newslists" class="item" :class="{hasClass:index <=2}">
              <a :href="item.link_to" class="item-title" target="_blank">{{index+1}}&nbsp;&nbsp;{{item.title}}</a>
              <span class="item-date">{{item.created.substring(5,7)}}/{{item.created.substring(8, 10)}}</span>
            </li>
          </ul>
        </el-row>
        <el-row>
          <img src="./images/en-information.png" alt="资讯">
        </el-row>
      </el-col>
    </div>
    <div class="container">
      <router-link to="/"><img src="./images/en-banner.jpg" class="img-responsive center-block banner top10"></router-link>
    </div>
    <div class="container">
      <el-row>
        <el-col :span="14" class="marginRight45">
          <el-row>
            <el-col :span="21">
              <ul class="navList-ul">
                <li v-for="item in navLists" class="col" @click="selected(item.name,item.id)" :class="{'cur': activeName == item.name}">{{item.name}}</li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
          <ul class="list marginTop15" v-if="lists" id="encyclop-new-more">
            <li v-for="item in lists" class="item listLeft">
              <el-row>
                <el-col :span="6" style="display: table-cell;vertical-align: middle;">
                  <img :src="item.thumbnail" class="img-responsive" :onerror="defaultImg"/>
                </el-col>
                <el-col :span="17" style="margin-left: 15px;">
                  <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
                  <p class="newContent" v-if="item.remarks">
                    {{maxSlice(item.remarks)}}
                  </p>
                  <el-row>
                    <el-col :span="18" class="keyWord">{{item.meta_keywords}}</el-col>
                    <el-col :span="6" class="right">
                      <span class="item-date">{{item.created.substring(0,4)}}/{{item.created.substring(5,7)}}/{{item.created.substring(8, 10)}}</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </li>
          </ul>
          </el-row>
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
        maxLength:140,
        activeId:'5,11,14,44,45,47',
        activeName: '全部',
        lists: '',
        newslists: '',
        encylists: '',
        navlist: 
        {
          ruleurl: '/rule',
          newsurl: '/waterfall/5',
          encyurl: '/waterfall/14',
          helpurl: '/save'
        },
        navLists:[
        {
          id: '5,11,14,44,45,47',
          name: '全部'
        },
        {
          id: '11',
          name: '政策法规'
        },
        {
          id: '5',
          name: '热点新闻'
        },
        {
          id: '14',
          name: '消防百科'
        },
        {
          id: '44',
          name: '专家解读'
        },
        {
          id: '45',
          name: '展会资讯'
        },
        {
          id: '47',
          name: '消防科技'
        }
      ],
        defaultImg:'this.src="' + require('./images/module-introduction-img002.png') + '"',
        isActive: false,
        scroll: '',
        hasActive: false,
        bodyHeight: ''
      }
    },
    mounted () {
      this.get_data()
      window.addEventListener('scroll', this.scrollEvent)
    },
    methods: {
      maxSlice:function (item) {
        return item.length > this.maxLength ? item.slice(0,this.maxLength) + '...' : item
      },
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 20, taxonomyid: this.activeId}, (r) => {
          this.lists = r.data.list
          //console.log(this.lists)
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 5}, (r) => {
          this.newslists = r.data.list
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 14}, (r) => {
          this.encylists = r.data.list
        })
      },
      selected: function(item,id) {
      this.activeName = item
      this.activeId = id
      //console.log(this.activeId)
      this.get_data()
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 400) {
          this.isActive = true
        } else {
          this.isActive = false
        }
      },
      scrollEvent () {
        this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.bodyHeight = document.body.scrollHeight
        if (this.scroll > 480) {
          this.isActive = true
        } else {
          this.isActive = false
        }
        if (this.scroll - (this.bodyHeight - 1550) > 550) {
          this.hasActive = true
        } else {
          this.hasActive = false
        }
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-content-new {
    .top10{margin-top:10px;border-radius: 3px;}
    .marginBottom50{margin-bottom: 50px;width: 435px;margin-top: 295px;}
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
    .positionFixed{position: fixed;margin-top: -185px;}
    .positionBottom{bottom:260px;}
    .container1{margin-bottom: 100px;}
    .right{text-align: right;float:right;}
    .marginTop15{margin-top: 15px;}
    .marginRight45{margin-right: 45px;margin-bottom: 20px;}
    ul li{list-style: none;}
    .navList-ul{margin: 35px 0;
      li{width: 75px;float: left;text-align: center;cursor: pointer;font-size: 14px;line-height:22px;
      &.cur{color:#c41335;border-bottom:2px solid #c41335;}
      }
    }
    li.listLeft{border-bottom: 1px solid #aaaaaa;height: 200px;
      img{display: block;margin-top: 40px;}
      .img-responsive{padding: 5px;border-radius: 3px; display: table-cell;width: 180px;height: 115px;
        vertical-align: middle;
      }
      .newContent{font-size: 14px;line-height: 25px;height: 100px;overflow: hidden;margin: 0;padding: 0;margin-bottom: 20px;color:#555;}
      .item-title{font-size: 20px;line-height: 50px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: top;width: 90%;display: inline-block;font-weight: bold;}
      .item-title:hover{color: #cc0033;text-decoration: underline;}
      .keyWord{color:#c41335;}
      .item-date{color:#818181;}
      .keyWord,.item-date{overflow: hidden;font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: top;}
    }
    li.listLeft:last-child {
            border-bottom: 0px;
          }
    a:hover span {
      color: $hot-dark;
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
        position: absolute;
        top: 16px;
        left: 35px;
        border-bottom: 2px solid #cc0033;
        line-height:24px;
        i{
          font-style: normal;color: #c41335;
        }
      }
      ul.list {margin-top: 20px;
        & > li.hasClass{color: #c41335;
          a{color: #c41335;}
        }
        & > li.item {
          list-style: none;font-size: 14px;
          &:not(:last-child) {
            margin-bottom: 12px;
          }
          .item-title {
            display: inline-block;font-size: 14px;
            width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: top;
          }
          .item-date {
            display: inline-block;font-size: 14px;
            overflow: hidden;
            float: right;
          }
        }
      }
    }
  }
</style>

