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
/*
	for skills.selected:
	1 > skill Q
	2 > skill W
	3 > skill E
	4 > skill R
	5 > skill +
*/
module.exports.Guide = mongoose.model('Guide', {
	skills: [{
		order: Number,
		selected: Number
	}]
});