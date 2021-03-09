// const assert = require('assert');
var assert = require('chai').assert;
const sayHello = require('../hello-world.js');

describe("tests for hello world",()=>{
    it('should return "hello world" when given "world"',()=>{
        const actual = sayHello('world');
        const expected = 'hello world';
        assert.equal(actual, expected);
    });
    it('should return a string',()=>{
        const actual = sayHello('world');
        assert.typeOf(actual, 'string');
    });
});