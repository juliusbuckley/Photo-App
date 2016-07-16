const mongoose   = require('mongoose'),
 			Photo		   = require('../models/photo');

mongoose.Promise = require('bluebird');


const url = 'mongodb://localhost/photoappdb';
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',() => console.log('photoappdb has started succesfully!'));


// test Photo
// const newEntry = {
// 	title:'The Hangover',
// 	rating: '7.6',
// 	Photo: 'www.google.com'
// };

// Photo.remove({})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Photo.create(newEntry)
// 	.then((entry) => {
// 		console.log(entry);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

