module.exports = api => params => new Promise((resolve, reject) => {
	api.call(wx, { ...params, success: resolve, fail: reject });
});