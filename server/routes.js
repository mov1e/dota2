var database = require('./database');

module.exports = function(app) {
// Guides {
	app.post('/api/createHero', function(req, res) {
		console.log(req.body)
		database.Hero.create(
		req.body,
		function(err, hero){
			if (err) res.send(false);
			else res.json(hero);
		});
	});
	app.get('/api/getHeroes', function(req, res) {
		database.Hero.find(
		function(err, data) {
			if (err) res.json(err);
			else res.json(data);
		});
	});

	

	app.post('/api/createItem', function(req, res) {
		console.log(req.body)
		database.Item.create(
		req.body,
		function(err, item){
			if (err) res.send(false);
			else res.json(item);
		});
	});
	app.get('/api/getItems', function(req, res) {
		database.Item.find(
		function(err, data) {
			if (err) res.json(err);
			else res.json(data);
		});
	});

};