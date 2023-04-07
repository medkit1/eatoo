const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('../../dist/frontend'));
app.get('/*', function(req,res) {
//res.sendFile(path.join(__dirname + '../../../../dist/frontend/index.html'));});
res.sendFile('index.html', {root: 'dist/frontend/'});});
app.listen(process.env.PORT || 8080);
