#!/usr/bin/env node
/* eslint-disable no-console */

const program = require('commander')
const chalk = require('chalk')

const { resolve } = require('path')
const { writeFileSync, realpathSync } = require('fs')
const mkdirp = require('mkdirp')

const { version } = require('./package.json')

// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/paths.js#L17
const appDirectory = realpathSync(process.cwd())
const resolveAppPath = (relativePath) => resolve(appDirectory, relativePath)

const defaultOptions = {
  file: 'results.txt',
  errorFile: 'error.txt',
}

module.exports = () => {
  const debug = (...str) => console.log(chalk.yellow(...str))

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

  const { file, errorFile, dir = '', debugging } = program
  if ( debugging ) {
    debug('file       ', file)
    debug('errorFile  ', errorFile)
    debug('dir        ', dir)
  }

  const dirPath = dir.indexOf('/') !== 0 ? resolveAppPath(dir) : resolve(dir)

  return ({ stdout, stderr }) => {
    try {
      if ( dir ) {
        mkdirp.sync(dirPath)
      }

      if ( stderr ) {
        console.error(chalk.bold.red(stderr))
        process.exit(1)
      }

      if ( stdout ) {
        if ( dir ) {
          writeFileSync(resolve(dirPath, file), stdout)
        }
        if ( debugging ) {
          debug(stdout)
        }
        const result = stdout
          .replace(/\r/g, '')
          .replace(/\n*Found.*errors?\n/, '')
          .replace(/\n*No errors!\n/, '')
          .split(/\n\n/)
          .filter((line) => line && !line.includes('node_modules'))

        if ( result.length > 0 ) {
          console.log(`
${chalk.red(result.join('\n\n'))}

${chalk.bold.red(`Found ${result.length} error${result.length === 1 ? '' : 's'}`)}
`)
          process.exit(1)
        } else {
          console.log(chalk.bold.green('\nFound 0 errors\n'))
        }
      }
    } catch (e) {
      console.error(chalk.bold.red(e.stack))
      if ( dir ) {
        writeFileSync(resolve(dirPath, errorFile), e.stack)
      }
      process.exit(1)
    }
  }
}
