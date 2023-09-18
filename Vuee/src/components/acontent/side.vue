<template>
	<div id="side">
		<littleside></littleside>
		<littleside></littleside>
		<littleside></littleside>
		<littleside></littleside>
		<littleside></littleside>
	</div>
</template>

<script>
	import littleside from './side/littleside.vue'
	export default {
		components: {
			'littleside': littleside
		}
	}
</script>

<style>
	#side {
		
		margin-left: 100px;
		width: 350px;
		height: 2800px;
		background: gold;
		float: right;
	}
</style>
