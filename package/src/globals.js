/**
 * Declare some globals
 * Do NOT touch this file just in case
 */

module.exports = Object.assign(global, {
	regeneratorRuntime: require('./vendor/regenerator-runtime'),
	babelHelpers: require('./vendor/babel-helpers'),
	_: require('./vendor/underscore'),
});
