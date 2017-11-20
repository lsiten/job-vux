<template>
  <div>
      <blur :blur-amount=40 :url="url" :height=180>
         <p class="top-header">
           
         </p>
         <p class="center"><img src='https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'></p>
         <p class="username">lsiten</p>
      </blur>
      <card>
         <div slot="content" class="card-demo-flex card-demo-content01">
           <div class="vux-1px-r">
             <span>1130</span>
            <br/>
            我的积分
          </div>
          <div class="vux-1px-r">
            <span>15</span>
             <br/>
             我的经验
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/>
            我的卡券
          </div>
         </div>
      </card>

      <group>
      <cell title="cell" value="hello" is-link></cell>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell title="cell" value="hello" is-link></cell>
    </group>
  </div>
</template>

<script>
import {Card,Group,Cell,CellBox,Blur} from 'vux';
export default {
  data(){
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
    };
  },
  components:{
    Card,
    Group,
    Cell,
    CellBox,
    Blur
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }

  .username {
    color:#ececec;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
  }

  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
