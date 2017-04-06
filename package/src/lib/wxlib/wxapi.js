const apiList = require('./apis');

const promisify = (apiName, params = {}, context = wx) => {
	return new Promise((resolve, reject) => {
		context[apiName]({ ...params, success: resolve, fail: reject });
	});
};

// 将指定小程序 API 转换为 promise 调用
apiList.forEach(api => {
	exports[api] = params => promisify(api, params);
});