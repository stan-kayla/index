<template>
    <div id="encyclop-rule-index">
      <div class="bottom-line-black">
        <el-row>
          <el-col :span="6" class="item-title">
            <div class="block-hot"><h1>国家政策</h1></div>
          </el-col>
          <router-link :to="navlist.countryurl" class="item-more">更多>></router-link>
        </el-row>
      </div>
      <div class="itemlist">
        <ul class="list" v-if="lists">
          <li v-for="item in lists">
            <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="bottom-line-black">
        <el-row>
          <el-col :span="6" class="item-title">
            <div class="block-hot"><h1>地方法规</h1></div>
          </el-col>
          <router-link :to="navlist.rulesurl" class="item-more">更多>></router-link>
        </el-row>
      </div>
      <div class="itemlist">
        <ul class="list" v-if="rules">
          <li v-for="item in rules">
            <a :href="item.link_to" class="item-title" target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'encyclop-rule-index',
    data: function () {
      return {
        lists: '',
        rules: '',
        navlist: {
          countryurl: '/more/12',
          rulesurl: '/more/13'
        }
      }
    },
    mounted () {
      this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 12}, (r) => {
        this.lists = r.data.list
      })
      this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 13}, (r) => {
        this.rules = r.data.list
      })
    }
  }
</script>

<style>
</style>
