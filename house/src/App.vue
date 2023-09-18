<template>
  <div id="app">
    <router-view v-if="isLogin"></router-view>
	<Layout v-if="!isLogin" :class="'bg-danger w-100 h-100 position-fixed'">
		<Login></Login>
	</Layout>
  </div>
</template>
<script>
	import store from '../common/store.js';
	import Login from './components/login.vue';
	
	export default {
		components: {
			Login
		},
		data() {
			return {};
		},
		created: function() {
			store.commit("checkLogin");
		},
		methods: {
			
		},
		computed: {
			isLogin() {
				console.log(store.state.isAlreadyLogin);
				return store.state.isAlreadyLogin;
			}
		}
	}

</script>

<style>

</style>
