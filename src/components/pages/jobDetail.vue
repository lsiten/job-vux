<template>
<div class="detail">
    工作id:{{jobId}}<br/>
    工作名称：{{jobName}}
</div>
</template>

<script>
export default {
  name:'detail',
  data(){
    return {
      jobId:0,
      jobName:''
    }
  },
  created:function(){
    this.jobId = this.$route.params.jobId;
    this.jobName = this.$route.params.jobName;
  }
}
</script>

<style lang="css">
</style>
