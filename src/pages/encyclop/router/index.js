import Vue from 'vue'
import Router from 'vue-router'
import Index from '../encyclop-content-new'
import Rule from '../encyclop-rulecontent'
import RuleMore from '../encyclop-rule-more'
import RuleIndex from '../encyclop-rule-index'
import Save from '../encyclop-savecontent'
import WaterFall from '../encyclop-waterfall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/rule',
      component: Rule,
      children: [
        {
          path: '/',
          component: RuleIndex
        },
        {
          path: '/more/:id',
          component: RuleMore
        }
      ]
    },
    {
      path: '/save',
      component: Save
    },
    {
      path: '/waterfall/:id',
      component: WaterFall
    }
  ]
})
