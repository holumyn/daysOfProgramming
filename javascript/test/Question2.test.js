const chai = require('chai');
const assert = chai.assert;
const utopianTree = require('../question2')

describe('Question 2', () => {
  it ('Can get the tree height for test case 1', done => {
    let result = utopianTree(0)
    assert.equal(result, 1)
    done()
  })

  it ('Can get the tree height for test case 2', done => {
    let result = utopianTree(1)
    assert.equal(result, 2)
    done()
  })

  it ('Can get the tree height for test case 3', done => {
    let result = utopianTree(4)
    assert.equal(result, 7)
    done()
  })
})