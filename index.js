// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
	originWhitelist: [], // Allow all origins
	requireHeader: ['origin', 'x-requested-with'],
	removeHeaders: ['cookie', 'cookie2'],
	setHeaders: {"cookie": "PHPSESSID=t5iujrsebk7iq5nrj61bmf5san; OP_SAMSON_GUEST_ID=92201813; BX_USER_ID=7ef298cdd6d4fcb20866cc3a9d44e713;"},
}).listen(port, host, function() {
	console.log('Running CORS Anywhere on ' + host + ':' + port);
});
