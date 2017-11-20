<template>
<div class="header">
  <x-header slot="header"
    :left-options="leftOptions"
    :right-options="rightOptions"
    :title="websiteTitle"
    :transition="headerTransition"
    style="background-color:#000;width:100%;position:absolute;left:0;top:0;z-index:100;">
    <span slot="overwrite-left" @click="updateDrawerVisibility">
      <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </span>
  </x-header>
</div>
</template>

<script>

import { XHeader } from 'vux';
import {mapState,mapMutations} from 'vuex';
export default {
  methods: {
    ...mapMutations(['updateDrawerVisibility'])
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      direction: state => state.direction,
      drawerVisibility: state => state.drawerVisibility,
      websiteTitle: state => state.websiteTitle
    }),
    websiteTitle () {
      if (this.route.path === '/') return '首页'
      if (this.route.path === '/message') return '消息'
      if (this.route.path === '/yanzhi') return '言职'
      if (this.route.path === '/yanzhi/Hots') return '言职Hots'
      if (this.route.path === '/yanzhi/Problem') return '言职Problem'
      if (this.route.path === '/user') return '我的'
      if (this.route.name === 'error') return '页面错误'
      if (this.route.name === 'jobDetail') return this.route.params.jobName ? this.route.params.jobName:'职位详情'
      return '首页'
    },
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    rightOptions () {
      return {
        showMore: false
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    }
  },
  components:{
    XHeader
  }
}
</script>

<style>
</style>
