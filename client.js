/*
* Luo Json-palvelimen joka näyttää dataa, tämä clientti siis lähinnä
* testaamista varten.
*/

var restify = require("restify");
var server = require("./server");

var client = restify.createJsonClient({
	url: 'http://localhost:3000'
});

/*
* Seuraavat funktiot handlaavat uuden highscoren lisäämisen ja
* kaikkien highscorejen palautuksen.
*/

/* server.post */
function postHighscore(testScore){
	client.post('/score', testScore, function(err, req, res, score){
		if(err){
			console.log("An error occurred:");
			console.log(err);
		}else{
			console.log("New highscore was saved to the database");
			console.log(score);
		}
	});
}

/* server.get */
function showHighscores(){
	client.get("/highscore", function(err, req, res, personalspace){
		if(err){
			console.log("An error occurred:");
			console.log(err);
		}else{
			console.log("Total highscores " + highscore.length);
			console.log("Highscores:");
			console.log(highscore);
		}
	});
}

var testScore = {
	name: "Konsta Avaruusjaba",
	score: "50",
	enemiesKilled: "15"
}
/*
postHighscore(testScore);*/