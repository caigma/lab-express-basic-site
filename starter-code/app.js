const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
	response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
	response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
	response.sendFile(__dirname + '/views/gallery.html');
});

app.use(express.static('public'));

app.listen(3000, () => {
	console.log('My first app listening on port 3000!');
});
