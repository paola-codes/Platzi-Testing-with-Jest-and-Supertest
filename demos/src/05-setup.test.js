// The term 'describe' allows multiple tests to be bundled together,
// you can even encapsulate one 'describe' inside another 'describe'

describe('Set 1', () => {
  beforeAll(() => {
    console.log('beforeAll 1');
    // up db
  });
  afterAll(() => {
    console.log('afterAll 1');
    // down db
  });
  beforeEach(() => {
    console.log('beforeEach 1');
  });
  afterEach(() => {
    console.log('afterEach 1');
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Set 2', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
      // up db
    });
    afterAll(() => {
      console.log('afterAll 2');
      // down db
    });

    test('Case 3', () => {
      console.log('Case 3');
      expect(1 + 1).toBe(2);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
