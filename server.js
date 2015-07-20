var http = require('http')

// Defining and creating server
var server = http.createServer(function(request, response){
	// Set headers for response. 200 = OK
	response.writeHead(200, {'Content-Type': 'text/html'}) 
	response.end('<h1>hello world</h1>')
})

// Server wakes up and starts listening for requests
// Port number 9001
server.listen(9001)