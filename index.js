#!/usr/bin/env node
// @flow
/* eslint-disable no-console */

const program = require('commander')
const chalk = require('chalk')

const { resolve } = require('path')
const { writeFileSync } = require('fs')
const mkdirp = require('mkdirp')

const { spawnSync } = require('child_process')

const { version } = require('./package.json')

const debug = (str) => console.log(chalk.yellow(str))

const defaultOptions = {
  file: 'results.txt',
  errorFile: 'error.txt',
}

program
  .version(version)
  .option('--no-color')
  .option('--debugging')
  .option(
    '-d, --dir <dir>',
    'The directory where to save the flow result and errors. If not specified no files will be saved.'
  )
  .option(
    '-f, --file <filename>',
    `Name of the result file. defaults to '${defaultOptions.file}'`,
    defaultOptions.file
  )
  .option(
    '-e, --error-file <filename>',
    `Name of the file where parsing errors are stored. defaults to '${defaultOptions.errorFile}'`,
    defaultOptions.errorFile
  )
  .parse(process.argv)

const { file, errorFile, dir, debugging } = program
if ( debugging ) {
  debug('file       ', file)
  debug('errorFile  ', errorFile)
  debug('dir        ', dir)
}

if ( dir ) {
  try {
    mkdirp.sync(resolve(dir))
  } catch (e) {
    console.error(chalk.bold.red(e.stack))
    process.exit(1)
  }
}

const ora = require('ora')

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

if ( stderr ) {
  console.error(chalk.bold.red(stderr))
  process.exit(1)
}

if ( stdout ) {
  if ( dir ) {
    writeFileSync(resolve(dir, file), stdout)
  }
  console.log('')
  console.log('Results:')
  console.log('--------')
  if ( debugging ) {
    debug(stdout)
  }
  try {
    const result = stdout
      .replace(/\nFound.*errors?\n/, '')
      .split(/\n\n/)
      .filter((line) => line && !line.includes('node_modules'))

    if ( result.length > 0 ) {
      console.log(chalk.red(result.join('\n\n')))
      console.log(chalk.bold.red(`\n\nFound ${result.length} errors\n`))
      process.exit(1)
    } else {
      console.log(chalk.bold.green('\nFound 0 errors\n'))
    }
  } catch (e) {
    if ( dir ) {
      writeFileSync(resolve(dir, errorFile), e.stack)
    }
    process.exit(1)
  }
}
