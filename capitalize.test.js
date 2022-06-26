const capitalize = require('./capitalize');

test('capitalizes the first character', () => {
    expect(capitalize('hello')).toEqual('Hello');
});
test('accepts empty string', () => {
    expect(capitalize('')).toEqual('');
});