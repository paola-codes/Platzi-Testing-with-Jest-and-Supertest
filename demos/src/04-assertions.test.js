// Also called matchers
test('test obj', () => {
  // toEqual
  const data = { firstName: 'Nico' };
  data.lastName = 'Molina';
  expect(data).toEqual({ firstName: 'Nico', lastName: 'Molina' });
});

test('test null', () => {
  // toBeNull, toBeDefined, not.toBeUndefined
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test boolean', () => {
  // toEqual
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  // toBeFalsy
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('test strings', () => {
  // toMatch
  expect('Caramel macchiatto').toMatch(/chiat/);
});

test('test lists / arrays', () => {
  // toContain
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(4);
});
