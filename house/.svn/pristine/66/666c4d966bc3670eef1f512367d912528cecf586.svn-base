import Mock from 'mockjs';

let permission = [{
		key: "/permission/all",
		method: "get",
		data: Mock.mock({
			'STATUS': "SUCCESS",
			'data': [
				{
					permissionId: 1,
					name: "系统管理",
					permissions: [{
							permissionId: 2,
							name: "用户列表",
							path: "/user"
						},
						{
							permissionId: 3,
							name: "角色列表",
							path: "/role"
						},
						{
							permissionId: 4,
							name: "权限列表",
							path: "/permission"
						}
					]
				},
			]
		})
	},

	{
		key: "/permission/list",
		method: "get",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {
					'current': 0,
					'size': 10,
					'pages': 6,
					'total': 55,
					"records|10": 
						[
							{
								'permissionId': '@increment(1)',
								'name': "用户列表",
								'path': "/user",
								'statu': true,
								'pId': 0
							},
						],
				},
			});
		}
	},
	
	{
		key: "/permission/info",
		method: "get",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {
					'permissionId': '@increment(1)',
					'name': "用户列表",
					'path': "/user",
					'status': true,
					'pId': 1
				},
			});
		}
	},
	
	{
		key: "/permission/info",
		method: "post",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {},
			});
		}
	},
	
	{
		key: "/permission/info",
		method: "put",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {},
			});
		}
	},
	
	{
		key: "/permission/info",
		method: "delete",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {},
			});
		}
	},

];
export default permission;