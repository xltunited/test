$(document).ready(function(){
		var gameWord ="";

		//var that holds the url to the API call, this one holds my own requested API key

		var apicall = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=ba3d180eb7c56867e600204177a00eee809035f45d0789fd6";

		//Use GET request to get a 5 character word

		$.getJSON(apicall, function(data){

			var parsedData = JSON.parse(JSON.stringify(data));

			//JSON data comes back with the word between backets
			//I used the substring function to get rid of those brakets

			 gameWord = JSON.stringify(parsedData.word.toUpperCase()).substring(1,6);

			 document.querySelector('#here').innerHTML = gameWord;

			 console.log(gameWord);

		});

	})

	

		