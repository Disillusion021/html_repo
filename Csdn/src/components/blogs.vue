<template>
	<div id="blogs">
		<div class="blog" v-for="b in blog">
			<div id="pic">
				<img id="iii" v-bind:src="b.pic" />
			</div>
			<div>
				<h2 id="title">
					<a href="#">{{b.title}}</a>
				</h2>
				<p id="content">
					{{b.content}}
				</p>
				<p id="author">
					<a href="#">{{b.author}}</a>
				</p>
			</div>
		</div>
		<!-- 父传子，通过属性传值 -->
		<pages id="pages" v-bind:totalPages="totalPages" v-bind:current="current" v-on:transCurrent="setCurrent">
		</pages>
	</div>
</template>

<script>
	import pages from './pages.vue'
	export default {
		data() {
			return {
				blog: [],
				totalPages: 0,
				current: 1,
			}
		},
		created() {
			// alert("运行了created钩子函数")
			this.setCurrent(1);
		},
		// beforeUpdate() {
		// 	// alert("运行了update钩子函数")
		// 	this.setCurrent(this.current);
		// },
		components: {
			pages
		},
		methods: {
			setCurrent(p) {
				this.$http.get('http://localhost:9999/' + p + '/4/' + this.txt).then(response => {
					this.blog = response.data.records;
					this.totalPages = response.data.pages;
					this.current = response.data.current;
					console.log(response);
				})
			}
		},

		props: {
			txt: {
				type: String,
				required: false
			}
		}
	}
</script>

<style scoped="scoped">
	#blogs {
		margin: 20px auto;
		width: 60%;
		height: 1060px;
	}

	#pic {
		width: 300px;
		height: 200px;
		display: inline-block;
	}

	#iii {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 0 30%;
	}

	#pic+div {
		padding-left: 30px;
		vertical-align: top;
		width: 70%;
		height: 200px;
		display: inline-block;
		color: black;
	}

	a {
		color: black;
		text-decoration: none;
	}

	#title,
	#content,
	#author {
		margin-top: 20px;
	}

	.blog {
		width: 100% - 40px;
		height: 200px;
		padding: 20px;
	}

	.blog:hover {
		background: rgb(240, 240, 240);
	}

	#pages {
		margin: 15px auto;
		background: rgb(240, 240, 240);
		padding: 15px;
	}
</style>
