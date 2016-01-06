var fs = require('fs')
var http = require('http')
var assets=require('./assets')

var server=http.createServer(function (req, res) {
    console.log('recibi un request'+req.url)
    switch (req.url){
        case '/':
            assets.serveStatic('index.html',function(err,content){
                res.end(content)
1            })
            break
        case '/app.js':
            assets.serveStatic('app.js',function(err,content){
                res.end(content)
                })
            break
        case '/app.css':
            assets.serveStatic('app.css',function(err,content){
                res.end(content)
            })
            break
        default:
            res.statusCode=404
            res.end('Not found')
            break
    }
    //res.writeHead('Content-Type','text/plain')
    //res.end('hola')
})
server.listen(3000, function () {
 console.log("server corriendo puerto 3000")
})