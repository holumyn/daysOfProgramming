const chai = require('chai');
const assert = chai.assert;
const dayOfProgrammer = require('../question1')

describe('Question 1', () => {
  it ('Can get the correct date for test case 1', done => {
    let result = dayOfProgrammer(2017)
    assert.equal(result, '13.09.2017')
    done()
  })

  it ('Can get the correct date for test case 2', done => {
    let result = dayOfProgrammer(2016)
    assert.equal(result, '12.09.2016')
    done()
  })
})