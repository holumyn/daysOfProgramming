const chai = require('chai');
const assert = chai.assert;
const dayOfProgrammer = require('../question1')

describe('Question 1', () => {
  it ('Can get the correct date for test case 1', done => {
    let result = dayOfProgrammer(2019, 256)
    assert.equal(result, '13.09.2019')
    done()
  })

  it ('Can get the correct date for test case 2', done => {
    let result = dayOfProgrammer(2020, 128)
    assert.equal(result, '07.05.2020')
    done()
  })
})
