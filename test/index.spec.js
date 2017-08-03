const { sync: spawnSync } = require('cross-spawn')
const { resolve } = require('path')
const createChecker = require('../checker')

const normalizeString = s => s.replace(/ +/g, ' ').replace(/\r/g, '')

describe('main tool', () => {
  it('should display help', () => {
    const { stdout } = spawnSync('node', ['index.js', '--help'], { encoding: 'utf8' })

    expect(normalizeString(stdout)).toMatchSnapshot()
  })

  it('should find no errors in `index.js`', () => {
    const expected = `Found 0 errors
`

    const { stdout } = spawnSync('flow', ['check'], { encoding: 'utf8' })

    expect(normalizeString(stdout)).toEqual(normalizeString(expected))
  })
})
