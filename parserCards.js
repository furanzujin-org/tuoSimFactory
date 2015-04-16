var xml2js = require('xml2js')
, request = require('request')
, fs = require ('fs')
;

var parser = new xml2js.Parser();

request('http://mobile.tyrantonline.com/assets/cards.xml', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		parser.parseString(body, function(err, result){
				console.log(result);
				var outputJS = JSON.stringify(result);
				fs.writeFile('cards.json', outputJS, function(err) {
					if(err) {
						return console.log(err);
					}
					
					console.log("The file was saved!");
				}); 
		})
	}
})
