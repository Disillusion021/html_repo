const _local = {
	setItem: (key, value) => {
		value = value === undefined ? {} : value;
		localStorage.setItem(key, JSON.stringify(value));
	},
	getItem: key => {
		let value = localStorage.getItem(key);
		value = value === undefined ? {} : value;
		return JSON.parse(value);
	},
	removeItem: key => {
		localStorage.removeItem(key);
	},
	session: {
		setItem: (key, value) => {
			value = value === undefined ? {} : value;
			sessionStorage.setItem(key, JSON.stringify(value));
		},
		getItem: key => {
			let value = sessionStorage.getItem(key);
			value = value === undefined ? {} : value;
			return JSON.parse(value);
		},
		removeItem: key => {
			sessionStorage.removeItem(key);
		}
	}
};

export default _local;