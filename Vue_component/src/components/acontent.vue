<template>
	<div id="acontent">
		<side></side>
		<ing>
			<h1>正在热映（33部）</h1>
		</ing>
		<ing>
			<h1>即将上映（84部）</h1>
		</ing>
		<ing>
			<h1>热播电影</h1>
		</ing>
	</div>
</template>

<script>
	import ing from './acontent/ing.vue'
	import side from './acontent/side.vue'

	export default {
		components: {
			'ing': ing,
			'side': side
		}
	}
</script>

<style>
	#acontent {
		width: 1200px;
		height: 3000px;
		background: red;
		float: left;
	}
	
</style>
