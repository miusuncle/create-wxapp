#!/usr/bin/env node

const Clt = require('clt');
const { join } = require('path');
const { name, version, description } = require('../package.json');

const clt = new Clt(Object.assign({
	name: name,
	runnerDir: join(__dirname, './commands'),
}, { version, description }));

clt.run();