<template>
	<div id="navi">
		<p>{{fathermsg}}</p>
		<!-- 子组件事件函数 -->
		<button v-on:click="c()">子组件向父组件传值</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navimsg: 'hello,我是子组件的信息'
			}
		},

		//第一种方式
		// props:[
		// 	'fathermsg'
		// ]
		//第二种方式
		props: {
			'fathermsg': {
				type: String,
				required: true
			}
		},
		methods: {
			c() {
				// 第一个参数是触发父组件的事件名,第二个参数是传递值
				this.$emit('tt', this.navimsg);
			}
		}
	}
</script>

<style>
	#navi {
		width: 100%;
		height: 80px;
		background: #00FFFF;
	}
</style>
