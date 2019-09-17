const chai = require('chai');
const assert = chai.assert;
const beautifulDays = require('../question2')

describe('Question 2', () => {
  it ('Can get the number of beautiful days for test case 1', done => {
    let result = beautifulDays(20, 23, 6)
    assert.equal(result, 2)
    done()
  })

  it ('Can get the number of beautiful days for test case 2', done => {
    let result = beautifulDays(13, 45, 3)
    assert.equal(result, 33)
    done()
  })

  it ('Can get the number of beautiful days for test case 3', done => {
    let result = beautifulDays(1, 123456, 13)
    assert.equal(result, 9657)
    done()
  })
})