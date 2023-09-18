<template>
	<div id="div0">
		<img id="logo" src="../assets/logo.png" />
		<ul>
			<li>
				<a>
					首页
				</a>
			</li>
			<li>
				<a>
					博客
				</a>
			</li>
			<li>
				<a>
					专栏课程
				</a>
			</li>
			<li>
				<a>
					下载
				</a>
			</li>
			<li>
				<a>
					问答
				</a>
			</li>
			<li>
				<a>
					社区
				</a>
			</li>
			<li>
				<a>
					插件
				</a>
			</li>
			<li>
				认证
			</li>
		</ul>
		<input type="text" placeholder="java面试300问" v-model="txt"/>
		<button id="search" v-on:click="transtxt()">搜索</button>
		<li style="float: left; margin-left: 220px;">
			<a>
				登录/注册
			</a>
		</li>
		<button id="publish">
			<router-link style="color: white; text-decoration: none;" to="/publish">发布博客</router-link>
		</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				txt : ''
			}
		},
		methods:{
			transtxt() {
				alert("子传父事件" + this.txt);
				this.$emit('transtxt', this.txt);
			}
		}
	}
</script>

<style scoped="scoped">
	#div0 {
		width: 100%;
		height: 50px;
		background: rgb(255, 255, 255);
		line-height: 50px;

	}

	#logo {
		height: 44px;
		margin-top: 3px;
		margin-left: 25px;
		margin-right: 20px;
		float: left;
	}

	ul {
		float: left;
	}

	li {
		padding: 0 12px;
		float: left;
		list-style-type: none;
		cursor: pointer;
	}

	li:hover {
		background-color: rgb(240, 240, 240);
	}

	input {
		padding: 0 20px;
		border: 0;
		width: 30%;
		height: 30px;
		margin-left: 7%;
		margin-top: 10px;
		float: left;
		background-color: rgb(248, 248, 248);
		border-radius: 20px 0 0 20px;
		outline: none;
	}

	input:focus {
		margin-top: 9px;
		padding-left: 19px;
		border: 1px solid orange;
		border-right-width: 0px;
	}

	#search {
		font-size: 15px;
		color: white;
		margin-top: 10px;
		border: 0;
		border-radius: 0 20px 20px 0;
		background-color: orangered;
		width: 80px;
		height: 30px;
		float: left;
	}

	#publish {
		font-size: 15px;
		color: white;
		margin-top: 10px;
		margin-right: 40px;
		border: 0;
		border-radius: 20px;
		background-color: orangered;
		width: 100px;
		height: 30px;
		float: right;
	}

	#search:hover,
	#publish:hover {
		background-color: darkorange;
	}

</style>
