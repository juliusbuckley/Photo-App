const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
	title: String,
	rating: String,
	image: String
});

module.exports = mongoose.model('Photo', photoSchema);