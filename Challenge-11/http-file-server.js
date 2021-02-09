const http = require('http')
const fs = require('fs')
let port= process.argv[2];
let file = process.argv[3];

const server = http.createServer(function (request, response) {
let result = fs.createReadStream(file);
result.pipe(response)
})
server.listen(port)
