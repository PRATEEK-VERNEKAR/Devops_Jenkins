const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return "Hello, World!"', (done) => {
    request(app)
      .get('/')
      .expect('Hello, World!', done);
  });
});