# Platzi: Testing with Jest and Supertest

This a follow-along project from Platzi's Javascript testing course at https://platzi.com/cursos/javascript-testing/

## Description

This project is made of javascript and a mongodb database; however, there is no front-end. The api creates and deletes collections of books. The point of this project is to  practice automated unit tests and integration tests.

### Dependencies

*  "dependencies": {
*    "cors": "^2.8.5",
*    "dotenv": "^16.0.0",
*    "express": "^4.17.3",
*    "mongodb": "^4.4.1"
*  },
*  "devDependencies": {
*    "@faker-js/faker": "^7.3.0",
*    "eslint": "^8.10.0",
*    "eslint-config-airbnb-base": "^15.0.0",
*    "eslint-plugin-import": "^2.25.4",
*    "jest": "^27.5.1",
*    "nodemon": "^2.0.15",
*    "supertest": "^6.2.4"
*  }

### Executing program

* To start test database
```
npm run start:dev
```
* To run regular tests
```
npm run test
```
* To run integration tests
```
npm run e2e
```
* To start production database
```
npm run start:prod
```

## License

This project is licensed under the ISC License

## Acknowledgments

Original Project:
* https://github.com/platzi/curso-testing-js
