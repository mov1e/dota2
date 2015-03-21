var mongoose = require('mongoose');

module.exports.Hero = mongoose.model('Hero', {
	heroName: {type: String, unique: true},
	heroTypeofattack: String,
	heroRole: String,
	heroAttributes: String,
	heroAbilities: String,
	heroBio: String
});

module.exports.Item = mongoose.model('Item', {
	itemName: {type: String, unique: true},
	itemPrice: String,
	itemFunction: String,
	itemDuration: String,
	itemManacost: String,
	itemRecharge: String,
	itemDescription: String
});
