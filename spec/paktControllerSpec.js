var app = require('../server');
var request = require('supertest');

var paktModel = require('../models/paktModel');

describe('Pakt Integration Tests', function () {
  before(function (done) {
    // Drops table and re-creates it
    paktModel.sync({ force: true })
    .success(function () {
      done(null);
    })
    .error(function (error) {
      done(error);
    });
  });

  describe('Pakt', function () {
    // Placeholder Test
    it('test description', function (done) {
      request(app)
      .get('/api/')
      .expect(200)
      .end(function () {
        done();
      });
    });
  });
});
