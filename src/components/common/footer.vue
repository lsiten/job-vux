<template>
<div class="footer">
  <tabbar  slot="bottom">
    <tabbar-item selected link="/" :selected="route.path === '/'">
      <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-shouye"></use>
      </svg>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot link="/message" :selected="route.path === '/message'">
      <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <span slot="label">消息</span>
    </tabbar-item>
    <tabbar-item link="/yanzhi" :selected="route.path === '/yanzhi'">
      <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-zhiye"></use>
      </svg>
      <span slot="label">言职</span>
    </tabbar-item>
    <tabbar-item badge="5" link="/user" :selected="route.path === '/user'">
      <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-home"></use>
      </svg>
      <span slot="label">我</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState({
      route: state => state.route,
      path: state => state.route.path
    })
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
.footer .icon{
  font-size: 20px;
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
