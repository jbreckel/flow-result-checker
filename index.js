#!/usr/bin/env node
/* eslint-disable no-console */

const ora = require('ora')

const { resolve } = require('path')

const { spawnSync } = require('child_process')

const createChecker = require('./checker')

const checker = createChecker()

const spinner = ora('Running flow').start()
const res = spawnSync(
  'flow',
  ['check'],
  {
    encoding: 'utf8',
    cwd: resolve('.'),
  }
)
spinner.stop()
const stdout = String(res.stdout)
const stderr = String(res.stderr)

checker({ stdout, stderr })
