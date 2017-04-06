const wxapi = require('./wxapi');

Object.assign(exports, wxapi, {
	login: () => wxapi.login().then(
		resp => resp.code ? resp : Promise.reject(resp),
	),

	setStorage: (key, value) => wxapi.setStorage({ key, data: value }),
	getStorage: key => wxapi.getStorage({ key }),
	removeStorage: key => wxapi.removeStorage({ key }),
});