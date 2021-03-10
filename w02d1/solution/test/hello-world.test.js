var assert = require('chai').assert
const app = require('../hello-world');

describe("making sure that we can say hello to the world", ()=>{
    it('should return "hello world" when it is passed "world"', ()=>{
        assert.strictEqual(app.sayHello("world"),"hello world");
    });
    it('should return "goodbye world" when it is passed "world"', ()=>{
        assert.strictEqual(app.sayGoodbye("world"),"goodbye world");
    });
});
