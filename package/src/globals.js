const regeneratorRuntime = require('./vendor/regenerator-runtime');
const babelHelpers = require('./vendor/babel-helpers');
const _ = require('./vendor/underscore');
const wxlib = require('./lib/wxlib/index');

module.exports = Object.assign(global, {
	regeneratorRuntime,
	babelHelpers,
	_,
	wxlib,
});
