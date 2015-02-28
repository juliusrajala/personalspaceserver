
var getURL = "http://localhost:3000/highscore"
var postURL = "http://localhost:3000/score"


function OnMouseDown(){
	var name = GameObject.GetComponent("Matti");
	var score = GameObject.GetComponent("100");

	UploadHighscore(name, score);
}

function UploadHighscore(name, score){
	var form = new WWWForm();
	form.addField("name", name);
	form.addField("score", score);

	var w = WWW(postURL, form);
	yield w;

	if(!String.IsNullOrEmpty(w.error)){
		print(w.error);
	}else{
		print("Finished uploading highscore");
	};
}

function DownloadHighscore(){
	var highscore = new WWW(getURL);
	/*Wait for data to download before releasing contact*/
	yield highscore;
	if(highscore.error = null){
		Debug.Log("Download completed.");
	}else{
		Debug.Log("www-error: " + highscore.error);
	}
	return highscore.data;
}