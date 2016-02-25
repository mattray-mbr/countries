var mongoose = require('mongoose')

var countrySchema = mongoose.Schema({
	name         : {type: String},
	frenchName   : {type: String},
	localName    : {type: String},
	region       : {type: String},
})

module.exports = mongoose.model('countries', countrySchema)