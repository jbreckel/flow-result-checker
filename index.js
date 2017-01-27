#!/usr/bin/env node

const checker = require('./checker')()

process.stdin.setEncoding('utf8')
process.stdin.on('data', (stdout) => checker({ stdout }))
