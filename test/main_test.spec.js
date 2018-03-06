/**
 * No need to worry about this file
 * ...unless you find it interesting.
 */

// import assert from 'assert'
import  {expect}  from 'chai';
// const expect = require('chai')

describe('phoneNumber() Returns a phone number formated for a \'<a href="tel:" />\' link', function() {
  const phoneNumber = require('../js-check/phoneNumber')

  it('should remove parenthesis, spaces, and hyphens as in "(321) 321-4321"', function() {
    expect(phoneNumber('(321) 321-4321')).to.equal('3213214321')
  })
  it('should remove dots as in "321.321.4321"', function() {
    expect(phoneNumber('321.321.4321')).to.equal('3213214321')
  })
  it('should detect invalid 9-digit numbers', function() {
    expect(phoneNumber('321321432')).to.be.null
  })
  it('should return null for 11-digit numbers that don\'t begin with 1', function() {
    expect(phoneNumber('43213214321')).to.be.null
  })
  it('should validate when 11 digits and starting with 1 even with punctuation', function() {
    expect(phoneNumber("+1 (321) 321-4321")).to.equal('3213214321');
  })
  it('should return null when more than 11 digits', function() {
    expect(phoneNumber('321321321321')).to.be.null
  })
  it('should return null when letters and/or punctuation are present', function() {
    expect(phoneNumber('abc-a@c-abcd')).to.be.null
  })
  it('should return null when area code does not start with 2-9', function() {
    expect(phoneNumber('021-321-4321')).to.be.null
  })
  it('should return null when exchage code does not start with 2-9', function() {
    expect(phoneNumber('321-021-4321')).to.be.null
  })
})

describe('unique() Returns an array free of duplicate entries', function() {
  const unique = require('../js-check/unique')

  it('should handle strings', function() {
    expect(unique(['a','ab','ab','b','b','c'])).to.deep.equal(['a','ab','b','c'])
  })
  it('should handle numbers', function() {
    expect(unique([1,2,1,4,3,3,5])).to.deep.equal([1,2,4,3,5])
  })
  it('should handle arrays', function() {
    expect(unique([[1],[1],[1,2]])).to.deep.equal([[1],[1,2]])
  })
  it('should handle objects', function() {
    expect(unique([{foo:true},{foo:true},{foo:false},{foo:true,biz:'baz'}])).to.deep.equal([{foo:true},{foo:false},{foo:true,biz:'baz'}])
  })
  it('should handle mixed types', function() {
    expect(unique(['a','a','b',true,true,false,'ab',1,1,2,{foo:true},{foo:true},{foo:false},{foo:true,biz:'baz'}])).to.deep.equal(['a','b',true,false,'ab',1,2,{foo:true},{foo:false},{foo:true,biz:'baz'}])
  })
})
