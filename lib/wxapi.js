const co = require('co');
const request = require('request');
const pify = require('es6-promisify');
const fs = require('fs');

module.exports = {
	_domain: 'https://api.weixin.qq.com',
	_timeout: 3000,

	/**
	 * 获取 access token
	 * @return Promise
	 */
	getAccessToken: co.wrap(function *({ appid, appsecret }) {
		const url = `${this._domain}/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`;
		const params = { url, timeout: this._timeout, json: true };
		const [response, body] = yield pify(request.get, { multiArgs: true })(params);

		if (response.statusCode !== 200) {
			throw new Error('network error');
		}

		if (!body || 'errcode' in body) {
			throw new Error((body || {}).errmsg || 'invalid appid');
		}

		return body.access_token;
	}),

	/**
	 * 生成小程序页面二维码
	 * @return Promise
	 */
	createQRCode: co.wrap(function *({ accessToken, path, width = 430, filepath }) {
		const url = `${this._domain}/cgi-bin/wxaapp/createwxaqrcode?access_token=${accessToken}`;
		const data = { path, width };
		const params = { url, timeout: this._timeout, json: true, body: data };

		return new Promise((resolve, reject) => {
			request.post(params)
				.on('error', reject)
				.on('response', response => {
					if (response.headers['content-type'] === 'image/jpeg') {
						response.pipe(fs.createWriteStream(filepath));
						return resolve();
					}

					return reject(new Error('error occured'));
				});
		});
	}),
};