import Mock from 'mockjs';

export default [{
		key: "/role/all",
		method: "get",
		data: Mock.mock({
			'STATUS': "SUCCESS",
			'DATA': [{
					'roleId': '1',
					'roleName': "角色角色1"
				}, {
					'roleId': '2',
					'roleName': "角色角色2"
				},
				{
					'roleId': '3',
					'roleName': "角色角色3"
				},
				{
					'roleId': '4',
					'roleName': "角色角色角色4"
				},
			]
		})
	},

	{
		key: "/role/list",
		method: "get",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {
					'current': 0,
					'size': 10,
					'pages': 6,
					'total': 55,
					"records|10": [{
						'roleId': '@increment(1)',
						'roleName|1': [
							"订单管理员",
							"服务管理员",
							"系统管理员",
							"店铺管理员",
							"专家管理员"
						],
						'statu': true,
						'ct': '@datetime("yyyy-MM-dd hh:mm:ss")'
					}, ]

				},
			});
		}
	},
	
	{
		key: "/role/info",
		method: "post",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {},
			});
		}
	},
	
	{
		key: "/role/info",
		method: "put",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {},
			});
		}
	},
	
	{
		key: "/role/info",
		method: "get",
		data: () => {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': {
					'role': {'roleId': '@increment(1)',
					'roleName|1': [
						"订单管理员",
						"服务管理员",
						"系统管理员",
						"店铺管理员",
						"专家管理员"
					],},
					'permissions': [1, 2, 3, 4]
				},
			});
		}
	},

];
