<template>
	<div>
		<button @click="sendStudent">获取学生信息</button>
		<button @click="sendCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			sendStudent(){
				axios.get('http://localhost:8080/liuboshu/students').then(
					response =>{
						console.log('请求成功',response.data)
					},
					error =>{
						console.log('请求失败',error.message)
					}
				)
			},
			sendCars(){
				axios.get('http://localhost:8080/boshu/cars').then(
					response =>{
						console.log('请求成功',response.data)
					},
					error =>{
						console.log('请求失败',error.message)
					}
				)
			}
		},
	}
</script>

<style>

</style>
