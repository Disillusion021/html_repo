<template>
	<div>
		<ul>
			<li style="width: 80px;" v-on:click="setCurrent(1)" v-if="current != 1">
				首页
			</li>
			<li style="width: 100px;" v-on:click="setCurrent(current - 1)" v-if = "current != 1">
				上一页
			</li>
			<li v-for="p in totalPages" v-on:click="setCurrent(p)" v-bind:class="{active : p == current}">
				{{p}}
			</li>
			<li style="width: 100px;" v-on:click="setCurrent(current + 1)" v-if = "current != totalPages">
				下一页
			</li>
			<li style="width: 80px;" v-on:click="setCurrent(totalPages)" v-if = "current != totalPages">
				尾页
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			setCurrent(p){
				this.$emit('transCurrent',p);
			}
		},
		props: {
			totalPages :{
				type: Number,
				required: false
			},
			current : {
				type: Number,
				required: true
			}
		}
	}
</script>

<style scoped="scoped">
	ul {
		/* text-align: center; */
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	li {
		width: 50px;
		height: 50px;
		background: white;
		text-align: center;
		line-height: 50px;
		margin-left: 30px;
		font-size: 25px;
		border-radius: 5px;
		list-style-type: none;
		padding: 0 5px;
		/* display: inline-block; */
	}
	li:hover {
		background-color: lightblue;
	}
	
	.active {
		background: royalblue;
	}
</style>
