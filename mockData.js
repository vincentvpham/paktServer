var USER = require('./models/userModel');
var PAKT = require('./models/paktModel');
var PICTURE = require('./models/pictureModel');

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
    picture: '/samplePath2/'}
];

var pakt = [
  { 
  	name: "first pakt"
  	description: "3 times a week",
  	isMonetary: false,
  	consequenceText: "buy me lunch",
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
  	name: "second pakt"
  	description: "4 times a week",
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
  	name: "third pakt"
  	description: "wed game",
  	isMonetary: false,
  	consequenceText: "buy me dinner",
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
    path: "/samplePath90/",
  },
  {
    path: "/samplePath6/",
  },
  {
    path: "/samplePath5/",
  },
  {
    path: "/samplePath3/",
  }

]