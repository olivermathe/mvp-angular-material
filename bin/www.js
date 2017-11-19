'use strict';

const app   = require('../server');
const http  = require('http');

const normalizePort = val => {
	
	let port = parseInt(val, 10);

	if (isNaN(port))
		return val;

	if (port >= 0)
		return port;

	return false;

};

let port    = normalizePort(process.env.PORT || '3000');
let server  = http.createServer(app);

app.set('port', port);

server.listen(port);

server.on('error', error => {

	if (error.syscall !== 'listen')
		throw error;

	let bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;

	}
});

server.on('listening', () => {
	
	let addr = server.address();

	console.log('Listening on ' + typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`);

});

