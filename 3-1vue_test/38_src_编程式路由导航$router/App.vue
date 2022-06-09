<template>
	<div>
		<div class="row">
			<Banner/>
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
					<!-- <a class="list-group-item" href="./about.html">About</a>
					<a class="list-group-item active" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
					<!-- 简写：replace  开启replace模式，会覆盖上一次记录   默认是push模式，正常后退-->
					<router-link :replace="true" class="list-group-item" active-class="active" to="/about">About</router-link>
					<router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!-- router-view 指定组件的呈现位置 -->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from "./components/Banner.vue";
	export default {
		name:'App',
		components:{Banner},
		mounted() {
			// console.log(this);
		},
	}
</script>

<style scoped>
/* 
	router-link的replace属性
		1、作用：控制路由跳转时操作浏览器历史记录的模式
		2、浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录，路由跳转时候默认是push
		3、如何开启replace模式：
			<router-link replace ...>跳转</router-link>
 */
</style>

