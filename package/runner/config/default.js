const { resolve } = require('path');

module.exports = {
	src: resolve('../src'),
	dist: {
		debug: resolve('../dist/debug'),
		test: resolve('../dist/test'),
		preview: resolve('../dist/preview'),
		release: resolve('../dist/release'),
	},

	filesPattern: {
		js: '**/*.js',
		wxss: '**/*.wxss',
		wxml: '**/*.wxml',
		json: '**/*.json',
		image: '**/*.{jpg,jpeg,png,gif,svg}',
	},

	globals: [
		'_',
		'pify',
	],
};