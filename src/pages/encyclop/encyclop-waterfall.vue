<template>
  <div id="encyclop-waterfall" class="container">
    <el-row v-loading.lock="isLoading" class="grid-container">
      <el-col :span="6" tag="ul" v-for="(ul,index) in ulList" ref="ul" :id="'ul'+index" class="grid"
              :key="index">
        <li v-for="item in ulList[index]" class="grid-item">
          <a :href="item.link_to">
            <img :src="item.thumbnail" alt="" v-if="item.style!=='min'" class="img-responsive center-block">
            <div class="grid-info">
              <h3 class="grid-title">{{item.title}}</h3>
              {{item.title}}
            </div>
          </a>
        </li>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-waterfall',
    data: function () {
      return {
        baseList: [],
        page: 0,
        ulList: [[], [], [], []],
        isLoading: false
      }
    },
    mounted: function () {
      this.getItems(this.$route.params.id)
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let windowHeight = window.innerHeight
        let elOffsetHeight = document.getElementById('encyclop-waterfall').offsetHeight
        if (scrollTop + windowHeight > elOffsetHeight && this.isLoading === false) {
          this.getItems()
        }
      })
    },
    methods: {
      /* 获取数据 */
      getItems: function (id) {
        this.isLoading = true
        this.page++
        this.$api.get('/api', {method: 'querywaterfall', page: this.page, pagesize: 20, taxonomyid: id}, (r) => {
          this.baseList = r.data.list
          setTimeout(() => {
            this.ulList.map(value => {
              value.push(this.baseList.shift())
            })// 初始化前四条数据获取以获取高度
            this.isLoading = false
            this.updateWaterfall()
          }, 300)// 添加loading延迟0.5s
        })
      },
      /* 更新瀑布流列表 */
      updateWaterfall () {
        let heightList = this.$refs.ul.map(value => {
          return value.$el.offsetHeight
        })
        let index = heightList.indexOf(Math.min(...heightList))// 最矮一列下标
        let item = this.baseList.shift()
        if (item == null) {
          return
        } else {
          this.ulList[index].push(item)
        }
        this.$nextTick(function () {
          this.updateWaterfall()
        })// 视图更新后执行
      }
    },
    watch: {
      /* 不改变路由仅改id时重新加载 */
      $route: function () {
        this.ulList = [[], [], [], []]
        this.page = 0
        this.getItems(this.$route.params.id)
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-waterfall {
    .grid-container {
      min-height: 660px;
    }
    .el-loading-spinner {
      position: fixed;
      margin-left: -21px;
      left: 50%;
      text-align: left;
    }
    ul.grid {
      list-style: none;
      img {
        width: 275px;
      }
      li.grid-item {
        margin: 20px 0;
        box-shadow: 1px 1px 10px #333;
        background-color: #f5f5f5;
        .grid-info {
          padding: 10px;
          font-size: 14px;
          min-height: 140px;
          h3 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
