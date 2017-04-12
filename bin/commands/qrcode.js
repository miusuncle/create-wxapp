/**
 * 生成小程序页面二维码
 * command: create-wxapp qrcode --appid=xxx --appsecret=xxx --path=xxx [--width=xxx]
 * - appid     小程序 APPID
 * - appsecret 小程序 APPSecret
 * - path      小程序页面路径
 * - width     指定生成二维码的宽度（可选，默认值为 430px）
 */

const co = require('co');
const { red } = require('colors');
const { resolve } = require('path');
const wxapi = require('../../lib/wxapi');

exports.run = co.wrap(function *(argv) {
	let { appid, appsecret, path, width } = argv;

	for (let field of ['appid', 'appsecret', 'path']) {
		if (!argv[field]) {
			return console.log(red(`error: require \`${field}\` field`));
		}
	}

	if (width && typeof width !== 'number') {
		return console.log(red(`error: field \`width\` should be a number`));
	}

	let accessToken;

	try {
		accessToken = yield wxapi.getAccessToken({ appid, appsecret });
	} catch (err) {
		return console.log(red(err.message));
	}

	try {
		const filename = Math.random().toString(36).slice(2, 8).toUpperCase();
		const filepath = resolve(process.cwd(), `./wxapp-qrcode-${filename}.jpg`);
		yield wxapi.createQRCode({ accessToken, path, width, filepath });

		console.log(`\n已成功生成二维码，路径如下：\n${filepath}`);
	} catch (err) {
		return console.log(red(err.message));
	}
});