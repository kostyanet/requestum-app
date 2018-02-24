const   http = require('http'),
        url = require('url');
        data = require('./data.js').data;

http.createServer((request, response) => {
    const { headers, method, _url } = request;
    response.on('error', (err) => console.error(err));

    if (method !== 'GET' || url.parse(request.url).pathname !== '/inventory') {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write('Not found');
        response.end();
    }

    let query = url.parse(request.url, true).query;
    let startIdx = (+query.page - 1) * +query.per_page;
    let endIdx = startIdx + +query.per_page;
    let chunk = data.slice(startIdx, endIdx);

    let body = {
        entities:   chunk,
        total:      data.length
    };

    response.writeHead(200, {'Content-Type': 'application/json'});

    console.log('startIdx:', startIdx);
    console.log('endIndex:', endIdx);
    console.log('chunk:', chunk);

    const responseBody = { headers, method, _url, body };
    setTimeout(() => response.end(JSON.stringify(responseBody)), 2500);

}).listen(8080);


console.log("Server running at http://localhost:8080/");
