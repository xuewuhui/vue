import Vue from 'vue'
import Router from 'vue-router'
import HtmlEditor from '@/components/HtmlEditor'
import Map from '@/components/Map'
import Tree from '@/components/Tree'
import Crpopper from '@/components/Crpopper'
import Swiper from '@/components/Swiper'
import Validator from '@/components/Validator'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/editor',
      name: 'HtmlEditor',
      component: HtmlEditor
    },
    {
      path: '/crpopper',
      name: 'Crpopper',
      component: Crpopper
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/validator',
      name: 'Validator',
      component: Validator
    },
  ]
})
