<template>
	<div class="container">
		<Category title='美食'>
			<template scope="liuboshu">
				<ul>
					<li v-for="(item,index) in liuboshu.foods" :key="index">{{item}}</li>
				</ul>
			</template>
		</Category>
		<Category title='美食'>
			<template v-slot:default="liuboshu">
				<ol>
					<li v-for="(item,index) in liuboshu.foods" :key="index">{{item}}</li>
				</ol>
				<span>{{liuboshu.msg}}</span>
			</template>
		</Category>
		<Category title='美食'>
			<template slot-scope="{foods}">
				<ul>
					<li v-for="(item,index) in foods" :key="index">{{item}}--解构</li>
				</ul>
			</template>
		</Category>
		<Category title='游戏'>
			<template v-slot="liuboshu">
				<ol>
					<li v-for="(item,index) in liuboshu.games" :key="index">{{item}}</li>
				</ol>
			</template>
		</Category>
		<Category title='游戏'>
			<template v-slot="{games}">
				<h4 v-for="(item,index) in games" :key="index">{{item}}-结构赋值</h4>
			</template>
		</Category>
	</div>
	<!-- 
		插槽
			1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件===>子组件
			2.分类：默认插槽、具名插槽、作用域插槽
			3.使用方式：
				1.默认插槽
					父组件
						<Category>
							<div>html结构</div>
						</Category>
					子组件
						<template>
							<div>
								<slot>我是默认值，当使用者没有传递具体结构时，就会出现</slot>
							</div>
						</template>
				2.具名插槽
					父组件
						<Category>
							<template slot="middle">
								<div>html结构</div>
							</template>

							<template v-slot:bottom>
								<div>html结构2</div>
							</template>
						</Category>
					子组件
						<template>
							<div class="category">
								<slot name="middle">我是默认值，当使用者没有传递具体结构时，就会出现1</slot>
								<slot name="bottom">我是默认值，当使用者没有传递具体结构时，就会出现2</slot>
							</div>
						</template>
				3.作用域插槽
					1.理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定
						父组件
							<Category title='美食'>
								<template scope="liuboshu">
									<ul>
										<li v-for="(item,index) in liuboshu.foods" :key="index">{{item}}</li>
									</ul>
								</template>
							</Category>

							<Category title='美食'>
								<template slot-scope="{foods}">
									<ul>
										<li v-for="(item,index) in foods" :key="index">{{item}}--解构</li>
									</ul>
								</template>
							</Category>
						子组件
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
	-->
</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category}
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>