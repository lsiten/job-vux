<template>
  <div class="yanzhi">
    <swiper auto :list="focus_list" v-model="focus_index" @on-index-change="focus_onIndexChange"></swiper>
    <!-- 热门开始 -->
    <div class="hotTalk" @click="jumpHotsList">
      <svg class="yanzhi_icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-hot"></use>
      </svg>
      <span>言职精选·此刻的最热内容</span>
      <svg id="float-right" class="yanzhi_icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-you-copy"></use>
      </svg>
    </div>
    <!-- 热门结束 -->
    <!-- 话题列表开始 -->
    <div @click="goToProblem()" class="topic-list">
      <card :header="{title:' 一个新问题来自于·<span class=huati>面试</span>'}" v-for="i in 3" :key="i" >
          <div slot="content" class="card-padding">
            <div class="topic-title">
              面试官问应聘者星座是出于什么心理？
            </div>
            <div class="user-tips">
              <img src="http://img4.imgtn.bdimg.com/it/u=2770691011,100164542&fm=214&gp=0.jpg" alt="">
              <span class="user-name">孙剑南</span>
              <span class="user-declaration">希望有一天手里...</span>
              <span class="tips-time">10月31日</span>
            </div>
            <div class="answer-short">
              我喜欢这样的公司，我觉得只有逗比公司才会问这样的问题吧，我白羊座喜欢和射术座小姐姐一起工作。给我...
            </div>
            <div class="card-footer">
              <div class="item good" @click.stop="goodClick()">
                <svg id="float-right" class="yanzhi_icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-good"></use>
                </svg>
                <span>45</span>
              </div>
              <div class="item messages" @click.stop="messageClick()">
                <svg id="float-right" class="yanzhi_icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-liuyanshu"></use>
                </svg>
                <span>6</span>
              </div>
            </div>
          </div>
        </card>
    </div>
    <!-- 话题列表结束 -->
  </div>
</template>

<script>
import {Swiper,Card} from 'vux';

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}];
export default {
  name:'yanzhi',
  components:{
    Swiper,
    Card
  },
  methods:{
    focus_onIndexChange (index) {
     this.focus_index = index
   },
   jumpHotsList(){
     this.$router.push('/yanzhi/Hots');
   },
   goToProblem(){
     this.$router.push('/yanzhi/Problem');
   },
   goodClick(){
     console.log('good click');
   },
   messageClick(){
     console.log('message click');
   }
  },
  data(){
    return {
      focus_index:0,
      focus_list:baseList
    }
  }
}
</script>

<style lang="less">
.hotTalk{
  background-color:#fff;
  height:40px;
  line-height:40px;
  svg,span{
    float:left;
  }
  svg{
    margin-top:6px;
    margin-left:10px;
  }
  #float-right{
    float:right;
  }
  span{
    line-height:40px;
    font-size:14px;
    padding-left:10px;
    color:#000;
    font-weight:bold;
  }
}
.yanzhi_icon{
  font-size: 30px;
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.card-padding {
  padding: 15px;
}
.huati{
  color:#000;
}

.topic-list{
  margin-top: 10px;
}
.topic-title{
  color:#000000;
  font-weight:bold;
  line-height:25px;
}
.user-tips{
  height:30px;
  line-height:30px;
  margin-top:10px;
  img,span{
    float:left;
  }
  span{
    font-size:14px;
    line-height:30px;
    padding-left:10px;
  }
  img{
    width:30px;
    height:30px;
    border-radius:50%;
  }
  .user-declaration{
    color:#999999;
  }
  .tips-time{
    color:#999999;
    float:right;
  }
}

.answer-short{
  font-size:14px;
  line-height:25px;
  padding-top:10px;
  color:#999999;
}

.card-footer{
  padding:15px 0;
  .item{
    float:left;
    line-height:20px;
  }
  svg{
    font-size: 14px;
    color:#999999;
    float:left;
  }
  span{
    font-size:12px;
    color:#999999;
    float:left;
    padding-left:5px;
  }
  .good{
    svg{
      margin-top:2px;
    }
  }
  .messages{
    margin-left:10px;
    svg{
      font-size: 20px;
      color:#999999;
    }
  }
}
</style>
