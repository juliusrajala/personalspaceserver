var restify = require("restify");
var mongojs = require("mongojs");

var server = restify.createServer();
var db = mongojs("mongodb://personalspace:admin123@ds029541.mongolab.com:29541/personalspace", ["personalspace"]);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, function(){
	console.log("server started @3000");
});

server.get("/highscore", function(req, res, next){
	db.personalspace.find(function(err, personalspace){
		res.writeHead(200, {
			'Content-Type': 'application/json; charset=utf-8'
		});
		res.end(JSON.stringify(personalspace));
	});
	return next();
});

server.post("/score", function(req, res, next){
	var score = req.params;
	db.personalspace.save(score,
		function(err, data){
			res.writeHead(200, {
				'Content-Type': 'application/json; charset=utf-8'
			});
			res.end(JSON.stringify(data));
			console.log("New Score written." + req.params);
		});
	return next();
});

module.exports = server;