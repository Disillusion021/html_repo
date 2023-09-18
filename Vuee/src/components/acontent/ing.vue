<template>
	<div id="ing">
		<h1>{{text}}</h1>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				text : '正在热映'
			}
		}
	}
</script>

<style>
	#ing {
		width: 760px;
		height: 600px;
		background: lightgreen;
		margin-top: 100px;
		float: left;
		display: inline;
	}
</style>
