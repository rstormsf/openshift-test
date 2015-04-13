"use strict";

let express = require('express');
let path = require('path');
let app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP  || '127.0.0.1');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (err, res) =>
    res.render('layout')
);

app.listen(app.get('port'), app.get('ip'), () =>
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('ip'))
);

module.exports = app;