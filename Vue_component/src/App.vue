<template>
	<div id="app">
		<navi v-bind:fathermsg = "fathermsg" v-on:tt = "ff"></navi>
		<pic></pic>
		<center>
			<acontent></acontent>
		</center>
		<afooter></afooter>
	</div>
</template>

<script>
	import navi from './components/navi.vue'
	import acontent from './components/acontent.vue'
	import afooter from './components/afooter.vue'
	import pic from './components/pic.vue'
	export default {
		name: 'app',
		components: {
			'navi': navi,
			'acontent': acontent,
			'afooter': afooter,
			'pic': pic,
		},
		data() {
			return {
				fathermsg: '我是父组件的信息'
			}
		},
		methods: {
			ff(navimsg) {
				alert(navimsg);
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		text-align: center;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
</style>
