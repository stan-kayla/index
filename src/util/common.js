import 'babel-polyfill'
import API from './api/index'
import ElementUI from 'element-ui'
import '../style/index.scss'
import '../style/base/element-variables.scss'
import '../../static/css/font-awesome.min.css'
import Vue from 'vue'

let hmBaidu = () => {
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?0860f1ceceaaeceea22e95a9dddfcf24'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
}
const initVue = function (Index, router) {
  Vue.config.productionTip = false
  Vue.prototype.$api = API
  Vue.prototype.baseUrl = API.root
  Vue.use(ElementUI)
  hmBaidu()
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<Index/>',
    router: router,
    components: {
      Index
    }
  })
}
export default {
  API,
  ElementUI,
  initVue
}
