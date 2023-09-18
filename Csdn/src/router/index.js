import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import blogs from '../components/blogs.vue'
import publish from '../components/publish.vue'
const router = new VueRouter({
	routes:[
		{path: '/', component:blogs},
		{path: '/publish', component:publish}
	],
	mode: 'history'
})

export default router