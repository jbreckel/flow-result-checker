const { spawnSync } = require('child_process')
const { resolve } = require('path')

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

    expect(stdout.replace(/ /g, '')).toEqual(expected.replace(/ /g, ''))
  })

  it('should find no errors in `index.js`', () => {
    const expected = `
      Results:
      --------

      Found 0 errors

    `

    const { stdout } = spawnSync('node', ['index.js'], { encoding: 'utf8' })

    expect(stdout.replace(/ /g, '')).toEqual(expected.replace(/ /g, ''))
  })
})
