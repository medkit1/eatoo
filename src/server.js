//var express = require('express');
//var app = express();
//const path = require('path');
//const PORT = process.env.PORT || 5000;
//var app_path = '../dist/frontend';

//app.use('/', express.static(path.join(__dirname, app_path)))
//.listen(PORT, (console.log( 'jede')));


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('../dist/frontend'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '../../../dist/frontend/index.html'));});
app.listen(process.env.PORT || 8080);

