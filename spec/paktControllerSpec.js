var app = require('../server.js');
var request = require('supertest');
var assert = require('assert');
var sequelize = require('../utils/db.js').sequelize;
var mockData = require('../mockData.js');
var PaktUser = require('../utils/db.js').Pakt_User;
var newPakt; // for testing

describe('Pakt Integration Tests: ', function () {
  before(function (done) {
    // Drops all tables and re-creates them
    sequelize.sync({ force: true })
    .then(function () {
      mockData.insertTestData();
      done(null);
    })
    .catch(function (error) {
      done(error);
    });
  });

  describe('Pakt Controller: GET /api/pakts/1', function () {
    it('should get all Pakts given a user id', function (done) {
      request(app)
      .get('/api/pakts/1')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          console.error(err);
          done(err);
        } else {
          assert.equal(res.body.length, 2);
          // assert.equal(res.body[0].id, 1);
          done();
        }
      });
    });

    it('should return Pakt(s) with correct properties', function (done) {
      request(app)
      .get('/api/pakts/2')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          console.error(err);
          done(err);
        } else {
          newPakt = res.body[0];
          assert.equal(res.body.length, 1);
          assert.equal(newPakt.id, 1);
          assert.equal(newPakt.name, 'first pakt');
          assert.equal(newPakt.description, 'gym 3 times a week');
          assert.equal(newPakt.isMonetary, false);
          assert.equal(newPakt.consequenceText, 'buy me lunch');
          assert.equal(newPakt.repeating, true);
          assert.equal(newPakt.frequency, 3);
          assert.equal(newPakt.timeFrame, '8');
          assert.equal(newPakt.settled, false);
          assert.equal(newPakt.open, true);
          assert.equal(newPakt.Users.length, 1);
          done();
        }
      });
    });
  });

  describe('Pakt Controller: POST /api/pakt', function () {
    it('should post a given Pakt to the database and associate given users', function (done) {
      newPakt = {
        data: {
          pakt: {
            id: 4,
            name: 'fourth new pakt',
            description: 'dance 1 time a week',
            isMonetary: false,
            consequenceText: 'buy me a fancy dinner',
            consequenceValue: null,
            repeating: true,
            frequency: 1,
            timeFrame: '3',
            startDate: '2016-03-14 14:00:00',
            endDate: '2016-05-14 14:00:00',
            settled: false,
            open: true
          },
          // array of friends to add to pakt
          users: [1, 2]
        }
      };

      request(app)
      .post('/api/pakt')
      .send(newPakt)
      .end(function (err, res) {
        if (err) {
          console.error(err);
          done(err);
        } else {
          assert.equal(res.body.id, 4);
          assert.equal(res.body.name, 'fourth new pakt');
          assert.equal(res.body.description, 'dance 1 time a week');
          assert.equal(res.body.frequency, 1);
          // find all associations with new paktId
          PaktUser.findAll({ where: { PaktId: res.body.id } })
          .then(function (paktsUsers) {
            // this should be 3 because creating user should be added too
            assert.equal(paktsUsers.length, 3);
            done();
          });
        }
      });
    });
  });
});
