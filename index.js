#!/usr/bin/env node

const checker = require('./checker')()

process.stdin.setEncoding('utf8')

const data = [];
process.stdin.on('readable', () => {
	data.push(process.stdin.read());
});

process.stdin.on('end', () => {
	checker({ stdout: data.join('') });
});
