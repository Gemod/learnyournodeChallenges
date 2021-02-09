const http = require('http')
var map = require("through2-map")

let port= Number(process.argv[2]);


var server = http.createServer(function (req, res) {

		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res)

})
server.listen(port)

// For this challenge can be possible run (npm install through2-map)
