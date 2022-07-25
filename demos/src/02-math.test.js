const { sum, multiply, divide } = require('./02-math');

describe('Tests for math', () => {
  describe('Tests for sum', () => {
    test('adding 1 + 3 should be 4', () => {
      const result = sum(1, 3);
      expect(result).toBe(4);
    });
  });

  describe('Tests for multiply', () => {
    test('multiplying 2 * 3 should be 6', () => {
      const result = multiply(2, 3);
      expect(result).toBe(6);
    });
  });

  describe('Tests for divide', () => {
    test('dividing 6 / 2 should be 3', () => {
      const result = divide(6, 2);
      expect(result).toBe(3);

      const result2 = divide(5, 0);
      expect(result2).toBeNull();
    });
  });
});
