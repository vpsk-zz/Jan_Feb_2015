var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	var url = request.url;
	url = url.substring(1);
	if(url.match(/info/))
		getInfo(request,response);
	else
		sendFile(url,response);	
});
server.listen(8080);
console.log("Server waiting for requests");

function getInfo(request,response){
	var queryString = require("url").parse(request.url,true).query;
	var name = queryString.name;
	var message = "Hello " + name + " !!!";	
	response.end(message);
}

function sendFile(url,response){
	fs.readFile(url,function(err,data){
		if(err)
			response.end("File not found " + url);
		else{
			response.end(data);
		}
	});
}