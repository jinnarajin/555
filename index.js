var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query
    var pathname = url.parse(_url, true).pathname;

    console.log(url.parse(_url,true).pathname);

    if(pathname === '/'){
      url = '/index.html';
      response.writeHead(200);
      response.end(fs.readFileSync(__dirname + url));
    }
    else if (pathname==='/create_process'){
        response.writeHead(200);
        response.end('success');

    } else{
    response.writeHead(404);
    response.end('Not found');
    }

 
});
app.listen(3000);
