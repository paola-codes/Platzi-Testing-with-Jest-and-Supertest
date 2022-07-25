const Person = require('./06-person');

describe('Tests for Person', () => {
  let person;

  // Arrange / Given
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('Should return down', () => {
    // Arrange / Given
    person.weight = 45;
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('Down');
  });

  test('Should return normal', () => {
    // Arrange / Given
    person.weight = 59;
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('Normal');
  });
});
