<template>
  <div id="encyclop-rule-more">
    <div class="itemlist">
      <h2 v-if="this.$route.params.id=='12'">国家政策法规</h2>
      <h2 v-if="this.$route.params.id=='13'">地方规章制度</h2>
      <ul class="list" v-if="lists">
        <li v-for="item in lists.list">
          <a :href="item.link_to" class="item-title" target="_blank">
            <h2>{{item.title}}</h2>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout=" prev, pager, next, jumper"
          :total="lists.totalRow">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-rule-more',
    data: function () {
      return {
        lists: '',
        currentPage: 1,
        pagesize: 10
      }
    },
    mounted () {
      this.get_data(this.$route.params.id)
    },
    methods: {
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
        this.get_data(this.$route.params.id)
        window.scrollTo(0, 350)
      },
      get_data: function (id) {
        this.$api.get('/api', {method: 'querywaterfall', page: this.currentPage, pagesize: 10, taxonomyid: id}, (r) => {
          this.lists = r.data
        })
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-rule-more {
    .itemlist{
      min-height: 693px;
      .list{
        h2 {
          display: inline-block;
        }
      }
    }
    .footer {
      text-align: center;
      margin: 20px 0;
    }
  }
</style>
