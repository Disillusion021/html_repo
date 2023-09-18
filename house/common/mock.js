import Mock from 'mockjs';
import system from '../data/system.js';
import user from '../data/user.js';
import role from '../data/role.js';
import permission from '../data/permission.js';
import runtime_config from "./config";
let baseURL = runtime_config[process.env.NODE_ENV].path;

let businessDataArray = [
	system, user, role, permission
];

 
for (let index in businessDataArray) {
	let itemDataArray = businessDataArray[index];
	for (let jndex in itemDataArray) {
		let dataObject = itemDataArray[jndex];
		
		Mock.mock(baseURL+dataObject.key, dataObject.method, () => {
			if ("function" === typeof dataObject.data) {
				return dataObject.data();
			}
			return dataObject.data;
		});
	}
}