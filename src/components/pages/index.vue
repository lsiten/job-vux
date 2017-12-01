<template>
  <div class="index">
    <swiper auto :list="focus_list" v-model="focus_index" @on-index-change="focus_onIndexChange"></swiper>
    <Grid :cols="4">
      <grid-item link="/richangrenwu">
        <svg class="index_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-renwu"></use>
        </svg>
        <span slot="label">日常任务</span>
      </grid-item>
      <grid-item link="/richangrenwu">
        <svg class="index_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-zhibo1-copy"></use>
        </svg>
        <span slot="label">直播LIVE</span>
      </grid-item>
      <grid-item link="/richangrenwu">
        <svg class="index_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-icon_zuixinzhiwei"></use>
        </svg>
        <span slot="label">最新职位</span>
      </grid-item>
      <grid-item link="/richangrenwu">
        <svg class="index_icon" aria-hidden="true" slot="icon">
            <use xlink:href="#icon-AI"></use>
        </svg>
        <span slot="label">AI专场</span>
      </grid-item>
    </Grid>
    <!-- 职位列表的title  -->
    <div class="recommendTitle">
      -为你推荐的好职位-
    </div>
    <scroller v-model="scrollerStatus" height="-368"   lock-x scrollbar-y  ref="scroller"  :use-pullup="showUp" :pullup-config="upobj" @on-pullup-loading="selPullUp" >
      <!--职位列表开始  -->
      <swipeout class="vux-1px-b">
        <div  v-for="job in jobLists" v-bind:key="job.jobId">
          <swipeout-item transition-mode="follow" >
            <div slot="right-menu">
              <swipeout-button>
                <svg class="index_icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-xinsuixuanzhong"></use>
                </svg>
                不感兴趣
              </swipeout-button>
            </div>
            <div slot="content" style="padding:12px;margin-top:12px;" @click='jobDetailJump(job)'>
              <div class="work-title">
                {{job.jobName}}
                <span class="right-salary">{{job.salary}}</span>
              </div>
              <div class="work-content">
                <div class="conditions">
                  <span v-for="jobRequirement in job.jobRequirements" v-bind:key="jobRequirement">{{jobRequirement}}</span><small class="right-time">{{job.jobPublishTime}}</small></div>
                <div class="tags"><span v-for="jobTag in job.jobTags" v-bind:key="jobTag">{{jobTag}}</span></div>
              </div>
              <div class="work-footer">
                <div class="icon">
                  <img :src="job.companyInfo.icon" width="40" height="40"/>
                </div>
                <div class="label">
                  <p>{{job.companyInfo.name}}</p>
                  <p class="basic-info"><span v-for="companyBasic in job.companyInfo.companyBasics" v-bind:key="companyBasic">{{companyBasic}}</span></p>
                </div>
              </div>
            </div>
          </swipeout-item>
        </div>
      </swipeout>
    </scroller>
    <!--职位列表结束  -->
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
import {Grid, GridItem,Divider,Swiper,Swipeout,SwipeoutItem,SwipeoutButton,Scroller} from 'vux';
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
const jobLists = [
    {
      jobId:1,
      jobName:'前端开发工程师',
      salary:'15-30k',
      jobPublishTime:'10月30日',
      jobRequirements:['深圳','新安','经验不限','本科'],
      jobTags:['文化娱乐','Mysql','后端','linux','php','平台'],
      companyInfo:{
        icon:'http://img.zcool.cn/community/0124f358cec437a801219c77cd9b01.jpg@900w_1l_2o_100sh.jpg',
        name:'韶远科技',
        companyBasics:['天使轮','少于15人','数据服务，教育']
      }
    },
    {
      jobId:2,
      jobName:'网站设计师',
      salary:'8-12k',
      jobPublishTime:'10月25日',
      jobRequirements:['深圳','龙华','1-2年','大专'],
      jobTags:['Mysql','后端','linux','php'],
      companyInfo:{
        icon:'http://img.zcool.cn/community/0124f358cec437a801219c77cd9b01.jpg@900w_1l_2o_100sh.jpg',
        name:'弘毅科技',
        companyBasics:['天使轮','少于15人','数据服务，教育']
      }
    },
    {
      jobId:3,
      jobName:'java开发工程师',
      salary:'15-20k',
      jobPublishTime:'10月24日',
      jobRequirements:['广州','青秀区','经验不限','本科'],
      jobTags:['文化娱乐','java','后端','android','平台'],
      companyInfo:{
        icon:'http://img.zcool.cn/community/0124f358cec437a801219c77cd9b01.jpg@900w_1l_2o_100sh.jpg',
        name:'开心科技',
        companyBasics:['天使轮','150-100人','网络服务']
      }
    },
    {
      jobId:4,
      jobName:'网站美工',
      salary:'8-30k',
      jobPublishTime:'10月22日',
      jobRequirements:['广州','天河','经验不限','本科'],
      jobTags:['ps','AI','Html','Css'],
      companyInfo:{
        icon:'http://img.zcool.cn/community/0124f358cec437a801219c77cd9b01.jpg@900w_1l_2o_100sh.jpg',
        name:'韶远科技',
        companyBasics:['天使轮','少于15人','数据服务，教育']
      }
    }
];

export default {
  components:{
    Grid,
    GridItem,
    Divider,
    Swiper,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Scroller
  },
  methods:{
    focus_onIndexChange (index) {
     this.focus_index = index
   },
   jobDetailJump(job){
     this.$router.push('/jobDetail/'+job.jobId+'/'+job.jobName);
   },
   selPullUp () {
      console.log('上拉刷新数据')
      this.PageIndex++

    }
  },
  data(){
    return {
      nums:[],
      focus_list: baseList,
      focus_index: 1,
      jobLists: jobLists,
      scrollerStatus: {
        pullupStatus: 'default'
      },
      showUp: true,
      upobj: {
        content: '请上拉刷新数据',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '请上拉刷新数据',
        upContent: '请上拉刷新数据',
        loadingContent: '<div class="weui-loadmore"><i class="weui-loading"></i> <span class="weui-loadmore__tips">正在加载</span></div>',
        clsPrefix: 'xs-plugin-pullup-'
      },
      PageIndex:0
    }
  },
  created:function(){
  }
}
</script>

<style lang="less">
.index_icon{
  font-size: 35px;
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.weui-grid__icon{
  height:35px !important;
  line-height:35px;
}
.weui-grid__label{
  color: #999999 !important;
}
.weui-grids{
  background-color:#fff;
}
.weui-grid{
  padding-bottom: 10px !important;
}
.weui-grid:before{
  border-right:none !important;
}
.weui-grid:after{
  border-bottom:none !important;
}

.recommendTitle{
  text-align:center;
  width:100%;
  height:50px;
  line-height:60px;
}

.work-title{
  font-weight: bold;
}
.right-salary{
  float:right;
  color:#F09303;
}

.work-content{
  font-size: 0.8em;
  color:#999999;
  /*公司要求条件*/
  .conditions{
    span{
      padding:0 5px;
      border-left: 1px solid #C7C7C7;
      height:20px;
      line-height:20px;
    }
    span:first-child{
      border-left:none;
    }
    .right-time{
      float:right;
    }
  }
  /*公司优势*/
  .tags{
    span{
      padding:1px 3px;
      background-color:#EAEAEA;
      color:#999999;
      height:20px;
      border-radius: 3px;
      line-height:20px;
      margin-left:3px;
    }
  }
}

/*底部公司信息*/
.work-footer{
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  padding-top:10px;
  .icon{
    width:40px;
  }
  .label{
    flex:1;
    padding-left:10px;
    font-size:1em;
    .basic-info{
      span{
        font-size: 0.8em;
        padding:0 5px;
        border-left: 1px solid #C7C7C7;
        height:20px;
        line-height:20px;
        color:#999999;
      }
      span:first-child{
        border-left:none;
      }
    }
  }
}
</style>
