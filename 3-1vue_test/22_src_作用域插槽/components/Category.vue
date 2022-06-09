<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot :foods='foods' msg='hello'>默认数据1</slot>
		<slot :games='games'>默认数据2</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title','listData'],
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','极品飞车','穿越火线','超级玛丽']
			}
		},
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