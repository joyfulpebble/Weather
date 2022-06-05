const liveServer = require("live-server");

let params = {
	port: 8181, 
	host: "localhost",
	root: ".",
	open: true,
	file: "main.html",
	wait: 500,
	logLevel: 2, 
};

liveServer.start(params);