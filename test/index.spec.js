const { sync: spawnSync } = require('cross-spawn')
const { resolve } = require('path')
const createChecker = require('../checker')

const normalizeString = s => s.replace(/ +/g, ' ').replace(/\r/g, '')

describe('main tool', () => {
  it('should display help', () => {
    const expected = `
      Usage: index [options]

      Options:

        -h, --help                   output usage information
        -V, --version                output the version number
        --no-color
        --debugging
        -d, --dir <dir>              The directory where to save the flow result and errors. If not specified no files will be saved.
        -f, --file <filename>        Name of the result file. defaults to 'results.txt'
        -e, --error-file <filename>  Name of the file where parsing errors are stored. defaults to 'error.txt'

    `

    const { stdout } = spawnSync('node', ['index.js', '--help'], { encoding: 'utf8' })

    expect(normalizeString(stdout)).toEqual(normalizeString(expected))
  })

  it('should find no errors in `index.js`', () => {
    const expected = `Found 0 errors
`

    const { stdout } = spawnSync('flow', ['check'], { encoding: 'utf8' })

    expect(normalizeString(stdout)).toEqual(normalizeString(expected))
  })
})
