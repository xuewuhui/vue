import Vue from 'vue'
import Router from 'vue-router'
import HtmlEditor from '@/components/HtmlEditor'
import Map from '@/components/Map'
import China from '@/components/China'
import World from '@/components/World'
import Tree from '@/components/Tree'
import Crpopper from '@/components/Crpopper'
import Swiper from '@/components/Swiper'
import Exam from '@/components/exam/Exam'
import Directive from '@/components/Directive'
import FilterHtml from '@/components/FilterHtml'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/china',
      name: 'China',
      component: China
    },
    {
      path: '/world',
      name: 'World',
      component: World
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
      path: '/exam',
      name: 'Exam',
      component: Exam
    },
    {
      path: '/directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/filterHtml',
      name: 'FilterHtml',
      component: FilterHtml
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
  ]
})
