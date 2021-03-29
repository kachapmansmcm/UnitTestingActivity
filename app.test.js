const myTests = require('./app.js');

test('testing Greet()', () => {
    expect(myTests.Greet('Elizabeth')).toBe("Hello, Elizabeth");
  });

test('testing Null value for name', () => {
    expect(myTests.Greet()).toBe("Hello there!");
    });

test('testing all uppers', () => {
    expect(myTests.Greet('JOSE')).toBe("HELLO, JOSE!");
    });

test('testing 2 element array', () => {
    expect(myTests.Greet(['Jose', 'Pep'])).toBe("Hello, Jose, Pep");
    });

test('testing multi element array', () => {
    expect(myTests.Greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe("Hello, Alex, Arsene, Jose, Zidane");
    });
    
