// Integration Test, using mock database
const mockGetAll = jest.fn();
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');
const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  // Tetsing the GET for the book db collection
  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list of books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log('GET books list:', body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
