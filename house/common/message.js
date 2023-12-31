import {Notice, Modal} from 'view-design';
let message = {
	confirm: (param) => {
		Modal.confirm(param);
	},
	warning: (msg) => {
		Notice.warning({
			title: '警告',
			desc: msg
		});
	},
	info: (msg) => {
		Notice.success({
			title: '成功',
			desc: msg
		});
	},
	error: (msg) => {
		Notice.warning({
			title: '错误',
			desc: msg
		});
	}
};

export default message;