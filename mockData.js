var USER = require('./utils/db.js').User;
var PAKT = require('./utils/db.js').Pakt;
var PICTURE = require('./utils/db.js').Picture;
var PAKT_USER = require('./utils/db.js').Pakt_User;
var USER_USER = require('./utils/db.js').User_User;

var user = [
  { fbId: 10,
    name: 'Diamond',
    email: 'DW@DW.com',
    picture: '/samplePath/' },
  { fbId: 5,
    name: 'Alex',
    email: 'AS@AS.com',
    picture: '/samplePath3/' },
  {
    fbId: 11,
    name: 'Deniz',
    email: 'deniz@AS.com',
    picture: '/samplePath2/' }
];

var pakt = [
  {
    name: 'first pakt',
    description: '3 times a week',
    isMonetary: false,
    consequenceText: 'buy me lunch',
    consequenceValue: null,
    repeating: true,
    frequency: 3,
    timeFrame: 8,
    startDate: '2016-03-14 14:00:00',
    endDate: '2016-05-14 14:00:00',
    settled: false,
    open: true
  },
  {
    name: 'second pakt',
    description: '4 times a week',
    isMonetary: true,
    consequenceText: null,
    consequenceValue: 10,
    repeating: true,
    frequency: 4,
    timeFrame: 8,
    startDate: '2016-03-18 14:00:00',
    endDate: '2016-05-18 14:00:00',
    settled: false,
    open: true
  },
  {
    name: 'third pakt',
    description: 'wed game',
    isMonetary: false,
    consequenceText: 'buy me dinner',
    consequenceValue: null,
    repeating: false,
    frequency: null,
    timeFrame: null,
    startDate: null,
    endDate: '2016-05-14 14:00:00',
    settled: false,
    open: true
  }

];

var picture = [
  {
    path: '/samplePath90/',
    PaktId: 2,
    UserId: 1
  },
  {
    path: '/samplePath6/',
    PaktId: 2,
    UserId: 2
  },
  {
    path: '/samplePath5/',
    PaktId: 3,
    UserId: 3
  },
  {
    path: '/samplePath3/',
    PaktId: 3,
    UserId: 1
  }
];

var userPakt = [
  {
    PaktId: 1,
    UserId: 1
  },
  {
    PaktId: 1,
    UserId: 2
  },
  {
    PaktId: 2,
    UserId: 1
  }
];

var userUser = [
  {
    UserId: 1,
    friendId: 2
  },
  {
    UserId: 1,
    friendId: 3
  }
];

USER.bulkCreate(user)
.then(function () {
  PAKT.bulkCreate(pakt);
})
.then(function () {
  PICTURE.bulkCreate(picture);
})
.then(function () {
  PAKT_USER.bulkCreate(userPakt);
})
.then(function () {
  USER_USER.bulkCreate(userUser);
});
