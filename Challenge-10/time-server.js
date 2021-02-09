const net = require('net')
var utility = require("util")

let port = process.argv[2];

function fill(value)
{
    return(value<10 ? "0": "")+value;
}

const server = net.createServer(function (socket) {
    let date =new Date();
    let currentDate =   utility.format("%s-%s-%s %s:%s\n", fill(date.getFullYear()),
		fill(date.getMonth()+1),
		fill(date.getDate()),
		fill(date.getHours()),
		fill(date.getMinutes()))
    socket.end(currentDate);
})
server.listen(port)
