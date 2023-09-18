<template>
	<div id="app">
		<navi v-on:transtxt="transtxt"></navi>
		<router-view v-bind:txt = "txt"></router-view>
	</div>
</template>

<script>
	import navi from './components/navi.vue'
	import blogs from './components/blogs.vue'
	export default {
		name: 'app',
		data() {
			return {
				txt : ''
			}
		},
		components: {
			navi,
			blogs
		},
		methods: {
			transtxt(t) {
				this.txt = t;
				alert("父组件接收成功" + this.txt);
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		font: 15px;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
