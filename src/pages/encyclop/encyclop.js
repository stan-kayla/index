import util from '../../util/common'

import Encyclop from './encyclop.vue'

import router from './router'

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
util.initVue(Encyclop, router)
