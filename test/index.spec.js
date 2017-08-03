const { spawnSync } = require('child_process')
const { resolve } = require('path')
const createChecker = require('../checker')

describe('main tool', () => {
  it('should display help', () => {
    const { stdout } = spawnSync('node', ['index.js', '--help'], { encoding: 'utf8' })

    expect(stdout.replace(/ +/g, ' ')).toMatchSnapshot();
  })

  it('should find no errors in `index.js`', () => {
    const expected = `Found 0 errors
`

    const { stdout } = spawnSync('flow', ['check'], { encoding: 'utf8' })

    expect(stdout.replace(/ +/g, ' ')).toEqual(expected.replace(/ +/g, ' '))
  })
})
