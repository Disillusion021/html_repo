import Mock from 'mockjs';

let user = [{
		key: "/user/info",
		method: "get",
		data: Mock.mock({
			'STATUS': "SUCCESS",
			'DATA': {
				
			}
		})
	},

	{
		key: "/user/list",
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
						'userId': '@increment(1)',
						'account|6': /[A-Z][0-9][a-z]/,
						'nickName': '@cname()',
						'age': 20,
						'sex': true,
						'tel|11': /[0-9]/,
						'secId|18': /[0-9]/,
						'headImg': '@image("200x200")',
						'ct': '@datetime("yyyy-MM-dd hh:mm:ss")'
					}]
				}
			});
		}
	},
	{
		key: "/user/info",
		method: "delete",
		data: function() {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': "",
			});
		}
	},
	{
		key: "/user/info",
		method: "put",
		data: function() {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': "",
			});
		}
	},
	{
		key: "/user/info",
		method: "post",
		data: function() {
			return Mock.mock({
				'STATUS': "SUCCESS",
				'DATA': "",
			});
		}
	},
];

export default user;
