const express = require('express'),
		app			= express(),
		path		= require('path'),
		db			= require('./config/db');



app.use(express.static(path.join(__dirname,'../client')))


app.listen(3000,() => console.log('app.js has been served...'));