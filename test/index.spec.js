const expect = require('unexpected').clone();
const supertest = require('supertest');
const app = require('../src');

describe('Server spec', () => {

  describe('when GET /hello', () => {
    it('responds with world', (done) => {
      supertest(app)
        .get('/hello')
        .expect(200)
        .end((err, resp) => {
          if (err) return done(err);
          expect(resp.body, 'to satisfy', {
            response: 'world'
          });
          done();
        });
    });
  });
});
