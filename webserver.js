var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	var url = request.url;
	url = url.substring(1);
	
	if(url.match(/info/))
		getInfo(request,response);
	else if(url.match(/movies/))
		getMovies(request,response);
	else if(url.match(/Cities/) != null){
			getCitiesListInJSON(request,response);
			//getCitiesList(request,response);
	}
	else
		sendFile(url,response);	
});
server.listen(8080);
console.log("Server waiting for requests");


function getCitiesListInJSON(request,response){
	var data = {
		cities : [
		 {name:"Chennai"},{name:"Pune"},{name:"Houston"},
		 {name:"Cochin"},{name:"Bangalore"},{name:"Mumbai"}
	   ]
	};
	response.end(JSON.stringify(data));
}
function getMovies(request,response){
	var movies = {
		moviesInIndia : [
			{ name:"Baby", year:2015, rating:"A"},
			{ name:"Baba", year:2003, rating:"U"},
			{ name:"Argo", year:2013, rating:"UA"},
			{ name:"Interstellar", year:2014, rating:"U"}					
		]
	};
	var jsonString = JSON.stringify(movies);
	response.end(jsonString);
}

function getInfo(request,response){
	var queryString = require("url").parse(request.url,true).query;
	var name = queryString.name;
	var message = "Hello " + name + " !!!";	
	response.end(message);
}

function sendFile(url,response){
	if(url.indexOf("?") != -1){
		url = url.substring(0,url.indexOf('?'));
	}
		
	fs.readFile(url,function(err,data){
		if(err)
			response.end("File not found " + url);
		else{
			response.end(data);
		}
	});
}