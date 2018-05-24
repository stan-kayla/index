<template>
  <div id="encyclop-menu">
    <div class="container">
      <el-row tag="ul" class="navbar">
        <el-col :span="6" v-for="(item,index) in navlist" :key="index" tag="li">
          <router-link :to="item.url">{{item.name}}</router-link>
        </el-col>
        <!--        <nav class="navbar">
                  <ul class="navbar-list">
                    <li class="col" v-for="(item,index) in navlist" :key="index">
                      <a :href="baseUrl+item.url">{{item.name}}</a>
                    </li>
                  </ul>
                </nav>-->
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-menu',
    data () {
      return {
        navlist: [
          {
            url: '/rule',
            name: '政策法规'
          },
          {
            url: '/waterfall/5',
            name: '热点新闻'
          },
          {
            url: '/waterfall/14',
            name: '消防百科'
          },
          {
            url: '/save',
            name: '中消救援'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-menu {
    font-size: 16px;
    ul.navbar {
      background-color: $hot-dark;
      height: 40px;
      padding: 0 90px;
      li {
        text-align: center;
        list-style: none;
        line-height: 40px;
        & > a {
          color: $white-max;
        }
        & > a:hover {
          color: #ddd;
        }
      }
    }
  }
</style>
