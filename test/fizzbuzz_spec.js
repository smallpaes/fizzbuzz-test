var should = chai.should()

describe('Test fizzBuzz function', function () {
  it('Should return Fizz if the number is divisible by 3', function () {
    let result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('Should return Buzz if the number is divisible by 5', function () {
    let result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('Should return FizzBuzz if the number is divisible by both 3 and 5', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('Should return the input number if the number is not divisible by both 3 and 5', function () {
    let result = fizzBuzz(16)
    result.should.be.equal(16)
  })
})