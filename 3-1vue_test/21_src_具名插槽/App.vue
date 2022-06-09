<template>
	<div class="container">
		<!-- 
			<Category title='美食' :listData='foods'/>
			<Category title='游戏' :listData='games'/>
			<Category title='电影' :listData='films'/> 
		-->


		<Category title='美食' :listData='foods'>
			<img slot="middle" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<div class="foot" slot="bottom">
				<a href="https://www.baidu.com">更多美食</a>
			</div>
		</Category>
		<Category title='游戏' :listData='games'>
			<ul slot="middle">
				<li  v-for="(item,index) in games" :key="index">{{item+'-'+index}}</li>
			</ul>
			<div class="foot" slot="bottom">
				<a href="https://www.baidu.com">更多游戏</a>
				<a href="https://www.baidu.com">经典游戏</a>
			</div>
		</Category>
		<Category title='电影' :listData='films'>
			<video slot='middle' controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<!-- 这里的template不会被渲染到页面， v-slot:xxx 是template的具名插槽写法 -->
			<template v-slot:bottom>
				<div class="foot">
					<a href="https://www.baidu.com">最新</a>
					<a href="https://www.baidu.com">电影</a>
					<a href="https://www.baidu.com">推荐</a>
				</div>
				<h4>欢迎来到影院</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','极品飞车','穿越火线','超级玛丽'],
				films:['《你好，李焕英》','《战狼》','《拆弹专家》','《流浪地球》']
			}
		},
	}
</script>

<style>
.container,.foot{
	display: flex;
	justify-content: space-around;
}
h4{
	text-align: center;
}
</style>
