const co = require('co');
const mkdirp = require('mkdirp');
const promisify = require('es6-promisify');
const through2 = require('through2');
const { readdir } = require('fs');
const { join } = require('path');
const { ncp } = require('ncp2');

// `create-wxapp` init
exports.run = co.wrap(function *(argv, clt) {
	try {
		// 小程序项目名称
		let projectName;

		// 是否集成 underscore 类库到项目
		let integrateUnderscore = false;

		// 提示：输入小程序项目名称
		while (true) {
			let answer = yield clt.getInput('请输入小程序项目名称: ');
			answer = answer.trim();

			if (/^[-\w]{3,30}$/.test(answer)) {
				projectName = answer;
				break;
			} else {
				console.log('项目名称输入错误，请重新输入（格式：3 ~ 30 位字母）！\n');
			}
		}

		// 提示：是否集成 underscore 类库到项目
		while (true) {
			let answer = yield clt.getInput('是否集成 underscore 类库到项目？(Y/n) ');
			answer = answer.trim();

			if (['yes', 'no', 'Y', 'n'].includes(answer)) {
				integrateUnderscore = ({ yes: true, no: false, Y: true, n: false })[answer];
				break;
			} else {
				console.log('请输入 Y(yes) 或者 n(no)！\n');
			}
		}

		// 源目录 及 安装目录
		const packageDir = join(__dirname, '../../package');
		const releaseDir = join(process.cwd(), projectName);

		// 新建目标目录
		yield promisify(mkdirp)(releaseDir);

		// 判断目标目录是否为空？
		const files = yield promisify(readdir)(releaseDir);
		if (files.length) {
			console.error(`目录 ${releaseDir} 不为空，操作取消！`);
			return;
		}

		yield promisify(ncp)(packageDir, releaseDir, {
			stopOnErr: true,

			filter(target) {
				target = target.split(/\\/).join('/');

				if (target.includes('/package/node_modules')) {
					return false;
				}

				if (!integrateUnderscore) {
					if (target.includes('/package/src/vendor/underscore.js')) {
						return false;
					}
				}

				return true;
			},

			rename(target) {
				target = target.replace('editorconfig.template', '.editorconfig');
				target = target.replace('gitignore.template', '.gitignore');
				return target;
			},

			transform(readStream, writeStream, file) {
				const filename = file.name.split(/\\/).join('/');

				readStream
					.pipe(through2(function (chunk, enc, callback) {
						let str = chunk.toString('utf8');

						if (!integrateUnderscore) {
							if (filename.includes('/package/src/globals.js')) {
								str = str.replace(`\t_: require('./vendor/underscore'),\n`, '');
								str = str.replace(`\t_,\n`, '');
							}

							if (filename.includes('/package/runner/config.js')) {
								str = str.replace(`'_'`, '');
							}
						}

						this.push(str);
						callback();
					}))
					.pipe(writeStream);
			},
		});

		console.log(done(projectName));
	} catch (err) {
		console.log(err);
	}
});

const done = projectName => `
Well done，项目初始化成功!!

接下来，你可以进行如下操作：

1) 安装构建依赖
$ cd ${projectName}
$ npm i -d

2) 执行构建
$ npm run dev

3) 打开微信开发者工具，添加小程序项目，项目目录指定如下:
${join(process.cwd(), projectName, 'debug')}
`;