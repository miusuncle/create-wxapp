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
			projectName = yield clt.getInput('请输入小程序项目名称: ');
			projectName = projectName.trim();

			if (/^[a-z]{3,8}$/.test(projectName)) {
				break;
			} else {
				console.log('项目名称输入错误，请重新输入（格式：3 ~ 8 位字母）！\n');
			}
		}

		// 提示：是否集成 underscore 类库到项目
		while (true) {
			let answer = yield clt.getInput('是否集成 underscore 类库到项目？(yes/no) ');
			answer = answer.trim();

			if (['yes', 'no'].includes(answer)) {
				integrateUnderscore = ({ yes: true, no: false})[answer];
				break;
			} else {
				console.log('请输入 yes 或者 no！\n');
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

				if (!integrateUnderscore) {
					if (target.includes('vendor/underscore.js')) {
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
							if (filename.includes('src/globals.js')) {
								str = str.replace(`const _ = require('./vendor/underscore');\n`, '');
								str = str.replace(`\t_,\n`, '');
							}

							if (filename.includes('/runner/config.js')) {
								str = str.replace(`'_', `, '');
							}
						}

						this.push(str);
						callback();
					}))
					.pipe(writeStream);
			},
		});

		console.log('Well done~!');
	} catch (err) {
		console.log(err);
	}
});