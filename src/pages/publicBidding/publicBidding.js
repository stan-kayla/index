import util from '../../util/common'

import PublicBidding from './publicBidding.vue'

import router from './router'

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
util.initVue(PublicBidding, router)
