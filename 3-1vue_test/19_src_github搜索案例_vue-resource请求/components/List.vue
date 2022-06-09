<template>
	<div class="row">
      <!-- 展示用户列表 -->
      <div v-show="info.users.length" class="card" v-for="(item,index) in info.users" :key="index">
        <a :href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
      <!-- 展示欢迎词 -->
      <h3 v-show="info.isFirst">欢迎浏览github</h3>
      <!-- 展示加载中 -->
      <h3 v-show="info.isLoading">加载中。。。。。</h3>
      <!-- 展示错误信息 -->
      <h3>{{info.errMsg}}</h3>
  </div>
</template>

<script>
	export default {
		name:'List',
    data() {
      return {
        info:{
          isFirst:true,
          isLoading:false,
          errMsg:'',
          users:[]
        }
      }
    },
    mounted() {
      //谁要数据给谁绑定
      this.$bus.$on('listObj',(data)=>{
        /* console.log('List的对象',this,data)
        this.isFirst = data.isFirst;
        this.isLoading = data.isLoading;
        this.errMsg = data.errMsg;
        this.users = data.data */
        // console.log(this);
        // 在data里面创建info对象，一起替换  合并+替换
        this.info = {...this.info,...data};
      })

    },
    beforeDestroy() {
      this.$bus.$off('listObj')
    },
	}
</script>

<style scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>