// Integration Test, using mock database
const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// Mocking MongoLib
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

// Opening a test block for BookService
describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    // Creating an instance of BookService
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list of 20 books', async () => {
      // Arrange
      // Use resolve for promises and return for non-promises
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log('Books:', books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // 'books' is the collection name, and the {} is created by you
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a list of 4 books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log('Book Names:', books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
