<template>
	<div id="pic">
		<ul>
			<li v-for="u in pics">
				<img v-bind:src="u.thumbnailUrl" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pics: []
			}
		},
		methods: {
			
		},
		created() {
			this.$http.get('https://jsonplaceholder.typicode.com/photos').then(data =>{
				confirm("调用了钩子函数");
				this.pics = data.body;
			});
		}
	}
</script>

<style scoped="scoped">
	#pic {
		margin: 0 auto;
		width: 1200px;
		background: white;
		display: block;
	}
	li {
		list-style-type: none;
		float: left;
	}
</style>
