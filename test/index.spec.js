const { sync: spawnSync } = require('cross-spawn')
const { resolve } = require('path')

const normalizeString = s => s.replace(/ +/g, ' ').replace(/\r/g, '')

describe('main tool', () => {
  it('should display help', () => {
    const { stdout } = spawnSync('node', ['index.js', '--help'], {
      encoding: 'utf8',
    })

    expect(normalizeString(stdout)).toMatchSnapshot()
  })

  it('should find no errors in `index.js`', () => {
    const expected = `Found 0 errors\n`

    const { stdout } = spawnSync('flow', ['check'], { encoding: 'utf8' })

    expect(normalizeString(stdout)).toEqual(normalizeString(expected))
  })

  describe('examples', () => {
    const buildSnapshotTest = (exampleName, expectSuccess) => {
      it('matches snapshot', () => {
        const { stdout: flowStdout } = spawnSync(
          'flow',
          ['--show-all-errors'],
          { cwd: resolve(__dirname, 'examples', exampleName), encoding: 'utf8' }
        )
        const { status, stderr, stdout } = spawnSync('node', ['index.js'], {
          encoding: 'utf8',
          input: flowStdout,
        })

        expect(normalizeString(stdout)).toMatchSnapshot()
        expect(normalizeString(stderr)).toMatchSnapshot()

        if (expectSuccess) {
          expect(status).toBe(0)
        } else {
          expect(status).toBeTruthy()
        }
      })
    }

    describe('script-errors', () => {
      buildSnapshotTest('script-errors', false)
    })

    describe('package-errors', () => {
      buildSnapshotTest('package-errors', true)
    })

    describe('no-errors', () => {
      buildSnapshotTest('no-errors', true)
    })
  })
})
