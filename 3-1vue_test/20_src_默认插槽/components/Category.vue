<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 定义一个插槽，等组件的使用者进行填充 -->
		<slot>我是默认值，当使用者没有传递具体结构时，就会出现</slot>

		<!-- <ul>
			<li  v-for="(item,index) in listData" :key="index">{{item+'-'+index}}</li>
		</ul> -->
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title','listData']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
		
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>