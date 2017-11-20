import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import message from '@/components/pages/message'
import yanzhi from '@/components/pages/yanzhi'
import Hots from '@/components/pages/yz/Hots'
import Problem from '@/components/pages/yz/Problem'
import user from '@/components/pages/user'
import jobDetail from '@/components/pages/jobDetail'
import error from '@/components/pages/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/yanzhi',
      name: 'yanzhi',
      component: yanzhi
    },
    {
      path: '/yanzhi/Hots',
      name: 'yzHots',
      component: Hots
    },
    {
      path: '/yanzhi/Problem',
      name: 'yzProblem',
      component: Problem
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/jobDetail/:jobId(\\d)/:jobName',
      name: 'jobDetail',
      component: jobDetail
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
