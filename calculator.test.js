const calculator = require('./calculator');

describe('add', () => {
    test('adds 1 + 2', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('adds 0 + 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
    });
    test('adds negative number', () => {
        expect(calculator.add(3, -4)).toBe(-1);
    });
});

describe('subtract', () => {
    test('subtracts 1 - 2', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });
    test('subtracts 0 - 0', () => {
        expect(calculator.subtract(0, 0)).toBe(0);
    });
    test('subtracts negative number', () => {
        expect(calculator.subtract(3, -4)).toBe(7);
    });
});

describe('multiply', () => {
    test('multiplies 1 * 2', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });
    test('multiplies 0 * 0', () => {
        expect(calculator.multiply(0, 0)).toBe(0);
    });
    test('subtracts negative number', () => {
        expect(calculator.multiply(3, -4)).toBe(-12);
    });
});

describe('divide', () => {
    test('divides 1 / 2', () => {
        expect(calculator.divide(1, 2)).toBe(.5);
    });
    test('divides 1 / 0', () => {
        expect(calculator.divide(1, 0)).toBe(Infinity);
    });
    test('divides negative number', () => {
        expect(calculator.divide(-12, 3)).toBe(-4);
    });
});