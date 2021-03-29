function Greet(name) {
    if(name === undefined){
        return 'Hello there!'
    }
    else if (Array.isArray(name)) {
        arrayToString = name.join(", ");
        return `Hello, ${arrayToString}`;
    }
    else if(name === name.toUpperCase()) {
        return `HELLO, ${name}!`;
    }
    return `Hello, ${name}`;
}

module.exports = { Greet };