//do i need a schema for a model
// var countries = require('../models/jobapp.js')
var countries = require('../models/countrySchema.js')

function getCountries(req, res){
	countries.find({}, function(err, doc){
		console.log('sending countries')
		res.send(doc)
	})
}

function searchCountries(req, res){
	console.log('sending search results', req.body.word)
	countries.find({name: req.body.word}, function(err, doc){
		console.log(doc)
		res.send(doc)
	})
}

function visitCountry(req, res){
	countries.find({_id: req.body.id}, function(err, doc){
		//push value visited to true for that country
		res.send(true)
	})
}

module.exports = {
	getCountries     : getCountries,
	searchCountries  : searchCountries,
	visitCountry     : visitCountry,
}