const { spawnSync } = require('child_process')

const data = require('./examples/long-output')

// jest.mock('../checker', () => ({ stdout }) => stdout)

describe('checker works correct', () => {
  it('with long output', () => {
    const { stdout, stderr, status } = spawnSync('node', ['index'], {
      input: data,
    })
    expect(status).toEqual(0)
    expect(`${stderr}`).toEqual('')
    expect(`${stdout}`).toEqual('\nFound 0 errors\n\n')
  })
})
