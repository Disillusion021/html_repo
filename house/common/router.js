import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from "../src/components/frame.vue";
import {
	RouterTabRoutes
} from 'vue-router-tab';

const importPage = view => () =>
	import(`../page/${view}.vue`)

Vue.use(VueRouter);



const routes = [
	{
		path: '/',
		component: Frame,
		meta: {
			title: '主页' // 页签标题
		},
		children: [
			// 引入 RouterTab 内置路由以支持 iframe 页签
			...RouterTabRoutes,
			{
				path: '/', // 默认页和父级路由一致
				name: 'index',
				component: importPage('index'),
				meta: {
					title: '主页' // 页签标题
				}
			},
			{
				path: '/user',
				name: 'user',
				component: importPage('user/list'),
				meta: {
					title: '用户信息' // 页签标题
				}
			},
			{
				path: '/user/new',
				name: 'user_new',
				component: importPage('user/new'),
				meta: {
					title: '用户新增' // 页签标题
				}
			},
			{
				path: '/user/detail',
				name: 'user_detail',
				component: importPage('user/detail'),
				meta: {
					title: '用户详情' // 页签标题
				}
			},
			
			{
				path: '/role',
				name: 'role',
				component: importPage('role/list'),
				meta: {
					title: '角色列表' // 页签标题
				}
			},
			{
				path: '/role/new',
				name: 'role_new',
				component: importPage('role/new'),
				meta: {
					title: '新增角色' // 页签标题
				}
			},
			{
				path: '/role/detail',
				name: 'role_detail',
				component: importPage('role/detail'),
				meta: {
					title: '角色详细' // 页签标题
				}
			},
			{
				path: '/permission',
				name: 'permission',
				component: importPage('permission/list'),
				meta: {
					title: '权限列表' // 页签标题
				}
			},
			{
				path: '/permission/new',
				name: 'permission_new',
				component: importPage('permission/new'),
				meta: {
					title: '新增权限' // 页签标题
				}
			},
			{
				path: '/permission/detail',
				name: 'permission_detail',
				component: importPage('permission/detail'),
				meta: {
					title: '权限详细' // 页签标题
				}
			},
			{
					path: '/shop/detail',
					name: 'shop_detail',
					component: importPage('shop/detail'),
					meta: {
						title: '门店详细' ,// 页签标题
						}
			},
			{
					path: '/shop',
					name: 'shop',
					component: importPage('shop/list'),
					meta: {
						title: '门店列表' ,// 页签标题
						}
			},
			{
					path: '/shop/new',
					name: 'shop_new',
					component: importPage('shop/new'),
					meta: {
						title: '门店新增' ,// 页签标题
						}
			},
			{
					path: '/menjin/detail',
					name: 'menjin_detail',
					component: importPage('menjin/detail'),
					meta: {
						title: '门禁详细' ,// 页签标题
						}
			},
			{
					path: '/menjin',
					name: 'menjin',
					component: importPage('menjin/list'),
					meta: {
						title: '门禁列表' ,// 页签标题
						}
			},
			{
					path: '/menjin/new',
					name: 'menjin_new',
					component: importPage('menjin/new'),
					meta: {
						title: '门禁新增' ,// 页签标题
						}
			},
			
			{
					path: '/yuanshipingzheng',
					name: 'yuanshipingzheng',
					component: importPage('yuanshipingzheng/list'),
					meta: {
						title: '原始凭证列表' ,// 页签标题
						}
			},
			{
					path: '/client/detail',
					name: 'client_detail',
					component: importPage('client/detail'),
					meta: {
						title: '客户详细' ,// 页签标题
						}
			},
			{
					path: '/client',
					name: 'client',
					component: importPage('client/list'),
					meta: {
						title: '客户列表' ,// 页签标题
						}
			},
			{
					path: '/vip/detail',
					name: 'vip_detail',
					component: importPage('vip/detail'),
					meta: {
						title: '会员详细' ,// 页签标题
						}
			},
			{
					path: '/vip',
					name: 'vip',
					component: importPage('vip/list'),
					meta: {
						title: '会员列表' ,// 页签标题
						}
			},
			{
					path: '/buyorder/detail',
					name: 'buyorder_detail',
					component: importPage('buyorder/detail'),
					meta: {
						title: '订单详细' ,// 页签标题
						}
			},
			{
					path: '/buyorder',
					name: 'buyorder',
					component: importPage('buyorder/list'),
					meta: {
						title: '订单列表' ,// 页签标题
						}
			},
			{
					path: '/deposit/detail',
					name: 'deposit_detail',
					component: importPage('deposit/detail'),
					meta: {
						title: '押金详细' ,// 页签标题
						}
			},
			{
					path: '/deposit',
					name: 'deposit',
					component: importPage('deposit/list'),
					meta: {
						title: '押金列表' ,// 页签标题
						}
			},
			{
					path: '/deposit/new',
					name: 'deposit_new',
					component: importPage('deposit/new'),
					meta: {
						title: '押金新增' ,// 页签标题
						}
			},
			{
					path: '/card/detail',
					name: 'card_detail',
					component: importPage('card/detail'),
					meta: {
						title: '会员卡详细' ,// 页签标题
						}
			},
			{
					path: '/card',
					name: 'card',
					component: importPage('card/list'),
					meta: {
						title: '会员卡列表' ,// 页签标题
						}
			},
			{
					path: '/card/new',
					name: 'card_new',
					component: importPage('card/new'),
					meta: {
						title: '会员卡新增' ,// 页签标题
						}
			},
			{
					path: '/record',
					name: 'record',
					component: importPage('record/list'),
					meta: {
						title: '押金记录列表' ,// 页签标题
						}
			},
			{
					path: '/price',
					name: 'price',
					component: importPage('price/detail'),
					meta: {
						title: '单价管理' ,// 页签标题
						}
			},
			
			
			{
				path: '/page/:id',
				name: 'Page',
				component: importPage('Page'),
				meta: {
					key: 'path',
					title(route) {
						return `Page ${route.params.id}`
					}
				}
			}
		]
	}
];

const router = new VueRouter({
	routes
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
