<template>
  <div id="app" style="height:100%">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <drawer
     width="200px;"
       :show.sync="drawerVisibility"
       :show-mode="showModeValue"
       :placement="showPlacementValue"
       :drawer-style="{'background-color':'#35495e', width: '200px'}">
        <!-- drawer content -->
        <div slot="drawer">
          <group title="测试数据" style="margin-top:20px;">
            <cell title="首页" link="/"  @click.native="changeDrawVisiblity">
            </cell>
            <cell title="消息" link="/message" @click.native="changeDrawVisiblity">
            </cell>
            <cell title="言职" link="/yanzhi" @click.native="changeDrawVisiblity">
            </cell>
            <cell title="我的" link="/user"  @click.native="changeDrawVisiblity">
            </cell>
          </group>
          <group title="显示方式">
            <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
          </group>
          <group title="位置">
            <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
          </group>
        </div>


       <view-box ref="viewBox"  body-padding-top="46px" body-padding-bottom="55px">
          <l-header></l-header>
          <transition
            @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
            :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
               <router-view></router-view>
         </transition>
          <l-footer></l-footer>
        </view-box>
    </drawer>
  </div>
</template>

<script>
import {Scroller, Drawer, Loading, Group, Cell, ViewBox, Radio, TransferDom} from 'vux';
import {mapActions,mapState} from 'vuex';
import header from './components/common/header';
import footer from './components/common/footer';
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    'l-header':header,
    'l-footer':footer,
    Scroller,
    Drawer,
    Loading,
    Group,
    Cell,
    ViewBox,
    Radio
  },
  computed: {
    ...mapState({
      direction: state => state.direction,
      isLoading: state => state.isLoading,
      drawerVisibility: state => state.drawerVisibility
    })
  },
  methods:{
    changeDrawVisiblity(){
      this.$store.commit('updateDrawerVisibilityByFlag',false);
    },
    onShowModeChange (val) {
      /** hide drawer before changing showMode **/
      this.$store.commit('updateDrawerVisibilityByFlag',false);
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange (val) {
      /** hide drawer before changing position **/
      this.$store.commit('updateDrawerVisibilityByFlag',false);
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    },
    ...mapActions([
     'updateDemoPosition'
   ])
  },
  data(){
    return {
      showMenu: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
body {
  background-color: #e5e5e8;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
