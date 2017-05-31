const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');

// unit tests for fizzBuzzer
describe('fizzbuzz', function() {

    // normal case tests
    it('should pass the classic fizzbuzz test', function() {
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 120, expected: 'fizz-buzz'},
            {num: 300, expected: 'fizz-buzz'},
            {num: 75, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 85, expected: 'buzz'},
            {num: 145, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
            {num: 3, expected: 'fizz'},
            {num: 27, expected: 'fizz'},
            {num: 183, expected: 'fizz'},
            {num: 9, expected: 'fizz'},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzbuzz(input.num);
            answer.should.equal(input.expected);
        });
    });

    // edge test for non-numerical characters
    it('should raise error if argument is not a number', function() {
        const badInputs = ['a', null, undefined, false, 'v'];

        badInputs.forEach(function(input) {
            (function() {
                fizzbuzz(input)
            }).should.throw(Error);
        });
    });
});