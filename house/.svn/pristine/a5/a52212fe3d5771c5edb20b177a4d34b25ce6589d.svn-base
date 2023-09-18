import axios from "axios";
import runtime_config from "./config";
import message from "./message.js";
import store from '../common/store.js';
	import Qs from 'qs';
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] = "application/json";

console.log(axios.defaults.headers);

let _instance = axios.create({
	withCredentials: true,
	baseURL: runtime_config[process.env.NODE_ENV].path,
});
_instance.interceptors.request.use(
	config => {
		return config;
	}, 
	error => {
		console.log("出错了")
	}
);

const httpObject = {
	
	_changeParam: param => {
		if (process.env.NODE_ENV !== "local") {
			param.params = param.param;
		}
		return param;
	},
	put: param => {
		param.method = "put";
		console.log(param)
		return httpObject._request(httpObject._changeParam(param));
	},
	get: param => {
		param.method = "get";
		return httpObject._request(httpObject._changeParam(param));
	},
	post: param => {
		param.method = "post";
		return httpObject._request(httpObject._changeParam(param));
	},
	delete: param => {
		param.method = "delete";
		return httpObject._request(httpObject._changeParam(param));
	},
	_request: param => {
		return new Promise((resolve, reject) => {
			_instance.request(param)
				.then(res => {
					
					let response = typeof res === "string" ? JSON.parse(res) : res;
					console.log(response)
					let responseData = response.data;
					let status = responseData.STATUS;
					if ("SUCCESS" === status) {
						resolve(responseData.DATA);
					} 
					else if (status === "LOGIN_FAIL") {
						store.commit('loginOut');
					}
					else if (status === "FAIL") {
						message.warning(responseData.MESSAGE);
					}
					else if (status === "ERROR") {
						message.error(responseData.MESSAGE);
					} else {
						message.error("系统出现未知错误！");
					}
				})
				.catch(err => {
					message.error("系统出现未知错误！");
				});
		});
	}
}



export default httpObject;