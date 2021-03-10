const sayHello = (word)=>{
    let output = `hello ${word}`;
    return output;
};

const sayGoodbye = (word)=>{
    let output = `goodbye ${word}`;
    return output;
};

module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye
};
