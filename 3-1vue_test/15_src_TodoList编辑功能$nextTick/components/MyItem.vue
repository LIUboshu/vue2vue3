<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show='!todo.isEdit' key="">{{todo.title}}</span>
			<input 
				v-show='todo.isEdit' 
				type="text" ref="bianji" 
				:value="todo.title" 
				@blur="handleBlur(todo,$event)"
			/>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show='!todo.isEdit' class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
	</li>
</template>

<script>
	import pubsub from 'pubsub-js';
	export default {
		name:'MyItem',
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				this.$bus.$emit('checkTodo',id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					// this.$bus.$emit('deleteTodo',id)


					//发布消息
					pubsub.publish('deleteTodo',id);
				}
			},
			// 编辑
			handleEdit(todo){
				// 这里判断todo这个对象上有没有isEdit这个属性  需要使用hasOwnProperty方法
				// 直接使用hasOwnProperty会报错：Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
				if(Object.prototype.hasOwnProperty.call(todo, "isEdit")){
					todo.isEdit = true
				}else{
					this.$set(todo, 'isEdit', true);
				}


				// setTimeout(()=>{
				// 	// 这行执行的时候，input框还在隐藏状态   handleEdit执行完之后input框在显示
				// 	this.$refs.bianji.focus()
				// })

				// $nextTick所指定的回调，会在dom节点更新之后再执行
				this.$nextTick(()=>{
					this.$refs.bianji.focus()
				})
				/* 
					nextTick
						1.语法：this.$nextTick(回调函数)
						2.作用：在下一次DOM更新结束后执行其指定的回调
						3.什么时候用：当改变数据后，要基于更新后的新dom进行某些操作时，要在nextTick所指定的回调函数中执行
				
				*/
				
			},
			// 失去焦点
			handleBlur(todo,e){
				todo.isEdit = false;
				if(e.target.value.trim() === '') return alert('不能为空');
				this.$bus.$emit('handUpdate',e.target.value,todo.id);
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>