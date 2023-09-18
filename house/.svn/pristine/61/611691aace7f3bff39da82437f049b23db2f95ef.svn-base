const common = {
	toJson: (object) => {
		return JSON.stringify(object);
	},
	toObject: (valString) => {
		return JSON.parse(valString);
	},
	deepClone: (object) => {
		return common.toObject(common.toJson(object));
	},
	compareObjectDeep: (val1, val2) => {
		return common.toJson(val1) === common.toJson(val2);
	}
};

export default common;