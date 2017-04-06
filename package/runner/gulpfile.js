const gulp = require('gulp');
const gutil = require('gulp-util');
const { resolve } = require('path');
const del = require('del');
const $ = require('gulp-load-plugins')();
const argv = require('minimist')(process.argv.slice(2));
const runSequence = require('run-sequence');
const config = require('./config');

// 构建源目录
const buildSource = config.src;

const target = config.dist[argv.target] ? argv.target : 'debug';

// 构建输出目录
const buildTarget = config.dist[target];

// 是否生成 sourcemaps
const sourcemaps = !!argv.sourcemaps;

// 是否精简代码
const minify = !!argv.minify;

// 是否为监听状态
let watchMode = false;

// .babelrc 配置文件需要用到 `BABEL_ENV`
process.env.BABEL_ENV = ({
	debug: 'development',
	test: 'test',
	release: 'production',
})[target];

const build = done => runSequence('clean', ...[
	'build:js',
	'build:wxss',
	'build:wxml',
	'build:json',
	'build:image',
], done);

const replace = stream => (config.define[target] || []).reduce((ret, [search, replacement]) => {
	return ret.pipe($.replace(search, replacement, { skipBinary: true }));
}, stream);

gulp.task('watch', () => build(() => {
	watchMode = true;

	Object.keys(config.filesPattern).forEach(assets => {
		const files = resolve(config.src, config.filesPattern[assets]);
		$.watch(files, () => runSequence(`build:${assets}`));
	});
}));

gulp.task('build', build);

gulp.task('clean', done => {
	const files = resolve(buildTarget, '**/*');
	const okay = () => setTimeout(done, 2000);
	del(files, { force: true }).then(okay, okay);
});

gulp.task('build:js', () => {
	// 注入 `regeneratorRuntime` 以支持 async/await 语法
	// 注入 `babelHelpers`，这样 babel 转译时不会在每个 js 文件生成一份 helper 函数
	const defaultVendorLibs = ['regeneratorRuntime', 'babelHelpers'];
	const globals = defaultVendorLibs.concat(config.globals).join(', ');

	const files = resolve(config.src, config.filesPattern.js);

	const stream = gulp.src(files).pipe($.if(watchMode, $.changed(buildTarget)));

	return replace(stream)
		.pipe($.if(watchMode, $.plumber()))
		.pipe($.if(sourcemaps, $.sourcemaps.init()))
		.pipe($.if(function (file) {
			const basename = file.path.replace(file.base, '');
			return basename === 'app.js';
		}, $.injectString.prepend(`const { ${globals} } = require('./globals');\n`)))
		.pipe($.if(function (file) {
			const basename = file.path.replace(file.base, '');
			if (['app.js', 'globals.js'].includes(basename)) {
				return false;
			}
			if (/^vendor(?:\\|\/)/.test(basename)) {
				return false;
			}
			return true;
		}, $.injectString.prepend(`const { ${globals} } = global;\n`)))
		.pipe($.babel())
		.pipe($.if(minify, $.injectString.wrap('!function () {\n', '\n}();')))
		.pipe($.if(minify, $.uglify()))
		.pipe($.if(sourcemaps, $.sourcemaps.write('.')))
		.pipe(gulp.dest(buildTarget));
});

gulp.task('build:wxss', () => {
	const files = resolve(config.src, config.filesPattern.wxss);

	return gulp.src(files)
		.pipe($.if(watchMode, $.changed(buildTarget)))
		.pipe($.if(minify, $.cleanCss({
			inline: ['none'],
		})))
		.pipe($.replace(/(@import)\s+url\((.+?)\)/g, '$1 "$2"'))
		.pipe(gulp.dest(buildTarget));
});

gulp.task('build:wxml', () => {
	const files = resolve(config.src, config.filesPattern.wxml);

	return gulp.src(files)
		.pipe($.if(watchMode, $.changed(buildTarget)))
		.pipe($.if(minify, $.htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			html5: false,
			keepClosingSlash: true,
		})))
		.pipe(gulp.dest(buildTarget));
});

gulp.task('build:json', () => {
	const files = resolve(config.src, config.filesPattern.json);

	const stream = gulp.src(files)
		.pipe($.if(watchMode, $.changed(buildTarget)))
		.pipe($.if(watchMode, $.plumber(function (error) {
			gutil.log(error.message);
			this.emit('end');
		})));

	return replace(stream)
		.pipe($.json5({ beautify: false }))
		.pipe($.jsonValidator({ allowDuplicatedKeys: false }))
		.pipe($.if(minify, $.jsonminify(), $.jsonFormat('\t')))
		.pipe(gulp.dest(buildTarget));
});

gulp.task('build:image', () => {
	const files = resolve(config.src, config.filesPattern.image);

	return gulp.src(files)
		.pipe($.if(watchMode, $.changed(buildTarget)))
		.pipe(gulp.dest(buildTarget));
});