import Mock from 'mockjs';

let system = [{
	key: "/system/login",
	method: "put",
	data: Mock.mock({
		'STATUS': "SUCCESS",
		'data': {
			'user': {
				'id': '@increment(1)',
				'account|6': /[a-z][A-Z][0-9]/,
				'ct': '@datetime("yyyy-MM-dd hh:mm:ss")'
			},
			'permissions': [
 
				{
					permissionId: 1,
					name: "课程管理",
					permissions: [
						{
							permissionId: 11,
							name: "课程列表",
							path: "/course"
						},
						{
							permissionId:12,
							name: "课程申请列表",
							path: "/course/requests"
						},
						{
							permissionId:13,
							name: "排课",
							path: "/course/schedule"
						}
					]
				},
				{
					permissionId: 2,
					name: "体训师管理",
					permissions: [
						{
							permissionId: 21,
							name: "体训师列表",
							path: "/trainer"
						}
					]
				},
				{
					permissionId: 3,
					name: "预约管理",
					permissions: [
						{
							permissionId: 31,
							name: "预约列表",
							path: "/order"
						}, 
					]
				},
				{
					permissionId: 4,
					name: "上课管理",
					permissions: [
						{
							permissionId: 41,
							name: "上课列表",
							path: "/lessons"
						}, 
					]
				},
				{
					permissionId: 5,
					name: "月报结算管理",
					permissions: [
						{
							permissionId: 51,
							name: "月报结算列表",
							path: "/account"
						}, 
					]
				},
				{
					permissionId: 6,
					name: "体训师结算管理",
					permissions: [
						{
							permissionId: 61,
							name: "体训师结算列表",
							path: "/trainer/accounts"
						}, 
					]
				},
			],
			
		}
	})
}];
export default system;
