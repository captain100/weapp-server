var express = require('express')
var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxyServer()

var app = express()
var server = express()

app.use('/weapp/:url?', function(req, res) {
    console.log("request 5050 server")
    var url = req.params.url
    var appId = req.query.appId
    proxy.web(req, res, {
        target: 'http://localhost:5060'
    })
    proxy.on('error', function(e) {
        console.log('proxy error', e)
        res.status(404).json({error: e})
    })
})

// server.use('')

// server.listen(5060, function(){
//     console.log('server 5060 is ok')
// })

app.listen(5050)


