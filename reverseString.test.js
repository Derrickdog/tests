const reverseString = require('./reverseString');

test('reverses string', () => {
    expect(reverseString('hello')).toEqual('olleh');
});
test('reverses multiple words', () => {
    expect(reverseString('hello world today')).toEqual('yadot dlrow olleh');
});
test('works with punctuation', () => {
    expect(reverseString('hello world, today.')).toEqual('.yadot ,dlrow olleh');
});
test('accepts empty string', () => {
    expect(reverseString('')).toEqual('');
});