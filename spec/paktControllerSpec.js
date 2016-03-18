// var app = require('../server');
// var request = require('supertest');
// var Pakt = require('../utils/db.js').Pakt;
var sequelize = require('../utils/db.js').sequelize;
var mockData = require('../mockData.js');

describe('Pakt Integration Tests', function () {
  before(function (done) {
    // Drops table and re-creates it
    sequelize.sync({ force: true })
    .then(function () {
      mockData.insertTestData();
      done(null);
    })
    .catch(function (error) {
      done(error);
    });
  });

  describe('Pakt', function () {
    // Placeholder Test
    it('test description', function (done) {
      done();
    });
  });
});
